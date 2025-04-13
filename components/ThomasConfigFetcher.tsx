import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';

interface ModuleAuditStatus {
  module: string;
  status: boolean | null;
  error?: string;
}

interface ThomasConfigFetcherProps {
  auditStatuses: ModuleAuditStatus[];
  error: string | null;
}

export default function ThomasConfigFetcher({ auditStatuses, error }: ThomasConfigFetcherProps) {
  return (
    <div className="space-y-4">
      {error && <div className="text-destructive">{error}</div>}

      {auditStatuses.length > 0 && (
        <Card>
          <CardContent>
            <h2 className="text-lg font-semibold">Thomas Config Audit Status</h2>
            <Accordion type="single" collapsible className="mt-4">
              {auditStatuses.map(({ module, status, error }, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger>{module}</AccordionTrigger>
                  <AccordionContent>
                    <Card>
                      <CardContent>
                        {error ? (
                          <p className="text-destructive">❌ Error: {error}</p>
                        ) : (
                          <p>
                            <strong>pushToAuditPortal:</strong>{' '}
                            <span
                              className={
                                status
                                  ? 'text-success'
                                  : 'text-destructive'
                              }
                            >
                              {status ? '✅ Enabled' : '❌ Disabled'}
                            </span>
                          </p>
                        )}
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
