import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bridge Funding for Psychedelic Research",
  description: "Supporting continuity in psychedelic research during a funding gap at UCSF's Carhart-Harris Lab",
};

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
