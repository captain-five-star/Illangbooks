'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { useIsMobile } from '../hooks/use-mobile';
import HomeSec from '../components/HomeSec';
import ServiceSec from '../components/ServiceSec';
import PublishingProcessSec from '@/components/PublishingProcessSec';

export default function Home() {
  const FramerComponent = dynamic(
    () => import('../components/FramerComponent'),
    { ssr: false }
  );

  const isMobile = useIsMobile();
  return (
    <div className="h-full w-full" key={isMobile.toString()}>
      <FramerComponent />
      <HomeSec />
      <ServiceSec isMobile={isMobile} />
      <PublishingProcessSec />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="framer-p44x6u"
        data-framer-name="섹션3: 카톡문의"
      >
        <Link
          href="https://open.kakao.com/o/sv0MPsAg"
          target="_blank"
          className="flex"
        >
          <Image
            src="/katalk-mb.png"
            width={720}
            height={269}
            alt="카톡문의"
            className="katalk-mb px-4 py-4 md:px-0 md:pb-0"
            style={{
              objectFit: 'contain',
              position: 'relative',
              width: '100%',
              height: '100%',
            }}
          />
          <Image
            src="/katalk-pc.png"
            width={1400}
            height={385}
            alt="카톡문의"
            className="katalk-pc left-[50%] max-h-[280px] translate-x-[-50%]"
            style={{
              objectFit: 'contain',
              position: 'relative',
            }}
          />
        </Link>
      </motion.div>
    </div>
  );
}
