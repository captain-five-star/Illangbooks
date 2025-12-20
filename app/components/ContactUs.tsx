import React from 'react';
import { motion } from 'motion/react';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import Title from './Title';

const ContactUs = () => {
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append('access_key', '085056b3-f5ee-4677-8752-e4815de74b6a');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success('전송되었습니다.');
        event.currentTarget.reset();
      } else {
        toast.error('전송에 실패하였습니다.');
      }
    } catch (error) {
      toast.error('오류가 발생했습니다.');
    }
  };

  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <div className="framer-ur7txx" data-framer-name="섹션5: 문의하기">
        <div className="framer-kd1ens flex-col justify-between xl:flex-row">
          <div>
            <h2 className="font-instrument text-[28px] font-bold md:text-[48px] xl:text-[72px]">
              Contact
            </h2>
          </div>
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onSubmit={onSubmit}
            className="grid w-full gap-3 sm:grid-cols-2 sm:gap-5 xl:max-w-2xl"
          >
            <div>
              <p className="font-pretendard mb-2 text-base font-medium xl:text-lg">
                이름
              </p>
              <div className="flex rounded-lg border border-gray-300 pl-3 dark:border-gray-600">
                <input
                  name="name"
                  type="text"
                  placeholder="이름(회사명)을 입력하세요"
                  className="font-pretendard w-full p-3 text-sm outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <p className="mb-2 text-sm font-medium">Email id</p>
              <div className="flex rounded-lg border border-gray-300 pl-3 dark:border-gray-600">
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 text-sm outline-none"
                  required
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <p className="mb-2 text-sm font-medium">Message</p>
              <textarea
                name="message"
                rows={8}
                placeholder="Enter your message"
                className="w-full rounded-lg border border-gray-300 p-3 text-sm outline-none dark:border-gray-600"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-primary flex w-max cursor-pointer gap-2 rounded-full px-10 py-3 text-sm text-white transition-all hover:scale-103"
            >
              Submit
            </button>
          </motion.form>
        </div>
        {/* <Title title="Contact" desc="Get in touch with us" /> */}
      </div>
    </>
  );
};

export default ContactUs;
