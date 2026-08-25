import { RequestType } from "@/constants";

export function getRequestTypeColorClass(requestType: RequestType): string {
  const base = "font-mono text-2xs font-semibold py-1 px-1.5 ring-1 ring-inset";

  const classes: Partial<Record<RequestType, string>> = {
    [RequestType.GET]: `${base} ring-emerald-300 dark:ring-emerald-400/30 bg-emerald-400/10 text-emerald-500 dark:text-emerald-400`,
    [RequestType.POST]: `${base} ring-sky-300 dark:ring-sky-400/30 bg-sky-400/10 text-sky-500 dark:text-sky-400`,
    [RequestType.PUT]: `${base} ring-amber-300 dark:ring-amber-400/30 bg-amber-400/10 text-amber-500 dark:text-amber-400`,
    [RequestType.DELETE]: `${base} ring-rose-300 dark:ring-rose-400/30 bg-rose-400/10 text-rose-500 dark:text-rose-400`,
    [RequestType.PATCH]: `${base} ring-fuchsia-300 dark:ring-fuchsia-400/30 bg-fuchsia-400/10 text-fuchsia-500 dark:text-fuchsia-400`,
  };

  const fallback = `${base} ring-gray-300 dark:ring-gray-400/30 bg-gray-100 text-gray-800`;

  return classes[requestType] ?? fallback;
}
