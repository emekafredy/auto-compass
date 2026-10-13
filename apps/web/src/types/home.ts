export type TopicIconName = "engine" | "tips" | "care";

export interface LearningTopic {
  number: string;
  title: string;
  description: string;
  icon: TopicIconName;
}

export interface FutureFeature {
  number: string;
  title: string;
  description: string;
}
