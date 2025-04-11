"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Server,
  Workflow,
  FileText,
  TerminalSquare,
} from "lucide-react";

const features = [
  {
    icon: <Workflow className="w-6 h-6 text-primary" />,
    title: "Smart Workflow Discovery",
    description:
      "Automatically list and preview workflows by appId with validator insights, builder checks, countries and module data.",
  },
  {
    icon: <FileText className="w-6 h-6 text-primary" />,
    title: "Deep Config Introspection",
    description:
      "Serach UI configs, text files, webhook enabled ?, SDK responses, and feature flags like WebCore or Digilocker custom flow.",
  },
  {
    icon: <Server className="w-6 h-6 text-primary" />,
    title: "VKYC & GKYCs Insights",
    description:
      "Detect VKYC flows, extract Video PD questions, analyze GKYCs (request/response) and summarize quality checks.",
  },
  {
    icon: <TerminalSquare className="w-6 h-6 text-primary" />,
    title: "Thomas API Guardrails",
    description:
      "Identify dev URLs, check if APIs are production-pushed, and validate pushToAuditPortal flags in config.",
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-primary" />,
    title: "Schema-Driven Parsing",
    description:
      "Parse everything using pre-defined validator schemas for consistent, clean, and reliable results.",
  },
  {
    icon: <Workflow className="w-6 h-6 text-primary" />,
    title: "Workflow Migration",
    description: "Move workflow from one appId to another in seconds.",
  },
];

export default function AppLandingPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Hero */}
      <section className="py-24 px-6 md:px-12 lg:px-24 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-indigo-500 text-transparent bg-clip-text">
            All-in-One utility for SAs & IEs
          </h1>
          <p className="text-muted-foreground text-lg">
            Give an appId. Get everything — workflows, configs, webhook status,
            VKYC/GKYC summaries, and production audit checks — in one place.
          </p>
          <div className="pt-6">
            <Button
              size="lg"
              className="text-white cursor-pointer"
              onClick={() => (window.location.href = "/dashboard")}
            >
              🔍 Start Inspecting
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-muted py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            What It Can Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feat, i) => (
              <div
                key={i}
                className="bg-background p-6 rounded-xl shadow hover:shadow-md transition"
              >
                <div className="mb-4">{feat.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{feat.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 px-6 md:px-12 lg:px-24 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-3xl font-bold">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left mt-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">1. Enter an appId</h3>
              <p className="text-muted-foreground">
                The tool locates workflows under the appId and presents them for
                selection.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                2. Choose & Explore
              </h3>
              <p className="text-muted-foreground">
                View VKYC state, modules, SDK responses, webhook status,
                configs, and more.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">3. Take Action</h3>
              <p className="text-muted-foreground">
                Quickly identify missing setups, wrong URLs, or missing audit
                pushes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-12 text-sm text-muted-foreground">
        Built with 💙 by SA / IE Team • HyperVerge
      </footer>
    </div>
  );
}
