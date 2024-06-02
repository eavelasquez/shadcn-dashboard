'use client';

import { useEffect, useState } from 'react';
import { CheckIcon, CopyIcon } from '@radix-ui/react-icons';

import { cn, copyToClipboard } from '@/lib/utils';
import { Button, ButtonProps } from '@/components/ui/button';

interface CopyButtonProps extends ButtonProps {
  value: string;
}

export function CopyButton({
  className,
  value,
  variant = 'ghost',
  ...props
}: CopyButtonProps) {
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
      variant={variant}
      className={cn(
        'relative z-10 size-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50 [&_svg]:size-3',
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
        <CheckIcon className="size-6" />
      ) : (
        <CopyIcon className="size-6" />
      )}
    </Button>
  );
}
