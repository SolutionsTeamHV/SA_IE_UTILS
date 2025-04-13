import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';

interface ModuleAuditStatus {
  module: string;
  pushToAuditPortal: boolean | null;
}

interface ThomasConfigFetcherProps {
  auditStatuses: ModuleAuditStatus[];
}

export default function ThomasConfigFetcher({ auditStatuses }: ThomasConfigFetcherProps) {
  return (
    <div className="space-y-4">
      {auditStatuses.length > 0 && (
        <Card>
          <CardContent>
            <h2 className="text-lg font-semibold">Thomas Config Audit Status</h2>
            <Accordion type="single" collapsible className="mt-4">
              {auditStatuses.map(({ module, pushToAuditPortal }, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger>{module}</AccordionTrigger>
                  <AccordionContent>
                    <Card>
                      <CardContent>
                          <p>
                            <strong>pushToAuditPortal:</strong>{' '}
                            <span
                              className={
                                pushToAuditPortal
                                  ? 'text-success'
                                  : 'text-destructive'
                              }
                            >
                              {pushToAuditPortal ? '✅ Enabled' : '❌ Disabled'}
                            </span>
                          </p>
                      </CardContent>
                    </Card>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
