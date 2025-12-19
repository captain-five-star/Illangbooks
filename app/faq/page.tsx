import React from 'react';
import QnaBox from '@/app/components/QnaBox';

const page = () => {
  const qnaData = [
    {
      title: '자비출판이란 무엇인가요?',
      desc: `자비출판은 저자가 출판 비용을 부담하여 직접 책을 출간하는 방식입니다. 원고의 집필은 저자가 담당하고, 교열교정·디자인·인쇄 등 출판 과정 전반은 일랑북스의 전문 편집인들이 담당합니다. 저자는 출판의 매 단계마다 진행 과정을 확인할 수 있으며, 요청이 있을 경우 적극적으로 반영합니다. 따라서 원고 집필 후에는 편안하게 실물 책을 받아 볼 수 있으며, 기획출판(출판사와 계약하여 출간하는 경우)보다 더 큰 수익을 가져갈 수 있습니다.`,
    },
    {
      title: '자비출판의 비용은 얼마인가요?',
      desc: `자비출판의 비용은 도서의 장르, 전체 페이지 수, 디자인 요소, 인쇄 수량 등 여러 가지 요소에 따라 달라집니다. 예를 들어 에세이와 어린이 동화의 경우, 책의 판형·페이지 수·인쇄 컬러·종이 종류와 같은 물리적 특성, 그리고 교정교열의 분량·디자인 스타일·삽화 유무와 같은 편집 요소가 달라집니다. 따라서 편집비 및 인쇄비도 달라지므로 고정된 비용을 안내드리기 어렵습니다. 저자님께서는 먼저 도서 장르를 명확히 하신 후 문의해 주시면 상담과 함께 비용을 안내해 드리겠습니다.`,
    },
    {
      title: '자비출판 후 서점에 유통할 수 있나요?',
      desc: `도서의 장르 및 내용에 따라 ISBN 발급 및 서점 유통 가능 여부가 결정됩니다. 원고 일부를 첨부하여 문의 주시면 상세히 안내드리겠습니다. 서점 유통이 어려운 경우에도 저자가 주도적으로 판매 및 마케팅을 진행할 수 있습니다. SNS, 개인 블로그, 스마트 스토어 등 서점 외 판매 가능한 루트에 대해 적극적으로 상담해 드립니다.`,
    },
    {
      title: '자비출판을 위한 원고 준비는 어떻게 해야 하나요?',
      desc: `원고 준비는 출판에서 매우 중요한 단계 중 하나입니다. 창작 스토리의 원고라면 캐릭터 및 배경 설정에 오류가 없도록, 정보 공유의 원고라면 사실 여부와 근거를 명확하게 하기 위해 충분한 자료 조사가 필요합니다. 더불어 저작권 침해를 피하기 위해 신중히 집필하는 것이 중요하며, 콘텐츠에 필요한 삽화나 이미지는 저자가 준비해야 합니다. 교정교열 및 디자인은 일랑북스의 전문 편집인들이 책임지니, 초고 집필 시에는 내용에만 집중하셔도 좋습니다.`,
    },
    {
      title:
        '기관/비출판 관련 기업인데, 프로젝트로 책을 출간하려고 합니다. 어떤 절차를 거쳐야 하나요?',
      desc: `네, 기관이나 비출판 관련 기업에서 프로젝트로 책을 출간하는 것이 가능합니다. 일랑북스에서는 기획 단계부터 인쇄까지 출판의 전 과정을 지원해 드리고 있습니다. 먼저, 프로젝트의 목적과 타깃 독자층에 따라 도서 기획을 함께 진행합니다. 이후 원고 준비, 교정교열, 디자인, 인쇄 등 출간을 위한 모든 과정을 일괄적으로 진행해 드립니다. 필요에 따라 저자 섭외 및 원고 집필도 가능합니다. 다만, 전문적인 내용을 다루는 서적의 경우, 해당 기업에서 원고를 직접 준비해 주시는 것이 좋습니다. 출간을 위한 구체적인 상담이 필요하시다면, 언제든 문의해 주시면 맞춤형 솔루션을 제공해 드리겠습니다.`,
    },
    {
      title: '교정교열 또는 디자인만 의뢰할 수 있나요?',
      desc: `네, 가능합니다. 일랑북스에서는 교정교열 또는 디자인 작업만 따로 의뢰하실 수 있습니다. 특히 공모전 준비 중인 원고나 웹소설 업로드를 준비 중이신 경우, 저자가 직접 출간을 계획하시는 경우, 1인 출판사 또는 일반 출판사가 부분적으로 작업을 의뢰하실 때 매우 유용합니다. 각 작업 단계마다 전문 편집인들이 세심하게 작업을 진행하므로, 원하시는 부분에 대해 높은 퀄리티의 결과물을 받아 보실 수 있습니다. 언제든 문의 주시면 자세한 상담을 통해 맞춤형 서비스를 제공해 드리겠습니다.`,
    },
  ];
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
          <div className="framer-5jmcbr">
            <div className="framer-1opixmp">
              <div
                className="framer-7osg2r"
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
                className="framer-9xgl4"
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
            </div>
            <div className="framer-ntn7d0 qna-container w-full!">
              {qnaData.map((item, index) => (
                <QnaBox key={index} title={item.title} desc={item.desc} />
              ))}
              <div className="framer-1977wgu" />
            </div>
          </div>
        </div>
      </div>
      <div id="overlay" />
    </>
  );
};

export default page;
