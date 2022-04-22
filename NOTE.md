# Server setup

1.  create the package.json
    yarn init

2.  enable typescript for the project

    npx tsc --init
    or
    npx -p typescript tsc --init

3.  add the following dependencies to the project

    yarn add express http-status-codes pino @typegoose/typegoose mongoose express-async-errors zod zod-express-middleware argon2 jsonwebtoken cookie-parser mongoose-slug-generator nanoid busboy cors helmet @mantine/form

4 add the development dependencies to the project

    yarn add typescript ts-node-dev pino-pretty @types/express @types/express @types/jsonwebtoken @types/cookie-parser @types/busboy @types/cors @types/http-status-code -D

#Client setup

1.  create a nextjs app for the client
    yarn create next-app client --typescript

2.  add dependencies to the project

yarn add @mantine/hooks @mantine/core @mantine/next react-query axios @mantine/notifications @mantine/dropzone tabler-icons-react

3. setup Mantine for nextjs
   https://mantine.dev/theming/next/
