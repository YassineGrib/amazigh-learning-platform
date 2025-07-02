// Static export: generateStaticParams for Next.js 15+
/**
 * @type {import('next').GenerateStaticParams}
 */
export function generateStaticParams() {
  // Example: statically generate for lesson ids 1, 2, 3
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' }
  ];
}
