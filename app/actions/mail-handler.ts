'use server';

import nodemailer from 'nodemailer';
// const nodemailer = require('nodemailer');

export async function handleForm(formData: FormData) {
  const inquiryData = {
    name: formData.get('name'),
    email: formData.get('email'),
  };

  //   transporter setup
  const transporter = nodemailer.createTransport({
    service: 'naver',
    host: 'smtp.naver.com',
    port: 587,
    secure: false,
    auth: {
      user: 'yilang2019@naver.com',
      pass: 'WPXKJUPFEH5C',
    },
  });

  // 메일 옵션
  const message = {
    from: '',
    to: 'canxi925@gmail.com',
    subject: '도서 견적 메일이 도착하였습니다.',
    text: `Name: ${inquiryData.name}\nEmail: ${inquiryData.email}`,
    html: `<p>Name: ${inquiryData.name}</p><p>Email: ${inquiryData.email}</p>`,
  };

  //   send mail
  try {
    await transporter.sendMail(message);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }

  console.log(inquiryData);
}
