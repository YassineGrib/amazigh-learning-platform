import LessonDetailPageClient from './LessonDetailPageClient';
import { generateStaticParams } from './generateStaticParams';

export default async function LessonDetailPage({ params }: { params?: Promise<{ id: string }> }) {
  const resolvedParams = params ? await params : { id: '' };
  return <LessonDetailPageClient id={resolvedParams.id} />;
}

export { generateStaticParams };
