import { SdkCard } from "@/components/sdk-card";

export default function SDKPage() {
  const sdks = [
    {
      name: "Node.js",
      description: "Official JS SDK to interact with the API.",
      icon: <i className="ci ci-nodejs ci-2x"></i>,
    },
    {
      name: "Python",
      description: "Python SDK for easy API integration.",
      icon: <i className="ci ci-python ci-2x"></i>,
    },
    {
      name: "PHP",
      description: "PHP SDK for backend services.",
      icon: <i className="ci ci-php ci-2x"></i>,
    },
    {
      name: "Ruby",
      description: "Ruby SDK for fast development.",
      icon: <i className="ci ci-ruby ci-2x"></i>,
    },
    {
      name: "Go",
      description: "High performance SDK built in Go.",
      icon: <i className="ci ci-golang ci-2x"></i>,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-10 px-6">
      <h1 className="text-3xl font-bold tracking-tight">Vembric SDKs</h1>

      <p className="text-muted-foreground mt-2 mb-8">
        Use our official SDKs to integrate faster with the API.
      </p>

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
