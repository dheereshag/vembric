import { PageHeader } from "@/components/doc/page-header";
import { SdkCard } from "@/components/sdk-card";

export default function SDKPage() {
  const sdks = [
    {
      name: "Node.js",
      description: "JS SDK to interact with the API.",
      icon: <i className="ci ci-nodejs ci-xl"></i>,
    },
    {
      name: "Python",
      description: "Python SDK for easy API integration.",
      icon: <i className="ci ci-python ci-xl"></i>,
    },
    {
      name: "PHP",
      description: "PHP SDK for backend services.",
      icon: <i className="ci ci-php ci-2xl"></i>,
    },
    {
      name: "Ruby",
      description: "Ruby SDK for fast development.",
      icon: <i className="ci ci-ruby ci-xl"></i>,
    },
    {
      name: "Go",
      description: "High performance SDK built in Go.",
      icon: <i className="ci ci-golang ci-2xl"></i>,
    },
  ];

  return (
    <div className="p-6">
      <PageHeader
        path="// sdks"
        title="Vembric SDKs"
        description="Use our official SDKs to integrate faster with the API."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sdks.map((sdk) => (
          <SdkCard
            key={sdk.name}
            name={sdk.name}
            description={sdk.description}
            icon={sdk.icon}
          />
        ))}
      </div>
    </div>
  );
}
