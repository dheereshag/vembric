export default function SDKPage() {
  const sdks = [
    {
      name: "Node.js",
      description: "Official JavaScript SDK to interact with the API.",
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
      <h1 className="text-3xl font-bold">Vembric SDKs</h1>

      <p className="text-muted-foreground mt-2 mb-8">
        Use our official SDKs to integrate faster with the API.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sdks.map((sdk) => (
          <div
            key={sdk.name}
            className="border rounded-xl p-6 hover:shadow-lg transition"
          >
            <div className="mb-4">{sdk.icon}</div>

            <h2 className="text-lg font-semibold">{sdk.name}</h2>

            <p className="text-sm text-muted-foreground mt-2">
              {sdk.description}
            </p>

            <button className="mt-4 text-sm font-medium text-blue-600">
              View SDK →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
