import { ResumeItemProps } from "@/app/(home)/components/ResumeItem";

const education: ResumeItemProps[] = [
  {
    itemId: "utokyo-master",
    orgIconSrc: "/images/utokyo.jpg",
    orgName: "The University of Tokyo",
    positionTitle: "MASc in Interdisciplinary Information Studies",
    timespan: "April 2024 - March 2026",
    description: `- Supervised by Prof. Yoichi Sato
    - Research on human-computer interaction, deep learning (computer vision)`,
  },
  {
    itemId: "hku-beng",
    orgIconSrc: "/images/hku.jpg",
    orgName: "The University of Hong Kong",
    positionTitle: "B.Eng. in Computer Science, First Class Honours",
    timespan: "September 2019 - June 2023",
    description: `GPA 3.89 out of 4.30
    - Dean’s Honours List, Faculty of Engineering, 2019-2023, 4 years consecutive
    - Dean’s Fund on Research Path Exploration, Faculty of Engineering, 2022`,
  },
];

export default education;
