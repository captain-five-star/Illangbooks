'use client';
import Image from 'next/image';
import { FC, useState } from 'react';
import SideBar from './SideBar';
import Link from 'next/link';
import { useIsTablet } from '../hooks/use-mobile';

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBtn = (): void => {
    setIsOpen(!isOpen);
  };

  const isTablet = useIsTablet();

  return (
    <div className="framer-5x8ol7" data-framer-name="헤더">
      <SideBar isOpen={isOpen && isTablet} toggleBtn={toggleBtn} />
      <div className="relative">
        <Link href="./">
          <Image
            alt="일랑북스 로고"
            decoding="async"
            height="40"
            src="/logo.png"
            width="80"
            priority
            className="logo"
          />
        </Link>
      </div>
      <div className="framer-1ynakz9" id="hamburger" onClick={toggleBtn}>
        <div
          className="framer-1lbz3mg hidden-1vk2m8p"
          data-framer-name="hambuger_inner"
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
            <Link
              className="framer-text framer-styles-preset-fa0lqh"
              data-styles-preset="NSj8aKz2Q"
              href="/company"
            >
              회사 소개
            </Link>
          </p>
        </div>
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
            <Link
              className="framer-text framer-styles-preset-fa0lqh"
              data-styles-preset="NSj8aKz2Q"
              href="/inquiry"
            >
              견적 문의
            </Link>
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
            <Link
              className="framer-text framer-styles-preset-fa0lqh"
              data-styles-preset="NSj8aKz2Q"
              href="/faq"
            >
              FAQ
            </Link>
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
            <Link
              className="framer-text framer-styles-preset-fa0lqh"
              data-styles-preset="NSj8aKz2Q"
              href="https://buly.kr/9MRgv48"
              target="_blank"
            >
              일랑 블로그
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
