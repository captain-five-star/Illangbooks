import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';
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
              <div className="text-primary pt-6 pb-4 font-semibold">{foot}</div>
            )}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
    // </div>
  );
};

export default QnaBox;
