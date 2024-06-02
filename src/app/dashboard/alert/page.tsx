import { ExclamationTriangleIcon, RocketIcon } from '@radix-ui/react-icons';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function AlertDemo() {
  return (
    <div className="grid gap-3">
      <Alert>
        <RocketIcon className="size-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>

      <Alert variant="destructive">
        <ExclamationTriangleIcon className="size-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Your session has expired. Please log in again.
        </AlertDescription>
      </Alert>

      <Alert variant="success">
        <ExclamationTriangleIcon className="size-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Your session has expired. Please log in again.
        </AlertDescription>
      </Alert>
    </div>
  );
}
