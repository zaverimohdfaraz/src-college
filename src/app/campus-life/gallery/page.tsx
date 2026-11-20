import type { Metadata } from "next";
import SectionShell from "@/components/SectionShell";
import VideoBlock from "@/components/VideoBlock";
import { Media } from "@/components/ui";
import { photos, videos } from "@/lib/images";

export const metadata: Metadata = {
  title: "Gallery and videos",
  description: "Photographs and short films of Shri Ram College of Commerce & Science, Bhandup West: events, sport, NSS, industrial visits and everyday learning.",
  alternates: { canonical: "/campus-life/gallery" },
};

const gallery = [
  photos.groundEvent, photos.cultural, photos.sportsGround, photos.nss, photos.ivDemo, photos.ivGroup,
  photos.nss2, photos.corridorStudents, photos.session, photos.labTeaching, photos.firstAid, photos.library,
  photos.hall, photos.trophies, photos.labWide, photos.front,
];

export default function GalleryPage() {
  return (
    <SectionShell
      section="campusLife"
      href="/campus-life/gallery"
      intro="Moments from college life: events on the ground and the stage, NSS drives, industrial visits and everyday learning."
    >
      <h2 className="t-h2">Videos</h2>
      <VideoBlock className="mt-8" {...videos.tour} />
      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <VideoBlock {...videos.addOn} />
        <VideoBlock {...videos.facilities} />
      </div>

      <h2 className="t-h2 mt-20">Photographs</h2>
      <div className="mt-8 grid grid-cols-2 gap-3 md:grid-flow-dense md:grid-cols-3">
        {gallery.map((g, i) => (
          <Media
            key={g.src}
            label={g.alt}
            {...g}
            sizes={i % 7 === 0 ? "(min-width:768px) 40vw, 100vw" : "(min-width:768px) 20vw, 50vw"}
            className={i % 7 === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"}
          />
        ))}
      </div>
    </SectionShell>
  );
}
