import type { FutureFeature, LearningTopic } from "@/types/home";

export const topics = [
  {
    number: "01",
    title: "Car basics",
    description: "Learn the main parts and what they do.",
    icon: "engine",
  },
  {
    number: "02",
    title: "Daily tips",
    description: "Get simple tips on driving, care, and maintenance.",
    icon: "tips",
  },
  {
    number: "03",
    title: "Car care",
    description: "Understand simple checks and maintenance.",
    icon: "care",
  },
] as const satisfies readonly LearningTopic[];

export const futureFeatures = [
  {
    number: "01",
    title: "My vehicle guide",
    description: "Learn how your own car works.",
  },
  {
    number: "02",
    title: "Repair help",
    description: "Understand quotes and know what to ask.",
  },
  {
    number: "03",
    title: "Service records",
    description: "Keep repairs and maintenance in one place.",
  },
  {
    number: "04",
    title: "Skills Atlas",
    description: "Build practical automotive skills.",
  },
] as const satisfies readonly FutureFeature[];
