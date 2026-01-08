import type { Metadata } from 'next';
import './globals.css';
import './framer.css';
import SvgTemplates from '../components/svg-templates';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Toaster } from '../components/ui/sonner';

export const metadata: Metadata = {
  title: '일랑북스',
  description: '일랑북스입니다',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning={true}>
      <head>
        <meta charSet="utf-8" />

        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />

        <link
          href="https://fonts.gstatic.com"
          rel="preconnect"
          crossOrigin="anonymous"
        />
        <meta name="robots" content="max-image-preview:large" />
        <style
          suppressHydrationWarning={true}
          data-framer-breakpoint-css
        ></style>
        <style
          suppressHydrationWarning={true}
          data-framer-css-ssr-minified
          data-framer-components="framer-lib-cursors-host framer-3F5nR PropertyOverrides framer-6CkqQ"
        ></style>
      </head>
      <body>
        <Toaster />
        <div
          data-framer-generated-page=""
          data-framer-hydrate-v2='{"routeId":"augiA20Il","localeId":"default","breakpoints":[{"hash":"1vk2m8p","mediaQuery":"(min-width: 1200px)"},{"hash":"xpwx9r","mediaQuery":"(min-width: 810px) and (max-width: 1199.98px)"},{"hash":"72rtr7","mediaQuery":"(max-width: 809.98px)"}]}'
          data-framer-page-optimized-at="2025-12-11T08:31:09.634Z"
          data-framer-ssr-released-at="2025-12-10T16:53:31.331Z"
          id="main"
          suppressHydrationWarning={true}
        >
          <div
            className="hamburger framer-3F5nR framer-idunJ framer-72rtr7"
            data-framer-name=""
            style={{
              minHeight: '100vh',
              width: 'auto',
            }}
            suppressHydrationWarning={true}
          >
            {children}
            <Header />
            <Footer />
          </div>
        </div>
        <SvgTemplates />
      </body>
    </html>
  );
}
