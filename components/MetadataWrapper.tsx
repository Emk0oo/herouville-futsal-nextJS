import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Herouville Futsal",
  description: "Site officiel du club de futsal de Herouville",
};

const MetadataWrapper = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default MetadataWrapper;
