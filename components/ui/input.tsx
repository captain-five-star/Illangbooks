import * as React from 'react';

import { cn } from '@/lib/utils';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-b-input flex h-7 w-full min-w-0 items-center justify-center border-b bg-transparent px-1.5 py-1.5 text-sm shadow-xs transition-[color,box-shadow] outline-none file:mr-4 file:inline-flex file:h-full file:rounded-sm file:border-0 file:bg-[#f5f5f5] file:px-3 file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-base md:file:px-6 md:file:text-base',
        'focus-visible:border-b-2',
        'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
        className
      )}
      {...props}
    />
  );
}

export { Input };
