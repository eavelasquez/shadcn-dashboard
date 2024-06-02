'use client';

import { useEffect, useState } from 'react';
import { CheckIcon, CopyIcon } from '@radix-ui/react-icons';

import { cn, copyToClipboard } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface CopyButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  value: string;
}

export function CopyButton({ className, value, ...props }: CopyButtonProps) {
  const [hasCopied, setHasCopied] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (hasCopied) {
      interval = setTimeout(() => setHasCopied(false), 2000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [hasCopied]);

  return (
    <Button
      size="icon"
      variant="ghost"
      className={cn(
        'relative z-10 size-6 text-zinc-700 hover:bg-zinc-50 hover:text-zinc-700',
        className,
      )}
      onClick={(e) => {
        e.preventDefault();
        copyToClipboard(value);
        setHasCopied(true);
      }}
      {...props}
    >
      <span className="sr-only">Copy</span>
      {hasCopied ? (
        <CheckIcon className="size-3" />
      ) : (
        <CopyIcon className="size-3" />
      )}
    </Button>
  );
}
