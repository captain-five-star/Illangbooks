import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';

interface SideBarWrapProps {
  children: React.ReactNode;
}

const SideBarWrap: React.FC<SideBarWrapProps> = ({ children }) => {
  return <>{children}</>;
};

const SideBar = ({
  isOpen,
  toggleBtn,
}: {
  isOpen: boolean;
  toggleBtn: () => void;
}) => {
  return (
    <SideBarWrap>
      <div
        id="overlay"
        className=""
        style={{ display: isOpen ? 'block' : 'none' }}
      >
        <div
          className="framer-3F5nR framer-idunJ"
          data-framer-portal-id="1lbz3mg"
          style={{
            height: 'auto',
            right: '0px',
            position: 'fixed',
            top: '0px',
            visibility: 'visible',
            width: '100%',
            zIndex: '20',
          }}
        >
          <div
            aria-hidden="true"
            style={{
              inset: '0px',
              position: 'fixed',
            }}
          />
          <div>
            <div
              className={clsx('framer-57kvng', isOpen && 'open')}
              onClick={toggleBtn}
              role="dialog"
            >
              <div className="framer-1kb52hl">
                <div
                  className="framer-1mi9bxb"
                  data-framer-component-type="RichTextContainer"
                  style={{
                    transform: 'none',
                  }}
                >
                  <p
                    className="framer-text"
                    style={{
                      '--font-selector': 'Q1VTVE9NO1ByZXRlbmRhcmQgTGlnaHQ=',
                      '--framer-font-family':
                        '"Pretendard Light", "Pretendard Light Placeholder", sans-serif',
                      '--framer-font-size': '18px',
                      '--framer-font-weight': '300',
                      '--framer-line-height': '1em',
                      '--framer-text-color': 'rgb(255, 255, 255)',
                    }}
                  >
                    <Link
                      className="framer-text framer-styles-preset-fa0lqh"
                      href="./"
                    >
                      일랑북스
                    </Link>
                  </p>
                </div>
                <div
                  className="framer-1bikthn"
                  data-framer-component-type="RichTextContainer"
                  style={{
                    transform: 'none',
                  }}
                >
                  <p
                    className="framer-text"
                    style={{
                      '--font-selector': 'Q1VTVE9NO1ByZXRlbmRhcmQgTGlnaHQ=',
                      '--framer-font-family':
                        '"Pretendard Light", "Pretendard Light Placeholder", sans-serif',
                      '--framer-font-size': '18px',
                      '--framer-font-weight': '300',
                      '--framer-line-height': '1em',
                      '--framer-text-color': 'rgb(255, 255, 255)',
                    }}
                  >
                    <Link
                      className="framer-text framer-styles-preset-fa0lqh"
                      href="/company"
                    >
                      회사소개
                    </Link>
                  </p>
                </div>
                <div
                  className="framer-1cvo8xd"
                  data-framer-component-type="RichTextContainer"
                  style={{
                    transform: 'none',
                  }}
                >
                  <p
                    className="framer-text"
                    style={{
                      '--font-selector': 'Q1VTVE9NO1ByZXRlbmRhcmQgTGlnaHQ=',
                      '--framer-font-family':
                        '"Pretendard Light", "Pretendard Light Placeholder", sans-serif',
                      '--framer-font-size': '18px',
                      '--framer-font-weight': '300',
                      '--framer-line-height': '1em',
                      '--framer-text-color': 'rgb(255, 255, 255)',
                    }}
                  >
                    <Link
                      className="framer-text framer-styles-preset-fa0lqh"
                      href="/faq"
                    >
                      FAQ
                    </Link>
                  </p>
                </div>
                <div
                  className="framer-1je3kmh"
                  data-framer-component-type="RichTextContainer"
                  style={{
                    transform: 'none',
                  }}
                >
                  <p
                    className="framer-text"
                    style={{
                      '--font-selector': 'Q1VTVE9NO1ByZXRlbmRhcmQgTGlnaHQ=',
                      '--framer-font-family':
                        '"Pretendard Light", "Pretendard Light Placeholder", sans-serif',
                      '--framer-font-size': '18px',
                      '--framer-font-weight': '300',
                      '--framer-line-height': '1em',
                      '--framer-text-color': 'rgb(255, 255, 255)',
                    }}
                  >
                    <Link
                      className="framer-text framer-styles-preset-fa0lq"
                      href="https://buly.kr/9MRgv48"
                      target="_blank"
                    >
                      일랑 블로그
                    </Link>
                  </p>
                </div>
              </div>
              <div className="framer-1vxqsea" tabIndex={0} onClick={toggleBtn}>
                <div
                  aria-hidden="true"
                  className="framer-jgtes9"
                  // data-framer-component-type="SVG"
                  style={{
                    backgroundImage: `url('/public/close-icon.png')`,
                    backgroundSize: '100% 100%',
                    flexShrink: '0',
                    imageRendering: 'pixelated',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SideBarWrap>
  );
};

export default SideBar;
