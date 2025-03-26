/* eslint-disable @typescript-eslint/no-explicit-any */
import { MlHeroSection } from "@/components/molecules/MlHeroSection";
import { ReactNode } from "react";

export type ContentType = "page" | "site" | "templateLanding";

export type ComponentType = "heroSection" | "text";

export const ComponentTypes: Partial<
  Record<ComponentType, (args: any) => ReactNode>
> = {
  heroSection: MlHeroSection,
};
