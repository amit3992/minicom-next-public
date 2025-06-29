'use client';

import { useState } from 'react';

export function Foo() {
  const [isSuccess, setIsSuccess] = useState(false);

  const handleClick = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8080/foo', {
        method: 'POST',
      });
      
      setIsSuccess(response.ok);
    } catch (error) {
      console.error('Error calling API:', error);
      setIsSuccess(false);
    }
  };

  return (
    <div className="p-4">
      <button 
        onClick={handleClick}
        className={`px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 ${isSuccess ? 'bg-green-500 hover:bg-green-600' : ''}`}
      >
        Call Foo API
      </button>
    </div>
  );
}
