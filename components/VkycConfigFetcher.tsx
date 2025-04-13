'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface WorkflowConfig {
  steps: {
    title: string;
    message: string;
    documentType: string;
    category?: string;
  }[];
}

interface ProfessionalQuestions {
  question: string;
  answer: string;
}
interface PersonalQuestions {
  question: string;
  answer: string;
}
interface VkycConfigFetcherProps {
  workflowConfig: WorkflowConfig;
}

export default function VkycConfigFetcher({
  workflowConfig,
  professionalQuestions,
  personalQuestions,
}: VkycConfigFetcherProps & {
  professionalQuestions: ProfessionalQuestions[];
  personalQuestions: PersonalQuestions[];
}) {
  return (
    <>
      {workflowConfig && workflowConfig.steps?.length > 0 && (
        <div className="mt-10">
          <div className="rounded-lg border border-border bg-white dark:bg-[#1e1e1e] p-6 shadow-md">
            <h2 className="text-lg font-semibold text-foreground">
              VKYC Workflow Steps
            </h2>
            <Accordion type="single" collapsible className="w-full mt-4">
              {workflowConfig.steps.map((step, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger>{step.documentType}</AccordionTrigger>
                  <AccordionContent>
                    <div className="rounded-lg border border-border bg-muted dark:bg-[#2e2e2e] p-4 shadow-sm">
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div>
                          <strong>Title:</strong> {step.title}
                        </div>
                        <div>
                          <strong>Message:</strong> {step.message}
                        </div>
                        {step.category && (
                          <div>
                            <strong>Category:</strong> {step.category}
                          </div>
                        )}
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      )}

      {professionalQuestions?.length > 0 && (
        <div className="mt-10">
          <div className="rounded-lg border border-border bg-white dark:bg-[#1e1e1e] p-6 shadow-md">
            <h2 className="text-lg font-semibold text-foreground">
              Professional Questions
            </h2>
            <Accordion type="single" collapsible className="w-full mt-4">
              {professionalQuestions.map((question, index) => (
                <AccordionItem value={`professional-${index}`} key={index}>
                  <AccordionTrigger>{question.question}</AccordionTrigger>
                  <AccordionContent>
                    <div className="text-sm text-muted-foreground">
                      <strong>Answer:</strong> {question.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      )}

      {personalQuestions?.length > 0 && (
        <div className="mt-10">
          <div className="rounded-lg border border-border bg-white dark:bg-[#1e1e1e] p-6 shadow-md">
            <h2 className="text-lg font-semibold text-foreground">
              Personal Questions
            </h2>
            <Accordion type="single" collapsible className="w-full mt-4">
              {personalQuestions.map((question, index) => (
                <AccordionItem value={`personal-${index}`} key={index}>
                  <AccordionTrigger>{question.question}</AccordionTrigger>
                  <AccordionContent>
                    <div className="text-sm text-muted-foreground">
                      <strong>Answer:</strong> {question.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      )}
    </>
  );
}
