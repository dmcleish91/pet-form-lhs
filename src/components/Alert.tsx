import { RocketIcon } from '@radix-ui/react-icons';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface AlertBannerProps {
  title: string;
  description: string;
}

export function AlertBanner({ title, description }: AlertBannerProps) {
  return (
    <Alert className='w-48 bg-cyan-100'>
      <RocketIcon className='h-4 w-4' />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
}
