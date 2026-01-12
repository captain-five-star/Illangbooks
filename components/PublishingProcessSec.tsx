import { motion } from 'motion/react';
import Title from './Title';
import { useIsMobile } from '../hooks/use-mobile';
import { Card, CardDescription, CardFooter, CardTitle } from './ui/card';

const PublishingProcessSec = () => {
  const isMobile = useIsMobile();

  const CardData = [
    {
      title: `STEP 1. 문의 전 체크리스트 확인`,
      desc: `[체크리스트]를 통해 출간 목적, 원고 준비 상태, 협업에 대한 기준 등 전반적인 사항을 고객님이 1차적으로 반드시 점검해 주셔야 합니다.`,
    },
    {
      title: `STEP 2. 원고 일부 전송 및 견적`,
      desc: `원고와 함께 견적 문의를 주시면 기재하신 사항을 바탕으로 견적을 제공합니다.`,
      foot: `* 견적 산정을 위한 원고 검토는 작업 가능 여부 판단과 비용 산정을 위한 범위로 제한되며, 원고의 방향성 설정, 제작 사양 제안 등 기획·편집·제작 컨설팅은 포함되지 않습니다.`,
    },
    {
      title: `STEP 3. 의뢰 결정 및  계약 체결`,
      desc: `견적 확인 후 작업을 의뢰하실 경우, 계약서 작성 및 계약금 30% 입금 완료 시, 정식으로 작업이 시작됩니다. 이 단계부터 출간 방향 설정 및 편집 논의가 진행됩니다.`,
    },
    {
      title: `STEP 4. 기획 및 편집 진행`,
      desc: `원고 구조·구성 검토 → 기획·편집 방향 논의 → 교열 → 디자인 → 교정(통상 3회)의 순서로 업무가 진행됩니다.`,
      foot: `* 잔금 입금 완료 후 최종 파일을 전달드립니다.`,
    },
    {
      title: `STEP 5. 제작 사양 확정 및 인쇄 진행`,
      desc: `원고의 성격과 목적, 부수 등을 고려하여 제작 사양을 검토하고, 필요 이상으로 제작비가 과도하게 발생하지 않도록 가장 합리적으로 인쇄 사양을 조율합니다. 이를 바탕으로 인쇄소 견적 및 일정 조율 등을 진행합니다. 인쇄비는 실비 기준(일정 수수료 포함)으로 안내되며, 제작 사양 확정 전에는 대략적인 비용 범위만 안내될 수 있습니다.`,
      foot: `* 이 단계는 인쇄 포함 의뢰에 한하며, 인쇄 비용은 선입금으로 진행합니다.`,
    },
  ];
  return (
    <div className="framer-j9mvpp" data-framer-name="섹션4: 출간과정">
      <div className="framer-7ki120">
        <div className="framer-fxsh2j">
          <Title title="Work Process" isMobile={isMobile} />
          <motion.div
            initial={{
              opacity: 0,
              x: isMobile ? 0 : 30,
              y: isMobile ? 20 : 0,
            }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col gap-2 px-2 py-2 md:grid md:grid-cols-2 md:gap-4"
          >
            {CardData.map((card, index) => (
              <Card key={index} className="w-full p-6 last:md:col-span-2">
                <CardTitle>{card.title}</CardTitle>
                <CardDescription className="">{card.desc}</CardDescription>
                <CardFooter>{card.foot}</CardFooter>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PublishingProcessSec;
