'use server';

import nodemailer from 'nodemailer';
import { z } from 'zod';

const formSchema = z.object({
  name: z.string().min(1),
  phone: z.string().min(1),
  email: z.string(),
  bookTitle: z.string().min(1),
  bookCategory: z.array(z.string()),
  purpose: z.string(),
  completeness: z.string(),
  bookDescription: z.string().nullish(),
  schedule: z.string().nullish(),
  toIllangbooks: z.array(z.string()).default([]),
  printingPlan: z.array(z.string()).default([]),
  printRun: z
    .string()
    .nullish()
    .transform((val) => val ?? ''),
  printingMethod: z
    .string()
    .nullish()
    .transform((val) => val ?? ''),
  coverType: z
    .string()
    .nullish()
    .transform((val) => val ?? ''),
  printingPreferences: z
    .string()
    .nullish()
    .transform((val) => val ?? ''),
});

export async function handleForm(formData: FormData) {
  const validateFields = formSchema.safeParse({
    name: formData.get('name'),
    phone: formData.get('phone'),
    email: formData.get('email'),
    bookTitle: formData.get('bookTitle'),
    bookCategory: formData.getAll('bookCategory'),
    purpose: formData.get('purpose'),
    completeness: formData.get('completeness'),
    bookDescription: formData.get('bookDescription'),
    schedule: formData.get('schedule'),
    toIllangbooks: formData.getAll('toIllangbooks'),
    printingPlan: formData.getAll('printingPlan'),
    printRun: formData.get('printRun'),
    printingMethod: formData.get('printingMethod'),
    coverType: formData.get('coverType'),
    printingPreferences: formData.get('printingPreferences'),
  });

  // 에러 핸들링
  if (!validateFields.success) {
    console.log('Validation failed:', validateFields.error);
    return;
  }

  //   transporter setup
  const transporter = nodemailer.createTransport({
    service: 'naver',
    host: 'smtp.naver.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const inquiryData = validateFields.data;

  // 메일 옵션
  const message = {
    from: process.env.SMTP_USERNAME,
    to: process.env.RECEIVER_EMAIL,
    subject: '도서 견적 메일이 도착하였습니다.',
    text: `저자명(기업명): ${inquiryData.name}\n연락처: ${inquiryData.phone}\n이메일: ${inquiryData.email}\n작업 도서명: ${inquiryData.bookTitle}\n도서 분야: ${inquiryData.bookCategory}\n출판 목적: ${inquiryData.purpose}\n원고 완성도: ${inquiryData.completeness}\n도서 소개 및 예상 독자층: ${inquiryData.bookDescription}\n희망 일정: ${inquiryData.schedule}\n일랑북스에 기대하는 역할: ${inquiryData.toIllangbooks.join(', ')}\n인쇄 계획: ${inquiryData.printingPlan.join(', ')}\n예상 부수: ${inquiryData.printRun}\n내지 인쇄 방식: ${inquiryData.printingMethod}\n표지 형태: ${inquiryData.coverType}\n인쇄·제작 방향에 대한 선호: ${inquiryData.printingPreferences}`,
    html: `저자명(기업명): ${inquiryData.name}<br/>연락처: ${inquiryData.phone}<br/>이메일: ${inquiryData.email}<br/>작업 도서명: ${inquiryData.bookTitle}<br/>도서 분야: ${inquiryData.bookCategory}<br/>출판 목적: ${inquiryData.purpose}<br/>원고 완성도: ${inquiryData.completeness}<br/>도서 소개 및 예상 독자층: ${inquiryData.bookDescription}<br/>희망 일정: ${inquiryData.schedule}<br/>일랑북스에 기대하는 역할: ${inquiryData.toIllangbooks.join(', ')}<br/>인쇄 계획: ${inquiryData.printingPlan.join(', ')}<br/>예상 부수: ${inquiryData.printRun}<br/>내지 인쇄 방식: ${inquiryData.printingMethod}<br/>표지 형태: ${inquiryData.coverType}<br/>인쇄·제작 방향에 대한 선호: ${inquiryData.printingPreferences}`,
  };

  //   send mail
  try {
    await transporter.sendMail(message);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }

  console.log(validateFields.data);
  console.log('ID 확인:', process.env.SMTP_USERNAME);
  console.log('PW 존재 여부:', process.env.SMTP_PASSWORD ? '있음' : '없음');
  console.log('ID 확인:', process.env.RECEIVER_EMAIL);
}
