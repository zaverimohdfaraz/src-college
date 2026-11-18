/**
 * Campus photographs. Current set: stills taken from the college's promotional video (Nov 2026).
 * Alt text describes what each photo actually shows. To replace a photo, drop a new file into
 * public/images/campus/ with the same name, or point the entry at a new file.
 */
export type Photo = { src: string; alt: string; pos?: string };

const p = (file: string, alt: string, pos?: string): Photo => ({ src: `/images/campus/${file}.webp`, alt, pos });

export const photos = {
  exterior: p("building-exterior", "Front of the college building with the Shri Ram College of Commerce & Science sign"),
  station: p("bhandup-station", "Commuters on the platform at Bhandup railway station"),
  corridor: p("corridor", "A long, bright corridor inside the college building"),
  classroomStudents: p("classroom-students", "Students seated at their desks in a classroom"),
  lecture: p("classroom-lecture", "Students attending a lecture in a classroom"),
  classroom: p("classroom", "An empty classroom with rows of wooden desks"),
  lab: p("computer-lab", "Students working at computers in the computer laboratory"),
  labWide: p("computer-lab-wide", "Rows of computer workstations with students in the computer laboratory"),
  labStudents: p("computer-lab-students", "Students working on computers in the laboratory"),
  labTeaching: p("computer-lab-teaching", "A teacher guiding students at their computers in the laboratory"),
  library: p("library", "Bookshelves in the college library"),
  gym: p("gymnasium", "Weight-training equipment in the college gymnasium"),
  hall: p("multipurpose-hall", "The college hall with rows of chairs facing a decorated stage"),
  sports: p("sports-block", "Sports-themed artwork along the college's covered sports area"),
  trophies: p("trophy-display", "Trophies on display in the college"),
  session: p("add-on-course-session", "A teacher presenting an add-on course session to students"),
  facultyMeeting: p("faculty-meeting", "Faculty members in a meeting around a table"),
  faculty: p("faculty", "Two faculty members working together at a table"),
  office: p("college-office", "The college office with staff at their desks"),
  // Supplied by the college (Nov 2026)
  front: p("college-front", "Front of the college building with the Shri Ram College sign"),
  corridorStudents: p("campus-corridor-students", "Students walking along a corridor inside the college"),
  groundEvent: p("college-ground-event", "Students gathered for an event on the college ground"),
  sportsGround: p("sports-ground", "Students playing badminton on the college ground", "50% 85%"),
  cultural: p("cultural-performance", "A student performing on stage at the Ayodhyam intercollegiate festival"),
  nss: p("nss-plantation", "NSS volunteers planting saplings during a plantation drive"),
  nss2: p("nss-plantation-2", "An NSS volunteer carrying saplings at a plantation drive"),
  ivGroup: p("industrial-visit-group", "Students on an industrial visit in Bhandup West"),
  ivDemo: p("industrial-visit-demo", "Students watching a machine demonstration during an industrial visit", "50% 80%"),
} as const;
