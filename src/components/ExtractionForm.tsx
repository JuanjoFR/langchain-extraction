'use client';

import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Loader2 } from 'lucide-react';

interface ExtractionFormProps {
  onExtract: (text: string) => Promise<void>;
  isLoading: boolean;
}

export function ExtractionForm({ onExtract, isLoading }: ExtractionFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<{ text: string }>();

  const onSubmit = (data: { text: string }) => {
    onExtract(data.text);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Textarea
        {...register('text', { required: 'Text is required' })}
        placeholder="Enter your text here..."
        className="min-h-[150px]"
      />
      {errors.text && (
        <p className="text-sm text-red-500">{errors.text.message}</p>
      )}
      <Button type="submit" disabled={isLoading} className="w-full">
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Extracting...
          </>
        ) : (
          'Extract Entities'
        )}
      </Button>
    </form>
  );
}
