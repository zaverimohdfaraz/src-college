import type { Metadata } from "next";
import Link from "next/link";
import { Container, PageHero, Media, Pending, Arrow, OnThisPage } from "@/components/ui";
import { departments } from "@/lib/departments";
import { courses } from "@/lib/courses";
import { photos } from "@/lib/images";

const deptPhoto: Record<string, { src: string; alt: string }> = {
  commerce: photos.classroomStudents,
  accounts: photos.lecture,
  "information-technology": photos.labTeaching,
  arts: photos.session,
  mathematics: photos.classroom,
};

export const metadata: Metadata = {
  title: "Departments",
  description:
    "The Departments of Commerce, Accounts, Information Technology, Arts and Mathematics at Shri Ram College of Commerce, Bhandup West.",
  alternates: { canonical: "/departments" },
};

// Mathematics supports quantitative programmes rather than owning one.
const supports: Record<string, string[]> = { mathematics: ["bsc-cs", "bsc-it", "bms"] };

export default function DepartmentsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Academics", href: "/academics" }, { label: "Departments" }]}
        title="Departments"
        intro="Five departments share the teaching of the college's programmes, each bringing its own discipline and expertise."
      />
      <Container className="grid gap-12 py-16 lg:grid-cols-12 lg:py-24">
        <aside className="lg:col-span-3">
          <OnThisPage items={departments.map((d) => ({ id: d.slug, label: d.name.replace("Department of ", "") }))} />
        </aside>
        <div className="divide-y divide-stone lg:col-span-9">
          {departments.map((d, idx) => {
            const programmes = courses.filter((c) => c.department === d.slug || supports[d.slug]?.includes(c.slug));
            return (
              <section key={d.slug} id={d.slug} aria-labelledby={`h-${d.slug}`} className={idx === 0 ? "pb-20" : "py-20"}>
                <div className="grid gap-10 md:grid-cols-12">
                  <div className="md:col-span-7">
                    <h2 id={`h-${d.slug}`} className="t-h2">{d.name}</h2>
                    <p className="mt-5 text-ink-soft measure">{d.intro}</p>
                    <h3 className="t-h4 mt-8">Areas of focus</h3>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {d.focus.map((f) => (
                        <li key={f} className="rounded-full border border-sand px-3.5 py-1 text-[1.0625rem]">{f}</li>
                      ))}
                    </ul>
                  </div>
                  <Media label={`${d.name}`} {...deptPhoto[d.slug]} className="aspect-[4/3] w-full md:col-span-5" />
                </div>

                {programmes.length > 0 && (
                  <div className="mt-10">
                    <h3 className="t-h4">{supports[d.slug] ? "Programmes the department supports" : "Related programmes"}</h3>
                    <ul className="mt-3 flex flex-wrap gap-x-8 gap-y-2">
                      {programmes.map((p) => (
                        <li key={p.slug}>
                          <Link href={`/courses/${p.slug}`} className="inline-flex items-center gap-1.5 font-medium text-maroon">
                            <span className="link-u">{p.code} {p.name}</span><Arrow />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-10">
                  <h3 className="t-h4">Faculty</h3>
                  {d.faculty.length ? (
                    <ul className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {d.faculty.map((f) => (
                        <li key={f.name} className="flex gap-4">
                          <Media src={f.photo} label={f.name} alt={f.name} hideLabel className="aspect-square w-20 shrink-0" />
                          <div>
                            <p className="font-semibold">{f.name}</p>
                            <p className="text-[1.0625rem] text-muted">{f.designation}</p>
                            {f.qualification && <p className="text-[1rem] text-muted">{f.qualification}</p>}
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <Pending className="mt-4">Faculty profiles for this department will be published once supplied by the college.</Pending>
                  )}
                </div>
              </section>
            );
          })}
        </div>
      </Container>
    </>
  );
}
