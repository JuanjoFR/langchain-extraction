'use client';

import { useState } from 'react';
import { extractInfo } from '../lib/actions';
import { Data } from '@/lib/schemas';

export default function Home() {
  const [response, setResponse] = useState<Data | null>(null);

  const handleButtonClick = async () => {
    const result = await extractInfo(
      'My name is Jeff, my hair is black and i am 6 feet tall. Anna has the same color hair as me.'
    );
    setResponse(result);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-8 sm:p-20">
      <div>
        <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
        <button
          onClick={handleButtonClick}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Extract Info
        </button>
        {response && (
          <div className="mt-4">
            <h2 className="text-2xl">Response:</h2>
            <pre>{JSON.stringify(response, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
}
