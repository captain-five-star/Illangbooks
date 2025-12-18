'use client';

import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDownIcon } from 'lucide-react';
import { motion } from 'motion/react';

import { cn } from '@/lib/utils';

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn('border-b last:border-b-0', className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          'focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start gap-2 rounded-md py-4 text-left text-xl font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180',
          className
        )}
        {...props}
      >
        <ChevronDownIcon className="text-muted-foreground pointer-events-none size-6 shrink-0 translate-y-0.5 transition-transform duration-200" />
        <div className="flex h-full items-center">{children}</div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="framer-wamkf7 px-5 py-7.5"
      style={{
        '--vvm4vb': '30px 20px 30px 20px',
        'background-color': 'rgb(245, 245, 245)',
        'border-bottom-left-radius': '12px',
        'border-bottom-right-radius': '12px',
        'border-top-left-radius': '12px',
        'border-top-right-radius': '12px',
      }}
      {...props}
    >
      <motion.div
        initial={{
          opacity: 0.001,
          rotate: 0,
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          skewX: 0,
          skewY: 0,
          x: 0,
          y: 0,
        }}
        animate={{
          opacity: 1,
          rotate: 0,
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          skewX: 0,
          skewY: 0,
          transition: {
            delay: 0,
            duration: 0.4,
            ease: [0.44, 0, 0.56, 1],
            type: 'tween',
          },
          x: 0,
          y: 0,
        }}
        className={cn('pt-0 pb-4', className)}
      >
        {children}
      </motion.div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
