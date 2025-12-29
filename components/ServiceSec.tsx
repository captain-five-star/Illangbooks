import { motion } from 'motion/react';
import Title from './Title';
import QnaBox from './QnaBox';

const ServiceSec = ({ isMobile }: { isMobile: boolean }) => {
  const qnaData = [
    {
      title: '출간을 전제로 한 기획·편집',
      desc: `[대상] 초보 1인 출판, 강사, 번역가, 작가, 공모전 준비자 등

- 이 원고가 책으로 팔릴 구조인지 잘 모르겠습니다. 
- 마음에 드는 편집자와 디자이너를 구하기가 힘듭니다.
- 1인 출판이라 일손이 달리지만 직원을 채용하긴 부담이 됩니다.
- 잘못된 방향으로 가고 있는 건 아닌지 크로스 체크가 필요합니다.
`,
      foot: `일랑북스는 원고를 ‘출간 가능한 책 구조’로 재설계하고, 불필요한 시행착오를 막아 드립니다.`,
    },
    {
      title: '비상업 출판',
      desc: `[대상] 자녀를 위한 책, 가족사 기록집, 회고록, 개인 기록집 등

판매 목적은 아니지만 완성도는 포기하고 싶지 않습니다.
글·그림·사진 등을 어떻게 엮어야 할지 잘 모르겠습니다.
우리 아이의 그림(혹은 일기를) 책으로 만들어 선물하고 싶습니다.`,
      foot: `일랑북스는 기록물의 성격에 맞는 편집 설계와 디자인으로 ‘소장 가능한 책’을 완성합니다.`,
    },
    {
      title: '일랑이 하지 않는 일',
      desc: `① 기획 없이 ‘제작만’ 맡기는 경우
원고의 구조 정리, 목차, 콘셉트 설정 없이 “디자인과 인쇄만 진행해 달라”라는 요청은 받지 않습니다. 
일랑북스는 파일을 책 형태로 출력하는 인쇄소가 아니라, 원고를 출간 가능한 한 권의 책으로 설계하는 출판기획사입니다.

② 비용만으로 작업을 결정하는 경우
”최저가로 맞춰 달라” “다른 곳은 얼마였다”와 같이 단가 비교만을 목적으로 한 문의는 받지 않습니다. 일랑북스는 일정 수준 이상의 완성도를 전제로 작업하며, 품질이 훼손되는 방식의 작업은 진행하지 않습니다. 

③ 출간 목적이 불분명한 경우
’일단 개인 저작물로 책을 한번 만들어 보고 싶어서’와 같은 막연한 동기만으로 작업을 진행하기는 어렵습니다. 출간 목적이 정리되지 않으면 기획 방향과 구성 기준이 흔들리고, 그 결과 책의 완성도 역시 확보하기 어렵기 때문입니다.

④ 유통·판매·홍보 대행
일랑북스는 도서의 유통·판매·홍보 등을 대행하지 않습니다. 다만, 출간을 전제로 한 기획·편집 과정에서 타깃과 목적을 고려한 구조 설계에 대한 조언은 포함되며, 실제 유통 및 홍보는 의뢰자의 진행 영역입니다.`,
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
