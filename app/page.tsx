"use client";

import React from "react";
import InterviewReadyHeading from '../components/InterviewReadyHeading';
import { Bar } from '../components/Bar';
import { Foo } from '../components/Foo';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <InterviewReadyHeading />
      <div className="flex gap-4">
        <Bar />
        <Foo />
      </div>
    </div>
  );
}