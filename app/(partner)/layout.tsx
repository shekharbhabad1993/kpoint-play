import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { PartnerShell } from "@/components/partner/partner-shell";

export default function PartnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const sessionCookie = cookieStore.get("kpoint_session");

  if (!sessionCookie?.value) {
    redirect("/login");
  }

  let session;
  try {
    session = JSON.parse(sessionCookie.value);
  } catch {
    redirect("/login");
  }

  if (session.role !== "partner") {
    redirect("/admin/dashboard");
  }

  return <PartnerShell userName={session.name}>{children}</PartnerShell>;
}
