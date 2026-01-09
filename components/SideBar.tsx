import Link from 'next/link';
import Image from 'next/image';
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
        <div
          id="overlay"
          className="fixed top-0 left-0 z-40 h-full w-full bg-[rgba(90,90,90,0.9)]"
        >
          <div className="">
            <motion.div
              initial={{ x: '100%' }}
              transition={{
                duration: 0.6,
                ease: [0.65, 0, 0.35, 1],
              }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              key="sidebar"
              className="framer-57kvng w-[80%]"
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
                  <Link
                    className="framer-text framer-styles-preset-fa0lqh"
                    href="./"
                  >
                    <p className="text-xl">일랑북스</p>
                  </Link>
                </div>
                <div
                  className="framer-1bikthn"
                  data-framer-component-type="RichTextContainer"
                  style={{
                    transform: 'none',
                  }}
                >
                  <Link
                    className="framer-text framer-styles-preset-fa0lqh"
                    href="/company"
                  >
                    <p className="text-xl">회사 소개</p>
                  </Link>
                </div>
                <div
                  className="framer-1bikthn"
                  data-framer-component-type="RichTextContainer"
                  style={{
                    transform: 'none',
                  }}
                >
                  <Link
                    className="framer-text framer-styles-preset-fa0lqh"
                    href="/inquiry"
                  >
                    <p className="text-xl">견적 문의</p>
                  </Link>
                </div>
                <div
                  className="framer-1cvo8xd"
                  data-framer-component-type="RichTextContainer"
                  style={{
                    transform: 'none',
                  }}
                >
                  <Link
                    className="framer-text framer-styles-preset-fa0lqh"
                    href="/faq"
                  >
                    <p className="text-xl">FAQ</p>
                  </Link>
                </div>
                <div
                  className="framer-1je3kmh"
                  data-framer-component-type="RichTextContainer"
                  style={{
                    transform: 'none',
                  }}
                >
                  <Link
                    className="framer-text framer-styles-preset-fa0lq"
                    href="https://buly.kr/9MRgv48"
                    target="_blank"
                  >
                    <p className="text-xl">일랑 블로그</p>
                  </Link>
                </div>
              </div>
              <div
                className="framer-1vxqsea md:right-10!"
                tabIndex={0}
                onClick={toggleBtn}
              >
                <Image
                  src="/close-icon.png"
                  alt="Close"
                  width={40}
                  height={40}
                  className="invert"
                />
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SideBar;
