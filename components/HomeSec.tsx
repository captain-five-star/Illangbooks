import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useIsMobile } from '@/hooks/use-mobile';
import HomeMDX from '@/app/mdx/home.mdx';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const HomeSec = () => {
  const isMobile = useIsMobile();

  // const descText = <HomeMdx />;

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
          <h2 className="title font-instrument letter-spacing-[-0.02em] text-[28px] font-bold md:text-5xl xl:text-6xl">
            About
          </h2>
          <div>
            <div className="h-full w-full text-base break-keep whitespace-pre-line md:text-lg">
              <HomeMDX />
            </div>
            <div className="pt-6">
              {descTag.map((tag, index) => (
                <span
                  className="mr-1 rounded-full bg-[#F5F5F5] px-2 py-1 text-sm md:text-base xl:px-4 xl:py-2 xl:text-lg"
                  key={index}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <Link className="" href="./company">
          <Button type="button" className="mb-4 px-5! md:px-6! md:text-lg">
            회사 소개 바로 가기
            <ArrowRight className="size-5 md:size-6" />
          </Button>
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
