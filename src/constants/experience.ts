import { ResumeItemProps } from "@/app/(home)/components/ResumeItem";

const experience: ResumeItemProps[] = [
  {
    itemId: "exawizards-swe-intern",
    orgIconSrc: "/images/org-logos/exawizards.jpg",
    orgName: "Exawizards Inc.",
    positionTitle: "Software Engineer",
    timespan: "February 2025 - March 2025",
    description: `- Kotlin multiplatform / Jetpack Compose development for frontend and data integration logic.`,
  },
  {
    itemId: "pksha-swe-intern",
    orgIconSrc: "/images/org-logos/pksha.jpg",
    orgName: "PKSHA Technology",
    positionTitle: "Software Engineer",
    timespan: "September 2024",
    description: `- Development of a large language model-based chatbot system.
    - Mainly worked on backend development / deployment and LLM prompt engineering.`,
  },
  {
    itemId: "hku-ra-aiot",
    orgIconSrc: "/images/org-logos/aiot.png",
    orgName: "HKU Artificial Intelligence of Things Lab",
    positionTitle: "Research Assistant",
    timespan: "June 2022 - April 2023",
    description: `- Supervised by Dr. Chenshu Wu.
    - Conducted research on computer vision-based hand-over-face gesture interaction system.`,
  },
  {
    itemId: "techxacademy-hal",
    orgIconSrc: "/images/org-logos/techx.jpeg",
    orgName: "Academic Team, TechX Academy",
    positionTitle: "Head Academic Lead (Game Design & Development)",
    timespan: "June 2021 - August 2021",
    description: `Worked with teaching & learning tasks regarding Game design and C#/Unity development, including:
    - Leading the course AL team.
    - Planning & preparation of course contents.
    - Giving tutorials and support for capstone hackathons.`,
  },
  {
    itemId: "hku-imse-student-intern",
    orgIconSrc: "/images/org-logos/hku.jpg",
    orgName: "IMSE Department, The University of Hong Kong",
    positionTitle: "Student Intern",
    timespan: "September 2020",
    description: `Aiding in a computer vision project regarding alignment of everyday objects in photos with corresponding 3D models.`,
  },
];

export default experience;
