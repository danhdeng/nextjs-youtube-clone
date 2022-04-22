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

3.  setup Mantine for nextjs
    https://mantine.dev/theming/next/

    1.  Create pages/\_document.tsx file:
        import { createGetInitialProps } from '@mantine/next';
        import Document, { Head, Html, Main, NextScript } from 'next/document';

        const getInitialProps = createGetInitialProps();

        export default class \_Document extends Document {
        static getInitialProps = getInitialProps;

        render() {
        return (
        <Html>
        <Head />
        <body>
        <Main />
        <NextScript />
        </body>
        </Html>
        );
        }
        }

    2.  (Optional) Replace your pages/\_app.tsx with

        import { AppProps } from 'next/app';
        import Head from 'next/head';
        import { MantineProvider } from '@mantine/core';

        export default function App(props: AppProps) {
        const { Component, pageProps } = props;

        return (
        <>
        <Head>
        <title>Page title</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>

             <MantineProvider
                 withGlobalStyles
                 withNormalizeCSS
                 theme={{
                 /** Put your mantine theme override here */
                 colorScheme: 'light',
                 }}
             >
                 <Component {...pageProps} />
             </MantineProvider>
             </>

        );
        }
