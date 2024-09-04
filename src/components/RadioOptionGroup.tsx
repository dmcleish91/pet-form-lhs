import React from 'react';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface Option {
  value: number;
  description: string;
  criteria: string;
}

interface RadioOptionGroupProps {
  label: string;
  options: Option[];
  selectedValue: number;
  onChange: (value: number) => void;
}

export function RadioOptionGroup({
  label,
  options,
  selectedValue,
  onChange,
}: RadioOptionGroupProps) {
  const id = React.useId();

  const DialogText = options.map((option) => {
    return (
      <li className='text-sm'>
        {option.value + ': ' + option.description + ' - ' + option.criteria}
      </li>
    );
  });

  const DialogList = <ul>{DialogText}</ul>;

  return (
    <div className='flex flex-row items-center'>
      <div>
        <p>{label}</p>
        <RadioGroup value={selectedValue.toString()}>
          {options.map((option) => (
            <div
              className='flex flex-row items-center space-x-2 w-60'
              key={option.description}>
              <RadioGroupItem
                value={option.value.toString()}
                id={id + option.value.toString()}
                onClick={() => {
                  onChange(option.value);
                  console.log(label, 'selected value', option.value);
                }}
              />
              <Label htmlFor={id + option.value.toString()}>{option.description}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <DialogToolTip>{DialogList}</DialogToolTip>
    </div>
  );
}

interface DialogToolTipProps {
  children: JSX.Element;
}

export function DialogToolTip({ children }: DialogToolTipProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='w-24' variant='outline'>
          Criteria
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[500px]'>
        <DialogHeader>
          <DialogTitle>Descriptions</DialogTitle>
          <DialogDescription>{children}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
