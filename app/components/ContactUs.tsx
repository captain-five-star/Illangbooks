import React from 'react';
import { motion } from 'motion/react';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';

const ContactUs = ({ isMobile }: { isMobile: boolean }) => {
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append('access_key', '085056b3-f5ee-4677-8752-e4815de74b6a');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success('전송되었습니다.');
        form.reset();
      } else {
        toast.error('전송에 실패하였습니다.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('오류가 발생했습니다.');
    }
  };

  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <div className="framer-ur7txx" data-framer-name="섹션5: 문의하기">
        <div className="framer-kd1ens flex-col justify-between xl:flex-row">
          <motion.div
            initial={{
              opacity: 0,
              x: isMobile ? 0 : -30,
              y: isMobile ? 20 : 0,
            }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <h2 className="font-instrument text-[28px] leading-[0.8] font-bold md:text-[48px] xl:text-[72px]">
              Contact
            </h2>
          </motion.div>
          <motion.form
            initial={{
              opacity: 0,
              x: isMobile ? 0 : 30,
              y: isMobile ? 20 : 0,
            }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onSubmit={onSubmit}
            className="flex w-full flex-col gap-3 sm:gap-5 xl:max-w-[58%]"
          >
            <div>
              <div className="flex rounded-lg border border-gray-300 pl-3 dark:border-gray-600">
                <input
                  name="name"
                  type="text"
                  placeholder="이름(회사명)"
                  className="w-full px-1.5 py-2.5 text-sm outline-none md:text-base"
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex rounded-lg border border-gray-300 pl-3 dark:border-gray-600">
                <input
                  name="phone"
                  type="text"
                  placeholder="전화번호"
                  className="w-full px-1.5 py-2.5 text-sm outline-none md:text-base"
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex rounded-lg border border-gray-300 pl-3 dark:border-gray-600">
                <input
                  name="email"
                  type="email"
                  placeholder="이메일"
                  className="w-full px-1.5 py-2.5 text-sm outline-none md:text-base"
                  required
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <textarea
                name="message"
                rows={8}
                placeholder="문의 내용을 상세히 입력해 주세요."
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none md:text-base dark:border-gray-600"
                required
              />
            </div>

            <div>
              <div className="my-3 text-xs text-pretty md:text-base xl:text-lg">
                <div className="">
                  <p>
                    <strong className="text-[#5E5E5E]">
                      - 외주 편집, 자비 출판 관련 문의
                    </strong>
                  </p>
                  <p className="text-[#A1A1A1]">
                    도서 장르, 제목, 원고(예상)분량, 원고 완성도, 원고 구성
                    요소(EX: 텍스트, 사진, 삽화, 도표, 음원 유무 및 대략의 개수)
                    필수 기재
                  </p>
                </div>
                <div className="mt-4">
                  <p>
                    <strong className="text-[#5E5E5E]">
                      - 출판 코칭 관련 문의
                    </strong>
                  </p>
                  <p className="text-[#A1A1A1]">
                    코칭 목적 (EX: 개인 소장용 도서 출간, 출판사 투고 및 계약
                    관련, 출판사 취업(창업) 준비 등) 필수 기재
                  </p>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="framer-3F5nR framer-1kzllwq cursor-pointer"
            >
              <p className="text-base text-white md:text-lg lg:text-[21px]">
                출판 상담 문의하기
              </p>
            </button>
          </motion.form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
