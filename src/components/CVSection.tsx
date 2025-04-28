import React from 'react';

interface CVSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function CVSection({ title, children }: CVSectionProps) {
  return (
    <section className="mb-6">
      <h3 className="text-xl font-semibold text-blue-700 mb-2 border-b pb-1">{title}</h3>
      <div>{children}</div>
    </section>
  );
}
