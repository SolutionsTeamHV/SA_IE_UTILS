interface ModuleAuditStatus {
  module: string;
  pushToAuditPortal: boolean | null;
}

interface ThomasConfigFetcherProps {
  auditStatuses: ModuleAuditStatus[];
}

import { Badge } from "@/components/ui/badge";
import { CardContent } from "@/components/ui/card";

export default function ThomasConfigFetcher({ auditStatuses }: ThomasConfigFetcherProps) {
  return (
    <div className="rounded-lg border border-border p-6 shadow-md">
      <h2 className="text-xl font-bold text-foreground">
        Thomas Config pushToAuditPortal Status
      </h2>
      {auditStatuses.length > 0 && (
        <div className="mt-6 space-y-4">
          {auditStatuses.map(({ module, pushToAuditPortal }, index) => (
            <div key={index} className="flex flex-wrap items-center gap-3">
              <span className="font-medium text-foreground">{module}</span>
              <Badge
                variant="outline"
                className={`ml-auto px-3 py-1.5 text-sm ${
                  pushToAuditPortal
                    ? "border-green-600 text-green-600"
                    : "border-destructive text-destructive"
                }`}
              >
                {pushToAuditPortal ? "✅ Enabled" : "❌ Disabled"}
              </Badge>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
