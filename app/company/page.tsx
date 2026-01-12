'use client';
import { motion } from 'motion/react';
import { useIsMobile } from '@/hooks/use-mobile';
import Image from 'next/image';
import CompanyMDX from '../mdx/company.mdx';

const Page = () => {
  const isMobile = useIsMobile();

  return (
    <>
      <div
        className="framer-WmVtc framer-idunJ framer-1pz4wa5"
        data-framer-root=""
        style={{
          minHeight: '100vh',
          width: '100%',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, staggerChildren: 1 }}
          viewport={{ once: true }}
          className="framer-108tk09"
        >
          <div className="w-ful h-full">
            <div className="h-full w-full text-base leading-[1.7em] break-keep whitespace-pre-wrap md:text-lg xl:text-[21px]">
              <CompanyMDX />
            </div>
          </div>
        </motion.div>
        <div className="framer-yxyu08" />
        <motion.div
          id="team"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="framer-dkjntl"
        >
          <div className="framer-5wfw8l h-full">
            <div className="flex h-full flex-col items-center justify-center gap-4 md:gap-6 xl:items-baseline">
              <div>
                <h2 className="font-pretendard text-[28px] leading-[1em] font-bold md:text-[48px] xl:text-5xl">
                  팀원 소개
                </h2>
              </div>
              <div className="ssr-variant hidden-1ef32pi hidden-xksy3p">
                <div
                  aria-hidden="true"
                  className="framer-1tlsfdj"
                  data-framer-component-type="SVG"
                  style={{
                    backgroundImage:
                      'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 180 1" overflow="visible"><path d="M 0 0 L 180 0 L 180 1 L 0 1 Z" fill="%23CCC"></path></svg>\')',
                    backgroundSize: '100% 100%',
                    flexShrink: '0',
                    imageRendering: 'pixelated',
                  }}
                />
              </div>
              <div className="ssr-variant hidden-1pz4wa5 hidden-xksy3p">
                <div
                  aria-hidden="true"
                  className="framer-1tlsfdj hidden"
                  data-framer-component-type="SVG"
                  style={{
                    backgroundImage:
                      'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 340 1" overflow="visible"><path d="M 0 0 L 340 0 L 340 1 L 0 1 Z" fill="%23CCC"></path></svg>\')',
                    backgroundSize: '100% 100%',
                    flexShrink: '0',
                    imageRendering: 'pixelated',
                  }}
                />
              </div>
              <div className="ssr-variant hidden-1pz4wa5 hidden-1ef32pi">
                <div
                  aria-hidden="true"
                  className="framer-1tlsfdj"
                  data-framer-component-type="SVG"
                  style={{
                    backgroundImage:
                      'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 260 1" overflow="visible"><path d="M 0 0 L 260 0 L 260 1 L 0 1 Z" fill="%23CCC"></path></svg>\')',
                    backgroundSize: '100% 100%',
                    flexShrink: '0',
                    imageRendering: 'pixelated',
                  }}
                />
              </div>
            </div>
            <div className="framer-k9ykp8">
              <div className="framer-l039ww">
                <div className="framer-ri7nj">
                  <div
                    data-framer-background-image-wrapper="true"
                    style={{
                      borderRadius: 'inherit',
                      bottom: '0',
                      cornerShape: 'inherit',
                      left: '0',
                      position: 'absolute',
                      right: '0',
                      top: '0',
                    }}
                  >
                    <Image
                      alt=""
                      data-framer-original-sizes="160px"
                      decoding="async"
                      height="1024"
                      loading="lazy"
                      sizes="(min-width: 1200px) 160px, (min-width: 810px) and (max-width: 1199.98px) 160px, (max-width: 809.98px) 160px"
                      src="https://framerusercontent.com/images/z4Fjb92hmmU1JLJxJ9wYXpraE.png?width=1024&height=1024"
                      style={{
                        borderRadius: 'inherit',
                        cornerShape: 'inherit',
                        display: 'block',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        width: '100%',
                      }}
                      width="1024"
                    />
                  </div>
                </div>
                <div className="framer-r8ibna">
                  <div className="ssr-variant hidden-1ef32pi hidden-xksy3p">
                    <div
                      className="framer-56hyvr"
                      data-framer-component-type="RichTextContainer"
                      style={{
                        transform: 'none',
                      }}
                    >
                      <p
                        className="framer-text"
                        style={{
                          '--font-selector':
                            'Q1VTVE9NVjI7R293dW4gQmF0YW5nIEJvbGQ=',
                          '--framer-font-family':
                            '"Gowun Batang Bold", "Gowun Batang Bold Placeholder", sans-serif',
                          '--framer-font-size': '18px',
                          '--framer-font-weight': '700',
                          '--framer-text-alignment': 'center',
                          '--framer-text-color':
                            'var(--token-e69fcfc3-b8e4-4efa-8f3e-16e7e659965e, rgb(9, 54, 150))',
                          '--framer-text-stroke-color':
                            'var(--token-7d8af774-9a06-46b6-bf39-f388599cfc37, rgb(49, 86, 164))',
                          '--framer-text-stroke-width': '0.5px',
                        }}
                      >
                        대표 편집자 H
                      </p>
                    </div>
                  </div>
                  <div className="ssr-variant hidden-1pz4wa5 hidden-xksy3p">
                    <div
                      className="framer-56hyvr"
                      data-framer-component-type="RichTextContainer"
                      style={{
                        transform: 'none',
                      }}
                    >
                      <p
                        className="framer-text"
                        style={{
                          '--font-selector':
                            'Q1VTVE9NVjI7R293dW4gQmF0YW5nIEJvbGQ=',
                          '--framer-font-family':
                            '"Gowun Batang Bold", "Gowun Batang Bold Placeholder", sans-serif',
                          '--framer-font-size': '24px',
                          '--framer-font-weight': '700',
                          '--framer-text-alignment': 'left',
                          '--framer-text-color':
                            'var(--token-e69fcfc3-b8e4-4efa-8f3e-16e7e659965e, rgb(9, 54, 150))',
                          '--framer-text-stroke-color':
                            'var(--token-7d8af774-9a06-46b6-bf39-f388599cfc37, rgb(49, 86, 164))',
                          '--framer-text-stroke-width': '0.5px',
                        }}
                      >
                        <strong className="framer-text">대표 편집자 H</strong>
                      </p>
                    </div>
                  </div>
                  <div className="ssr-variant hidden-1pz4wa5 hidden-1ef32pi">
                    <div
                      className="framer-56hyvr"
                      data-framer-component-type="RichTextContainer"
                      style={{
                        transform: 'none',
                      }}
                    >
                      <p
                        className="framer-text"
                        style={{
                          '--font-selector':
                            'Q1VTVE9NVjI7R293dW4gQmF0YW5nIEJvbGQ=',
                          '--framer-font-family':
                            '"Gowun Batang Bold", "Gowun Batang Bold Placeholder", sans-serif',
                          '--framer-font-size': '21px',
                          '--framer-font-weight': '700',
                          '--framer-text-alignment': 'left',
                          '--framer-text-color':
                            'var(--token-e69fcfc3-b8e4-4efa-8f3e-16e7e659965e, rgb(9, 54, 150))',
                          '--framer-text-stroke-color':
                            'var(--token-7d8af774-9a06-46b6-bf39-f388599cfc37, rgb(49, 86, 164))',
                          '--framer-text-stroke-width': '0.5px',
                        }}
                      >
                        대표 편집자 H
                      </p>
                    </div>
                  </div>
                  <div className="ssr-variant hidden-1ef32pi hidden-xksy3p">
                    <div
                      className="framer-1oo3vnn"
                      data-framer-component-type="RichTextContainer"
                      style={{
                        transform: 'none',
                      }}
                    >
                      <p
                        className="framer-text"
                        style={{
                          '--font-selector':
                            'Q1VTVE9NVjI7UHJldGVuZGFyZCBSZWd1bGFy',
                          '--framer-font-family':
                            '"Pretendard Regular", "Pretendard Regular Placeholder", sans-serif',
                          '--framer-letter-spacing': '-0.02em',
                          '--framer-line-height': '1.5em',
                          '--framer-text-alignment': 'center',
                          '--framer-text-color':
                            'var(--token-2344cfaf-58d2-43d2-89fa-ad03dd665892, rgb(33, 33, 33))',
                        }}
                      >
                        기획과 교정교열,
                        <br className="framer-text" />
                        전체 진행과 조율,
                        <br className="framer-text" />
                        그리고 상담을 담당합니다.
                      </p>
                    </div>
                  </div>
                  <div className="ssr-variant hidden-1pz4wa5 hidden-xksy3p">
                    <div
                      className="framer-1oo3vnn"
                      data-framer-component-type="RichTextContainer"
                      style={{
                        transform: 'none',
                      }}
                    >
                      <p
                        className="framer-text"
                        style={{
                          '--font-selector':
                            'Q1VTVE9NVjI7UHJldGVuZGFyZCBSZWd1bGFy',
                          '--framer-font-family':
                            '"Pretendard Regular", "Pretendard Regular Placeholder", sans-serif',
                          '--framer-letter-spacing': '-0.02em',
                          '--framer-line-height': '1.5em',
                          '--framer-text-alignment': 'left',
                          '--framer-text-color':
                            'var(--token-2344cfaf-58d2-43d2-89fa-ad03dd665892, rgb(33, 33, 33))',
                        }}
                      >
                        <span
                          className="framer-text"
                          style={{
                            '--framer-font-size': '21px',
                          }}
                        >
                          기획과 교정교열,
                        </span>
                        <br className="framer-text" />
                        <span
                          className="framer-text"
                          style={{
                            '--framer-font-size': '21px',
                          }}
                        >
                          전체 진행과 조율,
                        </span>
                        <br className="framer-text" />
                        <span
                          className="framer-text"
                          style={{
                            '--framer-font-size': '21px',
                          }}
                        >
                          그리고 상담을 담당합니다.
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="ssr-variant hidden-1pz4wa5 hidden-1ef32pi">
                    <div
                      className="framer-1oo3vnn"
                      data-framer-component-type="RichTextContainer"
                      style={{
                        transform: 'none',
                      }}
                    >
                      <p
                        className="framer-text"
                        style={{
                          '--font-selector':
                            'Q1VTVE9NVjI7UHJldGVuZGFyZCBSZWd1bGFy',
                          '--framer-font-family':
                            '"Pretendard Regular", "Pretendard Regular Placeholder", sans-serif',
                          '--framer-letter-spacing': '-0.02em',
                          '--framer-line-height': '1.5em',
                          '--framer-text-alignment': 'left',
                          '--framer-text-color':
                            'var(--token-2344cfaf-58d2-43d2-89fa-ad03dd665892, rgb(33, 33, 33))',
                        }}
                      >
                        <span
                          className="framer-text"
                          style={{
                            '--framer-font-size': '18px',
                          }}
                        >
                          기획과 교정교열,
                        </span>
                        <br className="framer-text" />
                        <span
                          className="framer-text"
                          style={{
                            '--framer-font-size': '18px',
                          }}
                        >
                          전체 진행과 조율,
                        </span>
                        <br className="framer-text" />
                        <span
                          className="framer-text"
                          style={{
                            '--framer-font-size': '18px',
                          }}
                        >
                          그리고 상담을 담당합니다.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                aria-hidden="true"
                className="framer-1boz7pu"
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
                      width: '100%',
                    }}
                  >
                    <use href="#svg452136078_376" />
                  </svg>
                </div>
              </div>
              <div className="framer-uksmku">
                <div className="framer-11yfbx8">
                  <div
                    data-framer-background-image-wrapper="true"
                    style={{
                      borderRadius: 'inherit',
                      bottom: '0',
                      cornerShape: 'inherit',
                      left: '0',
                      position: 'absolute',
                      right: '0',
                      top: '0',
                    }}
                  >
                    <Image
                      alt=""
                      data-framer-original-sizes="160px"
                      decoding="async"
                      height="1024"
                      loading="lazy"
                      sizes="(min-width: 1200px) 160px, (min-width: 810px) and (max-width: 1199.98px) 160px, (max-width: 809.98px) 160px"
                      src="https://framerusercontent.com/images/bLi8Miat1TohE9RdOPUgGUmWaLk.png?width=1024&height=1024"
                      style={{
                        borderRadius: 'inherit',
                        cornerShape: 'inherit',
                        display: 'block',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        width: '100%',
                      }}
                      width="1024"
                    />
                  </div>
                </div>
                <div className="framer-r19vs5">
                  <div className="ssr-variant hidden-1ef32pi hidden-xksy3p">
                    <div
                      className="framer-ssvfz3"
                      data-framer-component-type="RichTextContainer"
                      style={{
                        transform: 'none',
                      }}
                    >
                      <p
                        className="framer-text"
                        style={{
                          '--font-selector':
                            'Q1VTVE9NVjI7R293dW4gQmF0YW5nIEJvbGQ=',
                          '--framer-font-family':
                            '"Gowun Batang Bold", "Gowun Batang Bold Placeholder", sans-serif',
                          '--framer-font-size': '18px',
                          '--framer-font-weight': '700',
                          '--framer-text-alignment': 'center',
                          '--framer-text-color':
                            'var(--token-e69fcfc3-b8e4-4efa-8f3e-16e7e659965e, rgb(9, 54, 150))',
                          '--framer-text-stroke-color':
                            'var(--token-7d8af774-9a06-46b6-bf39-f388599cfc37, rgb(49, 86, 164))',
                          '--framer-text-stroke-width': '0.5px',
                        }}
                      >
                        대표 디자이너 A
                      </p>
                    </div>
                  </div>
                  <div className="ssr-variant hidden-1pz4wa5 hidden-xksy3p">
                    <div
                      className="framer-ssvfz3"
                      data-framer-component-type="RichTextContainer"
                      style={{
                        transform: 'none',
                      }}
                    >
                      <p
                        className="framer-text"
                        style={{
                          '--font-selector':
                            'Q1VTVE9NVjI7R293dW4gQmF0YW5nIEJvbGQ=',
                          '--framer-font-family':
                            '"Gowun Batang Bold", "Gowun Batang Bold Placeholder", sans-serif',
                          '--framer-font-size': '24px',
                          '--framer-font-weight': '700',
                          '--framer-text-alignment': 'left',
                          '--framer-text-color':
                            'var(--token-e69fcfc3-b8e4-4efa-8f3e-16e7e659965e, rgb(9, 54, 150))',
                          '--framer-text-stroke-color':
                            'var(--token-7d8af774-9a06-46b6-bf39-f388599cfc37, rgb(49, 86, 164))',
                          '--framer-text-stroke-width': '0.5px',
                        }}
                      >
                        대표 디자이너 A
                      </p>
                    </div>
                  </div>
                  <div className="ssr-variant hidden-1pz4wa5 hidden-1ef32pi">
                    <div
                      className="framer-ssvfz3"
                      data-framer-component-type="RichTextContainer"
                      style={{
                        transform: 'none',
                      }}
                    >
                      <p
                        className="framer-text"
                        style={{
                          '--font-selector':
                            'Q1VTVE9NVjI7R293dW4gQmF0YW5nIEJvbGQ=',
                          '--framer-font-family':
                            '"Gowun Batang Bold", "Gowun Batang Bold Placeholder", sans-serif',
                          '--framer-font-size': '21px',
                          '--framer-font-weight': '700',
                          '--framer-text-alignment': 'left',
                          '--framer-text-color':
                            'var(--token-e69fcfc3-b8e4-4efa-8f3e-16e7e659965e, rgb(9, 54, 150))',
                          '--framer-text-stroke-color':
                            'var(--token-7d8af774-9a06-46b6-bf39-f388599cfc37, rgb(49, 86, 164))',
                          '--framer-text-stroke-width': '0.5px',
                        }}
                      >
                        대표 디자이너 A
                      </p>
                    </div>
                  </div>
                  <div className="ssr-variant hidden-1ef32pi hidden-xksy3p">
                    <div
                      className="framer-1wex6l6"
                      data-framer-component-type="RichTextContainer"
                      style={{
                        transform: 'none',
                      }}
                    >
                      <p
                        className="framer-text"
                        style={{
                          '--font-selector':
                            'Q1VTVE9NVjI7UHJldGVuZGFyZCBSZWd1bGFy',
                          '--framer-font-family':
                            '"Pretendard Regular", "Pretendard Regular Placeholder", sans-serif',
                          '--framer-letter-spacing': '-0.02em',
                          '--framer-line-height': '1.5em',
                          '--framer-text-alignment': 'center',
                          '--framer-text-color':
                            'var(--token-2344cfaf-58d2-43d2-89fa-ad03dd665892, rgb(33, 33, 33))',
                        }}
                      >
                        본문, 표지, 삽화 스타일 선정 등
                        <br className="framer-text" />
                        디자인과 감각을 담당합니다.
                      </p>
                    </div>
                  </div>
                  <div className="ssr-variant hidden-1pz4wa5 hidden-xksy3p">
                    <div
                      className="framer-1wex6l6"
                      data-framer-component-type="RichTextContainer"
                      style={{
                        transform: 'none',
                      }}
                    >
                      <p
                        className="framer-text"
                        style={{
                          '--font-selector':
                            'Q1VTVE9NVjI7UHJldGVuZGFyZCBSZWd1bGFy',
                          '--framer-font-family':
                            '"Pretendard Regular", "Pretendard Regular Placeholder", sans-serif',
                          '--framer-letter-spacing': '-0.02em',
                          '--framer-line-height': '1.5em',
                          '--framer-text-alignment': 'left',
                          '--framer-text-color':
                            'var(--token-2344cfaf-58d2-43d2-89fa-ad03dd665892, rgb(33, 33, 33))',
                        }}
                      >
                        <span
                          className="framer-text"
                          style={{
                            '--framer-font-size': '21px',
                          }}
                        >
                          본문, 표지, 삽화 스타일 선정 등
                        </span>
                        <br className="framer-text" />
                        <span
                          className="framer-text"
                          style={{
                            '--framer-font-size': '21px',
                          }}
                        >
                          디자인과 감각을 담당합니다.
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="ssr-variant hidden-1pz4wa5 hidden-1ef32pi">
                    <div
                      className="framer-1wex6l6"
                      data-framer-component-type="RichTextContainer"
                      style={{
                        transform: 'none',
                      }}
                    >
                      <p
                        className="framer-text"
                        style={{
                          '--font-selector':
                            'Q1VTVE9NVjI7UHJldGVuZGFyZCBSZWd1bGFy',
                          '--framer-font-family':
                            '"Pretendard Regular", "Pretendard Regular Placeholder", sans-serif',
                          '--framer-letter-spacing': '-0.02em',
                          '--framer-line-height': '1.5em',
                          '--framer-text-alignment': 'left',
                          '--framer-text-color':
                            'var(--token-2344cfaf-58d2-43d2-89fa-ad03dd665892, rgb(33, 33, 33))',
                        }}
                      >
                        <span
                          className="framer-text"
                          style={{
                            '--framer-font-size': '18px',
                          }}
                        >
                          본문, 표지, 삽화 스타일 선정 등
                        </span>
                        <br className="framer-text" />
                        <span
                          className="framer-text"
                          style={{
                            '--framer-font-size': '18px',
                          }}
                        >
                          디자인과 감각을 담당합니다.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                aria-hidden="true"
                className="framer-lbbmzd"
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
                      width: '100%',
                    }}
                  >
                    <use href="#svg452136078_376" />
                  </svg>
                </div>
              </div>
              <div className="framer-19ib4d9">
                <div className="framer-11gbml7">
                  <div
                    data-framer-background-image-wrapper="true"
                    style={{
                      borderRadius: 'inherit',
                      bottom: '0',
                      cornerShape: 'inherit',
                      left: '0',
                      position: 'absolute',
                      right: '0',
                      top: '0',
                    }}
                  >
                    <Image
                      alt=""
                      data-framer-original-sizes="160px"
                      decoding="async"
                      height="1024"
                      loading="lazy"
                      sizes="(min-width: 1200px) 160px, (min-width: 810px) and (max-width: 1199.98px) 160px, (max-width: 809.98px) 160px"
                      src="https://framerusercontent.com/images/qWYpYqlMu1kdVF6mcwYTrOh72k.png?width=1024&height=1024"
                      style={{
                        borderRadius: 'inherit',
                        cornerShape: 'inherit',
                        display: 'block',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        width: '100%',
                      }}
                      width="1024"
                    />
                  </div>
                </div>
                <div className="framer-23p9bk">
                  <div className="ssr-variant hidden-1ef32pi hidden-xksy3p">
                    <div
                      className="framer-1jg3peh"
                      data-framer-component-type="RichTextContainer"
                      style={{
                        transform: 'none',
                      }}
                    >
                      <p
                        className="framer-text"
                        style={{
                          '--font-selector':
                            'Q1VTVE9NVjI7R293dW4gQmF0YW5nIEJvbGQ=',
                          '--framer-font-family':
                            '"Gowun Batang Bold", "Gowun Batang Bold Placeholder", sans-serif',
                          '--framer-font-size': '18px',
                          '--framer-font-weight': '700',
                          '--framer-text-alignment': 'center',
                          '--framer-text-color':
                            'var(--token-e69fcfc3-b8e4-4efa-8f3e-16e7e659965e, rgb(9, 54, 150))',
                          '--framer-text-stroke-color':
                            'var(--token-7d8af774-9a06-46b6-bf39-f388599cfc37, rgb(49, 86, 164))',
                          '--framer-text-stroke-width': '0.5px',
                        }}
                      >
                        대표 조판자 C
                      </p>
                    </div>
                  </div>
                  <div className="ssr-variant hidden-1pz4wa5 hidden-xksy3p">
                    <div
                      className="framer-1jg3peh"
                      data-framer-component-type="RichTextContainer"
                      style={{
                        transform: 'none',
                      }}
                    >
                      <p
                        className="framer-text"
                        style={{
                          '--font-selector':
                            'Q1VTVE9NVjI7R293dW4gQmF0YW5nIEJvbGQ=',
                          '--framer-font-family':
                            '"Gowun Batang Bold", "Gowun Batang Bold Placeholder", sans-serif',
                          '--framer-font-size': '24px',
                          '--framer-font-weight': '700',
                          '--framer-text-alignment': 'left',
                          '--framer-text-color':
                            'var(--token-e69fcfc3-b8e4-4efa-8f3e-16e7e659965e, rgb(9, 54, 150))',
                          '--framer-text-stroke-color':
                            'var(--token-7d8af774-9a06-46b6-bf39-f388599cfc37, rgb(49, 86, 164))',
                          '--framer-text-stroke-width': '0.5px',
                        }}
                      >
                        대표 조판자 C
                      </p>
                    </div>
                  </div>
                  <div className="ssr-variant hidden-1pz4wa5 hidden-1ef32pi">
                    <div
                      className="framer-1jg3peh"
                      data-framer-component-type="RichTextContainer"
                      style={{
                        transform: 'none',
                      }}
                    >
                      <p
                        className="framer-text"
                        style={{
                          '--font-selector':
                            'Q1VTVE9NVjI7R293dW4gQmF0YW5nIEJvbGQ=',
                          '--framer-font-family':
                            '"Gowun Batang Bold", "Gowun Batang Bold Placeholder", sans-serif',
                          '--framer-font-size': '21px',
                          '--framer-font-weight': '700',
                          '--framer-text-alignment': 'left',
                          '--framer-text-color':
                            'var(--token-e69fcfc3-b8e4-4efa-8f3e-16e7e659965e, rgb(9, 54, 150))',
                          '--framer-text-stroke-color':
                            'var(--token-7d8af774-9a06-46b6-bf39-f388599cfc37, rgb(49, 86, 164))',
                          '--framer-text-stroke-width': '0.5px',
                        }}
                      >
                        대표 조판자 C
                      </p>
                    </div>
                  </div>
                  <div className="ssr-variant hidden-1ef32pi hidden-xksy3p">
                    <div
                      className="framer-3eqp8"
                      data-framer-component-type="RichTextContainer"
                      style={{
                        transform: 'none',
                      }}
                    >
                      <p
                        className="framer-text"
                        style={{
                          '--font-selector':
                            'Q1VTVE9NVjI7UHJldGVuZGFyZCBSZWd1bGFy',
                          '--framer-font-family':
                            '"Pretendard Regular", "Pretendard Regular Placeholder", sans-serif',
                          '--framer-letter-spacing': '-0.02em',
                          '--framer-line-height': '1.5em',
                          '--framer-text-alignment': 'center',
                          '--framer-text-color':
                            'var(--token-2344cfaf-58d2-43d2-89fa-ad03dd665892, rgb(33, 33, 33))',
                        }}
                      >
                        인디자인, 포토샵, 일러스트 등
                        <br className="framer-text" />
                        출간에 필요한
                        <br className="framer-text" />
                        프로그램 작업을 담당합니다.
                      </p>
                    </div>
                  </div>
                  <div className="ssr-variant hidden-1pz4wa5 hidden-xksy3p">
                    <div
                      className="framer-3eqp8"
                      data-framer-component-type="RichTextContainer"
                      style={{
                        transform: 'none',
                      }}
                    >
                      <p
                        className="framer-text"
                        style={{
                          '--font-selector':
                            'Q1VTVE9NVjI7UHJldGVuZGFyZCBSZWd1bGFy',
                          '--framer-font-family':
                            '"Pretendard Regular", "Pretendard Regular Placeholder", sans-serif',
                          '--framer-letter-spacing': '-0.02em',
                          '--framer-line-height': '1.5em',
                          '--framer-text-alignment': 'left',
                          '--framer-text-color':
                            'var(--token-2344cfaf-58d2-43d2-89fa-ad03dd665892, rgb(33, 33, 33))',
                        }}
                      >
                        <span
                          className="framer-text"
                          style={{
                            '--framer-font-size': '21px',
                          }}
                        >
                          인디자인, 포토샵, 일러스트 등
                        </span>
                        <br className="framer-text" />
                        <span
                          className="framer-text"
                          style={{
                            '--framer-font-size': '21px',
                          }}
                        >
                          출간에 필요한
                        </span>
                        <br className="framer-text" />
                        <span
                          className="framer-text"
                          style={{
                            '--framer-font-size': '21px',
                          }}
                        >
                          프로그램 작업을 담당합니다.
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="ssr-variant hidden-1pz4wa5 hidden-1ef32pi">
                    <div
                      className="framer-3eqp8"
                      data-framer-component-type="RichTextContainer"
                      style={{
                        transform: 'none',
                      }}
                    >
                      <p
                        className="framer-text"
                        style={{
                          '--font-selector':
                            'Q1VTVE9NVjI7UHJldGVuZGFyZCBSZWd1bGFy',
                          '--framer-font-family':
                            '"Pretendard Regular", "Pretendard Regular Placeholder", sans-serif',
                          '--framer-letter-spacing': '-0.02em',
                          '--framer-line-height': '1.5em',
                          '--framer-text-alignment': 'left',
                          '--framer-text-color':
                            'var(--token-2344cfaf-58d2-43d2-89fa-ad03dd665892, rgb(33, 33, 33))',
                        }}
                      >
                        <span
                          className="framer-text"
                          style={{
                            '--framer-font-size': '18px',
                          }}
                        >
                          인디자인, 포토샵, 일러스트 등
                        </span>
                        <br className="framer-text" />
                        <span
                          className="framer-text"
                          style={{
                            '--framer-font-size': '18px',
                          }}
                        >
                          출간에 필요한
                        </span>
                        <br className="framer-text" />
                        <span
                          className="framer-text"
                          style={{
                            '--framer-font-size': '18px',
                          }}
                        >
                          프로그램 작업을 담당합니다.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Page;
