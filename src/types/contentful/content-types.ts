/* eslint-disable @typescript-eslint/no-explicit-any */
import { MlCategoriesSlider } from "@/components/molecules/MlCategoriesSlider";
import { MlHeroSection } from "@/components/molecules/MlHeroSection";
import { ReactNode } from "react";

export type ContentType = "page" | "site" | "templateLanding";

export type ComponentType = "heroSection" | "categoriesSlider" | "text";

export const ComponentTypes: Partial<
  Record<ComponentType, (args: any) => ReactNode>
> = {
  heroSection: MlHeroSection,
  categoriesSlider: MlCategoriesSlider,
};
