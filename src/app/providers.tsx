"use client";

import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import { Next13ProgressBar } from "next13-progressbar";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();
  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider {...themeProps}>
        <Next13ProgressBar
          height="4px"
          color="#0A2FFF"
          options={{ showSpinner: false }}
          showOnShallow
        />
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
}
