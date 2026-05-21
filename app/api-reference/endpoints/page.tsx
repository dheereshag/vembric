import { PageHeader } from "@/components/doc/page-header";
import { DocSection } from "@/components/doc/doc-section";
import { InfoBox } from "@/components/doc/info-box";
import { endpoints, methodColors } from "@/constants/api-reference";

export default function EndpointsPage() {
  return (
    <div className="p-6">
      <PageHeader
        path="// api-reference / endpoints"
        title="Endpoints"
        description="Complete reference for all available API endpoints."
      />

      <DocSection title="base url">
        <div className="border p-4 bg-muted/30">
          <code className="font-mono text-sm">https://api.vembric.io/v1</code>
        </div>
      </DocSection>

      <DocSection title="all endpoints">
        <div className="border divide-y font-mono text-sm">
          <div className="grid grid-cols-12 bg-muted/50 px-4 py-2 text-xs uppercase tracking-widest">
            <span className="col-span-2">method</span>
            <span className="col-span-5">path</span>
            <span className="col-span-5">description</span>
          </div>
          {endpoints.map((ep) => (
            <div
              key={ep.path + ep.method}
              className="grid grid-cols-12 px-4 py-3 items-start"
            >
              <span
                className={`col-span-2 text-xs font-semibold ${methodColors[ep.method]}`}
              >
                {ep.method}
              </span>
              <code className="col-span-5 text-xs">{ep.path}</code>
              <span className="col-span-5 text-muted-foreground text-xs">
                {ep.desc}
              </span>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection title="versioning" className="mb-0">
        <p className="text-sm leading-relaxed">
          The current stable version is{" "}
          <code className="font-mono bg-muted px-1.5 py-0.5 text-xs">v1</code>.
          Breaking changes will be released under a new version prefix with a
          deprecation notice.
        </p>
      </DocSection>

      <InfoBox className="mt-6">
        // all endpoints require a valid Bearer token — see Authentication
      </InfoBox>
    </div>
  );
}
