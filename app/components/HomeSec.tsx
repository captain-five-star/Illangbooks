import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useIsMobile } from '@/hooks/use-mobile';

const HomeSec = () => {
  const isMobile = useIsMobile();

  const descText = `도서 기획과 편집은
경험과 판단이 필요한 작업입니다.
일랑북스는 원고의 방향과 구조를 설계합니다.

출판사, 기관/기업, 개인 저자를 대상으로
출판 기획·편집 중심의 작업을 진행합니다.
`;

  const descTag = ['출판기획', '기획편집', '편집외주'];

  return (
    <div
      className="framer-va6j0a w-min px-10 pt-30 pb-15 md:w-full md:px-20 md:pt-40 md:pb-15"
      data-framer-name="섹션1"
    >
      <motion.div
        key={isMobile.toString()}
        initial={{ opacity: 0, x: isMobile ? 0 : -30, y: isMobile ? 20 : 0 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="framer-xfdacz relative! h-full w-full"
      >
        <div className="framer-1bt0651">
          <h2 className="title font-instrument letter-spacing-[-0.02em] text-[28px] font-bold md:text-5xl xl:text-[72px]">
            About
          </h2>
          <div>
            <p className="h-full w-full text-base break-keep whitespace-pre-line md:text-lg xl:text-[21px]">
              {descText}
            </p>
            <div className="pt-6">
              {descTag.map((tag, index) => (
                <span
                  className="rounded-full bg-[#F5F5F5] px-2 py-1 text-sm md:text-base xl:px-4 xl:py-2 xl:text-lg"
                  key={index}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <Link
          className="link-btn framer-1c25ncm framer-lux5qc"
          href="./company"
        >
          <div className="framer-igrsqc">
            <div className="ssr-variant hidden-1vk2m8p hidden-xpwx9r">
              <div
                className="framer-w8ofc0"
                data-framer-component-type="RichTextContainer"
                style={{
                  transform: 'none',
                }}
              >
                <p
                  className="framer-text"
                  style={{
                    '--font-selector': 'Q1VTVE9NVjI7UHJldGVuZGFyZCBSZWd1bGFy',
                    '--framer-font-family':
                      '"Pretendard Regular", "Pretendard Regular Placeholder", sans-serif',
                    '--framer-letter-spacing': '-0.02em',
                    '--framer-line-height': '1.7em',
                    '--framer-text-color': 'rgb(255, 255, 255)',
                  }}
                >
                  회사 소개 바로가기
                </p>
              </div>
            </div>
            <div className="ssr-variant hidden-xpwx9r hidden-72rtr7">
              <div
                className="framer-w8ofc0"
                data-framer-component-type="RichTextContainer"
                style={{
                  transform: 'none',
                }}
              >
                <p
                  className="framer-text"
                  style={{
                    '--font-selector': 'Q1VTVE9NVjI7UHJldGVuZGFyZCBSZWd1bGFy',
                    '--framer-font-family':
                      '"Pretendard Regular", "Pretendard Regular Placeholder", sans-serif',
                    '--framer-font-size': '21px',
                    '--framer-letter-spacing': '-0.02em',
                    '--framer-line-height': '1.7em',
                    '--framer-text-color': 'rgb(255, 255, 255)',
                  }}
                >
                  회사 소개 바로가기
                </p>
              </div>
            </div>
            <div className="ssr-variant hidden-1vk2m8p hidden-72rtr7">
              <div
                className="framer-w8ofc0"
                data-framer-component-type="RichTextContainer"
                style={{
                  transform: 'none',
                }}
              >
                <p
                  className="framer-text"
                  style={{
                    '--font-selector': 'Q1VTVE9NVjI7UHJldGVuZGFyZCBSZWd1bGFy',
                    '--framer-font-family':
                      '"Pretendard Regular", "Pretendard Regular Placeholder", sans-serif',
                    '--framer-font-size': '18px',
                    '--framer-letter-spacing': '-0.02em',
                    '--framer-line-height': '1.7em',
                    '--framer-text-color': 'rgb(255, 255, 255)',
                  }}
                >
                  회사 소개 바로가기
                </p>
              </div>
            </div>
            <div className="framer-2u0x4t">
              <div
                aria-hidden="true"
                className="framer-g90923"
                data-framer-component-type="SVG"
                style={{
                  backgroundImage:
                    'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 12.728" overflow="visible"><path d="M 0 7.364 L 0 5.364 L 16.172 5.364 L 12.222 1.414 L 13.636 0 L 20 6.364 L 13.636 12.728 L 12.222 11.314 L 16.172 7.364 Z" fill="rgb(255, 255, 255)"></path></svg>\')',
                  backgroundSize: '100% 100%',
                  flexShrink: '0',
                  imageRendering: 'pixelated',
                }}
              ></div>
            </div>
          </div>
        </Link>
      </motion.div>
      <div className="book-image ssr-variant">
        <motion.div
          initial={{ opacity: 0, y: isMobile ? 20 : 0, x: isMobile ? 0 : 30 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="framer-1dzt9ka"
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
              loading="eager"
              height="1210"
              src="https://framerusercontent.com/images/CMmvqOT0GuDIpo04T2Q4PjuQQ.png?width=1154&height=1210"
              style={{
                borderRadius: 'inherit',
                // display: 'block',
                height: '100%',
                objectFit: 'fill',
                objectPosition: 'center',
                width: '100%',
              }}
              width="1154"
              className="hidden md:block"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeSec;
