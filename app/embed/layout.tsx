import "../globals.css";

export const metadata = {
  title: "KPOINT Embed",
};

export default function EmbedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Embed layout has no sidebar/header - it's designed for iframes
  return <>{children}</>;
}
