import { motion } from 'motion/react';

const TitleCol = ({
  isMobile,
  title,
  desc,
}: {
  isMobile: boolean;
  title: string;
  desc?: string;
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: isMobile ? 0 : -30,
        y: isMobile ? 20 : 0,
      }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="font-instrument text-[28px] leading-[0.8] font-bold md:text-[48px] xl:text-5xl">
        {title}
      </h2>
      {desc && (
        <p className="pt-6 pb-2 text-base break-keep whitespace-pre-wrap md:pt-8 md:text-lg dark:text-gray-300">
          {desc}
        </p>
      )}
    </motion.div>
  );
};

export default TitleCol;
