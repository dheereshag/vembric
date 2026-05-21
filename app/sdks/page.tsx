import { PageHeader } from "@/components/doc/page-header";
import { SdkCard } from "@/components/sdk-card";
import { brand } from "@/constants/brand";
import { sdks } from "@/constants/sdks";

export default function SDKPage() {
  return (
    <div className="p-6">
      <PageHeader
        path="// sdks"
        title={`${brand.name} SDKs`}
        description="Use our official SDKs to integrate faster with the API."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sdks.map((sdk) => (
          <SdkCard
            key={sdk.name}
            name={sdk.name}
            description={sdk.description}
            icon={
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d={sdk.iconPath} />
              </svg>
            }
          />
        ))}
      </div>
    </div>
  );
}
