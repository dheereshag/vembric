import { ApiDocPage } from '@/components/api-doc-page';
import { getActionDoc, resourceDocs } from '@/constants';
import { notFound } from 'next/navigation';

type PageParams = {
  resource: string;
  action: string;
};

export function generateStaticParams() {
  return resourceDocs.flatMap((resource) =>
    resource.actions.map((action) => ({
      resource: resource.key,
      action: action.slug,
    })),
  );
}

export default async function ResourceActionPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { resource, action } = await params;
  const data = getActionDoc(resource, action);

  if (!data) {
    notFound();
  }

  return (
    <ApiDocPage
      resourceKey={resource}
      actionSlug={action}
      initialData={data}
    />
  );
}
