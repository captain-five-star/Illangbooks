import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger02,
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
    <>
      <Separator />
      <Accordion type="multiple" className="w-full px-2 py-2">
        <AccordionItem value="item-1">
          <AccordionTrigger02 className="cursor-pointer hover:no-underline">
            {title}
          </AccordionTrigger02>
          <AccordionContent>
            <div className="px-3">{desc}</div>
            {foot && (
              <div className="text-primary pt-6 pb-4 font-semibold">{foot}</div>
            )}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default QnaBox;
