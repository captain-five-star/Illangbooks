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
  target = '',
  desc = '',
  foot = '',
}: React.PropsWithChildren<{
  title: string;
  target?: ReactNode;
  desc: ReactNode;
  foot?: ReactNode;
}>) => {
  return (
    <>
      <Separator />
      <Accordion type="multiple" className="w-full px-2 py-2">
        <AccordionItem value="item-1">
          <AccordionTrigger className="cursor-pointer hover:no-underline">
            {title}
          </AccordionTrigger>
          <AccordionContent>
            {target && (
              <div className="mb-4">
                <span className="mr-2 rounded-full bg-neutral-300 px-2 py-1">
                  대상
                </span>
                {target}
              </div>
            )}
            <div className="px-3">{desc}</div>
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
