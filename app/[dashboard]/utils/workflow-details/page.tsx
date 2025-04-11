"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [appId, setAppId] = useState("");
  const router = useRouter();

  const handleDrillIn = () => {
    if (appId.trim()) {
      router.push(`/dashboard/utils/appId/${appId}`);
    }
  };
  return (
    <div className="flex justify-center items-center p-4 sm:p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Card className="w-full max-w-xl">
        <CardHeader>
          <CardTitle>Start by entering an App ID</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center space-x-4">
          <Input
            placeholder="0gr9w9"
            value={appId}
            onChange={(e) => setAppId(e.target.value)}
          />
          <Button
            onClick={handleDrillIn}
            className="text-white cursor-pointer"
            disabled={!appId}
          >
            Inspect
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
