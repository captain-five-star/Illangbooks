'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import QnaBox from './components/QnaBox';
import Link from 'next/link';
import ContactUs from './components/ContactUs';
import { motion } from 'motion/react';
import { useIsMobile } from '../hooks/use-mobile';

export default function Home() {
  const FramerComponent = dynamic(
    () => import('./components/FramerComponent'),
    { ssr: false }
  );

  const qnaData = [
    {
      title: '외주편집',
      desc: `- 1인 출판이라 일손이 달리지만 직원을 채용하긴 부담이 됩니다.
- 마음에 드는 교정교열자(혹은 디자이너)를 찾기가 힘듭니다.
- 출판사는 아니지만 1회성으로 도서를 출간해야 하는데 막막합니다.

1인 출판사, 기관, 광고 대행사 등 모든 회사들과 함께합니다. 도서 장르, 출간 계획, 업무 범위 등 원하시는 조건에 맞추어 서비스를 제공합니다.
`,
    },
    {
      title: '자비출판',
      desc: `- 수업 자료를 깔끔하게 책으로 만들고 싶어요.
- 유튜브의 강의 내용을 교재로 엮어서 스마트스토어에 판매하려 해요.
- 우리 아이의 그림으로 동화책을 만들어 선물하고 싶어요.

책은 커리어나 수익을 위한 수단이 되기도 하고, 자신만의 '굿즈'가 되기도 합니다. 출간까지의 생소한 과정을 일랑북스와 함께하세요.`,
      foot: `- 소장용 또는 비매품 도서를 주 대상으로 합니다 (ISBN 발급 불가).
- 사업자등록이 되어 있으신 분은 ISBN 발급이 가능하나, 서점 유통 및 판매는 대행하지 않습니다.`,
    },
    {
      title: '출판코칭',
      desc: `- 책을 출간하고 싶은데 무엇부터 시작해야 할지 모르겠어요.
- 투고를 앞두고 있는데 계약서 내용이 적당한 것인지 헷갈려요.
- 출판사에 취업(또는 출판사 창업) 을 하고 싶은데 정보가 너무 없어요.

출판 또는 출판사에 관한 전반적인 조언이 필요하신 분을 위한 서비스입니다. '문의' 메뉴에서 궁금한 사앙을 기재하여 제출해 주세요. 1일 이내에 전화 또는 카카오톡으로 상담해 드립니다.`,
      foot: `- 비용 : 30분 / 55,000원`,
    },
  ];
  const isMobile = useIsMobile();
  return (
    <>
      <FramerComponent />
      <div className="framer-va6j0a" data-framer-name="섹션1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="framer-xfdacz"
        >
          <div className="framer-1bt0651">
            <div className="ssr-variant hidden-1vk2m8p hidden-xpwx9r">
              <div
                className="framer-crvmsn"
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
                  About
                </p>
              </div>
            </div>
            <div className="ssr-variant hidden-xpwx9r hidden-72rtr7">
              <div
                className="framer-crvmsn"
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
                    '--framer-font-size': '72px',
                    '--framer-font-weight': '700',
                    '--framer-text-color': 'rgb(33, 33, 33)',
                  }}
                >
                  About
                </p>
              </div>
            </div>
            <div className="ssr-variant hidden-1vk2m8p hidden-72rtr7">
              <div
                className="framer-crvmsn"
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
                    '--framer-font-size': '48px',
                    '--framer-font-weight': '700',
                    '--framer-text-color': 'rgb(33, 33, 33)',
                  }}
                >
                  About
                </p>
              </div>
            </div>
            <div className="framer-1u8zq0h">
              <div className="ssr-variant hidden-1vk2m8p hidden-xpwx9r">
                <div
                  className="framer-1f5w0vy"
                  data-framer-component-type="RichTextContainer"
                  style={{
                    transform: 'none',
                  }}
                >
                  <p
                    className="framer-text"
                    style={{
                      '--font-selector': 'Q1VTVE9NO1ByZXRlbmRhcmQgTGlnaHQ=',
                      '--framer-font-family':
                        '"Pretendard Light", "Pretendard Light Placeholder", sans-serif',
                      '--framer-font-weight': '300',
                      '--framer-letter-spacing': '-0.02em',
                      '--framer-line-height': '1.7em',
                      '--framer-text-color': 'rgb(33, 33, 33)',
                    }}
                  >
                    출판기획사 일랑북스입니다.
                  </p>
                  <p
                    className="framer-text"
                    style={{
                      '--font-selector': 'Q1VTVE9NO1ByZXRlbmRhcmQgTGlnaHQ=',
                      '--framer-font-family':
                        '"Pretendard Light", "Pretendard Light Placeholder", sans-serif',
                      '--framer-font-weight': '300',
                      '--framer-letter-spacing': '-0.02em',
                      '--framer-line-height': '1.7em',
                      '--framer-text-color': 'rgb(33, 33, 33)',
                    }}
                  >
                    일랑북스의 목표는
                  </p>
                  <p
                    className="framer-text"
                    style={{
                      '--font-selector': 'Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=',
                      '--framer-font-family':
                        '"Pretendard SemiBold", "Pretendard SemiBold Placeholder", sans-serif',
                      '--framer-font-weight': '600',
                      '--framer-letter-spacing': '-0.02em',
                      '--framer-line-height': '1.7em',
                      '--framer-text-color': 'rgb(33, 33, 33)',
                    }}
                  >
                    고객사와 작가님이 만족할 수 있는
                  </p>
                  <p
                    className="framer-text"
                    style={{
                      '--font-selector': 'Q1VTVE9NO1ByZXRlbmRhcmQgTGlnaHQ=',
                      '--framer-font-family':
                        '"Pretendard Light", "Pretendard Light Placeholder", sans-serif',
                      '--framer-font-weight': '300',
                      '--framer-letter-spacing': '-0.02em',
                      '--framer-line-height': '1.7em',
                      '--framer-text-color': 'rgb(33, 33, 33)',
                    }}
                  >
                    책을 만드는 것입니다.
                  </p>
                  <p
                    className="framer-text"
                    style={{
                      '--font-selector': 'Q1VTVE9NO1ByZXRlbmRhcmQgTGlnaHQ=',
                      '--framer-font-family':
                        '"Pretendard Light", "Pretendard Light Placeholder", sans-serif',
                      '--framer-font-weight': '300',
                      '--framer-letter-spacing': '-0.02em',
                      '--framer-line-height': '1.7em',
                      '--framer-text-color': 'rgb(33, 33, 33)',
                    }}
                  >
                    일랑북스와 함께하세요!
                  </p>
                </div>
              </div>
              <div className="ssr-variant hidden-xpwx9r hidden-72rtr7">
                <div
                  className="framer-1f5w0vy"
                  data-framer-component-type="RichTextContainer"
                  style={{
                    transform: 'none',
                  }}
                >
                  <p
                    className="framer-text"
                    style={{
                      '--font-selector': 'Q1VTVE9NO1ByZXRlbmRhcmQgTGlnaHQ=',
                      '--framer-font-family':
                        '"Pretendard Light", "Pretendard Light Placeholder", sans-serif',
                      '--framer-font-size': '21px',
                      '--framer-font-weight': '300',
                      '--framer-letter-spacing': '-0.02em',
                      '--framer-line-height': '1.8em',
                      '--framer-text-color': 'rgb(33, 33, 33)',
                    }}
                  >
                    출판기획사 일랑북스입니다. 일랑북스의 목표는
                  </p>
                  <p
                    className="framer-text"
                    style={{
                      '--font-selector': 'Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=',
                      '--framer-font-family':
                        '"Pretendard SemiBold", "Pretendard SemiBold Placeholder", sans-serif',
                      '--framer-font-size': '21px',
                      '--framer-font-weight': '600',
                      '--framer-letter-spacing': '-0.02em',
                      '--framer-line-height': '1.8em',
                      '--framer-text-color': 'rgb(33, 33, 33)',
                    }}
                  >
                    고객사와 작가님이 만족할 수 있는{' '}
                    <span
                      className="framer-text"
                      style={{
                        '--font-selector': 'Q1VTVE9NO1ByZXRlbmRhcmQgTGlnaHQ=',
                        '--framer-font-family':
                          '"Pretendard Light", "Pretendard Light Placeholder", sans-serif',
                        '--framer-font-weight': '300',
                      }}
                    >
                      책을 만드는 것입니다.
                    </span>
                  </p>
                  <p
                    className="framer-text"
                    style={{
                      '--font-selector': 'Q1VTVE9NO1ByZXRlbmRhcmQgTGlnaHQ=',
                      '--framer-font-family':
                        '"Pretendard Light", "Pretendard Light Placeholder", sans-serif',
                      '--framer-font-size': '21px',
                      '--framer-font-weight': '300',
                      '--framer-letter-spacing': '-0.02em',
                      '--framer-line-height': '1.8em',
                      '--framer-text-color': 'rgb(33, 33, 33)',
                    }}
                  >
                    일랑북스와 함께하세요!
                  </p>
                </div>
              </div>
              <div className="ssr-variant hidden-1vk2m8p hidden-72rtr7">
                <div
                  className="framer-1f5w0vy"
                  data-framer-component-type="RichTextContainer"
                  style={{
                    transform: 'none',
                  }}
                >
                  <p
                    className="framer-text"
                    style={{
                      '--font-selector': 'Q1VTVE9NO1ByZXRlbmRhcmQgTGlnaHQ=',
                      '--framer-font-family':
                        '"Pretendard Light", "Pretendard Light Placeholder", sans-serif',
                      '--framer-font-size': '18px',
                      '--framer-font-weight': '300',
                      '--framer-letter-spacing': '-0.02em',
                      '--framer-line-height': '1.7em',
                      '--framer-text-color': 'rgb(33, 33, 33)',
                    }}
                  >
                    출판기획사 일랑북스입니다.
                  </p>
                  <p
                    className="framer-text"
                    style={{
                      '--font-selector': 'Q1VTVE9NO1ByZXRlbmRhcmQgTGlnaHQ=',
                      '--framer-font-family':
                        '"Pretendard Light", "Pretendard Light Placeholder", sans-serif',
                      '--framer-font-size': '18px',
                      '--framer-font-weight': '300',
                      '--framer-letter-spacing': '-0.02em',
                      '--framer-line-height': '1.7em',
                      '--framer-text-color': 'rgb(33, 33, 33)',
                    }}
                  >
                    일랑북스의 목표는
                  </p>
                  <p
                    className="framer-text"
                    style={{
                      '--font-selector': 'Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=',
                      '--framer-font-family':
                        '"Pretendard SemiBold", "Pretendard SemiBold Placeholder", sans-serif',
                      '--framer-font-size': '18px',
                      '--framer-font-weight': '600',
                      '--framer-letter-spacing': '-0.02em',
                      '--framer-line-height': '1.7em',
                      '--framer-text-color': 'rgb(33, 33, 33)',
                    }}
                  >
                    고객사와 작가님이 만족할 수 있는
                  </p>
                  <p
                    className="framer-text"
                    style={{
                      '--font-selector': 'Q1VTVE9NO1ByZXRlbmRhcmQgTGlnaHQ=',
                      '--framer-font-family':
                        '"Pretendard Light", "Pretendard Light Placeholder", sans-serif',
                      '--framer-font-size': '18px',
                      '--framer-font-weight': '300',
                      '--framer-letter-spacing': '-0.02em',
                      '--framer-line-height': '1.7em',
                      '--framer-text-color': 'rgb(33, 33, 33)',
                    }}
                  >
                    책을 만드는 것입니다.
                  </p>
                  <p
                    className="framer-text"
                    style={{
                      '--font-selector': 'Q1VTVE9NO1ByZXRlbmRhcmQgTGlnaHQ=',
                      '--framer-font-family':
                        '"Pretendard Light", "Pretendard Light Placeholder", sans-serif',
                      '--framer-font-size': '18px',
                      '--framer-font-weight': '300',
                      '--framer-letter-spacing': '-0.02em',
                      '--framer-line-height': '1.7em',
                      '--framer-text-color': 'rgb(33, 33, 33)',
                    }}
                  >
                    일랑북스와 함께하세요!
                  </p>
                </div>
              </div>
              <div className="framer-g5x045">
                <div className="framer-1w0rapb">
                  <div className="ssr-variant hidden-1vk2m8p hidden-xpwx9r">
                    <div
                      className="framer-kpo24b"
                      data-framer-component-type="RichTextContainer"
                      style={{
                        transform: 'none',
                      }}
                    >
                      <p
                        className="framer-text"
                        style={{
                          '--font-selector':
                            'Q1VTVE9NVjI7UHJldGVuZGFyZCBSZWd1bGFy',
                          '--framer-font-family':
                            '"Pretendard Regular", "Pretendard Regular Placeholder", sans-serif',
                          '--framer-font-size': '14px',
                          '--framer-letter-spacing': '-0.02em',
                          '--framer-line-height': '1.5em',
                          '--framer-text-color':
                            'var(--token-2344cfaf-58d2-43d2-89fa-ad03dd665892, rgb(33, 33, 33))',
                        }}
                      >
                        외주편집
                      </p>
                    </div>
                  </div>
                  <div className="ssr-variant hidden-xpwx9r hidden-72rtr7">
                    <div
                      className="framer-kpo24b"
                      data-framer-component-type="RichTextContainer"
                      style={{
                        transform: 'none',
                      }}
                    >
                      <p
                        className="framer-text"
                        style={{
                          '--font-selector':
                            'Q1VTVE9NVjI7UHJldGVuZGFyZCBSZWd1bGFy',
                          '--framer-font-family':
                            '"Pretendard Regular", "Pretendard Regular Placeholder", sans-serif',
                          '--framer-font-size': '18px',
                          '--framer-letter-spacing': '-0.02em',
                          '--framer-line-height': '1.5em',
                          '--framer-text-color':
                            'var(--token-2344cfaf-58d2-43d2-89fa-ad03dd665892, rgb(33, 33, 33))',
                        }}
                      >
                        외주편집
                      </p>
                    </div>
                  </div>
                  <div className="ssr-variant hidden-1vk2m8p hidden-72rtr7">
                    <div
                      className="framer-kpo24b"
                      data-framer-component-type="RichTextContainer"
                      style={{
                        transform: 'none',
                      }}
                    >
                      <p
                        className="framer-text"
                        style={{
                          '--font-selector':
                            'Q1VTVE9NVjI7UHJldGVuZGFyZCBSZWd1bGFy',
                          '--framer-font-family':
                            '"Pretendard Regular", "Pretendard Regular Placeholder", sans-serif',
                          '--framer-letter-spacing': '-0.02em',
                          '--framer-line-height': '1.5em',
                          '--framer-text-color':
                            'var(--token-2344cfaf-58d2-43d2-89fa-ad03dd665892, rgb(33, 33, 33))',
                        }}
                      >
                        외주편집
                      </p>
                    </div>
                  </div>
                </div>
                <div className="framer-njo5ub">
                  <div className="ssr-variant hidden-1vk2m8p hidden-xpwx9r">
                    <div
                      className="framer-i3gpxu"
                      data-framer-component-type="RichTextContainer"
                      style={{
                        transform: 'none',
                      }}
                    >
                      <p
                        className="framer-text"
                        style={{
                          '--font-selector':
                            'Q1VTVE9NVjI7UHJldGVuZGFyZCBSZWd1bGFy',
                          '--framer-font-family':
                            '"Pretendard Regular", "Pretendard Regular Placeholder", sans-serif',
                          '--framer-font-size': '14px',
                          '--framer-letter-spacing': '-0.02em',
                          '--framer-line-height': '1.5em',
                          '--framer-text-color':
                            'var(--token-2344cfaf-58d2-43d2-89fa-ad03dd665892, rgb(33, 33, 33))',
                        }}
                      >
                        출간대행
                      </p>
                    </div>
                  </div>
                  <div className="ssr-variant hidden-xpwx9r hidden-72rtr7">
                    <div
                      className="framer-i3gpxu"
                      data-framer-component-type="RichTextContainer"
                      style={{
                        transform: 'none',
                      }}
                    >
                      <p
                        className="framer-text"
                        style={{
                          '--font-selector':
                            'Q1VTVE9NVjI7UHJldGVuZGFyZCBSZWd1bGFy',
                          '--framer-font-family':
                            '"Pretendard Regular", "Pretendard Regular Placeholder", sans-serif',
                          '--framer-font-size': '18px',
                          '--framer-letter-spacing': '-0.02em',
                          '--framer-line-height': '1.5em',
                          '--framer-text-color':
                            'var(--token-2344cfaf-58d2-43d2-89fa-ad03dd665892, rgb(33, 33, 33))',
                        }}
                      >
                        출간대행
                      </p>
                    </div>
                  </div>
                  <div className="ssr-variant hidden-1vk2m8p hidden-72rtr7">
                    <div
                      className="framer-i3gpxu"
                      data-framer-component-type="RichTextContainer"
                      style={{
                        transform: 'none',
                      }}
                    >
                      <p
                        className="framer-text"
                        style={{
                          '--font-selector':
                            'Q1VTVE9NVjI7UHJldGVuZGFyZCBSZWd1bGFy',
                          '--framer-font-family':
                            '"Pretendard Regular", "Pretendard Regular Placeholder", sans-serif',
                          '--framer-letter-spacing': '-0.02em',
                          '--framer-line-height': '1.5em',
                          '--framer-text-color':
                            'var(--token-2344cfaf-58d2-43d2-89fa-ad03dd665892, rgb(33, 33, 33))',
                        }}
                      >
                        출간대행
                      </p>
                    </div>
                  </div>
                </div>
                <div className="framer-1jmwk5h">
                  <div className="ssr-variant hidden-1vk2m8p hidden-xpwx9r">
                    <div
                      className="framer-1pd62ox"
                      data-framer-component-type="RichTextContainer"
                      style={{
                        transform: 'none',
                      }}
                    >
                      <p
                        className="framer-text"
                        style={{
                          '--font-selector':
                            'Q1VTVE9NVjI7UHJldGVuZGFyZCBSZWd1bGFy',
                          '--framer-font-family':
                            '"Pretendard Regular", "Pretendard Regular Placeholder", sans-serif',
                          '--framer-font-size': '14px',
                          '--framer-letter-spacing': '-0.02em',
                          '--framer-line-height': '1.5em',
                          '--framer-text-color':
                            'var(--token-2344cfaf-58d2-43d2-89fa-ad03dd665892, rgb(33, 33, 33))',
                        }}
                      >
                        자비출판
                      </p>
                    </div>
                  </div>
                  <div className="ssr-variant hidden-xpwx9r hidden-72rtr7">
                    <div
                      className="framer-1pd62ox"
                      data-framer-component-type="RichTextContainer"
                      style={{
                        transform: 'none',
                      }}
                    >
                      <p
                        className="framer-text"
                        style={{
                          '--font-selector':
                            'Q1VTVE9NVjI7UHJldGVuZGFyZCBSZWd1bGFy',
                          '--framer-font-family':
                            '"Pretendard Regular", "Pretendard Regular Placeholder", sans-serif',
                          '--framer-font-size': '18px',
                          '--framer-letter-spacing': '-0.02em',
                          '--framer-line-height': '1.5em',
                          '--framer-text-color':
                            'var(--token-2344cfaf-58d2-43d2-89fa-ad03dd665892, rgb(33, 33, 33))',
                        }}
                      >
                        자비출판
                      </p>
                    </div>
                  </div>
                  <div className="ssr-variant hidden-1vk2m8p hidden-72rtr7">
                    <div
                      className="framer-1pd62ox"
                      data-framer-component-type="RichTextContainer"
                      style={{
                        transform: 'none',
                      }}
                    >
                      <p
                        className="framer-text"
                        style={{
                          '--font-selector':
                            'Q1VTVE9NVjI7UHJldGVuZGFyZCBSZWd1bGFy',
                          '--framer-font-family':
                            '"Pretendard Regular", "Pretendard Regular Placeholder", sans-serif',
                          '--framer-letter-spacing': '-0.02em',
                          '--framer-line-height': '1.5em',
                          '--framer-text-color':
                            'var(--token-2344cfaf-58d2-43d2-89fa-ad03dd665892, rgb(33, 33, 33))',
                        }}
                      >
                        자비출판
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link className="framer-1c25ncm framer-lux5qc" href="./company">
            <div className="framer-igrsqc">
              <div className="ssr-variant hidden-1vk2m8p hidden-xpwx9r">
                <div
                  className="framer-w8ofc0"
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
                      '--framer-line-height': '1.7em',
                      '--framer-text-color': 'rgb(255, 255, 255)',
                    }}
                  >
                    회사 소개 바로가기
                  </p>
                </div>
              </div>
              <div className="ssr-variant hidden-xpwx9r hidden-72rtr7">
                <div
                  className="framer-w8ofc0"
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
                      '--framer-font-size': '21px',
                      '--framer-letter-spacing': '-0.02em',
                      '--framer-line-height': '1.7em',
                      '--framer-text-color': 'rgb(255, 255, 255)',
                    }}
                  >
                    회사 소개 바로가기
                  </p>
                </div>
              </div>
              <div className="ssr-variant hidden-1vk2m8p hidden-72rtr7">
                <div
                  className="framer-w8ofc0"
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
                      '--framer-font-size': '18px',
                      '--framer-letter-spacing': '-0.02em',
                      '--framer-line-height': '1.7em',
                      '--framer-text-color': 'rgb(255, 255, 255)',
                    }}
                  >
                    회사 소개 바로가기
                  </p>
                </div>
              </div>
              <div className="framer-2u0x4t">
                <div
                  aria-hidden="true"
                  className="framer-g90923"
                  data-framer-component-type="SVG"
                  style={{
                    backgroundImage:
                      'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 12.728" overflow="visible"><path d="M 0 7.364 L 0 5.364 L 16.172 5.364 L 12.222 1.414 L 13.636 0 L 20 6.364 L 13.636 12.728 L 12.222 11.314 L 16.172 7.364 Z" fill="rgb(255, 255, 255)"></path></svg>\')',
                    backgroundSize: '100% 100%',
                    flexShrink: '0',
                    imageRendering: 'pixelated',
                  }}
                ></div>
              </div>
            </div>
          </Link>
        </motion.div>
        <div className="ssr-variant hidden-1vk2m8p">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
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
                  display: 'block',
                  height: '100%',
                  objectFit: 'fill',
                  objectPosition: 'center',
                  width: '100%',
                }}
                width="1154"
              />
            </div>
          </motion.div>
        </div>
        <div className="ssr-variant hidden-xpwx9r hidden-72rtr7">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
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
                height="1210"
                loading="eager"
                src="https://framerusercontent.com/images/CMmvqOT0GuDIpo04T2Q4PjuQQ.png?width=1154&height=1210"
                style={{
                  borderRadius: 'inherit',
                  display: 'block',
                  height: '100%',
                  objectFit: 'contain',
                  objectPosition: 'center',
                  width: '100%',
                }}
                width="1154"
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="framer-1w5b1ly" data-framer-name="섹션2: 서비스">
        <div className="framer-1g5rh3z">
          <motion.div
            key={isMobile.toString()}
            initial={{
              opacity: 0,
              y: console.log(isMobile) || isMobile ? 30 : 60,
              x: isMobile ? 0 : -30,
            }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="framer-1fr8tv6"
          >
            <div className="ssr-variant hidden-1vk2m8p hidden-xpwx9r">
              <div
                className="framer-1g17qil"
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
                  Service
                </p>
              </div>
            </div>
            <div className="ssr-variant hidden-xpwx9r hidden-72rtr7">
              <div
                className="framer-1g17qil"
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
                    '--framer-font-size': '72px',
                    '--framer-font-weight': '700',
                    '--framer-text-color': 'rgb(33, 33, 33)',
                  }}
                >
                  Service
                </p>
              </div>
            </div>
            <div className="ssr-variant hidden-1vk2m8p hidden-72rtr7">
              <div
                className="framer-1g17qil"
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
                    '--framer-font-size': '48px',
                    '--framer-font-weight': '700',
                    '--framer-text-color': 'rgb(33, 33, 33)',
                  }}
                >
                  Service
                </p>
              </div>
            </div>
            <div className="ssr-variant hidden-1vk2m8p hidden-xpwx9r">
              <div
                className="framer-1tkkgtb"
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
                  이런 분들께 일랑북스의 서비스를 추천합니다!
                </p>
              </div>
            </div>
            <div className="ssr-variant hidden-xpwx9r hidden-72rtr7">
              <div
                className="framer-1tkkgtb"
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
                    '--framer-font-size': '21px',
                    '--framer-letter-spacing': '-0.02em',
                    '--framer-line-height': '1.5em',
                    '--framer-text-color': 'rgb(33, 33, 33)',
                  }}
                >
                  이런 분들께 일랑북스의{' '}
                </p>
                <p
                  className="framer-text"
                  style={{
                    '--font-selector': 'Q1VTVE9NVjI7UHJldGVuZGFyZCBSZWd1bGFy',
                    '--framer-font-family':
                      '"Pretendard Regular", "Pretendard Regular Placeholder", sans-serif',
                    '--framer-font-size': '21px',
                    '--framer-letter-spacing': '-0.02em',
                    '--framer-line-height': '1.5em',
                    '--framer-text-color': 'rgb(33, 33, 33)',
                  }}
                >
                  서비스를 추천합니다!
                </p>
              </div>
            </div>
            <div className="ssr-variant hidden-1vk2m8p hidden-72rtr7">
              <div
                className="framer-1tkkgtb"
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
                    '--framer-font-size': '18px',
                    '--framer-letter-spacing': '-0.02em',
                    '--framer-line-height': '1.5em',
                    '--framer-text-color': 'rgb(33, 33, 33)',
                  }}
                >
                  이런 분들께 일랑북스의{' '}
                </p>
                <p
                  className="framer-text"
                  style={{
                    '--font-selector': 'Q1VTVE9NVjI7UHJldGVuZGFyZCBSZWd1bGFy',
                    '--framer-font-family':
                      '"Pretendard Regular", "Pretendard Regular Placeholder", sans-serif',
                    '--framer-font-size': '18px',
                    '--framer-letter-spacing': '-0.02em',
                    '--framer-line-height': '1.5em',
                    '--framer-text-color': 'rgb(33, 33, 33)',
                  }}
                >
                  서비스를 추천합니다!
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            key={isMobile.toString()}
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
      <div className="framer-j9mvpp" data-framer-name="섹션3: 출간과정">
        <div className="framer-7ki120">
          <div className="framer-fxsh2j">
            <div className="ssr-variant hidden-1vk2m8p hidden-xpwx9r">
              <div
                className="framer-1fv0bmg"
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
                  Publising Process
                </p>
              </div>
            </div>
            <div className="ssr-variant hidden-xpwx9r hidden-72rtr7">
              <div
                className="framer-1fv0bmg"
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
                    '--framer-font-size': '72px',
                    '--framer-font-weight': '700',
                    '--framer-text-color': 'rgb(33, 33, 33)',
                  }}
                >
                  Publising Process
                </p>
              </div>
            </div>
            <div className="ssr-variant hidden-1vk2m8p hidden-72rtr7">
              <div
                className="framer-1fv0bmg"
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
                    '--framer-font-size': '48px',
                    '--framer-font-weight': '700',
                    '--framer-text-color': 'rgb(33, 33, 33)',
                  }}
                >
                  Publising Process
                </p>
              </div>
            </div>
            <div className="ssr-variant hidden-1vk2m8p">
              <div className="framer-ungifs">
                <div className="framer-ns5u59" data-framer-name="카드">
                  <div className="framer-1v81gb5">
                    <div className="framer-z74aj0">
                      <div className="framer-1rf3m8z">
                        <div
                          aria-hidden="true"
                          className="framer-jdfis2"
                          data-framer-component-type="SVG"
                          style={{
                            flexShrink: '0',
                            imageRendering: 'pixelated',
                          }}
                        >
                          <div
                            className="svgContainer"
                            style={{
                              aspectRatio: 'inherit',
                              height: '100%',
                              width: '100%',
                            }}
                          >
                            <svg
                              style={{
                                height: '100%',
                                width: '100%',
                              }}
                            >
                              <use href="#svg-765309186_514" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="framer-1ssi1oz">
                        <div className="ssr-variant hidden-xpwx9r">
                          <div
                            className="framer-120b4qm"
                            data-framer-component-type="RichTextContainer"
                            style={{
                              transform: 'none',
                            }}
                          >
                            <p
                              className="framer-text"
                              style={{
                                '--font-selector':
                                  'R0Y7SW5zdHJ1bWVudCBTYW5zLTYwMA==',
                                '--framer-font-family':
                                  '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                '--framer-font-size': '18px',
                                '--framer-font-weight': '600',
                                '--framer-line-height': '1em',
                                '--framer-text-color':
                                  'var(--token-e69fcfc3-b8e4-4efa-8f3e-16e7e659965e, rgb(9, 54, 150))',
                              }}
                            >
                              STEP 1
                            </p>
                          </div>
                        </div>
                        <div className="ssr-variant hidden-72rtr7">
                          <div
                            className="framer-120b4qm"
                            data-framer-component-type="RichTextContainer"
                            style={{
                              transform: 'none',
                            }}
                          >
                            <p
                              className="framer-text"
                              style={{
                                '--font-selector':
                                  'R0Y7SW5zdHJ1bWVudCBTYW5zLTYwMA==',
                                '--framer-font-family':
                                  '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                '--framer-font-size': '21px',
                                '--framer-font-weight': '600',
                                '--framer-line-height': '1em',
                                '--framer-text-color':
                                  'var(--token-e69fcfc3-b8e4-4efa-8f3e-16e7e659965e, rgb(9, 54, 150))',
                              }}
                            >
                              STEP 1
                            </p>
                          </div>
                        </div>
                        <div className="ssr-variant hidden-xpwx9r">
                          <div
                            className="framer-ifcqar"
                            data-framer-component-type="RichTextContainer"
                            style={{
                              transform: 'none',
                            }}
                          >
                            <p
                              className="framer-text"
                              style={{
                                '--font-selector':
                                  'Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=',
                                '--framer-font-family':
                                  '"Pretendard SemiBold", "Pretendard SemiBold Placeholder", sans-serif',
                                '--framer-font-size': '18px',
                                '--framer-font-weight': '600',
                                '--framer-line-height': '1em',
                                '--framer-text-color':
                                  'var(--token-e69fcfc3-b8e4-4efa-8f3e-16e7e659965e, rgb(9, 54, 150))',
                              }}
                            >
                              출판 상담
                            </p>
                          </div>
                        </div>
                        <div className="ssr-variant hidden-72rtr7">
                          <div
                            className="framer-ifcqar"
                            data-framer-component-type="RichTextContainer"
                            style={{
                              transform: 'none',
                            }}
                          >
                            <p
                              className="framer-text"
                              style={{
                                '--font-selector':
                                  'Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=',
                                '--framer-font-family':
                                  '"Pretendard SemiBold", "Pretendard SemiBold Placeholder", sans-serif',
                                '--framer-font-size': '21px',
                                '--framer-font-weight': '600',
                                '--framer-line-height': '1em',
                                '--framer-text-color':
                                  'var(--token-e69fcfc3-b8e4-4efa-8f3e-16e7e659965e, rgb(9, 54, 150))',
                              }}
                            >
                              출판 상담
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="framer-t8650y">
                      <div className="ssr-variant hidden-xpwx9r">
                        <div
                          className="framer-1yc4b50"
                          data-framer-component-type="RichTextContainer"
                          style={{
                            transform: 'none',
                          }}
                        >
                          <p
                            className="framer-text"
                            style={{
                              '--font-selector':
                                'Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=',
                              '--framer-font-family':
                                '"Pretendard SemiBold", "Pretendard SemiBold Placeholder", sans-serif',
                              '--framer-font-size': '14px',
                              '--framer-line-height': '1.5em',
                              '--framer-text-color': 'rgb(33, 33, 33)',
                            }}
                          >
                            견적 문의 내용을 바탕으로 상담을 진행합니다. 견적
                            문의와 함께 원고의 일부를 미리 전송해 주셔야 정확한
                            상담이 가능합니다. (yilang2019@naver.com)
                          </p>
                        </div>
                      </div>
                      <div className="ssr-variant hidden-72rtr7">
                        <div
                          className="framer-1yc4b50"
                          data-framer-component-type="RichTextContainer"
                          style={{
                            transform: 'none',
                          }}
                        >
                          <p
                            className="framer-text"
                            style={{
                              '--font-selector':
                                'Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=',
                              '--framer-font-family':
                                '"Pretendard SemiBold", "Pretendard SemiBold Placeholder", sans-serif',
                              '--framer-line-height': '1.5em',
                              '--framer-text-color': 'rgb(33, 33, 33)',
                            }}
                          >
                            견적 문의 내용을 바탕으로 상담을 진행합니다. 견적
                            문의와 함께 원고의 일부를 미리 전송해 주셔야 정확한
                            상담이 가능합니다. (yilang2019@naver.com)
                          </p>
                        </div>
                      </div>
                      <div className="ssr-variant hidden-xpwx9r">
                        <div
                          className="framer-1kvoy42"
                          data-framer-component-type="RichTextContainer"
                          style={{
                            transform: 'none',
                          }}
                        >
                          <p
                            className="framer-text"
                            style={{
                              '--font-selector':
                                'Q1VTVE9NVjI7UHJldGVuZGFyZCBSZWd1bGFy',
                              '--framer-font-family':
                                '"Pretendard Regular", "Pretendard Regular Placeholder", sans-serif',
                              '--framer-font-size': '12px',
                              '--framer-line-height': '1.5em',
                              '--framer-text-color': 'rgb(94, 94, 94)',
                            }}
                          >
                            -상담은 이메일, 전화, 카카오톡 중 고객님이 편한
                            방식으로 진행합니다.
                          </p>
                          <p
                            className="framer-text"
                            style={{
                              '--font-selector':
                                'Q1VTVE9NVjI7UHJldGVuZGFyZCBSZWd1bGFy',
                              '--framer-font-family':
                                '"Pretendard Regular", "Pretendard Regular Placeholder", sans-serif',
                              '--framer-font-size': '12px',
                              '--framer-line-height': '1.5em',
                              '--framer-text-color': 'rgb(94, 94, 94)',
                            }}
                          >
                            -도서의 분야에 따라 책의 크기, 원고의 전체 분량,
                            내지의 색(흑백, 컬러), 표지의 대략적인 스타일 및
                            후가공의 진행 여부, 제작 부수, 일정 등을 조율합니다.
                          </p>
                        </div>
                      </div>
                      <div className="ssr-variant hidden-72rtr7">
                        <div
                          className="framer-1kvoy42"
                          data-framer-component-type="RichTextContainer"
                          style={{
                            transform: 'none',
                          }}
                        >
                          <p
                            className="framer-text"
                            style={{
                              '--font-selector':
                                'Q1VTVE9NVjI7UHJldGVuZGFyZCBSZWd1bGFy',
                              '--framer-font-family':
                                '"Pretendard Regular", "Pretendard Regular Placeholder", sans-serif',
                              '--framer-font-size': '14px',
                              '--framer-line-height': '1.5em',
                              '--framer-text-color': 'rgb(94, 94, 94)',
                            }}
                          >
                            -상담은 이메일, 전화, 카카오톡 중 고객님이 편한
                            방식으로 진행합니다.
                          </p>
                          <p
                            className="framer-text"
                            style={{
                              '--font-selector':
                                'Q1VTVE9NVjI7UHJldGVuZGFyZCBSZWd1bGFy',
                              '--framer-font-family':
                                '"Pretendard Regular", "Pretendard Regular Placeholder", sans-serif',
                              '--framer-font-size': '14px',
                              '--framer-line-height': '1.5em',
                              '--framer-text-color': 'rgb(94, 94, 94)',
                            }}
                          >
                            -도서의 분야에 따라 책의 크기, 원고의 전체 분량,
                            내지의 색(흑백, 컬러), 표지의 대략적인 스타일 및
                            후가공의 진행 여부, 제작 부수, 일정 등을 조율합니다.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="framer-eurttm" data-framer-name="카드">
                  <div className="framer-dsdo6h">
                    <div className="framer-6nri89">
                      <div className="framer-127zlra">
                        <div
                          aria-hidden="true"
                          className="framer-1ly5mvp"
                          data-framer-component-type="SVG"
                          style={{
                            flexShrink: '0',
                            imageRendering: 'pixelated',
                          }}
                        >
                          <div
                            className="svgContainer"
                            style={{
                              aspectRatio: 'inherit',
                              height: '100%',
                              width: '100%',
                            }}
                          >
                            <svg
                              style={{
                                height: '100%',
                                width: '100%',
                              }}
                            >
                              <use href="#svg-1850599495_1666" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="framer-61h0em">
                        <div className="ssr-variant hidden-xpwx9r">
                          <div
                            className="framer-grly0q"
                            data-framer-component-type="RichTextContainer"
                            style={{
                              transform: 'none',
                            }}
                          >
                            <p
                              className="framer-text"
                              style={{
                                '--font-selector':
                                  'R0Y7SW5zdHJ1bWVudCBTYW5zLTYwMA==',
                                '--framer-font-family':
                                  '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                '--framer-font-size': '18px',
                                '--framer-font-weight': '600',
                                '--framer-line-height': '1em',
                                '--framer-text-color':
                                  'var(--token-e69fcfc3-b8e4-4efa-8f3e-16e7e659965e, rgb(9, 54, 150))',
                              }}
                            >
                              STEP 2
                            </p>
                          </div>
                        </div>
                        <div className="ssr-variant hidden-72rtr7">
                          <div
                            className="framer-grly0q"
                            data-framer-component-type="RichTextContainer"
                            style={{
                              transform: 'none',
                            }}
                          >
                            <p
                              className="framer-text"
                              style={{
                                '--font-selector':
                                  'R0Y7SW5zdHJ1bWVudCBTYW5zLTYwMA==',
                                '--framer-font-family':
                                  '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                '--framer-font-size': '21px',
                                '--framer-font-weight': '600',
                                '--framer-line-height': '1em',
                                '--framer-text-color':
                                  'var(--token-e69fcfc3-b8e4-4efa-8f3e-16e7e659965e, rgb(9, 54, 150))',
                              }}
                            >
                              STEP 2
                            </p>
                          </div>
                        </div>
                        <div className="ssr-variant hidden-xpwx9r">
                          <div
                            className="framer-1xggcki"
                            data-framer-component-type="RichTextContainer"
                            style={{
                              transform: 'none',
                            }}
                          >
                            <p
                              className="framer-text"
                              style={{
                                '--font-selector':
                                  'Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=',
                                '--framer-font-family':
                                  '"Pretendard SemiBold", "Pretendard SemiBold Placeholder", sans-serif',
                                '--framer-font-size': '18px',
                                '--framer-font-weight': '600',
                                '--framer-line-height': '1em',
                                '--framer-text-color':
                                  'var(--token-e69fcfc3-b8e4-4efa-8f3e-16e7e659965e, rgb(9, 54, 150))',
                              }}
                            >
                              출판 계약
                            </p>
                          </div>
                        </div>
                        <div className="ssr-variant hidden-72rtr7">
                          <div
                            className="framer-1xggcki"
                            data-framer-component-type="RichTextContainer"
                            style={{
                              transform: 'none',
                            }}
                          >
                            <p
                              className="framer-text"
                              style={{
                                '--font-selector':
                                  'Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=',
                                '--framer-font-family':
                                  '"Pretendard SemiBold", "Pretendard SemiBold Placeholder", sans-serif',
                                '--framer-font-size': '21px',
                                '--framer-font-weight': '600',
                                '--framer-line-height': '1em',
                                '--framer-text-color':
                                  'var(--token-e69fcfc3-b8e4-4efa-8f3e-16e7e659965e, rgb(9, 54, 150))',
                              }}
                            >
                              출판 계약
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="framer-9i6ccw">
                      <div className="ssr-variant hidden-xpwx9r">
                        <div
                          className="framer-18y0oz0"
                          data-framer-component-type="RichTextContainer"
                          style={{
                            transform: 'none',
                          }}
                        >
                          <p
                            className="framer-text"
                            style={{
                              '--font-selector':
                                'Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=',
                              '--framer-font-family':
                                '"Pretendard SemiBold", "Pretendard SemiBold Placeholder", sans-serif',
                              '--framer-font-size': '14px',
                              '--framer-font-weight': '600',
                              '--framer-line-height': '1.5em',
                              '--framer-text-color': 'rgb(33, 33, 33)',
                            }}
                          >
                            상담 시 협의한 내용을 바탕으로 계약서를 작성합니다.
                          </p>
                        </div>
                      </div>
                      <div className="ssr-variant hidden-72rtr7">
                        <div
                          className="framer-18y0oz0"
                          data-framer-component-type="RichTextContainer"
                          style={{
                            transform: 'none',
                          }}
                        >
                          <p
                            className="framer-text"
                            style={{
                              '--font-selector':
                                'Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=',
                              '--framer-font-family':
                                '"Pretendard SemiBold", "Pretendard SemiBold Placeholder", sans-serif',
                              '--framer-font-weight': '600',
                              '--framer-line-height': '1.5em',
                              '--framer-text-color': 'rgb(33, 33, 33)',
                            }}
                          >
                            상담 시 협의한 내용을 바탕으로 계약서를 작성합니다.
                          </p>
                        </div>
                      </div>
                      <div className="ssr-variant hidden-xpwx9r">
                        <div
                          className="framer-1uta7pj"
                          data-framer-component-type="RichTextContainer"
                          style={{
                            transform: 'none',
                          }}
                        >
                          <p
                            className="framer-text"
                            style={{
                              '--font-selector':
                                'Q1VTVE9NO1ByZXRlbmRhcmQgTGlnaHQ=',
                              '--framer-font-family':
                                '"Pretendard Light", "Pretendard Light Placeholder", sans-serif',
                              '--framer-font-size': '12px',
                              '--framer-font-weight': '300',
                              '--framer-line-height': '1.5em',
                              '--framer-text-color': 'rgb(94, 94, 94)',
                            }}
                          >
                            -작성을 완료한 계약서는 저자님과 일랑북스가 1부씩
                            보관합니다. 계약 체결 후 저자님은 약정 금액을 송금
                            후, 완전 완고를 이메일로 전송합니다.
                          </p>
                        </div>
                      </div>
                      <div className="ssr-variant hidden-72rtr7">
                        <div
                          className="framer-1uta7pj"
                          data-framer-component-type="RichTextContainer"
                          style={{
                            transform: 'none',
                          }}
                        >
                          <p
                            className="framer-text"
                            style={{
                              '--font-selector':
                                'Q1VTVE9NO1ByZXRlbmRhcmQgTGlnaHQ=',
                              '--framer-font-family':
                                '"Pretendard Light", "Pretendard Light Placeholder", sans-serif',
                              '--framer-font-size': '14px',
                              '--framer-font-weight': '300',
                              '--framer-line-height': '1.5em',
                              '--framer-text-color': 'rgb(94, 94, 94)',
                            }}
                          >
                            -작성을 완료한 계약서는 저자님과 일랑북스가 1부씩
                            보관합니다. 계약 체결 후 저자님은 약정 금액을 송금
                            후, 완전 완고를 이메일로 전송합니다.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="framer-s2frp8" data-framer-name="카드">
                  <div className="framer-1fiuojn">
                    <div className="framer-18xh5t0">
                      <div className="framer-1r5udmd">
                        <div
                          aria-hidden="true"
                          className="framer-uz307i"
                          data-framer-component-type="SVG"
                          style={{
                            flexShrink: '0',
                            imageRendering: 'pixelated',
                          }}
                        >
                          <div
                            className="svgContainer"
                            style={{
                              aspectRatio: 'inherit',
                              height: '100%',
                              width: '100%',
                            }}
                          >
                            <svg
                              style={{
                                height: '100%',
                                width: '100%',
                              }}
                            >
                              <use href="#svg1096314896_671" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="framer-vzubp5">
                        <div className="ssr-variant hidden-xpwx9r">
                          <div
                            className="framer-1ukknj2"
                            data-framer-component-type="RichTextContainer"
                            style={{
                              transform: 'none',
                            }}
                          >
                            <p
                              className="framer-text"
                              style={{
                                '--font-selector':
                                  'R0Y7SW5zdHJ1bWVudCBTYW5zLTYwMA==',
                                '--framer-font-family':
                                  '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                '--framer-font-size': '18px',
                                '--framer-font-weight': '600',
                                '--framer-line-height': '1em',
                                '--framer-text-color':
                                  'var(--token-e69fcfc3-b8e4-4efa-8f3e-16e7e659965e, rgb(9, 54, 150))',
                              }}
                            >
                              STEP 3
                            </p>
                          </div>
                        </div>
                        <div className="ssr-variant hidden-72rtr7">
                          <div
                            className="framer-1ukknj2"
                            data-framer-component-type="RichTextContainer"
                            style={{
                              transform: 'none',
                            }}
                          >
                            <p
                              className="framer-text"
                              style={{
                                '--font-selector':
                                  'R0Y7SW5zdHJ1bWVudCBTYW5zLTYwMA==',
                                '--framer-font-family':
                                  '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                '--framer-font-size': '21px',
                                '--framer-font-weight': '600',
                                '--framer-line-height': '1em',
                                '--framer-text-color':
                                  'var(--token-e69fcfc3-b8e4-4efa-8f3e-16e7e659965e, rgb(9, 54, 150))',
                              }}
                            >
                              STEP 3
                            </p>
                          </div>
                        </div>
                        <div className="ssr-variant hidden-xpwx9r">
                          <div
                            className="framer-dcr7r4"
                            data-framer-component-type="RichTextContainer"
                            style={{
                              transform: 'none',
                            }}
                          >
                            <p
                              className="framer-text"
                              style={{
                                '--font-selector':
                                  'Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=',
                                '--framer-font-family':
                                  '"Pretendard SemiBold", "Pretendard SemiBold Placeholder", sans-serif',
                                '--framer-font-size': '18px',
                                '--framer-font-weight': '600',
                                '--framer-line-height': '1em',
                                '--framer-text-color':
                                  'var(--token-e69fcfc3-b8e4-4efa-8f3e-16e7e659965e, rgb(9, 54, 150))',
                              }}
                            >
                              원고 검토
                            </p>
                          </div>
                        </div>
                        <div className="ssr-variant hidden-72rtr7">
                          <div
                            className="framer-dcr7r4"
                            data-framer-component-type="RichTextContainer"
                            style={{
                              transform: 'none',
                            }}
                          >
                            <p
                              className="framer-text"
                              style={{
                                '--font-selector':
                                  'Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=',
                                '--framer-font-family':
                                  '"Pretendard SemiBold", "Pretendard SemiBold Placeholder", sans-serif',
                                '--framer-font-size': '21px',
                                '--framer-font-weight': '600',
                                '--framer-line-height': '1em',
                                '--framer-text-color':
                                  'var(--token-e69fcfc3-b8e4-4efa-8f3e-16e7e659965e, rgb(9, 54, 150))',
                              }}
                            >
                              원고 검토
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="framer-1ixby7t">
                      <div className="ssr-variant hidden-xpwx9r">
                        <div
                          className="framer-lf3f74"
                          data-framer-component-type="RichTextContainer"
                          style={{
                            transform: 'none',
                          }}
                        >
                          <p
                            className="framer-text"
                            style={{
                              '--font-selector':
                                'Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=',
                              '--framer-font-family':
                                '"Pretendard SemiBold", "Pretendard SemiBold Placeholder", sans-serif',
                              '--framer-font-size': '14px',
                              '--framer-line-height': '1.5em',
                              '--framer-text-color': 'rgb(33, 33, 33)',
                            }}
                          >
                            담당 편집자가 기획 방향, 집필 수정 사항 등을
                            검토합니다.
                          </p>
                        </div>
                      </div>
                      <div className="ssr-variant hidden-72rtr7">
                        <div
                          className="framer-lf3f74"
                          data-framer-component-type="RichTextContainer"
                          style={{
                            transform: 'none',
                          }}
                        >
                          <p
                            className="framer-text"
                            style={{
                              '--font-selector':
                                'Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=',
                              '--framer-font-family':
                                '"Pretendard SemiBold", "Pretendard SemiBold Placeholder", sans-serif',
                              '--framer-line-height': '1.5em',
                              '--framer-text-color': 'rgb(33, 33, 33)',
                            }}
                          >
                            담당 편집자가 기획 방향, 집필 수정 사항 등을
                            검토합니다.
                          </p>
                        </div>
                      </div>
                      <div className="ssr-variant hidden-xpwx9r">
                        <div
                          className="framer-zqm0zf"
                          data-framer-component-type="RichTextContainer"
                          style={{
                            transform: 'none',
                          }}
                        >
                          <p
                            className="framer-text"
                            style={{
                              '--font-selector':
                                'Q1VTVE9NO1ByZXRlbmRhcmQgTGlnaHQ=',
                              '--framer-font-family':
                                '"Pretendard Light", "Pretendard Light Placeholder", sans-serif',
                              '--framer-font-size': '12px',
                              '--framer-line-height': '1.5em',
                              '--framer-text-color': 'rgb(94, 94, 94)',
                            }}
                          >
                            -담당 편집자가 원고 검토 후 수정이 필요한 경우에
                            한해 저자님께 피드백을 드리고 수정을 요청합니다.
                            원고의 완성도를 높이는 것에 중점을 둔 작업
                            단계이므로, 저자님의 적극적인 참여가 요구됩니다.
                          </p>
                        </div>
                      </div>
                      <div className="ssr-variant hidden-72rtr7">
                        <div
                          className="framer-zqm0zf"
                          data-framer-component-type="RichTextContainer"
                          style={{
                            transform: 'none',
                          }}
                        >
                          <p
                            className="framer-text"
                            style={{
                              '--font-selector':
                                'Q1VTVE9NO1ByZXRlbmRhcmQgTGlnaHQ=',
                              '--framer-font-family':
                                '"Pretendard Light", "Pretendard Light Placeholder", sans-serif',
                              '--framer-font-size': '14px',
                              '--framer-line-height': '1.5em',
                              '--framer-text-color': 'rgb(94, 94, 94)',
                            }}
                          >
                            -담당 편집자가 원고 검토 후 수정이 필요한 경우에
                            한해 저자님께 피드백을 드리고 수정을 요청합니다.
                            원고의 완성도를 높이는 것에 중점을 둔 작업
                            단계이므로, 저자님의 적극적인 참여가 요구됩니다.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="framer-le58hi" data-framer-name="카드">
                  <div className="framer-8fssiz">
                    <div className="framer-8iq45f">
                      <div className="framer-1upypqq">
                        <div
                          aria-hidden="true"
                          className="framer-1gwhken"
                          data-framer-component-type="SVG"
                          style={{
                            backgroundImage:
                              'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" overflow="visible"><path d="M 8 0 C 12.418 0 16 3.182 16 7.111 C 15.999 9.565 14.009 11.554 11.555 11.555 L 9.982 11.555 C 9.245 11.555 8.649 12.151 8.649 12.889 C 8.649 13.226 8.782 13.538 8.986 13.769 C 9.2 14.009 9.334 14.32 9.334 14.666 C 9.334 15.405 8.72 16 8 16 C 3.582 16 0 12.418 0 8 C 0 3.582 3.582 0 8 0 Z M 4.4 8 C 5.063 8 5.6 7.463 5.6 6.8 C 5.6 6.137 5.063 5.6 4.4 5.6 C 3.737 5.6 3.2 6.137 3.2 6.8 C 3.2 7.463 3.737 8 4.4 8 Z M 11.6 8 C 12.263 8 12.8 7.463 12.8 6.8 C 12.8 6.137 12.263 5.6 11.6 5.6 C 10.937 5.6 10.4 6.137 10.4 6.8 C 10.4 7.463 10.937 8 11.6 8 Z M 8 5.6 C 8.663 5.6 9.2 5.063 9.2 4.4 C 9.2 3.737 8.663 3.2 8 3.2 C 7.337 3.2 6.8 3.737 6.8 4.4 C 6.8 5.063 7.337 5.6 8 5.6 Z" fill="rgb(49, 86, 164)"></path></svg>\')',
                            backgroundSize: '100% 100%',
                            flexShrink: '0',
                            imageRendering: 'pixelated',
                          }}
                        ></div>
                      </div>
                      <div className="framer-2gfdwx">
                        <div className="ssr-variant hidden-xpwx9r">
                          <div
                            className="framer-18kndp"
                            data-framer-component-type="RichTextContainer"
                            style={{
                              transform: 'none',
                            }}
                          >
                            <p
                              className="framer-text"
                              style={{
                                '--font-selector':
                                  'R0Y7SW5zdHJ1bWVudCBTYW5zLTYwMA==',
                                '--framer-font-family':
                                  '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                '--framer-font-size': '18px',
                                '--framer-font-weight': '600',
                                '--framer-line-height': '1em',
                                '--framer-text-color': 'rgb(49, 86, 164)',
                              }}
                            >
                              STEP 4
                            </p>
                          </div>
                        </div>
                        <div className="ssr-variant hidden-72rtr7">
                          <div
                            className="framer-18kndp"
                            data-framer-component-type="RichTextContainer"
                            style={{
                              transform: 'none',
                            }}
                          >
                            <p
                              className="framer-text"
                              style={{
                                '--font-selector':
                                  'R0Y7SW5zdHJ1bWVudCBTYW5zLTYwMA==',
                                '--framer-font-family':
                                  '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                '--framer-font-size': '21px',
                                '--framer-font-weight': '600',
                                '--framer-line-height': '1em',
                                '--framer-text-color': 'rgb(49, 86, 164)',
                              }}
                            >
                              STEP 4
                            </p>
                          </div>
                        </div>
                        <div className="ssr-variant hidden-xpwx9r">
                          <div
                            className="framer-1t049f4"
                            data-framer-component-type="RichTextContainer"
                            style={{
                              transform: 'none',
                            }}
                          >
                            <p
                              className="framer-text"
                              style={{
                                '--font-selector':
                                  'Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=',
                                '--framer-font-family':
                                  '"Pretendard SemiBold", "Pretendard SemiBold Placeholder", sans-serif',
                                '--framer-font-size': '18px',
                                '--framer-font-weight': '600',
                                '--framer-line-height': '1em',
                                '--framer-text-color':
                                  'var(--token-e69fcfc3-b8e4-4efa-8f3e-16e7e659965e, rgb(9, 54, 150))',
                              }}
                            >
                              본문 디자인
                            </p>
                          </div>
                        </div>
                        <div className="ssr-variant hidden-72rtr7">
                          <div
                            className="framer-1t049f4"
                            data-framer-component-type="RichTextContainer"
                            style={{
                              transform: 'none',
                            }}
                          >
                            <p
                              className="framer-text"
                              style={{
                                '--font-selector':
                                  'Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=',
                                '--framer-font-family':
                                  '"Pretendard SemiBold", "Pretendard SemiBold Placeholder", sans-serif',
                                '--framer-font-size': '21px',
                                '--framer-font-weight': '600',
                                '--framer-line-height': '1em',
                                '--framer-text-color':
                                  'var(--token-e69fcfc3-b8e4-4efa-8f3e-16e7e659965e, rgb(9, 54, 150))',
                              }}
                            >
                              본문 디자인
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="framer-116nmuc">
                      <div className="ssr-variant hidden-xpwx9r">
                        <div
                          className="framer-qtfdsc"
                          data-framer-component-type="RichTextContainer"
                          style={{
                            transform: 'none',
                          }}
                        >
                          <p
                            className="framer-text"
                            style={{
                              '--font-selector':
                                'Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=',
                              '--framer-font-family':
                                '"Pretendard SemiBold", "Pretendard SemiBold Placeholder", sans-serif',
                              '--framer-font-size': '14px',
                              '--framer-line-height': '1.5em',
                              '--framer-text-color': 'rgb(33, 33, 33)',
                            }}
                          >
                            담당 디자이너가 원고의 콘셉트에 맞게 내지 디자인을
                            진행합니다.
                          </p>
                        </div>
                      </div>
                      <div className="ssr-variant hidden-72rtr7">
                        <div
                          className="framer-qtfdsc"
                          data-framer-component-type="RichTextContainer"
                          style={{
                            transform: 'none',
                          }}
                        >
                          <p
                            className="framer-text"
                            style={{
                              '--font-selector':
                                'Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=',
                              '--framer-font-family':
                                '"Pretendard SemiBold", "Pretendard SemiBold Placeholder", sans-serif',
                              '--framer-line-height': '1.5em',
                              '--framer-text-color': 'rgb(33, 33, 33)',
                            }}
                          >
                            담당 디자이너가 원고의 콘셉트에 맞게 내지 디자인을
                            진행합니다.
                          </p>
                        </div>
                      </div>
                      <div className="ssr-variant hidden-xpwx9r">
                        <div
                          className="framer-y2m8ac"
                          data-framer-component-type="RichTextContainer"
                          style={{
                            transform: 'none',
                          }}
                        >
                          <p
                            className="framer-text"
                            style={{
                              '--font-selector':
                                'Q1VTVE9NO1ByZXRlbmRhcmQgTGlnaHQ=',
                              '--framer-font-family':
                                '"Pretendard Light", "Pretendard Light Placeholder", sans-serif',
                              '--framer-font-size': '12px',
                              '--framer-line-height': '1.5em',
                              '--framer-text-color': 'rgb(94, 94, 94)',
                            }}
                          >
                            -본문 디자인 시안 2종의 PDF 파일을 저자님께
                            전송하면, 그중 1종을 선택하시어 더욱 세밀한 수정을
                            통해 완성도를 높여 나갑니다.
                          </p>
                        </div>
                      </div>
                      <div className="ssr-variant hidden-72rtr7">
                        <div
                          className="framer-y2m8ac"
                          data-framer-component-type="RichTextContainer"
                          style={{
                            transform: 'none',
                          }}
                        >
                          <p
                            className="framer-text"
                            style={{
                              '--font-selector':
                                'Q1VTVE9NO1ByZXRlbmRhcmQgTGlnaHQ=',
                              '--framer-font-family':
                                '"Pretendard Light", "Pretendard Light Placeholder", sans-serif',
                              '--framer-font-size': '14px',
                              '--framer-line-height': '1.5em',
                              '--framer-text-color': 'rgb(94, 94, 94)',
                            }}
                          >
                            -본문 디자인 시안 2종의 PDF 파일을 저자님께
                            전송하면, 그중 1종을 선택하시어 더욱 세밀한 수정을
                            통해 완성도를 높여 나갑니다.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="framer-172a7xb" data-framer-name="카드">
                  <div className="framer-sg3bwm">
                    <div className="framer-5s49l5">
                      <div className="framer-1g66xth">
                        <div
                          aria-hidden="true"
                          className="framer-qi2uut"
                          data-framer-component-type="SVG"
                          style={{
                            flexShrink: '0',
                            imageRendering: 'pixelated',
                          }}
                        >
                          <div
                            className="svgContainer"
                            style={{
                              aspectRatio: 'inherit',
                              height: '100%',
                              width: '100%',
                            }}
                          >
                            <svg
                              style={{
                                height: '100%',
                                width: '100%',
                              }}
                            >
                              <use href="#svg931396772_545" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="framer-17bvmll">
                        <div className="ssr-variant hidden-xpwx9r">
                          <div
                            className="framer-cq6bbi"
                            data-framer-component-type="RichTextContainer"
                            style={{
                              transform: 'none',
                            }}
                          >
                            <p
                              className="framer-text"
                              style={{
                                '--font-selector':
                                  'R0Y7SW5zdHJ1bWVudCBTYW5zLTYwMA==',
                                '--framer-font-family':
                                  '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                '--framer-font-size': '18px',
                                '--framer-font-weight': '600',
                                '--framer-line-height': '1em',
                                '--framer-text-color':
                                  'var(--token-e69fcfc3-b8e4-4efa-8f3e-16e7e659965e, rgb(9, 54, 150))',
                              }}
                            >
                              STEP 5
                            </p>
                          </div>
                        </div>
                        <div className="ssr-variant hidden-72rtr7">
                          <div
                            className="framer-cq6bbi"
                            data-framer-component-type="RichTextContainer"
                            style={{
                              transform: 'none',
                            }}
                          >
                            <p
                              className="framer-text"
                              style={{
                                '--font-selector':
                                  'R0Y7SW5zdHJ1bWVudCBTYW5zLTYwMA==',
                                '--framer-font-family':
                                  '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                '--framer-font-size': '21px',
                                '--framer-font-weight': '600',
                                '--framer-line-height': '1em',
                                '--framer-text-color':
                                  'var(--token-e69fcfc3-b8e4-4efa-8f3e-16e7e659965e, rgb(9, 54, 150))',
                              }}
                            >
                              STEP 5
                            </p>
                          </div>
                        </div>
                        <div className="ssr-variant hidden-xpwx9r">
                          <div
                            className="framer-1wphy1i"
                            data-framer-component-type="RichTextContainer"
                            style={{
                              transform: 'none',
                            }}
                          >
                            <p
                              className="framer-text"
                              style={{
                                '--font-selector':
                                  'Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=',
                                '--framer-font-family':
                                  '"Pretendard SemiBold", "Pretendard SemiBold Placeholder", sans-serif',
                                '--framer-font-size': '18px',
                                '--framer-font-weight': '600',
                                '--framer-line-height': '1em',
                                '--framer-text-color':
                                  'var(--token-e69fcfc3-b8e4-4efa-8f3e-16e7e659965e, rgb(9, 54, 150))',
                              }}
                            >
                              조판
                            </p>
                          </div>
                        </div>
                        <div className="ssr-variant hidden-72rtr7">
                          <div
                            className="framer-1wphy1i"
                            data-framer-component-type="RichTextContainer"
                            style={{
                              transform: 'none',
                            }}
                          >
                            <p
                              className="framer-text"
                              style={{
                                '--font-selector':
                                  'Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=',
                                '--framer-font-family':
                                  '"Pretendard SemiBold", "Pretendard SemiBold Placeholder", sans-serif',
                                '--framer-font-size': '21px',
                                '--framer-font-weight': '600',
                                '--framer-line-height': '1em',
                                '--framer-text-color':
                                  'var(--token-e69fcfc3-b8e4-4efa-8f3e-16e7e659965e, rgb(9, 54, 150))',
                              }}
                            >
                              조판
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="framer-84i4vp">
                      <div className="ssr-variant hidden-xpwx9r">
                        <div
                          className="framer-1s6aocu"
                          data-framer-component-type="RichTextContainer"
                          style={{
                            transform: 'none',
                          }}
                        >
                          <p
                            className="framer-text"
                            style={{
                              '--font-selector':
                                'Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=',
                              '--framer-font-family':
                                '"Pretendard SemiBold", "Pretendard SemiBold Placeholder", sans-serif',
                              '--framer-font-size': '14px',
                              '--framer-line-height': '1.5em',
                              '--framer-text-color': 'rgb(33, 33, 33)',
                            }}
                          >
                            담당 조판자가 완성된 원고를 확정된 내지 디자인에
                            맞추어 편집 프로그램으로 변환합니다.
                          </p>
                        </div>
                      </div>
                      <div className="ssr-variant hidden-72rtr7">
                        <div
                          className="framer-1s6aocu"
                          data-framer-component-type="RichTextContainer"
                          style={{
                            transform: 'none',
                          }}
                        >
                          <p
                            className="framer-text"
                            style={{
                              '--font-selector':
                                'Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=',
                              '--framer-font-family':
                                '"Pretendard SemiBold", "Pretendard SemiBold Placeholder", sans-serif',
                              '--framer-line-height': '1.5em',
                              '--framer-text-color': 'rgb(33, 33, 33)',
                            }}
                          >
                            담당 조판자가 완성된 원고를 확정된 내지 디자인에
                            맞추어 편집 프로그램으로 변환합니다.
                          </p>
                        </div>
                      </div>
                      <div className="ssr-variant hidden-xpwx9r">
                        <div
                          className="framer-3gg43g"
                          data-framer-component-type="RichTextContainer"
                          style={{
                            transform: 'none',
                          }}
                        >
                          <p
                            className="framer-text"
                            style={{
                              '--font-selector':
                                'Q1VTVE9NO1ByZXRlbmRhcmQgTGlnaHQ=',
                              '--framer-font-family':
                                '"Pretendard Light", "Pretendard Light Placeholder", sans-serif',
                              '--framer-font-size': '12px',
                              '--framer-line-height': '1.5em',
                              '--framer-text-color': 'rgb(94, 94, 94)',
                            }}
                          >
                            -교재나 실용서의 경우 타 분야의 도서에 비해 사용하는
                            서체의 종류가 많기 때문에 경력이 많은 조판 작업자가
                            반드시 필요합니다. 일랑북스는 도서의 종류에 따라
                            해당 도서의 경험이 많은 전문 조판자를 배정하여
                            작업을 진행합니다.
                          </p>
                        </div>
                      </div>
                      <div className="ssr-variant hidden-72rtr7">
                        <div
                          className="framer-3gg43g"
                          data-framer-component-type="RichTextContainer"
                          style={{
                            transform: 'none',
                          }}
                        >
                          <p
                            className="framer-text"
                            style={{
                              '--font-selector':
                                'Q1VTVE9NO1ByZXRlbmRhcmQgTGlnaHQ=',
                              '--framer-font-family':
                                '"Pretendard Light", "Pretendard Light Placeholder", sans-serif',
                              '--framer-font-size': '14px',
                              '--framer-line-height': '1.5em',
                              '--framer-text-color': 'rgb(94, 94, 94)',
                            }}
                          >
                            -교재나 실용서의 경우 타 분야의 도서에 비해 사용하는
                            서체의 종류가 많기 때문에 경력이 많은 조판 작업자가
                            반드시 필요합니다. 일랑북스는 도서의 종류에 따라
                            해당 도서의 경험이 많은 전문 조판자를 배정하여
                            작업을 진행합니다.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="framer-xgul7y" data-framer-name="카드">
                  <div className="framer-xxlm8f">
                    <div className="framer-9z3pxr">
                      <div className="framer-bjcxk">
                        <div
                          aria-hidden="true"
                          className="framer-tbdaur"
                          data-framer-component-type="SVG"
                          style={{
                            flexShrink: '0',
                            imageRendering: 'pixelated',
                          }}
                        >
                          <div
                            className="svgContainer"
                            style={{
                              aspectRatio: 'inherit',
                              height: '100%',
                              width: '100%',
                            }}
                          >
                            <svg
                              style={{
                                height: '100%',
                                width: '100%',
                              }}
                            >
                              <use href="#svg-2074834845_572" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="framer-1z8mnk">
                        <div className="ssr-variant hidden-xpwx9r">
                          <div
                            className="framer-1cjk4mr"
                            data-framer-component-type="RichTextContainer"
                            style={{
                              transform: 'none',
                            }}
                          >
                            <p
                              className="framer-text"
                              style={{
                                '--font-selector':
                                  'R0Y7SW5zdHJ1bWVudCBTYW5zLTYwMA==',
                                '--framer-font-family':
                                  '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                '--framer-font-size': '18px',
                                '--framer-font-weight': '600',
                                '--framer-line-height': '1em',
                                '--framer-text-color':
                                  'var(--token-e69fcfc3-b8e4-4efa-8f3e-16e7e659965e, rgb(9, 54, 150))',
                              }}
                            >
                              STEP 6
                            </p>
                          </div>
                        </div>
                        <div className="ssr-variant hidden-72rtr7">
                          <div
                            className="framer-1cjk4mr"
                            data-framer-component-type="RichTextContainer"
                            style={{
                              transform: 'none',
                            }}
                          >
                            <p
                              className="framer-text"
                              style={{
                                '--font-selector':
                                  'R0Y7SW5zdHJ1bWVudCBTYW5zLTYwMA==',
                                '--framer-font-family':
                                  '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                '--framer-font-size': '21px',
                                '--framer-font-weight': '600',
                                '--framer-line-height': '1em',
                                '--framer-text-color':
                                  'var(--token-e69fcfc3-b8e4-4efa-8f3e-16e7e659965e, rgb(9, 54, 150))',
                              }}
                            >
                              STEP 6
                            </p>
                          </div>
                        </div>
                        <div className="ssr-variant hidden-xpwx9r">
                          <div
                            className="framer-1o176r2"
                            data-framer-component-type="RichTextContainer"
                            style={{
                              transform: 'none',
                            }}
                          >
                            <p
                              className="framer-text"
                              style={{
                                '--font-selector':
                                  'Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=',
                                '--framer-font-family':
                                  '"Pretendard SemiBold", "Pretendard SemiBold Placeholder", sans-serif',
                                '--framer-font-size': '18px',
                                '--framer-font-weight': '600',
                                '--framer-line-height': '1em',
                                '--framer-text-color':
                                  'var(--token-e69fcfc3-b8e4-4efa-8f3e-16e7e659965e, rgb(9, 54, 150))',
                              }}
                            >
                              교정
                            </p>
                          </div>
                        </div>
                        <div className="ssr-variant hidden-72rtr7">
                          <div
                            className="framer-1o176r2"
                            data-framer-component-type="RichTextContainer"
                            style={{
                              transform: 'none',
                            }}
                          >
                            <p
                              className="framer-text"
                              style={{
                                '--font-selector':
                                  'Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=',
                                '--framer-font-family':
                                  '"Pretendard SemiBold", "Pretendard SemiBold Placeholder", sans-serif',
                                '--framer-font-size': '21px',
                                '--framer-font-weight': '600',
                                '--framer-line-height': '1em',
                                '--framer-text-color':
                                  'var(--token-e69fcfc3-b8e4-4efa-8f3e-16e7e659965e, rgb(9, 54, 150))',
                              }}
                            >
                              교정
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="framer-58xirx">
                      <div className="ssr-variant hidden-xpwx9r">
                        <div
                          className="framer-jx1rt4"
                          data-framer-component-type="RichTextContainer"
                          style={{
                            transform: 'none',
                          }}
                        >
                          <p
                            className="framer-text"
                            style={{
                              '--font-selector':
                                'Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=',
                              '--framer-font-family':
                                '"Pretendard SemiBold", "Pretendard SemiBold Placeholder", sans-serif',
                              '--framer-font-size': '14px',
                              '--framer-line-height': '1.5em',
                              '--framer-text-color': 'rgb(33, 33, 33)',
                            }}
                          >
                            담당 편집자가 3회에 걸쳐 교정을 진행합니다.
                          </p>
                        </div>
                      </div>
                      <div className="ssr-variant hidden-72rtr7">
                        <div
                          className="framer-jx1rt4"
                          data-framer-component-type="RichTextContainer"
                          style={{
                            transform: 'none',
                          }}
                        >
                          <p
                            className="framer-text"
                            style={{
                              '--font-selector':
                                'Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=',
                              '--framer-font-family':
                                '"Pretendard SemiBold", "Pretendard SemiBold Placeholder", sans-serif',
                              '--framer-line-height': '1.5em',
                              '--framer-text-color': 'rgb(33, 33, 33)',
                            }}
                          >
                            담당 편집자가 3회에 걸쳐 교정을 진행합니다.
                          </p>
                        </div>
                      </div>
                      <div className="ssr-variant hidden-xpwx9r">
                        <div
                          className="framer-242rbk"
                          data-framer-component-type="RichTextContainer"
                          style={{
                            transform: 'none',
                          }}
                        >
                          <p
                            className="framer-text"
                            style={{
                              '--font-selector':
                                'Q1VTVE9NO1ByZXRlbmRhcmQgTGlnaHQ=',
                              '--framer-font-family':
                                '"Pretendard Light", "Pretendard Light Placeholder", sans-serif',
                              '--framer-font-size': '12px',
                              '--framer-line-height': '1.5em',
                              '--framer-text-color': 'rgb(94, 94, 94)',
                            }}
                          >
                            -저자님께는 2교 교정지를 pdf 파일로 보내 드립니다.
                            편집자가 요구하는 기간 내에 확인하신 후 수정 사항을
                            pdf 교정지에 직접 기재하시거나 워드/한글 파일에
                            정리하여 주시면 2교 수정 시 모두 반영합니다.
                          </p>
                          <p
                            className="framer-text"
                            style={{
                              '--font-selector':
                                'Q1VTVE9NO1ByZXRlbmRhcmQgTGlnaHQ=',
                              '--framer-font-family':
                                '"Pretendard Light", "Pretendard Light Placeholder", sans-serif',
                              '--framer-font-size': '12px',
                              '--framer-line-height': '1.5em',
                              '--framer-text-color': 'rgb(94, 94, 94)',
                            }}
                          >
                            -교정 단계 중 담당 편집자가 저자님이 별도로 준비하실
                            자료(머리말, 작가 이력 등)를 요청합니다.
                          </p>
                        </div>
                      </div>
                      <div className="ssr-variant hidden-72rtr7">
                        <div
                          className="framer-242rbk"
                          data-framer-component-type="RichTextContainer"
                          style={{
                            transform: 'none',
                          }}
                        >
                          <p
                            className="framer-text"
                            style={{
                              '--font-selector':
                                'Q1VTVE9NO1ByZXRlbmRhcmQgTGlnaHQ=',
                              '--framer-font-family':
                                '"Pretendard Light", "Pretendard Light Placeholder", sans-serif',
                              '--framer-font-size': '14px',
                              '--framer-line-height': '1.5em',
                              '--framer-text-color': 'rgb(94, 94, 94)',
                            }}
                          >
                            -저자님께는 2교 교정지를 pdf 파일로 보내 드립니다.
                            편집자가 요구하는 기간 내에 확인하신 후 수정 사항을
                            pdf 교정지에 직접 기재하시거나 워드/한글 파일에
                            정리하여 주시면 2교 수정 시 모두 반영합니다.
                          </p>
                          <p
                            className="framer-text"
                            style={{
                              '--font-selector':
                                'Q1VTVE9NO1ByZXRlbmRhcmQgTGlnaHQ=',
                              '--framer-font-family':
                                '"Pretendard Light", "Pretendard Light Placeholder", sans-serif',
                              '--framer-font-size': '14px',
                              '--framer-line-height': '1.5em',
                              '--framer-text-color': 'rgb(94, 94, 94)',
                            }}
                          >
                            -교정 단계 중 담당 편집자가 저자님이 별도로 준비하실
                            자료(머리말, 작가 이력 등)를 요청합니다.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="framer-19za7jz" data-framer-name="카드">
                  <div className="framer-1rc9mae">
                    <div className="framer-uzqock">
                      <div className="framer-10dvckg">
                        <div
                          aria-hidden="true"
                          className="framer-1xhyp0j"
                          data-framer-component-type="SVG"
                          style={{
                            flexShrink: '0',
                            imageRendering: 'pixelated',
                          }}
                        >
                          <div
                            className="svgContainer"
                            style={{
                              aspectRatio: 'inherit',
                              height: '100%',
                              width: '100%',
                            }}
                          >
                            <svg
                              style={{
                                height: '100%',
                                width: '100%',
                              }}
                            >
                              <use href="#svg-1530989827_928" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="framer-1k2js3z">
                        <div className="ssr-variant hidden-xpwx9r">
                          <div
                            className="framer-1qsu6mm"
                            data-framer-component-type="RichTextContainer"
                            style={{
                              transform: 'none',
                            }}
                          >
                            <p
                              className="framer-text"
                              style={{
                                '--font-selector':
                                  'R0Y7SW5zdHJ1bWVudCBTYW5zLTYwMA==',
                                '--framer-font-family':
                                  '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                '--framer-font-size': '18px',
                                '--framer-font-weight': '600',
                                '--framer-line-height': '1em',
                                '--framer-text-color':
                                  'var(--token-e69fcfc3-b8e4-4efa-8f3e-16e7e659965e, rgb(9, 54, 150))',
                              }}
                            >
                              STEP 7
                            </p>
                          </div>
                        </div>
                        <div className="ssr-variant hidden-72rtr7">
                          <div
                            className="framer-1qsu6mm"
                            data-framer-component-type="RichTextContainer"
                            style={{
                              transform: 'none',
                            }}
                          >
                            <p
                              className="framer-text"
                              style={{
                                '--font-selector':
                                  'R0Y7SW5zdHJ1bWVudCBTYW5zLTYwMA==',
                                '--framer-font-family':
                                  '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                '--framer-font-size': '21px',
                                '--framer-font-weight': '600',
                                '--framer-line-height': '1em',
                                '--framer-text-color':
                                  'var(--token-e69fcfc3-b8e4-4efa-8f3e-16e7e659965e, rgb(9, 54, 150))',
                              }}
                            >
                              STEP 7
                            </p>
                          </div>
                        </div>
                        <div className="ssr-variant hidden-xpwx9r">
                          <div
                            className="framer-13rho1f"
                            data-framer-component-type="RichTextContainer"
                            style={{
                              transform: 'none',
                            }}
                          >
                            <p
                              className="framer-text"
                              style={{
                                '--font-selector':
                                  'Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=',
                                '--framer-font-family':
                                  '"Pretendard SemiBold", "Pretendard SemiBold Placeholder", sans-serif',
                                '--framer-font-size': '18px',
                                '--framer-font-weight': '600',
                                '--framer-line-height': '1em',
                                '--framer-text-color':
                                  'var(--token-e69fcfc3-b8e4-4efa-8f3e-16e7e659965e, rgb(9, 54, 150))',
                              }}
                            >
                              표지 디자인
                            </p>
                          </div>
                        </div>
                        <div className="ssr-variant hidden-72rtr7">
                          <div
                            className="framer-13rho1f"
                            data-framer-component-type="RichTextContainer"
                            style={{
                              transform: 'none',
                            }}
                          >
                            <p
                              className="framer-text"
                              style={{
                                '--font-selector':
                                  'Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=',
                                '--framer-font-family':
                                  '"Pretendard SemiBold", "Pretendard SemiBold Placeholder", sans-serif',
                                '--framer-font-size': '21px',
                                '--framer-font-weight': '600',
                                '--framer-line-height': '1em',
                                '--framer-text-color':
                                  'var(--token-e69fcfc3-b8e4-4efa-8f3e-16e7e659965e, rgb(9, 54, 150))',
                              }}
                            >
                              표지 디자인
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="framer-7tdc6b">
                      <div className="ssr-variant hidden-xpwx9r">
                        <div
                          className="framer-1bhs5gg"
                          data-framer-component-type="RichTextContainer"
                          style={{
                            transform: 'none',
                          }}
                        >
                          <p
                            className="framer-text"
                            style={{
                              '--font-selector':
                                'Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=',
                              '--framer-font-family':
                                '"Pretendard SemiBold", "Pretendard SemiBold Placeholder", sans-serif',
                              '--framer-font-size': '14px',
                              '--framer-line-height': '1.5em',
                              '--framer-text-color': 'rgb(33, 33, 33)',
                            }}
                          >
                            담당 디자이너가 표지 디자인을 진행합니다.
                          </p>
                        </div>
                      </div>
                      <div className="ssr-variant hidden-72rtr7">
                        <div
                          className="framer-1bhs5gg"
                          data-framer-component-type="RichTextContainer"
                          style={{
                            transform: 'none',
                          }}
                        >
                          <p
                            className="framer-text"
                            style={{
                              '--font-selector':
                                'Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=',
                              '--framer-font-family':
                                '"Pretendard SemiBold", "Pretendard SemiBold Placeholder", sans-serif',
                              '--framer-line-height': '1.5em',
                              '--framer-text-color': 'rgb(33, 33, 33)',
                            }}
                          >
                            담당 디자이너가 표지 디자인을 진행합니다.
                          </p>
                        </div>
                      </div>
                      <div className="ssr-variant hidden-xpwx9r">
                        <div
                          className="framer-ejoxzo"
                          data-framer-component-type="RichTextContainer"
                          style={{
                            transform: 'none',
                          }}
                        >
                          <p
                            className="framer-text"
                            style={{
                              '--font-selector':
                                'Q1VTVE9NO1ByZXRlbmRhcmQgTGlnaHQ=',
                              '--framer-font-family':
                                '"Pretendard Light", "Pretendard Light Placeholder", sans-serif',
                              '--framer-font-size': '12px',
                              '--framer-line-height': '1.5em',
                              '--framer-text-color': 'rgb(94, 94, 94)',
                            }}
                          >
                            -진행 방식은 본문 디자인과 같습니다. 표지 디자인
                            시안 2종의 PDF 파일을 저자님께 전송하면, 그중 1종을
                            선택하시어 추가 수정을 통해 완성도를 높여 나갑니다.
                          </p>
                        </div>
                      </div>
                      <div className="ssr-variant hidden-72rtr7">
                        <div
                          className="framer-ejoxzo"
                          data-framer-component-type="RichTextContainer"
                          style={{
                            transform: 'none',
                          }}
                        >
                          <p
                            className="framer-text"
                            style={{
                              '--font-selector':
                                'Q1VTVE9NO1ByZXRlbmRhcmQgTGlnaHQ=',
                              '--framer-font-family':
                                '"Pretendard Light", "Pretendard Light Placeholder", sans-serif',
                              '--framer-font-size': '14px',
                              '--framer-line-height': '1.5em',
                              '--framer-text-color': 'rgb(94, 94, 94)',
                            }}
                          >
                            -진행 방식은 본문 디자인과 같습니다. 표지 디자인
                            시안 2종의 PDF 파일을 저자님께 전송하면, 그중 1종을
                            선택하시어 추가 수정을 통해 완성도를 높여 나갑니다.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="framer-x86o6t" data-framer-name="카드">
                  <div className="framer-17brulb">
                    <div className="framer-pz2tuc">
                      <div className="framer-1gk6qwi">
                        <div
                          aria-hidden="true"
                          className="framer-kpzpeh"
                          data-framer-component-type="SVG"
                          style={{
                            flexShrink: '0',
                            imageRendering: 'pixelated',
                          }}
                        >
                          <div
                            className="svgContainer"
                            style={{
                              aspectRatio: 'inherit',
                              height: '100%',
                              width: '100%',
                            }}
                          >
                            <svg
                              style={{
                                height: '100%',
                                width: '100%',
                              }}
                            >
                              <use href="#svg436509633_693" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="framer-1aopork">
                        <div className="ssr-variant hidden-xpwx9r">
                          <div
                            className="framer-1n04h9"
                            data-framer-component-type="RichTextContainer"
                            style={{
                              transform: 'none',
                            }}
                          >
                            <p
                              className="framer-text"
                              style={{
                                '--font-selector':
                                  'R0Y7SW5zdHJ1bWVudCBTYW5zLTYwMA==',
                                '--framer-font-family':
                                  '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                '--framer-font-size': '18px',
                                '--framer-font-weight': '600',
                                '--framer-line-height': '1em',
                                '--framer-text-color':
                                  'var(--token-e69fcfc3-b8e4-4efa-8f3e-16e7e659965e, rgb(9, 54, 150))',
                              }}
                            >
                              STEP 8
                            </p>
                          </div>
                        </div>
                        <div className="ssr-variant hidden-72rtr7">
                          <div
                            className="framer-1n04h9"
                            data-framer-component-type="RichTextContainer"
                            style={{
                              transform: 'none',
                            }}
                          >
                            <p
                              className="framer-text"
                              style={{
                                '--font-selector':
                                  'R0Y7SW5zdHJ1bWVudCBTYW5zLTYwMA==',
                                '--framer-font-family':
                                  '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                '--framer-font-size': '21px',
                                '--framer-font-weight': '600',
                                '--framer-line-height': '1em',
                                '--framer-text-color':
                                  'var(--token-e69fcfc3-b8e4-4efa-8f3e-16e7e659965e, rgb(9, 54, 150))',
                              }}
                            >
                              STEP 8
                            </p>
                          </div>
                        </div>
                        <div className="ssr-variant hidden-xpwx9r">
                          <div
                            className="framer-9399wl"
                            data-framer-component-type="RichTextContainer"
                            style={{
                              transform: 'none',
                            }}
                          >
                            <p
                              className="framer-text"
                              style={{
                                '--font-selector':
                                  'Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=',
                                '--framer-font-family':
                                  '"Pretendard SemiBold", "Pretendard SemiBold Placeholder", sans-serif',
                                '--framer-font-size': '18px',
                                '--framer-font-weight': '600',
                                '--framer-line-height': '1em',
                                '--framer-text-color':
                                  'var(--token-e69fcfc3-b8e4-4efa-8f3e-16e7e659965e, rgb(9, 54, 150))',
                              }}
                            >
                              제작
                            </p>
                          </div>
                        </div>
                        <div className="ssr-variant hidden-72rtr7">
                          <div
                            className="framer-9399wl"
                            data-framer-component-type="RichTextContainer"
                            style={{
                              transform: 'none',
                            }}
                          >
                            <p
                              className="framer-text"
                              style={{
                                '--font-selector':
                                  'Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=',
                                '--framer-font-family':
                                  '"Pretendard SemiBold", "Pretendard SemiBold Placeholder", sans-serif',
                                '--framer-font-size': '21px',
                                '--framer-font-weight': '600',
                                '--framer-line-height': '1em',
                                '--framer-text-color':
                                  'var(--token-e69fcfc3-b8e4-4efa-8f3e-16e7e659965e, rgb(9, 54, 150))',
                              }}
                            >
                              제작
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="framer-fz1nhy">
                      <div className="ssr-variant hidden-xpwx9r">
                        <div
                          className="framer-1qh0c3v"
                          data-framer-component-type="RichTextContainer"
                          style={{
                            transform: 'none',
                          }}
                        >
                          <p
                            className="framer-text"
                            style={{
                              '--font-selector':
                                'Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=',
                              '--framer-font-family':
                                '"Pretendard SemiBold", "Pretendard SemiBold Placeholder", sans-serif',
                              '--framer-font-size': '14px',
                              '--framer-line-height': '1.5em',
                              '--framer-text-color': 'rgb(33, 33, 33)',
                            }}
                          >
                            본문과 표지의 최종 PDF 파일을 확인 후 계약된 사양에
                            따라 제작이 진행됩니다.
                          </p>
                        </div>
                      </div>
                      <div className="ssr-variant hidden-72rtr7">
                        <div
                          className="framer-1qh0c3v"
                          data-framer-component-type="RichTextContainer"
                          style={{
                            transform: 'none',
                          }}
                        >
                          <p
                            className="framer-text"
                            style={{
                              '--font-selector':
                                'Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=',
                              '--framer-font-family':
                                '"Pretendard SemiBold", "Pretendard SemiBold Placeholder", sans-serif',
                              '--framer-line-height': '1.5em',
                              '--framer-text-color': 'rgb(33, 33, 33)',
                            }}
                          >
                            본문과 표지의 최종 PDF 파일을 확인 후 계약된 사양에
                            따라 제작이 진행됩니다.
                          </p>
                        </div>
                      </div>
                      <div className="ssr-variant hidden-xpwx9r">
                        <div
                          className="framer-4oghw9"
                          data-framer-component-type="RichTextContainer"
                          style={{
                            transform: 'none',
                          }}
                        >
                          <p
                            className="framer-text"
                            style={{
                              '--font-selector':
                                'Q1VTVE9NO1ByZXRlbmRhcmQgTGlnaHQ=',
                              '--framer-font-family':
                                '"Pretendard Light", "Pretendard Light Placeholder", sans-serif',
                              '--framer-font-size': '12px',
                              '--framer-line-height': '1.5em',
                              '--framer-text-color': 'rgb(94, 94, 94)',
                            }}
                          >
                            -제작은 일반적으로 평일 기준 7일 정도 소요되며 제작
                            사양에 따라 기간은 변동될 수 있습니다. 인쇄 발주
                            전에 잔금을 송금하시면 제작 완료 후 계약서에 기재된
                            주소로 도서를 발송합니다.
                          </p>
                        </div>
                      </div>
                      <div className="ssr-variant hidden-72rtr7">
                        <div
                          className="framer-4oghw9"
                          data-framer-component-type="RichTextContainer"
                          style={{
                            transform: 'none',
                          }}
                        >
                          <p
                            className="framer-text"
                            style={{
                              '--font-selector':
                                'Q1VTVE9NO1ByZXRlbmRhcmQgTGlnaHQ=',
                              '--framer-font-family':
                                '"Pretendard Light", "Pretendard Light Placeholder", sans-serif',
                              '--framer-font-size': '14px',
                              '--framer-line-height': '1.5em',
                              '--framer-text-color': 'rgb(94, 94, 94)',
                            }}
                          >
                            -제작은 일반적으로 평일 기준 7일 정도 소요되며 제작
                            사양에 따라 기간은 변동될 수 있습니다. 인쇄 발주
                            전에 잔금을 송금하시면 제작 완료 후 계약서에 기재된
                            주소로 도서를 발송합니다.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ssr-variant hidden-xpwx9r hidden-72rtr7">
              <div
                className="framer-ungifs"
                style={{
                  gridTemplateColumns: 'repeat(2, 1fr)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    rowGap: '32px',
                    width: '100%',
                  }}
                >
                  <div className="framer-ns5u59" data-framer-name="카드">
                    <div className="framer-1v81gb5">
                      <div className="framer-z74aj0">
                        <div className="framer-1rf3m8z">
                          <div
                            aria-hidden="true"
                            className="framer-jdfis2"
                            data-framer-component-type="SVG"
                            style={{
                              flexShrink: '0',
                              imageRendering: 'pixelated',
                            }}
                          >
                            <div
                              className="svgContainer"
                              style={{
                                aspectRatio: 'inherit',
                                height: '100%',
                                width: '100%',
                              }}
                            >
                              <svg
                                style={{
                                  height: '100%',
                                  width: '100%',
                                }}
                              >
                                <use href="#svg-765309186_514" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="framer-1ssi1oz">
                          <div
                            className="framer-120b4qm"
                            data-framer-component-type="RichTextContainer"
                            style={{
                              transform: 'none',
                            }}
                          >
                            <p
                              className="framer-text"
                              style={{
                                '--font-selector':
                                  'R0Y7SW5zdHJ1bWVudCBTYW5zLTYwMA==',
                                '--framer-font-family':
                                  '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                '--framer-font-size': '28px',
                                '--framer-font-weight': '600',
                                '--framer-line-height': '1em',
                                '--framer-text-color':
                                  'var(--token-e69fcfc3-b8e4-4efa-8f3e-16e7e659965e, rgb(9, 54, 150))',
                              }}
                            >
                              STEP 1
                            </p>
                          </div>
                          <div
                            className="framer-ifcqar"
                            data-framer-component-type="RichTextContainer"
                            style={{
                              transform: 'none',
                            }}
                          >
                            <p
                              className="framer-text"
                              style={{
                                '--font-selector':
                                  'Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=',
                                '--framer-font-family':
                                  '"Pretendard SemiBold", "Pretendard SemiBold Placeholder", sans-serif',
                                '--framer-font-size': '28px',
                                '--framer-font-weight': '600',
                                '--framer-line-height': '1em',
                                '--framer-text-color':
                                  'var(--token-e69fcfc3-b8e4-4efa-8f3e-16e7e659965e, rgb(9, 54, 150))',
                              }}
                            >
                              출판 상담
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="framer-t8650y">
                        <div
                          className="framer-1yc4b50"
                          data-framer-component-type="RichTextContainer"
                          style={{
                            transform: 'none',
                          }}
                        >
                          <p
                            className="framer-text"
                            style={{
                              '--font-selector':
                                'Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=',
                              '--framer-font-family':
                                '"Pretendard SemiBold", "Pretendard SemiBold Placeholder", sans-serif',
                              '--framer-font-size': '18px',
                              '--framer-line-height': '1.5em',
                              '--framer-text-color': 'rgb(33, 33, 33)',
                            }}
                          >
                            견적 문의 내용을 바탕으로 상담을 진행합니다. 견적
                            문의와 함께 원고의 일부를 미리 전송해 주셔야 정확한
                            상담이 가능합니다. (yilang2019@naver.com)
                          </p>
                        </div>
                        <div
                          className="framer-1kvoy42"
                          data-framer-component-type="RichTextContainer"
                          style={{
                            transform: 'none',
                          }}
                        >
                          <p
                            className="framer-text"
                            style={{
                              '--font-selector':
                                'Q1VTVE9NVjI7UHJldGVuZGFyZCBSZWd1bGFy',
                              '--framer-font-family':
                                '"Pretendard Regular", "Pretendard Regular Placeholder", sans-serif',
                              '--framer-font-size': '18px',
                              '--framer-line-height': '1.5em',
                              '--framer-text-color': 'rgb(94, 94, 94)',
                            }}
                          >
                            -상담은 이메일, 전화, 카카오톡 중 고객님이 편한
                            방식으로 진행합니다.
                          </p>
                          <p
                            className="framer-text"
                            style={{
                              '--font-selector':
                                'Q1VTVE9NVjI7UHJldGVuZGFyZCBSZWd1bGFy',
                              '--framer-font-family':
                                '"Pretendard Regular", "Pretendard Regular Placeholder", sans-serif',
                              '--framer-font-size': '18px',
                              '--framer-line-height': '1.5em',
                              '--framer-text-color': 'rgb(94, 94, 94)',
                            }}
                          >
                            -도서의 분야에 따라 책의 크기, 원고의 전체 분량,
                            내지의 색(흑백, 컬러), 표지의 대략적인 스타일 및
                            후가공의 진행 여부, 제작 부수, 일정 등을 조율합니다.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="framer-s2frp8" data-framer-name="카드">
                    <div className="framer-1fiuojn">
                      <div className="framer-18xh5t0">
                        <div className="framer-1r5udmd">
                          <div
                            aria-hidden="true"
                            className="framer-uz307i"
                            data-framer-component-type="SVG"
                            style={{
                              flexShrink: '0',
                              imageRendering: 'pixelated',
                            }}
                          >
                            <div
                              className="svgContainer"
                              style={{
                                aspectRatio: 'inherit',
                                height: '100%',
                                width: '100%',
                              }}
                            >
                              <svg
                                style={{
                                  height: '100%',
                                  width: '100%',
                                }}
                              >
                                <use href="#svg1096314896_671" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="framer-vzubp5">
                          <div
                            className="framer-1ukknj2"
                            data-framer-component-type="RichTextContainer"
                            style={{
                              transform: 'none',
                            }}
                          >
                            <p
                              className="framer-text"
                              style={{
                                '--font-selector':
                                  'R0Y7SW5zdHJ1bWVudCBTYW5zLTYwMA==',
                                '--framer-font-family':
                                  '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                '--framer-font-size': '28px',
                                '--framer-font-weight': '600',
                                '--framer-line-height': '1em',
                                '--framer-text-color':
                                  'var(--token-e69fcfc3-b8e4-4efa-8f3e-16e7e659965e, rgb(9, 54, 150))',
                              }}
                            >
                              STEP 3
                            </p>
                          </div>
                          <div
                            className="framer-dcr7r4"
                            data-framer-component-type="RichTextContainer"
                            style={{
                              transform: 'none',
                            }}
                          >
                            <p
                              className="framer-text"
                              style={{
                                '--font-selector':
                                  'Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=',
                                '--framer-font-family':
                                  '"Pretendard SemiBold", "Pretendard SemiBold Placeholder", sans-serif',
                                '--framer-font-size': '28px',
                                '--framer-font-weight': '600',
                                '--framer-line-height': '1em',
                                '--framer-text-color':
                                  'var(--token-e69fcfc3-b8e4-4efa-8f3e-16e7e659965e, rgb(9, 54, 150))',
                              }}
                            >
                              원고 검토
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="framer-1ixby7t">
                        <div
                          className="framer-lf3f74"
                          data-framer-component-type="RichTextContainer"
                          style={{
                            transform: 'none',
                          }}
                        >
                          <p
                            className="framer-text"
                            style={{
                              '--font-selector':
                                'Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=',
                              '--framer-font-family':
                                '"Pretendard SemiBold", "Pretendard SemiBold Placeholder", sans-serif',
                              '--framer-font-size': '18px',
                              '--framer-line-height': '1.5em',
                              '--framer-text-color': 'rgb(33, 33, 33)',
                            }}
                          >
                            담당 편집자가 기획 방향, 집필 수정 사항 등을
                            검토합니다.
                          </p>
                        </div>
                        <div
                          className="framer-zqm0zf"
                          data-framer-component-type="RichTextContainer"
                          style={{
                            transform: 'none',
                          }}
                        >
                          <p
                            className="framer-text"
                            style={{
                              '--font-selector':
                                'Q1VTVE9NO1ByZXRlbmRhcmQgTGlnaHQ=',
                              '--framer-font-family':
                                '"Pretendard Light", "Pretendard Light Placeholder", sans-serif',
                              '--framer-font-size': '18px',
                              '--framer-line-height': '1.5em',
                              '--framer-text-color': 'rgb(94, 94, 94)',
                            }}
                          >
                            -담당 편집자가 원고 검토 후 수정이 필요한 경우에
                            한해 저자님께 피드백을 드리고 수정을 요청합니다.
                            원고의 완성도를 높이는 것에 중점을 둔 작업
                            단계이므로, 저자님의 적극적인 참여가 요구됩니다.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="framer-172a7xb" data-framer-name="카드">
                    <div className="framer-sg3bwm">
                      <div className="framer-5s49l5">
                        <div className="framer-1g66xth">
                          <div
                            aria-hidden="true"
                            className="framer-qi2uut"
                            data-framer-component-type="SVG"
                            style={{
                              flexShrink: '0',
                              imageRendering: 'pixelated',
                            }}
                          >
                            <div
                              className="svgContainer"
                              style={{
                                aspectRatio: 'inherit',
                                height: '100%',
                                width: '100%',
                              }}
                            >
                              <svg
                                style={{
                                  height: '100%',
                                  width: '100%',
                                }}
                              >
                                <use href="#svg931396772_545" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="framer-17bvmll">
                          <div
                            className="framer-cq6bbi"
                            data-framer-component-type="RichTextContainer"
                            style={{
                              transform: 'none',
                            }}
                          >
                            <p
                              className="framer-text"
                              style={{
                                '--font-selector':
                                  'R0Y7SW5zdHJ1bWVudCBTYW5zLTYwMA==',
                                '--framer-font-family':
                                  '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                '--framer-font-size': '28px',
                                '--framer-font-weight': '600',
                                '--framer-line-height': '1em',
                                '--framer-text-color':
                                  'var(--token-e69fcfc3-b8e4-4efa-8f3e-16e7e659965e, rgb(9, 54, 150))',
                              }}
                            >
                              STEP 5
                            </p>
                          </div>
                          <div
                            className="framer-1wphy1i"
                            data-framer-component-type="RichTextContainer"
                            style={{
                              transform: 'none',
                            }}
                          >
                            <p
                              className="framer-text"
                              style={{
                                '--font-selector':
                                  'Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=',
                                '--framer-font-family':
                                  '"Pretendard SemiBold", "Pretendard SemiBold Placeholder", sans-serif',
                                '--framer-font-size': '28px',
                                '--framer-font-weight': '600',
                                '--framer-line-height': '1em',
                                '--framer-text-color':
                                  'var(--token-e69fcfc3-b8e4-4efa-8f3e-16e7e659965e, rgb(9, 54, 150))',
                              }}
                            >
                              조판
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="framer-84i4vp">
                        <div
                          className="framer-1s6aocu"
                          data-framer-component-type="RichTextContainer"
                          style={{
                            transform: 'none',
                          }}
                        >
                          <p
                            className="framer-text"
                            style={{
                              '--font-selector':
                                'Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=',
                              '--framer-font-family':
                                '"Pretendard SemiBold", "Pretendard SemiBold Placeholder", sans-serif',
                              '--framer-font-size': '18px',
                              '--framer-line-height': '1.5em',
                              '--framer-text-color': 'rgb(33, 33, 33)',
                            }}
                          >
                            담당 조판자가 완성된 원고를 확정된 내지 디자인에
                            맞추어 편집 프로그램으로 변환합니다.
                          </p>
                        </div>
                        <div
                          className="framer-3gg43g"
                          data-framer-component-type="RichTextContainer"
                          style={{
                            transform: 'none',
                          }}
                        >
                          <p
                            className="framer-text"
                            style={{
                              '--font-selector':
                                'Q1VTVE9NO1ByZXRlbmRhcmQgTGlnaHQ=',
                              '--framer-font-family':
                                '"Pretendard Light", "Pretendard Light Placeholder", sans-serif',
                              '--framer-font-size': '18px',
                              '--framer-line-height': '1.5em',
                              '--framer-text-color': 'rgb(94, 94, 94)',
                            }}
                          >
                            -교재나 실용서의 경우 타 분야의 도서에 비해 사용하는
                            서체의 종류가 많기 때문에 경력이 많은 조판 작업자가
                            반드시 필요합니다. 일랑북스는 도서의 종류에 따라
                            해당 도서의 경험이 많은 전문 조판자를 배정하여
                            작업을 진행합니다.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="framer-19za7jz" data-framer-name="카드">
                    <div className="framer-1rc9mae">
                      <div className="framer-uzqock">
                        <div className="framer-10dvckg">
                          <div
                            aria-hidden="true"
                            className="framer-1xhyp0j"
                            data-framer-component-type="SVG"
                            style={{
                              flexShrink: '0',
                              imageRendering: 'pixelated',
                            }}
                          >
                            <div
                              className="svgContainer"
                              style={{
                                aspectRatio: 'inherit',
                                height: '100%',
                                width: '100%',
                              }}
                            >
                              <svg
                                style={{
                                  height: '100%',
                                  width: '100%',
                                }}
                              >
                                <use href="#svg-1530989827_928" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="framer-1k2js3z">
                          <div
                            className="framer-1qsu6mm"
                            data-framer-component-type="RichTextContainer"
                            style={{
                              transform: 'none',
                            }}
                          >
                            <p
                              className="framer-text"
                              style={{
                                '--font-selector':
                                  'R0Y7SW5zdHJ1bWVudCBTYW5zLTYwMA==',
                                '--framer-font-family':
                                  '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                '--framer-font-size': '28px',
                                '--framer-font-weight': '600',
                                '--framer-line-height': '1em',
                                '--framer-text-color':
                                  'var(--token-e69fcfc3-b8e4-4efa-8f3e-16e7e659965e, rgb(9, 54, 150))',
                              }}
                            >
                              STEP 7
                            </p>
                          </div>
                          <div
                            className="framer-13rho1f"
                            data-framer-component-type="RichTextContainer"
                            style={{
                              transform: 'none',
                            }}
                          >
                            <p
                              className="framer-text"
                              style={{
                                '--font-selector':
                                  'Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=',
                                '--framer-font-family':
                                  '"Pretendard SemiBold", "Pretendard SemiBold Placeholder", sans-serif',
                                '--framer-font-size': '28px',
                                '--framer-font-weight': '600',
                                '--framer-line-height': '1em',
                                '--framer-text-color':
                                  'var(--token-e69fcfc3-b8e4-4efa-8f3e-16e7e659965e, rgb(9, 54, 150))',
                              }}
                            >
                              표지 디자인
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="framer-7tdc6b">
                        <div
                          className="framer-1bhs5gg"
                          data-framer-component-type="RichTextContainer"
                          style={{
                            transform: 'none',
                          }}
                        >
                          <p
                            className="framer-text"
                            style={{
                              '--font-selector':
                                'Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=',
                              '--framer-font-family':
                                '"Pretendard SemiBold", "Pretendard SemiBold Placeholder", sans-serif',
                              '--framer-font-size': '18px',
                              '--framer-line-height': '1.5em',
                              '--framer-text-color': 'rgb(33, 33, 33)',
                            }}
                          >
                            담당 디자이너가 표지 디자인을 진행합니다.
                          </p>
                        </div>
                        <div
                          className="framer-ejoxzo"
                          data-framer-component-type="RichTextContainer"
                          style={{
                            transform: 'none',
                          }}
                        >
                          <p
                            className="framer-text"
                            style={{
                              '--font-selector':
                                'Q1VTVE9NO1ByZXRlbmRhcmQgTGlnaHQ=',
                              '--framer-font-family':
                                '"Pretendard Light", "Pretendard Light Placeholder", sans-serif',
                              '--framer-font-size': '18px',
                              '--framer-line-height': '1.5em',
                              '--framer-text-color': 'rgb(94, 94, 94)',
                            }}
                          >
                            -진행 방식은 본문 디자인과 같습니다. 표지 디자인
                            시안 2종의 PDF 파일을 저자님께 전송하면, 그중 1종을
                            선택하시어 추가 수정을 통해 완성도를 높여 나갑니다.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    rowGap: '32px',
                    width: '100%',
                  }}
                >
                  <div className="framer-eurttm" data-framer-name="카드">
                    <div className="framer-dsdo6h">
                      <div className="framer-6nri89">
                        <div className="framer-127zlra">
                          <div
                            aria-hidden="true"
                            className="framer-1ly5mvp"
                            data-framer-component-type="SVG"
                            style={{
                              flexShrink: '0',
                              imageRendering: 'pixelated',
                            }}
                          >
                            <div
                              className="svgContainer"
                              style={{
                                aspectRatio: 'inherit',
                                height: '100%',
                                width: '100%',
                              }}
                            >
                              <svg
                                style={{
                                  height: '100%',
                                  width: '100%',
                                }}
                              >
                                <use href="#svg-1850599495_1666" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="framer-61h0em">
                          <div
                            className="framer-grly0q"
                            data-framer-component-type="RichTextContainer"
                            style={{
                              transform: 'none',
                            }}
                          >
                            <p
                              className="framer-text"
                              style={{
                                '--font-selector':
                                  'R0Y7SW5zdHJ1bWVudCBTYW5zLTYwMA==',
                                '--framer-font-family':
                                  '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                '--framer-font-size': '28px',
                                '--framer-font-weight': '600',
                                '--framer-line-height': '1em',
                                '--framer-text-color':
                                  'var(--token-e69fcfc3-b8e4-4efa-8f3e-16e7e659965e, rgb(9, 54, 150))',
                              }}
                            >
                              STEP 2
                            </p>
                          </div>
                          <div
                            className="framer-1xggcki"
                            data-framer-component-type="RichTextContainer"
                            style={{
                              transform: 'none',
                            }}
                          >
                            <p
                              className="framer-text"
                              style={{
                                '--font-selector':
                                  'Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=',
                                '--framer-font-family':
                                  '"Pretendard SemiBold", "Pretendard SemiBold Placeholder", sans-serif',
                                '--framer-font-size': '28px',
                                '--framer-font-weight': '600',
                                '--framer-line-height': '1em',
                                '--framer-text-color':
                                  'var(--token-e69fcfc3-b8e4-4efa-8f3e-16e7e659965e, rgb(9, 54, 150))',
                              }}
                            >
                              출판 계약
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="framer-9i6ccw">
                        <div
                          className="framer-18y0oz0"
                          data-framer-component-type="RichTextContainer"
                          style={{
                            transform: 'none',
                          }}
                        >
                          <p
                            className="framer-text"
                            style={{
                              '--font-selector':
                                'Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=',
                              '--framer-font-family':
                                '"Pretendard SemiBold", "Pretendard SemiBold Placeholder", sans-serif',
                              '--framer-font-size': '18px',
                              '--framer-font-weight': '600',
                              '--framer-line-height': '1.5em',
                              '--framer-text-color': 'rgb(33, 33, 33)',
                            }}
                          >
                            상담 시 협의한 내용을 바탕으로 계약서를 작성합니다.
                          </p>
                        </div>
                        <div
                          className="framer-1uta7pj"
                          data-framer-component-type="RichTextContainer"
                          style={{
                            transform: 'none',
                          }}
                        >
                          <p
                            className="framer-text"
                            style={{
                              '--font-selector':
                                'Q1VTVE9NO1ByZXRlbmRhcmQgTGlnaHQ=',
                              '--framer-font-family':
                                '"Pretendard Light", "Pretendard Light Placeholder", sans-serif',
                              '--framer-font-size': '18px',
                              '--framer-font-weight': '300',
                              '--framer-line-height': '1.5em',
                              '--framer-text-color': 'rgb(94, 94, 94)',
                            }}
                          >
                            -작성을 완료한 계약서는 저자님과 일랑북스가 1부씩
                            보관합니다. 계약 체결 후 저자님은 약정 금액을 송금
                            후, 완전 완고를 이메일로 전송합니다.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="framer-le58hi" data-framer-name="카드">
                    <div className="framer-8fssiz">
                      <div className="framer-8iq45f">
                        <div className="framer-1upypqq">
                          <div
                            aria-hidden="true"
                            className="framer-1gwhken"
                            data-framer-component-type="SVG"
                            style={{
                              backgroundImage:
                                'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" overflow="visible"><path d="M 8 0 C 12.418 0 16 3.182 16 7.111 C 15.999 9.565 14.009 11.554 11.555 11.555 L 9.982 11.555 C 9.245 11.555 8.649 12.151 8.649 12.889 C 8.649 13.226 8.782 13.538 8.986 13.769 C 9.2 14.009 9.334 14.32 9.334 14.666 C 9.334 15.405 8.72 16 8 16 C 3.582 16 0 12.418 0 8 C 0 3.582 3.582 0 8 0 Z M 4.4 8 C 5.063 8 5.6 7.463 5.6 6.8 C 5.6 6.137 5.063 5.6 4.4 5.6 C 3.737 5.6 3.2 6.137 3.2 6.8 C 3.2 7.463 3.737 8 4.4 8 Z M 11.6 8 C 12.263 8 12.8 7.463 12.8 6.8 C 12.8 6.137 12.263 5.6 11.6 5.6 C 10.937 5.6 10.4 6.137 10.4 6.8 C 10.4 7.463 10.937 8 11.6 8 Z M 8 5.6 C 8.663 5.6 9.2 5.063 9.2 4.4 C 9.2 3.737 8.663 3.2 8 3.2 C 7.337 3.2 6.8 3.737 6.8 4.4 C 6.8 5.063 7.337 5.6 8 5.6 Z" fill="rgb(49, 86, 164)"></path></svg>\')',
                              backgroundSize: '100% 100%',
                              flexShrink: '0',
                              imageRendering: 'pixelated',
                            }}
                          ></div>
                        </div>
                        <div className="framer-2gfdwx">
                          <div
                            className="framer-18kndp"
                            data-framer-component-type="RichTextContainer"
                            style={{
                              transform: 'none',
                            }}
                          >
                            <p
                              className="framer-text"
                              style={{
                                '--font-selector':
                                  'R0Y7SW5zdHJ1bWVudCBTYW5zLTYwMA==',
                                '--framer-font-family':
                                  '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                '--framer-font-size': '28px',
                                '--framer-font-weight': '600',
                                '--framer-line-height': '1em',
                                '--framer-text-color': 'rgb(49, 86, 164)',
                              }}
                            >
                              STEP 4
                            </p>
                          </div>
                          <div
                            className="framer-1t049f4"
                            data-framer-component-type="RichTextContainer"
                            style={{
                              transform: 'none',
                            }}
                          >
                            <p
                              className="framer-text"
                              style={{
                                '--font-selector':
                                  'Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=',
                                '--framer-font-family':
                                  '"Pretendard SemiBold", "Pretendard SemiBold Placeholder", sans-serif',
                                '--framer-font-size': '28px',
                                '--framer-font-weight': '600',
                                '--framer-line-height': '1em',
                                '--framer-text-color':
                                  'var(--token-e69fcfc3-b8e4-4efa-8f3e-16e7e659965e, rgb(9, 54, 150))',
                              }}
                            >
                              본문 디자인
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="framer-116nmuc">
                        <div
                          className="framer-qtfdsc"
                          data-framer-component-type="RichTextContainer"
                          style={{
                            transform: 'none',
                          }}
                        >
                          <p
                            className="framer-text"
                            style={{
                              '--font-selector':
                                'Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=',
                              '--framer-font-family':
                                '"Pretendard SemiBold", "Pretendard SemiBold Placeholder", sans-serif',
                              '--framer-font-size': '18px',
                              '--framer-line-height': '1.5em',
                              '--framer-text-color': 'rgb(33, 33, 33)',
                            }}
                          >
                            담당 디자이너가 원고의 콘셉트에 맞게 내지 디자인을
                            진행합니다.
                          </p>
                        </div>
                        <div
                          className="framer-y2m8ac"
                          data-framer-component-type="RichTextContainer"
                          style={{
                            transform: 'none',
                          }}
                        >
                          <p
                            className="framer-text"
                            style={{
                              '--font-selector':
                                'Q1VTVE9NO1ByZXRlbmRhcmQgTGlnaHQ=',
                              '--framer-font-family':
                                '"Pretendard Light", "Pretendard Light Placeholder", sans-serif',
                              '--framer-font-size': '18px',
                              '--framer-line-height': '1.5em',
                              '--framer-text-color': 'rgb(94, 94, 94)',
                            }}
                          >
                            -본문 디자인 시안 2종의 PDF 파일을 저자님께
                            전송하면, 그중 1종을 선택하시어 더욱 세밀한 수정을
                            통해 완성도를 높여 나갑니다.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="framer-xgul7y" data-framer-name="카드">
                    <div className="framer-xxlm8f">
                      <div className="framer-9z3pxr">
                        <div className="framer-bjcxk">
                          <div
                            aria-hidden="true"
                            className="framer-tbdaur"
                            data-framer-component-type="SVG"
                            style={{
                              flexShrink: '0',
                              imageRendering: 'pixelated',
                            }}
                          >
                            <div
                              className="svgContainer"
                              style={{
                                aspectRatio: 'inherit',
                                height: '100%',
                                width: '100%',
                              }}
                            >
                              <svg
                                style={{
                                  height: '100%',
                                  width: '100%',
                                }}
                              >
                                <use href="#svg-2074834845_572" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="framer-1z8mnk">
                          <div
                            className="framer-1cjk4mr"
                            data-framer-component-type="RichTextContainer"
                            style={{
                              transform: 'none',
                            }}
                          >
                            <p
                              className="framer-text"
                              style={{
                                '--font-selector':
                                  'R0Y7SW5zdHJ1bWVudCBTYW5zLTYwMA==',
                                '--framer-font-family':
                                  '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                '--framer-font-size': '28px',
                                '--framer-font-weight': '600',
                                '--framer-line-height': '1em',
                                '--framer-text-color':
                                  'var(--token-e69fcfc3-b8e4-4efa-8f3e-16e7e659965e, rgb(9, 54, 150))',
                              }}
                            >
                              STEP 6
                            </p>
                          </div>
                          <div
                            className="framer-1o176r2"
                            data-framer-component-type="RichTextContainer"
                            style={{
                              transform: 'none',
                            }}
                          >
                            <p
                              className="framer-text"
                              style={{
                                '--font-selector':
                                  'Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=',
                                '--framer-font-family':
                                  '"Pretendard SemiBold", "Pretendard SemiBold Placeholder", sans-serif',
                                '--framer-font-size': '28px',
                                '--framer-font-weight': '600',
                                '--framer-line-height': '1em',
                                '--framer-text-color':
                                  'var(--token-e69fcfc3-b8e4-4efa-8f3e-16e7e659965e, rgb(9, 54, 150))',
                              }}
                            >
                              교정
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="framer-58xirx">
                        <div
                          className="framer-jx1rt4"
                          data-framer-component-type="RichTextContainer"
                          style={{
                            transform: 'none',
                          }}
                        >
                          <p
                            className="framer-text"
                            style={{
                              '--font-selector':
                                'Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=',
                              '--framer-font-family':
                                '"Pretendard SemiBold", "Pretendard SemiBold Placeholder", sans-serif',
                              '--framer-font-size': '18px',
                              '--framer-line-height': '1.5em',
                              '--framer-text-color': 'rgb(33, 33, 33)',
                            }}
                          >
                            담당 편집자가 3회에 걸쳐 교정을 진행합니다.
                          </p>
                        </div>
                        <div
                          className="framer-242rbk"
                          data-framer-component-type="RichTextContainer"
                          style={{
                            transform: 'none',
                          }}
                        >
                          <p
                            className="framer-text"
                            style={{
                              '--font-selector':
                                'Q1VTVE9NO1ByZXRlbmRhcmQgTGlnaHQ=',
                              '--framer-font-family':
                                '"Pretendard Light", "Pretendard Light Placeholder", sans-serif',
                              '--framer-font-size': '18px',
                              '--framer-line-height': '1.5em',
                              '--framer-text-color': 'rgb(94, 94, 94)',
                            }}
                          >
                            -저자님께는 2교 교정지를 pdf 파일로 보내 드립니다.
                            편집자가 요구하는 기간 내에 확인하신 후 수정 사항을
                            pdf 교정지에 직접 기재하시거나 워드/한글 파일에
                            정리하여 주시면 2교 수정 시 모두 반영합니다.
                          </p>
                          <p
                            className="framer-text"
                            style={{
                              '--font-selector':
                                'Q1VTVE9NO1ByZXRlbmRhcmQgTGlnaHQ=',
                              '--framer-font-family':
                                '"Pretendard Light", "Pretendard Light Placeholder", sans-serif',
                              '--framer-font-size': '18px',
                              '--framer-line-height': '1.5em',
                              '--framer-text-color': 'rgb(94, 94, 94)',
                            }}
                          >
                            -교정 단계 중 담당 편집자가 저자님이 별도로 준비하실
                            자료(머리말, 작가 이력 등)를 요청합니다.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="framer-x86o6t" data-framer-name="카드">
                    <div className="framer-17brulb">
                      <div className="framer-pz2tuc">
                        <div className="framer-1gk6qwi">
                          <div
                            aria-hidden="true"
                            className="framer-kpzpeh"
                            data-framer-component-type="SVG"
                            style={{
                              flexShrink: '0',
                              imageRendering: 'pixelated',
                            }}
                          >
                            <div
                              className="svgContainer"
                              style={{
                                aspectRatio: 'inherit',
                                height: '100%',
                                width: '100%',
                              }}
                            >
                              <svg
                                style={{
                                  height: '100%',
                                  width: '100%',
                                }}
                              >
                                <use href="#svg436509633_693" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="framer-1aopork">
                          <div
                            className="framer-1n04h9"
                            data-framer-component-type="RichTextContainer"
                            style={{
                              transform: 'none',
                            }}
                          >
                            <p
                              className="framer-text"
                              style={{
                                '--font-selector':
                                  'R0Y7SW5zdHJ1bWVudCBTYW5zLTYwMA==',
                                '--framer-font-family':
                                  '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                '--framer-font-size': '28px',
                                '--framer-font-weight': '600',
                                '--framer-line-height': '1em',
                                '--framer-text-color':
                                  'var(--token-e69fcfc3-b8e4-4efa-8f3e-16e7e659965e, rgb(9, 54, 150))',
                              }}
                            >
                              STEP 8
                            </p>
                          </div>
                          <div
                            className="framer-9399wl"
                            data-framer-component-type="RichTextContainer"
                            style={{
                              transform: 'none',
                            }}
                          >
                            <p
                              className="framer-text"
                              style={{
                                '--font-selector':
                                  'Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=',
                                '--framer-font-family':
                                  '"Pretendard SemiBold", "Pretendard SemiBold Placeholder", sans-serif',
                                '--framer-font-size': '28px',
                                '--framer-font-weight': '600',
                                '--framer-line-height': '1em',
                                '--framer-text-color':
                                  'var(--token-e69fcfc3-b8e4-4efa-8f3e-16e7e659965e, rgb(9, 54, 150))',
                              }}
                            >
                              제작
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="framer-fz1nhy">
                        <div
                          className="framer-1qh0c3v"
                          data-framer-component-type="RichTextContainer"
                          style={{
                            transform: 'none',
                          }}
                        >
                          <p
                            className="framer-text"
                            style={{
                              '--font-selector':
                                'Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=',
                              '--framer-font-family':
                                '"Pretendard SemiBold", "Pretendard SemiBold Placeholder", sans-serif',
                              '--framer-font-size': '18px',
                              '--framer-line-height': '1.5em',
                              '--framer-text-color': 'rgb(33, 33, 33)',
                            }}
                          >
                            본문과 표지의 최종 PDF 파일을 확인 후 계약된 사양에
                            따라 제작이 진행됩니다.
                          </p>
                        </div>
                        <div
                          className="framer-4oghw9"
                          data-framer-component-type="RichTextContainer"
                          style={{
                            transform: 'none',
                          }}
                        >
                          <p
                            className="framer-text"
                            style={{
                              '--font-selector':
                                'Q1VTVE9NO1ByZXRlbmRhcmQgTGlnaHQ=',
                              '--framer-font-family':
                                '"Pretendard Light", "Pretendard Light Placeholder", sans-serif',
                              '--framer-font-size': '18px',
                              '--framer-line-height': '1.5em',
                              '--framer-text-color': 'rgb(94, 94, 94)',
                            }}
                          >
                            -제작은 일반적으로 평일 기준 7일 정도 소요되며 제작
                            사양에 따라 기간은 변동될 수 있습니다. 인쇄 발주
                            전에 잔금을 송금하시면 제작 완료 후 계약서에 기재된
                            주소로 도서를 발송합니다.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="framer-p44x6u" data-framer-name="섹션4: 카톡문의">
        <Link href="https://open.kakao.com/o/sv0MPsAg" target="_blank">
          <Image
            src="/katalk-mb.png"
            width={720}
            height={269}
            alt="카톡문의"
            className="katalk-mb"
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
            className="katalk-pc"
            style={{
              objectFit: 'contain',
              position: 'relative',
              width: '100%',
              height: '100%',
            }}
          />
        </Link>
      </div>
      <ContactUs />
    </>
  );
}
