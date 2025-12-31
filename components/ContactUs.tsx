import { motion } from 'motion/react';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from './ui/separator';
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from './ui/select';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { handleForm } from '@/app/actions/mail-handler';
import { useState } from 'react';

const ContactUs = ({ isMobile }: { isMobile: boolean }) => {
  const [checkedStates, setCheckedStates] = useState<Record<string, boolean>>(
    {}
  );
  const toggleCheck = (id: string, checked: boolean) => {
    setCheckedStates((prev) => ({
      ...prev,
      [id]: checked,
    }));
  };

  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <motion.form
        initial={{
          opacity: 0,
          x: isMobile ? 0 : 30,
          y: isMobile ? 20 : 0,
        }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="left mb-10 h-full w-full xl:w-[58%]"
        action={handleForm}
      >
        <Separator className="my-6 xl:hidden" />
        <FieldSet>
          <Field>
            <FieldLabel htmlFor="name">
              저자명/기업명<span className="text-amber-700">*</span>
            </FieldLabel>
            <div className="col-span-2 pl-2">
              <Input
                id="name"
                name="name"
                autoComplete="off"
                placeholder="저자명/기업명을 입력해 주세요."
              />
            </div>
          </Field>
          <Field>
            <FieldLabel htmlFor="phone">
              연락처<span className="text-amber-700">*</span>
            </FieldLabel>
            <div className="col-span-2 pl-2">
              <Input
                id="phone"
                name="phone"
                autoComplete="off"
                placeholder="연락처를 입력해 주세요."
              />
            </div>
          </Field>
          <Field>
            <FieldLabel htmlFor="email">
              이메일<span className="text-amber-700">*</span>
            </FieldLabel>
            <div className="col-span-2 pl-2">
              <Input
                id="email"
                name="email"
                autoComplete="off"
                placeholder="이메일을 입력해 주세요."
              />
            </div>
          </Field>
          <Field>
            <FieldLabel htmlFor="bookTitle">
              작업 도서명<span className="text-amber-700">*</span>
            </FieldLabel>
            <div className="col-span-2 pl-2">
              <Input
                id="bookTitle"
                name="bookTitle"
                autoComplete="off"
                placeholder="도서명(가제)을 입력해 주세요."
              />
            </div>
          </Field>
          <FieldGroup className="grid grid-cols-3 align-top">
            <FieldLabel htmlFor="bookCategory" className="items-baseline">
              도서 분야<span className="text-amber-700">*</span>
            </FieldLabel>
            <div className="col-span-2 pl-2">
              <FieldGroup className="col-span-2 flex items-start gap-0 xl:grid xl:grid-cols-2">
                <div className="flex flex-col">
                  <Field
                    orientation="horizontal"
                    className="mb-3 flex items-center md:mb-4 xl:col-span-1"
                  >
                    <Checkbox
                      id="novelEssay"
                      name="bookCategory"
                      value="소설/에세이"
                    />
                    <FieldLabel
                      htmlFor="novelEssay"
                      className="left w-full place-items-start font-normal"
                      defaultChecked
                    >
                      소설/에세이
                    </FieldLabel>
                  </Field>
                  <Field
                    orientation="horizontal"
                    className="mb-3 flex items-center md:mb-4 xl:col-span-1"
                  >
                    <Checkbox
                      id="humanities"
                      name="bookCategory"
                      value="인문"
                    />
                    <FieldLabel
                      htmlFor="humanities"
                      className="left w-full place-items-start font-normal"
                      defaultChecked
                    >
                      인문
                    </FieldLabel>
                  </Field>
                  <Field
                    orientation="horizontal"
                    className="mb-3 flex items-center md:mb-4 xl:col-span-1"
                  >
                    <Checkbox
                      id="businessSelfHelp"
                      name="bookCategory"
                      value="경영/자기계발"
                    />
                    <FieldLabel
                      htmlFor="businessSelfHelp"
                      className="left w-full place-items-start font-normal"
                      defaultChecked
                    >
                      경영/자기계발
                    </FieldLabel>
                  </Field>
                  <Field
                    orientation="horizontal"
                    className="mb-3 flex items-center md:mb-4 xl:col-span-1"
                  >
                    <Checkbox
                      id="practical"
                      name="bookCategory"
                      value="실용(여행, IT, 요리 등)"
                    />
                    <FieldLabel
                      htmlFor="practical"
                      className="left w-full place-items-start font-normal"
                      defaultChecked
                    >
                      실용(여행, IT, 요리 등)
                    </FieldLabel>
                  </Field>
                  <Field
                    orientation="horizontal"
                    className="mb-3 flex items-center md:mb-4 xl:col-span-1"
                  >
                    <Checkbox id="children" name="bookCategory" value="동화" />
                    <FieldLabel
                      htmlFor="children"
                      className="left w-full place-items-start font-normal"
                      defaultChecked
                    >
                      동화
                    </FieldLabel>
                  </Field>
                </div>
                <div className="flex w-full flex-col">
                  <Field
                    orientation="horizontal"
                    className="mb-3 flex flex-col items-start md:mb-4"
                  >
                    <div className="flex justify-items-start">
                      <Checkbox
                        id="textbook"
                        name="bookCategory"
                        value="교재(과목명) : "
                        onCheckedChange={(v) => toggleCheck('textbook', !!v)}
                      />
                      <FieldLabel
                        htmlFor="textbook"
                        className="left place-items-start font-normal"
                        defaultChecked
                      >
                        교재(과목명)
                      </FieldLabel>
                    </div>
                    <div className="w-full pl-6">
                      <Input
                        id="textbookDetail"
                        name="bookCategory"
                        disabled={!checkedStates['textbook']}
                        autoComplete="off"
                        placeholder="교과목을 작성해 주세요."
                        className="mt-2 h-6 w-full text-sm md:h-8 md:text-sm"
                      />
                    </div>
                  </Field>
                  <Field
                    orientation="horizontal"
                    className="mb-3 flex flex-col items-start md:mb-4"
                  >
                    <div className="flex justify-items-start">
                      <Checkbox
                        id="etc"
                        name="bookCategory"
                        value="기타 : "
                        onCheckedChange={(v) => toggleCheck('etc', !!v)}
                      />
                      <FieldLabel
                        htmlFor="etc"
                        className="left place-items-start font-normal"
                        defaultChecked
                      >
                        기타
                      </FieldLabel>
                    </div>
                    <div className="w-full pl-6">
                      <Input
                        id="etcDetail"
                        name="bookCategory"
                        disabled={!checkedStates['etc']}
                        autoComplete="off"
                        placeholder="분야를 작성해 주세요."
                        className="mt-2 h-6 w-full text-sm md:h-8 md:text-sm"
                      />
                    </div>
                  </Field>
                </div>
              </FieldGroup>
            </div>
          </FieldGroup>
          <Field>
            <FieldLabel
              htmlFor="purpose"
              className="h-full items-baseline pt-1"
            >
              책을 만드는 목적
            </FieldLabel>
            <div className="col-span-2 h-full pl-2">
              <Select name="purpose">
                <SelectTrigger>
                  <SelectValue placeholder="내용을 선택해 주세요." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="개인 브랜딩">개인 브랜딩</SelectItem>
                  <SelectItem value="기업 교육 자료">기업 교육 자료</SelectItem>
                  <SelectItem value="개인 소장·지인 공유">
                    개인 소장·지인 공유
                  </SelectItem>
                  <SelectItem value="내부 자료용(기업·단체 성과물)">
                    내부 자료용(기업·단체 성과물)
                  </SelectItem>
                  <SelectItem value="제한된 배포(기업·기관·학원 등)">
                    제한된 배포(기업·기관·학원 등)
                  </SelectItem>
                  <SelectItem value="일반 독자 대상(서점 유통 염두)">
                    일반 독자 대상(서점 유통 염두)
                  </SelectItem>
                </SelectContent>
              </Select>
              <FieldDescription>
                *일랑북스는 유통 대행은 진행하지 않습니다.
              </FieldDescription>
            </div>
          </Field>
          <Field>
            <FieldLabel htmlFor="completeness" className="h-full">
              원고 완성도<span className="text-amber-700">*</span>
            </FieldLabel>
            <div className="col-span-2 h-full pl-2">
              <Select name="completeness" required>
                <SelectTrigger>
                  <SelectValue placeholder="내용을 선택해 주세요." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="완성(100%)">완성(100%)</SelectItem>
                  <SelectItem value="거의 완성(약 80%)">
                    거의 완성(약 80%)
                  </SelectItem>
                  <SelectItem value="초고 단계(약 50%)">
                    초고 단계(약 50%)
                  </SelectItem>
                  <SelectItem value="기획·구성 단계(아이디어 위주)">
                    기획·구성 단계(아이디어 위주)
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </Field>
          <Field>
            <FieldLabel
              htmlFor="bookDescription"
              className="h-full items-baseline pt-1"
            >
              도서 소개 및 예상 독자층
            </FieldLabel>
            <div className="col-span-2 pl-2">
              <Textarea
                id="bookDescription"
                name="bookDescription"
                autoComplete="off"
                placeholder={`도서에 대한 간략한 소개 및 예상 독자층을 작성해 주세요.
(예: 직장인을 대상으로 한 토익 교재입니다. 짬을 내어 학습할 수 있도록 각 장은 10분 내 학습 분량으로 구성되며, 기본 설명과 간단한 예문으로 전개됩니다.)`}
                rows={6}
                className="col-span-2 text-sm"
              />
            </div>
          </Field>
          <Field>
            <FieldLabel htmlFor="schedule" className="h-full">
              원하는 일정
            </FieldLabel>
            <div className="col-span-2 h-full pl-2">
              <Select name="schedule">
                <SelectTrigger>
                  <SelectValue placeholder="내용을 선택해 주세요." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-2개월">1-2개월</SelectItem>
                  <SelectItem value="3-4개월">3-4개월</SelectItem>
                  <SelectItem value="상담 후 협의">상담 후 협의</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </Field>
          <FieldGroup className="grid grid-cols-3 align-top">
            <FieldLabel
              htmlFor="toIllangbooks"
              className="items-baseline break-keep"
            >
              일랑북스에 기대하는 역할 (복수 선택 가능)
            </FieldLabel>
            <FieldGroup className="col-span-2 flex items-start pl-2">
              <div className="flex flex-col">
                <Field
                  orientation="horizontal"
                  className="mb-3 flex items-center md:mb-4 xl:col-span-1"
                >
                  <Checkbox
                    id="fullProgress"
                    name="toIllangbooks"
                    value="기획·편집·디자인·조판(전체 진행)"
                  />
                  <FieldLabel
                    htmlFor="fullProgress"
                    className="left w-full place-items-start font-normal"
                    defaultChecked
                  >
                    기획·편집·디자인·조판(전체 진행)
                  </FieldLabel>
                </Field>
                <Field
                  orientation="horizontal"
                  className="mb-3 flex items-center md:mb-4 xl:col-span-1"
                >
                  <Checkbox
                    id="editingDesign"
                    name="toIllangbooks"
                    value="편집·디자인·조판(기획이 완료된 원고에 한함)"
                  />
                  <FieldLabel
                    htmlFor="editingDesign"
                    className="left w-full place-items-start font-normal"
                    defaultChecked
                  >
                    편집·디자인·조판(기획이 완료된 원고에 한함)
                  </FieldLabel>
                </Field>
                <Field
                  orientation="horizontal"
                  className="mb-1 flex items-center md:mb-2 xl:col-span-1"
                >
                  <Checkbox
                    id="printingProduction"
                    name="toIllangbooks"
                    value="인쇄·제작"
                  />
                  <FieldLabel
                    htmlFor="printingProduction"
                    className="left w-full place-items-start font-normal"
                    defaultChecked
                  >
                    인쇄·제작
                  </FieldLabel>
                </Field>
                <FieldDescription>
                  *인쇄·제작은 편집 진행 시에 한해 선택 가능합니다.
                </FieldDescription>
              </div>
            </FieldGroup>
          </FieldGroup>
          <div>
            <FieldGroup className="grid grid-cols-3 align-top">
              <FieldLabel
                htmlFor="printingPlan"
                className="items-baseline break-keep"
              >
                인쇄 계획
              </FieldLabel>
              <FieldGroup className="col-span-2 flex items-start pl-2">
                <div className="flex flex-col">
                  <Field
                    orientation="horizontal"
                    className="mb-3 flex items-center md:mb-4 xl:col-span-1"
                  >
                    <Checkbox
                      id="noPrinting"
                      name="printingPlan"
                      value="인쇄를 고려하지 않음(거래처가 있어요)"
                    />
                    <FieldLabel
                      htmlFor="noPrinting"
                      className="left w-full place-items-start font-normal"
                      defaultChecked
                    >
                      인쇄를 고려하지 않음(거래처가 있어요)
                    </FieldLabel>
                  </Field>
                  <Field
                    orientation="horizontal"
                    className="mb-3 flex items-center md:mb-4 xl:col-span-1"
                  >
                    <Checkbox
                      id="printingUndecided"
                      name="printingPlan"
                      value="인쇄 예정이나 구체적인 사양은 미정"
                    />
                    <FieldLabel
                      htmlFor="printingUndecided"
                      className="left w-full place-items-start font-normal"
                      defaultChecked
                    >
                      인쇄 예정이나 구체적인 사양은 미정
                    </FieldLabel>
                  </Field>
                  <Field
                    orientation="horizontal"
                    className="mb-3 flex items-center md:mb-4 xl:col-span-1"
                  >
                    <Checkbox
                      id="printingExpected"
                      onCheckedChange={(v) =>
                        toggleCheck('printingExpected', !!v)
                      }
                      name="printingPlan"
                      value="인쇄 예정이며 대략적인 조건이 있음"
                    />
                    <FieldLabel
                      htmlFor="printingExpected"
                      className="left w-full place-items-start font-normal"
                      defaultChecked
                    >
                      인쇄 예정이며 대략적인 조건이 있음
                    </FieldLabel>
                  </Field>
                </div>
              </FieldGroup>
            </FieldGroup>
            <div className="my-4 flex flex-col gap-4 rounded-2xl bg-[#fdfdfd] px-4 py-4 shadow-[0_1px_6px_rgba(0,0,0,0.1)] xl:px-6 xl:py-6">
              <Field className="">
                <FieldLabel htmlFor="printRun" className="h-full">
                  예상 부수
                </FieldLabel>
                <div className="col-span-2 h-full pl-2">
                  <Select
                    name="printRun"
                    disabled={!checkedStates['printingExpected']}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="내용을 선택해 주세요." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="100부 미만">100부 미만</SelectItem>
                      <SelectItem value="300~500부">300~500부</SelectItem>
                      <SelectItem value="1000부">1000부</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </Field>
              <Field>
                <FieldLabel htmlFor="printingMethod" className="h-full">
                  내지 인쇄 방식
                </FieldLabel>
                <div className="col-span-2 h-full pl-2">
                  <Select
                    name="printingMethod"
                    disabled={!checkedStates['printingExpected']}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="내용을 선택해 주세요." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="전면 컬러">전면 컬러</SelectItem>
                      <SelectItem value="일부 컬러">일부 컬러</SelectItem>
                      <SelectItem value="흑백">흑백</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </Field>
              <Field>
                <FieldLabel htmlFor="coverType" className="h-full">
                  표지 형태
                </FieldLabel>
                <div className="col-span-2 h-full pl-2">
                  <Select
                    name="coverType"
                    disabled={!checkedStates['printingExpected']}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="내용을 선택해 주세요." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="일반(무선제본)">
                        일반(무선제본)
                      </SelectItem>
                      <SelectItem value="양장">양장</SelectItem>
                      <SelectItem value="미정(계약 후 협의)">
                        미정(계약 후 협의)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </Field>
              <Field>
                <FieldLabel htmlFor="printingPreference" className="h-full">
                  인쇄·제작 방향에 대한 선호
                </FieldLabel>
                <div className="col-span-2 h-full pl-2">
                  <Select
                    name="printingPreference"
                    disabled={!checkedStates['printingExpected']}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="내용을 선택해 주세요." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="디자인·후가공 등 고급스러운 이미지를 원함">
                        디자인·후가공 등 고급스러운 이미지를 원함
                      </SelectItem>
                      <SelectItem value="제작비를 고려한 합리적인 구성을 원함">
                        제작비를 고려한 합리적인 구성을 원함
                      </SelectItem>
                      <SelectItem value="미정(계약 후 협의)">
                        미정(계약 후 협의)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </Field>
            </div>
          </div>
        </FieldSet>
        <Field className="mb-6">
          <FieldLabel htmlFor="manuscriptFile">
            원고 파일 첨부<span className="text-amber-700">*</span>
          </FieldLabel>
          <div className="col-span-2 pl-2">
            <Input
              id="manuscriptFile"
              autoComplete="off"
              type="file"
              className="h-10 border-0 shadow-none md:h-12"
            />
          </div>
        </Field>
        <FieldSet>
          <div className="my-2 flex flex-col items-center">
            <Field
              orientation="horizontal"
              className="mb-3 flex items-center md:mb-4 xl:col-span-1"
            >
              <Checkbox id="guidanceCheck" required />
              <FieldLabel
                htmlFor="guidanceCheck"
                className="left w-full place-items-start font-normal"
                defaultChecked
              >
                문의 전 안내사항을 확인했습니다.
              </FieldLabel>
            </Field>
            <Field
              orientation="horizontal"
              className="mb-3 flex items-center md:mb-4 xl:col-span-1"
            >
              <Checkbox id="agreement" required />
              <FieldLabel
                htmlFor="agreement"
                className="left w-full place-items-start font-normal"
                defaultChecked
              >
                견적 안내를 위한 개인정보 수집 및 이용에 동의합니다.
              </FieldLabel>
            </Field>
          </div>
        </FieldSet>
        <FieldSet>
          <Button type="submit" className="mb-4">
            견적 문의 보내기
          </Button>
        </FieldSet>
      </motion.form>
    </>
  );
};

export default ContactUs;
