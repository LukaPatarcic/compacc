import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  id?: string;
  alt?: boolean;
  className?: string;
}

export default function Section({ children, id, alt, className }: SectionProps) {
  const classes = ['section', alt && 'section-alt', className].filter(Boolean).join(' ');

  return (
    <section id={id} className={classes}>
      <div className="container">{children}</div>
    </section>
  );
}
