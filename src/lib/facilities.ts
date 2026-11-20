/** Facility pages: /facilities/[slug]. Page order and menu labels live in lib/sections.ts. */
import { photos, type Photo } from "@/lib/images";

export type Facility = {
  slug: string;
  intro: string;
  body: string[];
  points: { heading: string; items: string[] };
  photos: Photo[];
  metaDescription: string;
};

export const facilities: Facility[] = [
  {
    slug: "library",
    intro: "A quiet place to read, research and prepare, with print and digital resources for every programme.",
    body: [
      "The library supports every programme with textbooks, reference works and reading space for quiet study. Its collection follows the University of Mumbai syllabi, so students can find the core texts for their subjects in one place.",
      "Beyond print, students have access to e-journals and e-books for research and project work. A Library Committee guides how the collection grows and how the library serves students and staff.",
    ],
    points: {
      heading: "Using the library",
      items: [
        "Textbooks and reference books for each programme",
        "Reading space for individual study",
        "Access to e-journals and e-books",
        "Borrowing of books under the library rules",
      ],
    },
    photos: [photos.library],
    metaDescription: "The library at Shri Ram College of Commerce & Science, Bhandup: textbooks, reference works, e-resources and reading space.",
  },
  {
    slug: "computer-laboratory",
    intro: "Where computing students write, test and build, and where every student learns digital skills.",
    body: [
      "The computer laboratory is where much of the practical work for the B.Sc. I.T. and B.Sc. Computer Science programmes takes place, from programming exercises to project development. Practical sessions are supervised by faculty, who guide students at their workstations.",
      "The laboratory is also used for computer-based work across other programmes and for add-on courses in office and accounting software.",
    ],
    points: {
      heading: "What happens here",
      items: [
        "Practical sessions for the computing programmes",
        "Project and assignment work",
        "Add-on courses in computer applications",
        "Support for digital learning across the college",
      ],
    },
    photos: [photos.labWide, photos.labTeaching, photos.labStudents],
    metaDescription: "The computer laboratory at Shri Ram College of Commerce & Science, Bhandup: practical work for I.T. and Computer Science and digital skills for all.",
  },
  {
    slug: "gymnasium",
    intro: "Space and equipment for students to exercise and stay fit alongside their studies.",
    body: [
      "The college gymnasium is equipped for weight and fitness training. It gives students a place to exercise between and after lectures, and supports students preparing for sports competitions.",
      "Together with Sports Day and Gymkhana activities, the gymnasium reflects the college's commitment to students' physical well-being as part of a balanced education.",
    ],
    points: {
      heading: "Using the gymnasium",
      items: ["Weight-training and fitness equipment", "Supports Gymkhana teams and Sports Day preparation", "Use is supervised and follows the gymnasium rules"],
    },
    photos: [photos.gym, photos.sports],
    metaDescription: "The gymnasium at Shri Ram College of Commerce & Science, Bhandup: fitness equipment and space for students to stay active.",
  },
  {
    slug: "classrooms-and-hall",
    intro: "Bright lecture rooms with digital teaching, and a hall for events, seminars and celebrations.",
    body: [
      "Classrooms are used for lectures, presentations, group discussions and seminars. Teaching makes use of presentations, interactive screens, online content and video alongside traditional instruction.",
      "The multipurpose hall seats a large audience facing a stage. It hosts seminars, guest lectures, orientation programmes and cultural events, including rehearsals for the Annual Day.",
    ],
    points: {
      heading: "Spaces",
      items: ["Lecture rooms for each class", "Digital screens for presentation-based teaching", "Multipurpose hall with a stage", "Office and student services counters"],
    },
    photos: [photos.hall, photos.classroom, photos.corridor],
    metaDescription: "Classrooms and the multipurpose hall at Shri Ram College of Commerce & Science, Bhandup.",
  },
];

export const getFacility = (slug: string) => facilities.find((f) => f.slug === slug);
