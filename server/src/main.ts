import express from 'express';

const PORT = express.env.PORT;

const app = express();

const server = app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

const signals = ['SIGTERM', 'SIGINT'];

function gracefulShutdown(signal: string) {
  process.on(signal, async () => {
    server.close();

    //close db connection
    process.exit(0);
  });
}

for (let i = 0; i < signals.length; i++) {
  gracefulShutdown(signals[i]);
}
