import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle, AlertTriangle } from "lucide-react";
import { headers } from "next/headers";

export default async function DashboardHomePage() {
  const requestHeaders = await headers();
  const userName = requestHeaders.get("x-user-name") || "Guest";
  return (
    <div className="p-6 md:p-10 space-y-8">
      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-3xl font-bold">
          👨‍💻 Hello, {userName}!, Welcome to Solution's Dashboard
        </h1>
        <p className="text-muted-foreground">
          Your one-stop control panel to inspect and validate all appId
          workflows, configs, and APIs.
        </p>
      </div>

      {/* Dashboard Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              Webhooks Missing <Badge variant="destructive">2</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              Results or VKYC webhooks may not be registered.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              Dev APIs Used <Badge variant="secondary">3</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              Some Thomas APIs are pointing to dev — action needed.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
