import React from "react";
import { IoCalendar, IoGrid, IoHelpBuoy } from "react-icons/io5";
import {
  FcAbout,
  FcConferenceCall,
  FcSettings,
  FcCollaboration,
  FcDonate,
  FcMoneyTransfer,
  FcRules,
  FcContacts,
  FcGraduationCap,
  FcAdvertising,
  FcTemplate,
  FcCalendar,
  FcPlanner,
  FcOvertime,
  FcManager,
  FcInfo,
  FcPodiumWithSpeaker,
  FcReading,
  FcVoicePresentation,
  FcPodiumWithAudience,
} from "react-icons/fc";
import { MdWeb } from "react-icons/md";

export interface Link {
  label: string;
  href?: string;
  children?: Array<{
    label: string;
    description?: string;
    href: string;
    icon?: React.ReactElement;
  }>;
}

export const links: Link[] = [
  {
    label: "About Us",
    children: [
      {
        label: "What is CUS",
        description: "",
        href: "/what-is-cus",
        icon: <FcAbout />,
      },
      {
        label: "Who We Are",
        description: "",
        href: "/who-we-are",
        icon: <FcConferenceCall />,
      },
      {
        label: "How We Run",
        description: "",
        href: "/code-and-constitution/",
        icon: <FcSettings />,
      },
    ],
  },
  {
    label: "Resources",
    children: [
      {
        label: "Personal",
        description: "",
        href: "/personal",
        icon: <FcVoicePresentation />,
      },
      {
        label: "Professional",
        description: "",
        href: "/professional",
        icon: <FcPodiumWithSpeaker />,
      },
      {
        label: "Academic",
        description: "",
        href: "/academic",
        icon: <FcReading />,
      },
      {
        label: "For Services and Clubs",
        description: "",
        href: "/for-services-and-clubs",
        icon: <FcPodiumWithAudience />,
      },
    ],
  },
  {
    label: "Student Life",
    children: [
      {
        label: "Student Lounge",
        description: "",
        href: "/student-lounge",
        icon: <FcCollaboration />,
      },
      {
        label: "CUSavings",
        description: "",
        href: "/cus-savings",
        icon: <FcDonate />,
      },
      {
        label: "Student Discounts",
        description: "",
        href: "/general-student-discounts",
        icon: <FcMoneyTransfer />,
      },
      {
        label: "Guides",
        description: "",
        href: "/guides",
        icon: <FcRules />,
      },
      {
        label: "Yearbook & Prospectus",
        description: "",
        href: "/yearbook-and-prospectus",
        icon: <FcContacts />,
      },
      {
        label: "Grads",
        description: "",
        href: "/grads",
        icon: <FcGraduationCap />,
      },
      {
        label: "CUS Broadcast",
        description: "",
        href: "/cus-broadcast",
        icon: <FcAdvertising />,
      },
      {
        label: "Merch Store",
        description: "",
        href: "/merch-store",
        icon: <FcTemplate />,
      },
    ],
  },
  {
    label: "Events",
    children: [
      {
        label: "Calendar",
        description: "",
        href: "/calendar",
        icon: <FcCalendar />,
      },
      {
        label: "Annual Events",
        description: "",
        href: "/annual-events",
        icon: <FcPlanner />,
      },
      {
        label: "Conferences",
        description: "",
        href: "/conferences",
        icon: <FcOvertime />,
      },
    ],
  },
  {
    label: "Get Involved",
    children: [
      {
        label: "Hiring Opportunities",
        description: "",
        href: "/hiring-opportunities",
        icon: <FcManager />,
      },
      {
        label: "Join the CUS",
        description: "",
        href: "/join-the-cus",
        icon: <FcConferenceCall />,
      },
      {
        label: "Get to Know",
        description: "",
        href: "/get-to-know",
        icon: <FcInfo />,
      },
    ],
  },
  {
    label: "Sponsors",
    href: "/sponsors",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];
