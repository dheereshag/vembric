import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
          <Card key={sdk.name} className="hover:border-foreground/30 transition-all duration-300 group flex flex-col justify-between">
            <CardHeader className="pb-4">
              <div className="mb-2 text-primary">{sdk.icon}</div>
              <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">{sdk.name}</CardTitle>
            </CardHeader>
            <CardContent className="pb-4">
              <p className="text-sm text-muted-foreground">
                {sdk.description}
              </p>
            </CardContent>
            <CardFooter className="pt-0">
              <Button variant="link" className="p-0 text-blue-500 dark:text-blue-400 gap-1 group/btn hover:no-underline">
                View SDK <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
