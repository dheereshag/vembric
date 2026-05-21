import { siNodedotjs, siPython, siPhp, siRuby, siGo } from 'simple-icons';

export type SdkItem = {
  name: string;
  description: string;
  iconPath: string;
};

export const sdks: SdkItem[] = [
  {
    name: "Node.js",
    description: "JS SDK to interact with the API.",
    iconPath: siNodedotjs.path,
  },
  {
    name: "Python",
    description: "Python SDK for easy API integration.",
    iconPath: siPython.path,
  },
  {
    name: "PHP",
    description: "PHP SDK for backend services.",
    iconPath: siPhp.path,
  },
  {
    name: "Ruby",
    description: "Ruby SDK for fast development.",
    iconPath: siRuby.path,
  },
  {
    name: "Go",
    description: "High performance SDK built in Go.",
    iconPath: siGo.path,
  },
];
