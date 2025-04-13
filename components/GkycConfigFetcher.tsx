'use client';

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ResponseSummaryItem {
  code: string;
  channel: string;
  message: string;
  maxAttempts: number;
}

interface RequestConfigItem {
  check?: string;
  module?: string;
}

interface GkycConfigViewerProps {
  responseSummary: ResponseSummaryItem[];
  requestConfig: RequestConfigItem[];
}

export default function GkycConfigViewer({
  responseSummary,
  requestConfig,
}: GkycConfigViewerProps) {
  const getChannelBadgeStyle = (channel: string) => {
    const lower = channel.toLowerCase();
    if (lower === 'red') return 'border-red-600 text-red-600';
    if (lower === 'orange') return 'border-orange-600 text-orange-600';
    if (lower === 'green') return 'border-green-600 text-green-600';
    return 'border-muted text-muted-foreground';
  };

  return (
    <>
      {/* Response Summary */}
      {responseSummary?.length > 0 && (
        <div className="mt-10">
          <div className="rounded-lg border border-border p-6 shadow-md">
            <h2 className="text-lg font-semibold text-foreground">
              Response Summary
            </h2>
            <Accordion type="single" collapsible className="w-full mt-4">
              <AccordionItem value="response-summary">
                <AccordionTrigger>View Summary Items</AccordionTrigger>
                <AccordionContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                  {responseSummary.map((item, index) => (
                    <div
                      key={index}
                      className="rounded-lg border border-border p-4 shadow-sm bg-muted text-muted-foreground"
                    >
                      <div className="space-y-2 text-sm text-foreground">
                        <div>
                          <strong>Code:</strong> {item.code}
                        </div>
                        <div className="flex items-center gap-3">
                          <strong>Channel:</strong>
                          <Badge
                            variant="outline"
                            className={`px-3 py-1.5 text-sm ${getChannelBadgeStyle(
                              item.channel
                            )}`}
                          >
                            {item.channel}
                          </Badge>
                        </div>
                        <div>
                          <strong>Message:</strong> {item.message}
                        </div>
                        <div>
                          <strong>Max Attempts:</strong> {item.maxAttempts}
                        </div>
                      </div>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      )}

      {/* Request Parameters */}
      {requestConfig?.length > 0 && (
        <div className="mt-10">
          <div className="rounded-lg border border-border p-6 shadow-md">
            <h2 className="text-lg font-semibold text-foreground">
              Request Parameters
            </h2>
            <Accordion type="single" collapsible className="w-full mt-4">
              <AccordionItem value="request-config">
                <AccordionTrigger>View Parameter Items</AccordionTrigger>
                <AccordionContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                  {requestConfig.map((item, index) => {
                    const parts = item.check?.split('.') || [];
                    const labelTypes = [
                      'preferences',
                      'qualityChecks',
                      'forgeryChecks',
                      'ruleChecks',
                    ];
                    const label = labelTypes.includes(parts[0])
                      ? parts[0]
                      : 'Misc';
                    const check =
                      parts.length > 1 ? parts.slice(1).join('.') : parts[0];
                    const moduleName = item.module || 'Unknown Module';

                    return (
                      <div
                        key={index}
                        className="rounded-lg border border-border p-4 shadow-sm bg-background"
                      >
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div>
                            <strong>Check:</strong> {check}
                          </div>
                          <div>
                            <strong>Label:</strong> {label}
                          </div>
                          <div>
                            <strong>Module:</strong> {moduleName}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      )}
    </>
  );
}
