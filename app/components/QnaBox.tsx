import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/app/components/ui/accordion';
import { Separator } from '@/app/components/ui/separator';
import { ReactNode } from 'react';

const QnaBox = ({
  title = '',
  desc = '',
  foot = '',
}: React.PropsWithChildren<{
  title: string;
  desc: ReactNode;
  foot?: ReactNode;
}>) => {
  return (
    // <div className="framer-ntn7d0">
    <>
      <Separator />
      <Accordion type="multiple" className="w-full px-2 py-2">
        <AccordionItem value="item-1">
          <AccordionTrigger className="cursor-pointer hover:no-underline">
            {title}
          </AccordionTrigger>
          <AccordionContent>
            {desc}
            {foot && (
              <div className="px-2 py-4 text-xs/5 font-semibold text-[#E04F75] md:text-sm/6">
                {foot}
              </div>
            )}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
    //   <div className="framer-1977wgu" />
    // </div>
  );
};

export default QnaBox;
