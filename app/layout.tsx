import type { Metadata } from 'next';
import './globals.css';
import './framer.css';
import Script from 'next/script';
import SvgTemplates from './components/svg-templates';
import Image from 'next/image';

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

        {/* <meta name="viewport" content="width=device-width" />
                <meta name="generator" content="Framer 6bbae76" />
                <meta name="framer-search-index" content="https://framerusercontent.com/sites/5PEV6T37b7TiNOethVqtHp/searchIndex-66fZg4EPtQAW.json" />
                <meta name="framer-search-index-fallback" content="https://framerusercontent.com/sites/5PEV6T37b7TiNOethVqtHp/searchIndex-Zfu1xWAW63Er.json" />
                <link href="https://framerusercontent.com/sites/icons/default-favicon-light.v1.png" rel="icon" media="(prefers-color-scheme: light)" />
                <link href="https://framerusercontent.com/sites/icons/default-favicon-dark.v1.png" rel="icon" media="(prefers-color-scheme: dark)" />
                <link rel="apple-touch-icon" href="https://framerusercontent.com/sites/icons/default-touch-icon.v3.png" /> */}

        <meta property="og:type" content="website" />
        {/* <meta property="og:title" content="My Framer Site" />
                <meta property="og:description" content="Made with Framer" /> */}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="My Framer Site" />
        <meta name="twitter:description" content="Made with Framer" />

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
        <Script
          suppressHydrationWarning={true}
          async
          src="https://events.framer.com/script?v=2"
          data-fid="bb9229f8597073bd554ad9b49e3b2304cbcca7422057248cf5b20c43c552a751"
          data-no-nt
        ></Script>
        <div
          data-framer-generated-page=""
          data-framer-hydrate-v2='{"routeId":"augiA20Il","localeId":"default","breakpoints":[{"hash":"1vk2m8p","mediaQuery":"(min-width: 1200px)"},{"hash":"xpwx9r","mediaQuery":"(min-width: 810px) and (max-width: 1199.98px)"},{"hash":"72rtr7","mediaQuery":"(max-width: 809.98px)"}]}'
          data-framer-page-optimized-at="2025-12-11T08:31:09.634Z"
          data-framer-ssr-released-at="2025-12-10T16:53:31.331Z"
          id="main"
          suppressHydrationWarning={true}
        >
          <div
            className="framer-3F5nR framer-idunJ framer-72rtr7"
            data-framer-root=""
            style={{
              minHeight: '100vh',
              width: 'auto',
            }}
            suppressHydrationWarning={true}
          >
            {children}
            <div className="framer-5x8ol7" data-framer-name="헤더">
              <div className="ssr-variant hidden-1vk2m8p hidden-xpwx9r">
                <a
                  className="framer-sm25a6 framer-lux5qc"
                  data-framer-name="로고"
                  data-framer-page-link-current="true"
                  href="./"
                  style={{
                    transform: 'translateY(-50%)',
                  }}
                >
                  <div
                    data-framer-background-image-wrapper="true"
                    style={{
                      borderRadius: 'inherit',
                      bottom: '0',
                      left: '0',
                      position: 'absolute',
                      right: '0',
                      top: '0',
                    }}
                  >
                    <Image
                      alt=""
                      decoding="async"
                      height="356"
                      src="https://framerusercontent.com/images/t5arNqU60IYXffoBly9Qbpeizg.png?width=440&height=356"
                      style={{
                        borderRadius: 'inherit',
                        display: 'block',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        width: '100%',
                      }}
                      width="440"
                    />
                  </div>
                </a>
              </div>
              <div className="ssr-variant hidden-xpwx9r hidden-72rtr7">
                <a
                  className="framer-sm25a6 framer-lux5qc"
                  data-framer-name="로고"
                  data-framer-page-link-current="true"
                  href="./"
                >
                  <div
                    data-framer-background-image-wrapper="true"
                    style={{
                      borderRadius: 'inherit',
                      bottom: '0',
                      left: '0',
                      position: 'absolute',
                      right: '0',
                      top: '0',
                    }}
                  >
                    <Image
                      alt=""
                      decoding="async"
                      height="356"
                      src="https://framerusercontent.com/images/t5arNqU60IYXffoBly9Qbpeizg.png?width=440&height=356"
                      style={{
                        borderRadius: 'inherit',
                        display: 'block',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        width: '100%',
                      }}
                      width="440"
                    />
                  </div>
                </a>
              </div>
              <div className="ssr-variant hidden-1vk2m8p hidden-72rtr7">
                <a
                  className="framer-sm25a6 framer-lux5qc"
                  data-framer-name="로고"
                  data-framer-page-link-current="true"
                  href="./"
                >
                  <div
                    data-framer-background-image-wrapper="true"
                    style={{
                      borderRadius: 'inherit',
                      bottom: '0',
                      left: '0',
                      position: 'absolute',
                      right: '0',
                      top: '0',
                    }}
                  >
                    <Image
                      alt=""
                      decoding="async"
                      height="356"
                      src="https://framerusercontent.com/images/t5arNqU60IYXffoBly9Qbpeizg.png?width=440&height=356"
                      style={{
                        borderRadius: 'inherit',
                        display: 'block',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        width: '100%',
                      }}
                      width="440"
                    />
                  </div>
                </a>
              </div>
              <div className="framer-1ynakz9">
                <div
                  className="framer-1lbz3mg hidden-1vk2m8p"
                  data-framer-name="hambuger"
                  id="1lbz3mg"
                  tabIndex={0}
                >
                  <div className="framer-1eyjj2k">
                    <div
                      aria-hidden="true"
                      className="framer-tqp9mw"
                      data-framer-component-type="SVG"
                      style={{
                        backgroundImage:
                          'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 21.333" overflow="visible"><path d="M 0 0 L 24 0 L 24 2.667 L 0 2.667 Z M 0 9.333 L 24 9.333 L 24 12 L 0 12 Z M 0 18.667 L 24 18.667 L 24 21.333 L 0 21.333 Z" fill="rgb(255, 255, 255)"></path></svg>\')',
                        backgroundSize: '100% 100%',
                        flexShrink: '0',
                        imageRendering: 'pixelated',
                      }}
                    ></div>
                  </div>
                </div>
                <div className="ssr-variant hidden-xpwx9r">
                  <div
                    aria-hidden="true"
                    className="framer-16p14dq hidden-1vk2m8p"
                    data-framer-component-type="SVG"
                    style={{
                      flexShrink: '0',
                      imageRendering: 'pixelated',
                    }}
                  >
                    <div
                      className="svgContainer"
                      style={{
                        aspectRatio: 'inherit',
                        height: '100%',
                        width: '100%',
                      }}
                    >
                      <svg
                        style={{
                          height: '100%',
                          overflow: 'visible',
                          width: '100%',
                        }}
                      >
                        <use href="#svg2145075375_1178" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="ssr-variant hidden-1vk2m8p hidden-72rtr7">
                  <div
                    aria-hidden="true"
                    className="framer-16p14dq hidden-1vk2m8p"
                    data-framer-component-type="SVG"
                    style={{
                      flexShrink: '0',
                      imageRendering: 'pixelated',
                    }}
                  >
                    <div
                      className="svgContainer"
                      style={{
                        aspectRatio: 'inherit',
                        height: '100%',
                        width: '100%',
                      }}
                    >
                      <svg
                        style={{
                          height: '100%',
                          overflow: 'visible',
                          width: '100%',
                        }}
                      >
                        <use href="#svg-1870832021_1177" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="framer-glmq52 hidden-72rtr7 hidden-xpwx9r">
                <div
                  className="framer-1njcwyh hidden-72rtr7"
                  data-framer-component-type="RichTextContainer"
                  style={{
                    transform: 'none',
                  }}
                >
                  <p
                    className="framer-text"
                    style={{
                      '--font-selector': 'Q1VTVE9NO1ByZXRlbmRhcmQgUmVndWxhcg==',
                      '--framer-font-family':
                        '"Pretendard Regular", "Pretendard Regular Placeholder", sans-serif',
                      '--framer-font-size': '18px',
                      '--framer-line-height': '1.8em',
                      '--framer-text-color': 'rgb(33, 33, 33)',
                    }}
                  >
                    <a
                      className="framer-text framer-styles-preset-fa0lqh"
                      data-styles-preset="NSj8aKz2Q"
                      href="/company"
                    >
                      회사소개
                    </a>
                  </p>
                </div>
                <div
                  className="framer-220atz hidden-72rtr7"
                  data-framer-component-type="RichTextContainer"
                  style={{
                    transform: 'none',
                  }}
                >
                  <p
                    className="framer-text"
                    style={{
                      '--font-selector': 'Q1VTVE9NO1ByZXRlbmRhcmQgUmVndWxhcg==',
                      '--framer-font-family':
                        '"Pretendard Regular", "Pretendard Regular Placeholder", sans-serif',
                      '--framer-font-size': '18px',
                      '--framer-line-height': '1.8em',
                      '--framer-text-color': 'rgb(33, 33, 33)',
                    }}
                  >
                    <a
                      className="framer-text framer-styles-preset-fa0lqh"
                      data-styles-preset="NSj8aKz2Q"
                      href="/faq"
                    >
                      FAQ
                    </a>
                  </p>
                </div>
                <div
                  className="framer-hok9h4 hidden-72rtr7"
                  data-framer-component-type="RichTextContainer"
                  style={{
                    transform: 'none',
                  }}
                >
                  <p
                    className="framer-text"
                    style={{
                      '--font-selector': 'Q1VTVE9NO1ByZXRlbmRhcmQgUmVndWxhcg==',
                      '--framer-font-family':
                        '"Pretendard Regular", "Pretendard Regular Placeholder", sans-serif',
                      '--framer-font-size': '18px',
                      '--framer-line-height': '1.8em',
                      '--framer-text-color': 'rgb(33, 33, 33)',
                    }}
                  >
                    일랑블로그
                  </p>
                </div>
              </div>
              <div className="framer-1iv6rq5 hidden-72rtr7 hidden-xpwx9r" />
            </div>
            <div className="framer-l7ydxz" data-framer-name="푸터">
              <div className="framer-19cclfz">
                <div className="ssr-variant hidden-1vk2m8p hidden-xpwx9r">
                  <div className="framer-ak7mxe" data-framer-name="로고">
                    <div
                      data-framer-background-image-wrapper="true"
                      style={{
                        borderRadius: 'inherit',
                        bottom: '0',
                        left: '0',
                        position: 'absolute',
                        right: '0',
                        top: '0',
                      }}
                    >
                      <Image
                        alt=""
                        decoding="async"
                        height="356"
                        loading="lazy"
                        src="https://framerusercontent.com/images/t5arNqU60IYXffoBly9Qbpeizg.png?width=440&height=356"
                        style={{
                          borderRadius: 'inherit',
                          display: 'block',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: 'center',
                          width: '100%',
                        }}
                        width="440"
                      />
                    </div>
                  </div>
                </div>
                <div className="ssr-variant hidden-xpwx9r hidden-72rtr7">
                  <div className="framer-ak7mxe" data-framer-name="로고">
                    <div
                      data-framer-background-image-wrapper="true"
                      style={{
                        borderRadius: 'inherit',
                        bottom: '0',
                        left: '0',
                        position: 'absolute',
                        right: '0',
                        top: '0',
                      }}
                    >
                      <Image
                        alt=""
                        decoding="async"
                        height="356"
                        loading="lazy"
                        src="https://framerusercontent.com/images/t5arNqU60IYXffoBly9Qbpeizg.png?width=440&height=356"
                        style={{
                          borderRadius: 'inherit',
                          display: 'block',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: 'center',
                          width: '100%',
                        }}
                        width="440"
                      />
                    </div>
                  </div>
                </div>
                <div className="ssr-variant hidden-1vk2m8p hidden-72rtr7">
                  <div className="framer-ak7mxe" data-framer-name="로고">
                    <div
                      data-framer-background-image-wrapper="true"
                      style={{
                        borderRadius: 'inherit',
                        bottom: '0',
                        left: '0',
                        position: 'absolute',
                        right: '0',
                        top: '0',
                      }}
                    >
                      <Image
                        alt=""
                        decoding="async"
                        height="356"
                        loading="lazy"
                        src="https://framerusercontent.com/images/t5arNqU60IYXffoBly9Qbpeizg.png?width=440&height=356"
                        style={{
                          borderRadius: 'inherit',
                          display: 'block',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: 'center',
                          width: '100%',
                        }}
                        width="440"
                      />
                    </div>
                  </div>
                </div>
                <div className="framer-1sideb2">
                  <div className="ssr-variant hidden-1vk2m8p hidden-xpwx9r">
                    <div
                      className="framer-9t4dgu"
                      data-framer-component-type="RichTextContainer"
                      style={{
                        transform: 'none',
                      }}
                    >
                      <p
                        className="framer-text"
                        style={{
                          '--font-selector':
                            'Q1VTVE9NVjI7UHJldGVuZGFyZCBNZWRpdW0=',
                          '--framer-font-family':
                            '"Pretendard Medium", "Pretendard Medium Placeholder", sans-serif',
                          '--framer-font-size': '12px',
                          '--framer-font-weight': '500',
                          '--framer-line-height': '1.3em',
                          '--framer-text-color':
                            'var(--token-fb9bb685-3fe8-4a92-8607-dc4e4bca5eee, rgb(161, 161, 161))',
                        }}
                      >
                        홈 | 회사소개 | FAQ | 일랑블로그
                      </p>
                    </div>
                  </div>
                  <div className="ssr-variant hidden-xpwx9r hidden-72rtr7">
                    <div
                      className="framer-9t4dgu"
                      data-framer-component-type="RichTextContainer"
                      style={{
                        transform: 'none',
                      }}
                    >
                      <p
                        className="framer-text"
                        style={{
                          '--font-selector':
                            'Q1VTVE9NVjI7UHJldGVuZGFyZCBNZWRpdW0=',
                          '--framer-font-family':
                            '"Pretendard Medium", "Pretendard Medium Placeholder", sans-serif',
                          '--framer-font-weight': '500',
                          '--framer-line-height': '1.3em',
                          '--framer-text-color':
                            'var(--token-fb9bb685-3fe8-4a92-8607-dc4e4bca5eee, rgb(161, 161, 161))',
                        }}
                      >
                        홈 | 회사소개 | FAQ | 일랑블로그
                      </p>
                    </div>
                  </div>
                  <div className="ssr-variant hidden-1vk2m8p hidden-72rtr7">
                    <div
                      className="framer-9t4dgu"
                      data-framer-component-type="RichTextContainer"
                      style={{
                        transform: 'none',
                      }}
                    >
                      <p
                        className="framer-text"
                        style={{
                          '--font-selector':
                            'Q1VTVE9NVjI7UHJldGVuZGFyZCBNZWRpdW0=',
                          '--framer-font-family':
                            '"Pretendard Medium", "Pretendard Medium Placeholder", sans-serif',
                          '--framer-font-size': '14px',
                          '--framer-font-weight': '500',
                          '--framer-line-height': '1.3em',
                          '--framer-text-color':
                            'var(--token-fb9bb685-3fe8-4a92-8607-dc4e4bca5eee, rgb(161, 161, 161))',
                        }}
                      >
                        홈 | 회사소개 | FAQ | 일랑블로그
                      </p>
                    </div>
                  </div>
                  <div className="ssr-variant hidden-1vk2m8p hidden-xpwx9r">
                    <div
                      className="framer-wqb2io"
                      data-framer-component-type="RichTextContainer"
                      style={{
                        transform: 'none',
                      }}
                    >
                      <p
                        className="framer-text"
                        style={{
                          '--font-selector':
                            'Q1VTVE9NVjI7UHJldGVuZGFyZCBMaWdodA==',
                          '--framer-font-family':
                            '"Pretendard Light", "Pretendard Light Placeholder", sans-serif',
                          '--framer-font-size': '12px',
                          '--framer-font-weight': '300',
                          '--framer-line-height': '1.3em',
                          '--framer-text-color':
                            'var(--token-fb9bb685-3fe8-4a92-8607-dc4e4bca5eee, rgb(161, 161, 161))',
                        }}
                      >
                        사업자등록번호 : 119-25-01155
                      </p>
                      <p
                        className="framer-text"
                        style={{
                          '--font-selector':
                            'Q1VTVE9NVjI7UHJldGVuZGFyZCBMaWdodA==',
                          '--framer-font-family':
                            '"Pretendard Light", "Pretendard Light Placeholder", sans-serif',
                          '--framer-font-size': '12px',
                          '--framer-font-weight': '300',
                          '--framer-line-height': '1.3em',
                          '--framer-text-color':
                            'var(--token-fb9bb685-3fe8-4a92-8607-dc4e4bca5eee, rgb(161, 161, 161))',
                        }}
                      >
                        E-mail :{' '}
                        <a
                          className="__cf_email__"
                          data-cfemail="2a5343464b444d181a1b136a444b5c4f5804494547"
                          href="/cdn-cgi/l/email-protection"
                        >
                          [email protected]
                        </a>
                      </p>
                      <p
                        className="framer-text"
                        style={{
                          '--font-selector':
                            'Q1VTVE9NVjI7UHJldGVuZGFyZCBMaWdodA==',
                          '--framer-font-family':
                            '"Pretendard Light", "Pretendard Light Placeholder", sans-serif',
                          '--framer-font-size': '12px',
                          '--framer-font-weight': '300',
                          '--framer-line-height': '1.3em',
                          '--framer-text-color':
                            'var(--token-fb9bb685-3fe8-4a92-8607-dc4e4bca5eee, rgb(161, 161, 161))',
                        }}
                      >
                        Location : 서울시 마포구 와우산로 10길
                      </p>
                      <p
                        className="framer-text"
                        style={{
                          '--font-selector':
                            'Q1VTVE9NVjI7UHJldGVuZGFyZCBMaWdodA==',
                          '--framer-font-family':
                            '"Pretendard Light", "Pretendard Light Placeholder", sans-serif',
                          '--framer-font-size': '12px',
                          '--framer-font-weight': '300',
                          '--framer-line-height': '1.3em',
                          '--framer-text-color':
                            'var(--token-fb9bb685-3fe8-4a92-8607-dc4e4bca5eee, rgb(161, 161, 161))',
                        }}
                      >
                        Copyright@2025 Illangbooks. All rights reserved.
                      </p>
                    </div>
                  </div>
                  <div className="ssr-variant hidden-xpwx9r hidden-72rtr7">
                    <div
                      className="framer-wqb2io"
                      data-framer-component-type="RichTextContainer"
                      style={{
                        transform: 'none',
                      }}
                    >
                      <p
                        className="framer-text"
                        style={{
                          '--font-selector':
                            'Q1VTVE9NVjI7UHJldGVuZGFyZCBMaWdodA==',
                          '--framer-font-family':
                            '"Pretendard Light", "Pretendard Light Placeholder", sans-serif',
                          '--framer-font-weight': '300',
                          '--framer-line-height': '1.3em',
                          '--framer-text-color':
                            'var(--token-fb9bb685-3fe8-4a92-8607-dc4e4bca5eee, rgb(161, 161, 161))',
                        }}
                      >
                        사업자등록번호 : 119-25-01155
                      </p>
                      <p
                        className="framer-text"
                        style={{
                          '--font-selector':
                            'Q1VTVE9NVjI7UHJldGVuZGFyZCBMaWdodA==',
                          '--framer-font-family':
                            '"Pretendard Light", "Pretendard Light Placeholder", sans-serif',
                          '--framer-font-weight': '300',
                          '--framer-line-height': '1.3em',
                          '--framer-text-color':
                            'var(--token-fb9bb685-3fe8-4a92-8607-dc4e4bca5eee, rgb(161, 161, 161))',
                        }}
                      >
                        E-mail :{' '}
                        <a
                          className="__cf_email__"
                          data-cfemail="f089999c919e97c2c0c1c9b09e91869582de939f9d"
                          href="/cdn-cgi/l/email-protection"
                        >
                          [email protected]
                        </a>
                      </p>
                      <p
                        className="framer-text"
                        style={{
                          '--font-selector':
                            'Q1VTVE9NVjI7UHJldGVuZGFyZCBMaWdodA==',
                          '--framer-font-family':
                            '"Pretendard Light", "Pretendard Light Placeholder", sans-serif',
                          '--framer-font-weight': '300',
                          '--framer-line-height': '1.3em',
                          '--framer-text-color':
                            'var(--token-fb9bb685-3fe8-4a92-8607-dc4e4bca5eee, rgb(161, 161, 161))',
                        }}
                      >
                        Location : 서울시 마포구 와우산로 10길
                      </p>
                      <p
                        className="framer-text"
                        style={{
                          '--font-selector':
                            'Q1VTVE9NVjI7UHJldGVuZGFyZCBMaWdodA==',
                          '--framer-font-family':
                            '"Pretendard Light", "Pretendard Light Placeholder", sans-serif',
                          '--framer-font-weight': '300',
                          '--framer-line-height': '1.3em',
                          '--framer-text-color':
                            'var(--token-fb9bb685-3fe8-4a92-8607-dc4e4bca5eee, rgb(161, 161, 161))',
                        }}
                      >
                        Copyright@2025 Illangbooks. All rights reserved.
                      </p>
                    </div>
                  </div>
                  <div className="ssr-variant hidden-1vk2m8p hidden-72rtr7">
                    <div
                      className="framer-wqb2io"
                      data-framer-component-type="RichTextContainer"
                      style={{
                        transform: 'none',
                      }}
                    >
                      <p
                        className="framer-text"
                        style={{
                          '--font-selector':
                            'Q1VTVE9NVjI7UHJldGVuZGFyZCBMaWdodA==',
                          '--framer-font-family':
                            '"Pretendard Light", "Pretendard Light Placeholder", sans-serif',
                          '--framer-font-size': '14px',
                          '--framer-font-weight': '300',
                          '--framer-line-height': '1.3em',
                          '--framer-text-color':
                            'var(--token-fb9bb685-3fe8-4a92-8607-dc4e4bca5eee, rgb(161, 161, 161))',
                        }}
                      >
                        사업자등록번호 : 119-25-01155
                      </p>
                      <p
                        className="framer-text"
                        style={{
                          '--font-selector':
                            'Q1VTVE9NVjI7UHJldGVuZGFyZCBMaWdodA==',
                          '--framer-font-family':
                            '"Pretendard Light", "Pretendard Light Placeholder", sans-serif',
                          '--framer-font-size': '14px',
                          '--framer-font-weight': '300',
                          '--framer-line-height': '1.3em',
                          '--framer-text-color':
                            'var(--token-fb9bb685-3fe8-4a92-8607-dc4e4bca5eee, rgb(161, 161, 161))',
                        }}
                      >
                        E-mail :{' '}
                        <a
                          className="__cf_email__"
                          data-cfemail="2b5242474a454c191b1a126b454a5d4e5905484446"
                          href="/cdn-cgi/l/email-protection"
                        >
                          [email protected]
                        </a>
                      </p>
                      <p
                        className="framer-text"
                        style={{
                          '--font-selector':
                            'Q1VTVE9NVjI7UHJldGVuZGFyZCBMaWdodA==',
                          '--framer-font-family':
                            '"Pretendard Light", "Pretendard Light Placeholder", sans-serif',
                          '--framer-font-size': '14px',
                          '--framer-font-weight': '300',
                          '--framer-line-height': '1.3em',
                          '--framer-text-color':
                            'var(--token-fb9bb685-3fe8-4a92-8607-dc4e4bca5eee, rgb(161, 161, 161))',
                        }}
                      >
                        Location : 서울시 마포구 와우산로 10길
                      </p>
                      <p
                        className="framer-text"
                        style={{
                          '--font-selector':
                            'Q1VTVE9NVjI7UHJldGVuZGFyZCBMaWdodA==',
                          '--framer-font-family':
                            '"Pretendard Light", "Pretendard Light Placeholder", sans-serif',
                          '--framer-font-size': '14px',
                          '--framer-font-weight': '300',
                          '--framer-line-height': '1.3em',
                          '--framer-text-color':
                            'var(--token-fb9bb685-3fe8-4a92-8607-dc4e4bca5eee, rgb(161, 161, 161))',
                        }}
                      >
                        Copyright@2025 Illangbooks. All rights reserved.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="overlay" />
        </div>
        <SvgTemplates />
      </body>
    </html>
  );
}
