"use client";

import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import { Next13ProgressBar } from "next13-progressbar";

export interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  const router = useRouter();
  return (
    <NextUIProvider navigate={router.push}>
      <Next13ProgressBar
        height="4px"
        color="#0A2FFF"
        options={{ showSpinner: false }}
        showOnShallow
      />
      {children}
    </NextUIProvider>
  );
}
