export type SdkItem = {
  name: string;
  description: string;
  iconClass: string;
};

export const sdks: SdkItem[] = [
  {
    name: "Node.js",
    description: "JS SDK to interact with the API.",
    iconClass: "ci ci-nodejs ci-xl",
  },
  {
    name: "Python",
    description: "Python SDK for easy API integration.",
    iconClass: "ci ci-python ci-xl",
  },
  {
    name: "PHP",
    description: "PHP SDK for backend services.",
    iconClass: "ci ci-php ci-2xl",
  },
  {
    name: "Ruby",
    description: "Ruby SDK for fast development.",
    iconClass: "ci ci-ruby ci-xl",
  },
  {
    name: "Go",
    description: "High performance SDK built in Go.",
    iconClass: "ci ci-golang ci-2xl",
  },
];
