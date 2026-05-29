import { PageHeader } from "@/components/doc/page-header";
import { SdkCard } from "@/components/sdk-card";
import { sdksContent } from "@/constants/page-content";
import { sdks } from "@/constants/sdks";
import { Icon } from "@/components/api-doc/icons";

export default function SDKPage() {
  return (
    <div className="p-6">
      <PageHeader
        path="// sdks"
        title={sdksContent.header.title}
        description={sdksContent.header.description}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sdks.map((sdk) => (
          <SdkCard
            key={sdk.name}
            name={sdk.name}
            description={sdk.description}
            icon={<Icon path={sdk.iconPath} />}
          />
        ))}
      </div>
    </div>
  );
}
