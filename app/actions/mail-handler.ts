'use server';

import nodemailer from 'nodemailer';
import { z } from 'zod';

export type formState = {
  success: boolean;
  message: string;
} | null;

const formSchema = z.object({
  name: z.string().min(1),
  phone: z.string().min(1),
  email: z.string(),
  bookTitle: z.string().min(1),
  bookCategory: z.array(z.string()).min(1, '도서 분야를 선택해 주세요.'),
  purpose: z.string(),
  completeness: z.string().min(1, '원고 완성도를 선택해 주세요.'),
  bookDescription: z.string().optional(),
  schedule: z.string().optional(),
  toIllangbooks: z.array(z.string()).default([]),
  printingPlan: z.array(z.string()).default([]),
  printRun: z
    .string()
    .nullish()
    .transform((val) => val ?? '-'),
  printingMethod: z
    .string()
    .nullish()
    .transform((val) => val ?? '-'),
  coverType: z
    .string()
    .nullish()
    .transform((val) => val ?? '-'),
  printingPreferences: z
    .string()
    .nullish()
    .transform((val) => val ?? '-'),
  manuscriptFile: z
    .instanceof(File)
    .refine((file) => file instanceof File && file.size <= 5 * 1024 * 1024, {
      message: '파일 크기는 4MB를 초과할 수 없습니다.',
    })
    .nullish(),
});

export async function handleForm(
  prevState: formState,
  formData: FormData
): Promise<formState> {
  const file = formData.get('manuscriptFile') as File | null;
  const attachments = [];

  if (file && file.size > 0) {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    attachments.push({
      filename: file.name,
      content: buffer,
    });
  }

  const fields = {
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
    manuscriptFile: file,
  };
  const validateFields = formSchema.safeParse(fields);

  // 에러 핸들링
  if (!validateFields.success) {
    return { success: false, message: '문의 폼을 확인해 주세요.' };
  }

  // transporter setup
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
    to: process.env.SMTP_USERNAME,
    subject: '도서 문의 메일이 도착하였습니다.',
    text: `저자명(기업명) ${inquiryData.name}\n연락처 ${inquiryData.phone}\n이메일 ${inquiryData.email}\n작업 도서명 ${inquiryData.bookTitle}\n도서 분야 ${inquiryData.bookCategory}\n출판 목적 ${inquiryData.purpose}\n원고 완성도 ${inquiryData.completeness}\n도서 소개 및 예상 독자층 ${inquiryData.bookDescription}\n희망 일정 ${inquiryData.schedule}\n일랑북스에 기대하는 역할 ${inquiryData.toIllangbooks.join(', ')}\n인쇄 계획 ${inquiryData.printingPlan.join(', ')}\n예상 부수 ${inquiryData.printRun}\n내지 인쇄 방식 ${inquiryData.printingMethod}\n표지 형태 ${inquiryData.coverType}\n인쇄·제작 방향에 대한 선호 ${inquiryData.printingPreferences}`,
    html: `<div>
    도서 문의 메일이 도착했습니다.
    <br/><br/>
        <strong>저자명(기업명)</strong> 
        <br/>
        ${inquiryData.name}
        <br/><br/>
        <strong>연락처</strong> 
        <br/>
        ${inquiryData.phone}
        <br/><br/>
        <strong>이메일</strong> 
        <br/>
        ${inquiryData.email}
        <br/><br/>
        <strong>작업 도서명</strong> 
        <br/>
        ${inquiryData.bookTitle}
        <br/><br/>
        <strong>도서 분야</strong> 
        <br/>
        ${inquiryData.bookCategory}
        <br/><br/>
        <strong>출판 목적</strong> 
        <br/>
        ${inquiryData.purpose}
        <br/><br/>
        <strong>원고 완성도</strong> 
        <br/>
        ${inquiryData.completeness}
        <br/><br/>
        <strong>도서 소개 및 예상 독자층</strong> 
        <br/>
        ${inquiryData.bookDescription}
        <br/><br/>
        <strong>희망 일정</strong> 
        <br/>
        ${inquiryData.schedule}
        <br/><br/>
        <strong>일랑북스에 기대하는 역할</strong> 
        <br/>
        ${inquiryData.toIllangbooks.join(', ')}
        <br/><br/>
        <strong>인쇄 계획</strong> 
        <br/>
        ${inquiryData.printingPlan.join(', ')}
        <br/><br/>
        <strong>예상 부수</strong> 
        <br/>
        ${inquiryData.printRun}
        <br/><br/>
        <strong>내지 인쇄 방식</strong> 
        <br/>
        ${inquiryData.printingMethod}
        <br/><br/>
        <strong>표지 형태</strong> 
        <br/>
        ${inquiryData.coverType}
        <br/><br/>
        <strong>인쇄·제작 방향에 대한 선호</strong> 
        <br/>
        ${inquiryData.printingPreferences}
        <br/>
</div>`,
    attachments: attachments,
  };

  // send mail
  try {
    await transporter.sendMail(message);
    return {
      success: true,
      message: '문의가 접수되었습니다. 빠른 시일 내에 답변 드리겠습니다.',
    };
  } catch {
    return {
      success: false,
      message: '전송에 실패하였습니다. 작성하신 내용을 확인해 주세요.',
    };
  }
}
