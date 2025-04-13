import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Chip } from '@/components/ui/chip';

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

export default function GkycConfigViewer({ responseSummary, requestConfig }: GkycConfigViewerProps) {
  const getChannelColor = (channel: string) => {
    const lower = channel.toLowerCase();
    if (lower === 'red') return 'red';
    if (lower === 'orange') return 'orange';
    if (lower === 'green') return 'green';
    return 'default';
  };

  return (
    <>
      {responseSummary?.length > 0 && (
        <>
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-foreground dark:text-white">
              Response Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="bg-gray-100 dark:bg-[#1a1a1a] rounded-lg">
              <AccordionItem value="response-summary">
          <AccordionTrigger className="text-base font-medium text-foreground dark:text-white">
            View Summary Items
          </AccordionTrigger>
          <AccordionContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {responseSummary.map((item, index) => (
              <Card key={index} className="p-4 rounded-lg shadow-md bg-white dark:bg-[#2a2a2a]">
                <CardHeader>
            <CardTitle className="text-primary dark:text-primary-light">Code: {item.code}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2 text-sm">
            <Chip color={getChannelColor(item.channel)}>Channel</Chip>
            <Chip className="text-foreground dark:text-white">Message: {item.message}</Chip>
            <Chip className="text-foreground dark:text-white">Max Attempts: {item.maxAttempts}</Chip>
                </CardContent>
              </Card>
            ))}
          </AccordionContent>
              </AccordionItem>
            </Accordion>
            </CardContent>
          </>
        )}
  
        {requestConfig?.length > 0 && (
            <>
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-foreground dark:text-white">
            Request Parameters
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="bg-gray-100 dark:bg-[#1a1a1a] rounded-lg">
          <AccordionItem value="request-config">
            <AccordionTrigger className="text-base font-medium text-foreground dark:text-white">
              View Parameter Items
            </AccordionTrigger>
            <AccordionContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {requestConfig.map((item, index) => {
                const parts = item.check?.split('.') || [];
                const labelTypes = ['qualityChecks', 'forgeryChecks', 'ruleChecks'];
                const label = labelTypes.includes(parts[0]) ? parts[0] : 'Misc';
                const check = parts.length > 1 ? parts[1] : parts[0];
                const moduleName = item.module || 'Unknown Module';

                return (
            <Card key={index} className="p-4 rounded-lg shadow-md bg-white dark:bg-[#2a2a2a]">
              <CardHeader>
                <CardTitle className="text-primary dark:text-secondary-light">{check}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-foreground dark:text-white">
                <div>
                  <strong>Label:</strong> {label}
                </div>
                <div>
                  <strong>Module:</strong> {moduleName}
                </div>
              </CardContent>
            </Card>
                );
              })}
            </AccordionContent>
          </AccordionItem>
              </Accordion>
            </CardContent>
          </>
        )}
    </>
  );
}
