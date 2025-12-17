import type { Metadata } from "next";
import "./globals.css";
import "./framer.css";
import Script from "next/script";


export const metadata: Metadata = {
    title: "일랑북스",
    description: "일랑북스입니다",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html>
            <head>
                <meta charSet="utf-8" />

                <meta name="viewport" content="width=device-width" />
                <meta name="generator" content="Framer 6bbae76" />
                <meta name="framer-search-index" content="https://framerusercontent.com/sites/5PEV6T37b7TiNOethVqtHp/searchIndex-66fZg4EPtQAW.json" />
                <meta name="framer-search-index-fallback" content="https://framerusercontent.com/sites/5PEV6T37b7TiNOethVqtHp/searchIndex-Zfu1xWAW63Er.json" />
                <link href="https://framerusercontent.com/sites/icons/default-favicon-light.v1.png" rel="icon" media="(prefers-color-scheme: light)" />
                <link href="https://framerusercontent.com/sites/icons/default-favicon-dark.v1.png" rel="icon" media="(prefers-color-scheme: dark)" />
                <link rel="apple-touch-icon" href="https://framerusercontent.com/sites/icons/default-touch-icon.v3.png" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="My Framer Site" />
                <meta property="og:description" content="Made with Framer" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="My Framer Site" />
                <meta name="twitter:description" content="Made with Framer" />


                <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="anonymous" />
                <meta name="robots" content="max-image-preview:large" />
                <style data-framer-breakpoint-css></style><style data-framer-css-ssr-minified data-framer-components="framer-lib-cursors-host framer-3F5nR PropertyOverrides framer-6CkqQ"></style>
            </head>
            <body>
                <Script async src="https://events.framer.com/script?v=2"
                    data-fid="bb9229f8597073bd554ad9b49e3b2304cbcca7422057248cf5b20c43c552a751" data-no-nt></Script>


                {children}
                <script type="module" async data-framer-bundle="main"
                    src="https://framerusercontent.com/sites/5PEV6T37b7TiNOethVqtHp/script_main.CkRkbLLM.mjs"></script>
            </body>
        </html>

    );
}
