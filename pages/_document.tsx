// eslint-disable-next-line @next/next/no-document-import-in-page
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

type Props = {};

class Document extends NextDocument<Props> {
    render() {
        return (
            <Html lang="en" className="bg-[#ECE8FF]">
                <Head>
                    {/* Create all your favicons and put them inside public/favicons folder */}
                    <meta name="google-site-verification" content="vPDAeK-jS-1UsRsfFW27oc-Rwa8oKv6dbQOydvfjZ1Q" />
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="favicons/apple-touch-icon.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="favicons/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="favicons/favicon-16x16.png"
                    />
                    <link rel="manifest" href="favicons/site.webmanifest" />
                    <link
                        rel="mask-icon"
                        href="favicons/safari-pinned-tab.svg"
                        color="#5bbad5"
                    />
                    <meta name="msapplication-TileColor" content="#ffc40d" />
                    <meta name="theme-color" content="#ffffff" />
                </Head>
                <body className="">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default Document;
