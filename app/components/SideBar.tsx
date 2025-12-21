import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';

const SideBar = ({
  isOpen,
  toggleBtn,
}: {
  isOpen: boolean;
  toggleBtn: () => void;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="overlay"
          className="fixed top-0 left-0 z-40 h-full w-full bg-[#aaaaaab]"
          initial={{ opacity: 0, backdropFilter: 'blur(0)' }}
          animate={{ opacity: 1, backdropFilter: 'blur(10px)' }}
          exit={{ opacity: 0, backdropFilter: 'blur(0)' }}
        >
          <div
            className="framer-3F5nR framer-idunJ relative z-30"
            style={{
              height: 'auto',
              right: '0px',
              position: 'fixed',
              top: '0px',
              width: '100%',
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
              <div className="framer-57kvng" onClick={toggleBtn} role="dialog">
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
                <div
                  className="framer-1vxqsea"
                  tabIndex={0}
                  onClick={toggleBtn}
                >
                  <div
                    aria-hidden="true"
                    className="framer-jgtes9"
                    // data-framer-component-type="SVG"
                    style={{
                      backgroundImage: `url('/close-icon.png')`,
                      backgroundSize: '100% 100%',
                      flexShrink: '0',
                      imageRendering: 'pixelated',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SideBar;
