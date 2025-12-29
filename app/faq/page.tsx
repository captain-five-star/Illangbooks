'use client';
import QnaBox from '@/components/QnaBox';
import { motion } from 'motion/react';

const Page = () => {
  const qnaData = [
    {
      title: '기획 없이 교정교열만 의뢰할 수 있나요?',
      desc: `일랑북스는 교정교열을 출판 프로젝트의 일부로 진행하는 것을 원칙으로 합니다. 디자인과 조판 업무를 포함하지 않은 단독 교정교열 의뢰는 진행하지 않으며, 기획이 완료된 출판사의 경우에는 디자인을 포함한 교정교열을 진행할 수 있습니다. `,
    },
    {
      title: '디자인과 조판만 단독으로 의뢰할 수 있나요?',
      desc: `디자인은 책의 시작이 아니라 기획과 원고 검토 이후에 오는 단계입니다. 일랑북스는 기획편집 작업을 우선하며, 디자인과 조판은 그 과정의 일부로만 진행합니다. 디자인 의뢰만 원하실 경우, 디자인기획사를 찾아 진행하시는 것이 효율적입니다.`,
    },
    {
      title: '원고를 전송하면 어디까지 검토하나요?',
      desc: `작업 가능 여부, 작업 유형과 범위, 예상 비용 등을 판단하기 위한 수준으로만 검토합니다. 기획 방향에 대한 논의, 구조 분석, 구체적인 피드백 제시 등은 계약 체결 이후에 진행됩니다..`,
    },
    {
      title: '자비출판을 목표로 하는 개인인데 인쇄까지 가능한가요?',
      desc: `기획부터 인쇄까지 턴키 의뢰가 가능합니다. 다만 서점 유통을 계획하실 경우, ISBN은 직접 받으시거나(사업자등록증 필요) 대행 업체 등을 이용해 발급받은 후 제공해 주셔야 합니다.`,
    },
    {
      title: '작업 기간은 얼마나 걸리나요?',
      desc: `원고 분량과 작업 범위에 따라 다르며, 견적 단계에서 대략적인 일정 범위를 안내드립니다. 정확한 일정은 계약 체결 후 확정됩니다.`,
    },
  ];
  const variantsOuter = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  return (
    <>
      <div
        className="framer-fgaEu framer-idunJ framer-1agtvf9"
        data-framer-root=""
        style={{
          minHeight: '100vh',
          width: '100%',
        }}
      >
        <div className="framer-1t21uct" data-framer-name="섹션: FAQ">
          <motion.div
            variants={variantsOuter}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="framer-5jmcbr"
          >
            <motion.div
              variants={variants}
              className="framer-1opixmp h-full! w-full!"
            >
              <div
                className="framer-7osg2r relative!"
                data-framer-component-type="RichTextContainer"
                style={{
                  transform: 'none',
                }}
              >
                <p
                  className="framer-text"
                  style={{
                    '--font-selector': 'R0Y7SW5zdHJ1bWVudCBTYW5zLTcwMA==',
                    '--framer-font-family':
                      '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                    '--framer-font-size': '28px',
                    '--framer-font-weight': '700',
                    '--framer-text-color': 'rgb(33, 33, 33)',
                  }}
                >
                  FAQ
                </p>
              </div>
              <div
                className="framer-9xgl4 relative! h-full w-full"
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
                    '--framer-line-height': '1.5em',
                    '--framer-text-color': 'rgb(33, 33, 33)',
                  }}
                >
                  자주 묻는 질문에 대한 답변을 정리해 두었습니다.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={variants}
              className="framer-ntn7d0 qna-container w-full!"
            >
              {qnaData.map((item, index) => (
                <QnaBox key={index} title={item.title} desc={item.desc} />
              ))}
              <div className="framer-1977wgu" />
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div id="overlay" />
    </>
  );
};

export default Page;
