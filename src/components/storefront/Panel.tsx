'use client';

import {Card} from '@astryxdesign/core/Card';

/**
 * White rounded panel sitting on the gray page: the core surface of the
 * layout. Thin wrapper over Astryx Card so radius/padding live in one place.
 */
export function Panel({
  children,
  id,
  label,
  className = '',
  padding = 4,
}: {
  children: React.ReactNode;
  id?: string;
  label?: string;
  className?: string;
  padding?: 0 | 2 | 3 | 4 | 6;
}) {
  return (
    <section id={id} aria-label={label} className="scroll-mt-28">
      <Card padding={padding} className={`rounded-[var(--radius-page)] border-0 ${className}`}>
        {children}
      </Card>
    </section>
  );
}
