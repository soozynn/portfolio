import ProjectDetailCard from '@/components/ProjectDetailCard';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  return <ProjectDetailCard slug={slug} />;
}
