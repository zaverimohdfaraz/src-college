import type { Metadata } from "next";
import SectionShell from "@/components/SectionShell";
import { Media, Pending } from "@/components/ui";
import { leadership } from "@/lib/about";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "The leadership of Shri Ram College of Commerce & Science, governed by the Jana Seva Sangh and led on campus by its Principal.",
  alternates: { canonical: "/about/leadership" },
};

export default function LeadershipPage() {
  return (
    <SectionShell section="about"
      href="/about/leadership"
      intro="The college is governed by the Jana Seva Sangh and led on campus by its Principal, supported by the Vice Principal, faculty and administrative staff."
    >
      <ul className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
        {leadership.map((role) => (
          <li key={role}>
            <Media label={role} alt={role} className="aspect-[4/5] w-full max-w-[18rem]" hideLabel />
            <p className="mt-5 t-h3 text-red">{role}</p>
            <p className="mt-2 text-[1.0625rem] text-muted">Name, photograph and message to be supplied by the college.</p>
          </li>
        ))}
      </ul>
      <Pending className="mt-12">
        Names, photographs and a short message from the Principal will be added once supplied by the college.
      </Pending>
    </SectionShell>
  );
}
