// components/WorkflowMetadata.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export type WorkflowUrl = {
  url: string;
  env: string;
};

export type Props = {
  name: string;
  description: string;
  isBuiltOnBuilder: boolean;
  countries: string[];
  modules: string[];
  sdkResponses: string[];
  urls: WorkflowUrl[];
};

export default function WorkflowMetadata(props: Props) {
  return (
    <Card className="bg-background border">
      <CardHeader>
        <CardTitle>Workflow Metadata</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <NameDescription name={props.name} description={props.description} />
        <BuilderAndCountries
          isBuiltOnBuilder={props.isBuiltOnBuilder}
          countries={props.countries}
        />
        <Separator />
        <ModuleList modules={props.modules} />
        <Separator />
        <SDKResponseList responses={props.sdkResponses} />
        <Separator />
        <URLList urls={props.urls} />
      </CardContent>
    </Card>
  );
}

// components/workflow-metadata/NameDescription.tsx
export function NameDescription({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <div className="rounded-lg border bg-muted p-4 space-y-2 text-sm">
      <div className="flex flex-col">
        <span className="text-xs font-medium text-muted-foreground">Name</span>
        <span className="text-foreground font-mono truncate">{name}</span>
      </div>

      <div className="flex flex-col">
        <span className="text-xs font-medium text-muted-foreground">
          Description
        </span>
        <span className="text-foreground">{description}</span>
      </div>
    </div>
  );
}

// components/workflow-metadata/BuilderAndCountries.tsx

export function BuilderAndCountries({
  isBuiltOnBuilder,
  countries,
}: {
  isBuiltOnBuilder: boolean;
  countries: string[];
}) {
  return (
    <div className="space-y-4 text-sm">
      <div className="flex items-center gap-2">
        <span className="font-medium text-foreground">Built on Builder:</span>
        <Badge variant={isBuiltOnBuilder ? "default" : "destructive"}>
          {isBuiltOnBuilder ? "Yes" : "No"}
        </Badge>
      </div>

      <div className="flex items-start gap-2 flex-wrap">
        <span className="font-medium text-foreground">
          Countries Supported:
        </span>
        <div className="flex gap-2 flex-wrap">
          {countries.map((country) => (
            <Badge
              key={country}
              className="bg-muted text-muted-foreground border border-border"
            >
              {country}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}

// components/workflow-metadata/ModuleList.tsx

export function ModuleList({ modules }: { modules: string[] }) {
  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-2">
        {modules.map((mod) => (
          <Badge
            key={mod}
            variant="secondary"
            className="text-xs rounded-md px-2 py-1 bg-muted text-muted-foreground border border-border"
          >
            {mod}
          </Badge>
        ))}
      </div>
    </div>
  );
}

// components/workflow-metadata/SDKResponseList.tsx
export function SDKResponseList({ responses }: { responses: string[] }) {
  return (
    <div className="bg-background border border-border rounded-lg">
      <div className="max-h-60 overflow-auto px-4 py-2">
        <ul className="space-y-2">
          {responses.map((response, idx) => (
            <li
              key={idx}
              className="bg-muted text-muted-foreground text-sm font-mono px-3 py-2 rounded-md border border-border shadow-sm"
            >
              {response}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function URLList({ urls }: { urls: WorkflowUrl[] }) {
  return (
    <div>
      <ul className="space-y-2 cursor-pointer">
        {urls.map((u, idx) => (
          <li
            key={idx}
            className="text-sm flex items-center justify-between border border-border rounded px-3 py-2 bg-muted"
          >
            <span className="text-blue-600 dark:text-blue-400 font-mono text-sm px-2 py-1 rounded whitespace-nowrap">
              {u.url}
            </span>

            {u.env === "dev" && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="text-xs text-yellow-600 dark:text-yellow-400 italic cursor-pointer">
                    ⚠️ Warning: Dev URL
                  </span>
                </TooltipTrigger>
                <TooltipContent className="bg-muted text-muted-foreground border border-border rounded shadow-md p-2">
                  Dev URL should not be used inside a workflow. This can cause
                  unexpected cases like transaction status not being updated (
                  <span className="font-mono text-red-600 dark:text-red-400">
                    status_unavailable
                  </span>
                  ).
                </TooltipContent>
              </Tooltip>
            )}

            <Badge
              className={
                u.env === "prod"
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : u.env === "dev"
                  ? "bg-red-600 text-white hover:bg-red-700"
                  : "border border-yellow-500 bg-yellow-500/10 text-yellow-500 dark:text-yellow-400"
              }
            >
              {u.env}
            </Badge>
          </li>
        ))}
      </ul>
    </div>
  );
}
