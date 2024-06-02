import Link from 'next/link';
import {
  ChevronRightIcon,
  EnvelopeOpenIcon,
  ReloadIcon,
} from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';
import { CopyButton } from '@/components/copy-button';

export default function Page() {
  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-6">
      <Button>Button</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="success" capitalize={false}>
        success
      </Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="outline" size="icon">
        <ChevronRightIcon className="size-4" />
      </Button>
      <Button>
        <EnvelopeOpenIcon className="mr-2 size-4" /> Login with Email
      </Button>
      <Button disabled>
        <ReloadIcon className="mr-2 size-4 animate-spin" />
        Please wait
      </Button>
      <Button asChild>
        <Link href="/dashboard/alert">Go to alert</Link>
      </Button>
      <CopyButton variant="default" value="Hello, world!" />
    </div>
  );
}
