'use client';

import ContactUs from '../../components/ContactUs';
import Title from '../../components/Title';
import TitleCol from '../../components/TitleCol';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion } from 'motion/react';
const Page = () => {
  const isMobile = useIsMobile();

  const checklist = [
    '☑️  출간 목적이 비교적 분명하다.(예: 판매, 제한된 배포, 소장용 등)',
    '☑️  이 책을 만드는 이유를 한 문장으로 설명할 수 있다.',
    '☑️  이 책을 누가 읽을지 독자가 대략적으로라도 떠오른다.',
    '☑️  목차가 초안 수준이라도 정리되어 있다.',
    '☑️  워드 또는 한글 파일 형태로 원고가 일정 분량 이상 정리되어 있다.(블로그/브런치 등 게시글 X)',
    '☑️  단순 인쇄 제작이 아니라, 기획·편집의 도움이 필요하다고 느낀다.',
    '☑️  원고의 방향성 조정 및 수정에 대한 편집자의 개입을 수용할 수 있다.',
    '☑️  편집자의 피드백에 따라 원고 수정이 필요할 수 있음을 이해하고 있다.',
    '☑️  무료 문의의 범위와 계약 후 제공되는 서비스의 차이를 이해하고 있다.',
    '☑️  일정과 예산에 현실적이고 명확한 계획이 있다.',
  ];
  return (
    <div
      className="h-full w-full"
      //   style={{
      //     minHeight: '100vh',
      //     width: '100%',
      //   }}
    >
      <div className="h-full w-full bg-[#f9f9f9] px-10 pt-30 pb-15 md:w-full md:px-20 md:pt-40 md:pb-15 xl:px-40 xl:pt-50 xl:pb-25">
        <div className="flex flex-col gap-5 md:gap-10">
          <TitleCol
            title="문의 전 체크리스트"
            isMobile={isMobile}
            desc="아래 항목은 견적 문의 응대를 판단하기 위한 최소 기준입니다. 모두
            충족할 필요는 없지만, 절반 이하에 해당하는 경우 견적서 제공이 제한될
            수 있습니다."
          />
          <motion.div
            initial={{
              opacity: 0,
              y: isMobile ? 20 : 0,
              x: isMobile ? 0 : 30,
            }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="h-full w-full rounded-2xl bg-white px-8 py-8 shadow-sm">
              <p className="font-instrument mb-4 inline-block text-lg font-bold md:text-2xl">
                CHECK LIST
              </p>
              <ul className="block text-sm">
                {checklist.map((list, index) => (
                  <li
                    key={index}
                    className="mb-2 list-none! pl-2 text-sm whitespace-pre-wrap md:text-base"
                  >
                    {list}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-base md:text-lg xl:text-[21px]">
              체크 항목이 적다고 해서 의뢰가 불가능한 것은 아닙니다. 다만 사전
              준비 없이 기획 방향 설정만을 요구하는 문의에는 응답이 제한될 수
              있습니다.
            </p>
          </motion.div>
        </div>
      </div>
      <div className="h-full w-full bg-white px-5 pt-15 md:w-full md:px-20 xl:px-40 xl:py-25">
        <div className="1g5rh3z flex flex-col justify-between xl:flex-row">
          <Title
            title="견적 문의"
            isMobile={isMobile}
            desc={`문의 폼을 작성해 주시면 
확인 후 빠른 시일 내에 답변드리겠습니다.`}
          />
          <ContactUs isMobile={isMobile} />
        </div>
      </div>
    </div>
  );
};

export default Page;
