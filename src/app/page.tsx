'use client';

import * as React from 'react';
import { extractInfo } from '../lib/actions';
import { ExtractionForm } from '@/components/ExtractionForm';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

export default function Home() {
  const [result, setResult] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleExtract = async (text: string) => {
    setIsLoading(true);
    setResult(null);
    setError(null);
    try {
      const entities = await extractInfo(text);
      setResult(JSON.stringify(entities, null, 2));
    } catch (err) {
      console.error('Error extracting entities:', err);
      setError('Failed to extract entities. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">Langchain Extraction</h1>

      <div className="space-y-6">
        <ExtractionForm onExtract={handleExtract} isLoading={isLoading} />

        {isLoading && (
          <div className="flex items-center text-blue-500">
            <AlertCircle className="h-4 w-4 mr-2" />
            <p>Extracting entities from your text. Please wait...</p>
          </div>
        )}
        {error && (
          <div className="flex items-center text-red-500">
            <AlertCircle className="h-4 w-4 mr-2" />
            <p>{error}</p>
          </div>
        )}
        {result && (
          <div className="space-y-2">
            <div className="flex items-center text-green-500">
              <CheckCircle2 className="h-4 w-4 mr-2" />
              <p>Entities extracted successfully!</p>
            </div>
            <pre className="bg-gray-100 p-4 rounded-md overflow-auto">
              <code>{result}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
