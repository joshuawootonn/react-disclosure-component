export type Faq = { title: string; description: string };

export const content: Faq[] = [
  {
    title: "Some text",
    description: "Some more text that is much longer and has varying length",
  },
  {
    title: "Some text",
    description:
      "Some more text that is much longer and has varying length. Some more text that is much longer and has varying length",
  },
  {
    title: "Some text",
    description:
      "Some more text that is much longer and has varying length. Some more text that is much longer and has varying length. Some more text that is much longer and has varying length",
  },
];
