import { motion } from 'motion/react';
import Title from './Title';
import QnaBox from './QnaBox';
import DontDoBox from './DontDoBox';
import Service01MDX from '@/app/mdx/service01.mdx';
import Service02MDX from '@/app/mdx/service02.mdx';
import Service03MDX from '@/app/mdx/service03.mdx';
import Service04MDX from '@/app/mdx/service04.mdx';

const ServiceSec = ({ isMobile }: { isMobile: boolean }) => {
  const qnaData = [
    {
      title: '출간을 전제로 한 기획·편집',
      target: '초보 1인 출판, 강사, 번역가, 작가, 공모전 준비자 등 ',
      list: <Service01MDX />,
      foot: `일랑북스는 원고를 ‘출간 가능한 책 구조’로 재설계하고, 불필요한 시행착오를 막아 드립니다.`,
    },
    {
      title: '납기·용도가 정해진 실무 출판',
      target: '공공기관, 기업, 학원, 연구소 등',
      list: <Service02MDX />,
      foot: `일랑북스는 용도·독자·일정을 기준으로 기획부터 편집, 인쇄제작까지 실무를 책임집니다.`,
    },
    {
      title: '비상업 출판',
      target: '자녀를 위한 책, 가족사 기록집, 회고록, 개인 기록집 등',
      list: <Service03MDX />,
      foot: `일랑북스는 기록물의 성격에 맞는 편집 설계와 디자인으로 ‘소장 가능한 책’을 완성합니다.`,
    },
    // {
    //   title: '일랑이 하지 않는 일',
    //   desc: <Service04MDX />,
    //   foot: `일랑북스는 위와 같은 의뢰는 받지 않습니다.`,
    // },
  ];

  const dontDo = [
    {
      title: '일랑이 하지 않는 일',
      desc: <Service04MDX />,
      foot: `일랑북스는 위와 같은 의뢰는 받지 않습니다.`,
    },
  ];

  return (
    <div className="framer-1w5b1ly" data-framer-name="섹션2: 서비스">
      <div className="framer-1g5rh3z">
        <Title
          isMobile={isMobile}
          title="Service"
          desc="이런 분들께 출판 해결책을 제공합니다."
        />
        <motion.div
          initial={{
            opacity: 0,
            y: isMobile ? 20 : 0,
            x: isMobile ? 0 : 30,
          }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="framer-ntn7d0 qna-container"
        >
          {qnaData.map((item, index) => (
            <QnaBox
              key={index}
              title={item.title}
              target={item.target}
              list={item.list}
              foot={item.foot}
            />
          ))}
          {dontDo.map((item, index) => (
            <DontDoBox
              key={index}
              title={item.title}
              desc={item.desc}
              foot={item.foot}
            />
          ))}
          <div className="framer-1977wgu" />
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceSec;
