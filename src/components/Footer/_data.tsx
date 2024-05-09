import { Badge, LightMode } from "@chakra-ui/react";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";

export interface LinkGroup {
  title: string;
  links: Array<{
    label: string;
    href: string;
    badge?: React.ReactElement;
  }>;
}

export const links: LinkGroup[] = [
  {
    title: "About us",
    links: [
      { label: "What is CUS", href: "/what-is-cus" },
      { label: "Who We Are", href: "/who-we-are" },
      { label: "How We Run", href: "/code-and-constitution" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Personal", href: "/personal" },
      { label: "Professional", href: "/professional" },
      { label: "Academic", href: "/academic" },
      { label: "For Services and Clubs", href: "/for-services-and-clubs" },
    ],
  },
  {
    title: "Student Life",
    links: [
      { label: "Student Lounge", href: "/student-lounge" },
      { label: "CUSSavings", href: "/cus-savings" },
      { label: "Student Discount", href: "/general-student-discounts" },
      { label: "Guides", href: "/guides" },
      { label: "Yearbook & Prospectus", href: "/yearbook-and-prospectus" },
      { label: "Grads", href: "/grads" },
      { label: "CUS Broadcast", href: "/cus-broadcast" },
      { label: "Merch Store", href: "/merch-store" },
    ],
  },
  {
    title: "Events",
    links: [
      { label: "Calendar", href: "/events" },
      { label: "Annual Events", href: "/annual-events" },
      { label: "Conferences", href: "/conferences" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { label: "Hiring Opportunities", href: "hiring-opportunities" },
      { label: "Join the CUS", href: "join-the-cus" },
      { label: "Get To Know", href: "/get-to-know" },
    ],
  },
  {
    title: "Get in Touch",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Sponsors", href: "/sponsors" },
      { label: "Email us", href: "mailto:communications@cus.ca" },
      { label: "Sitemap", href: "/sitemap/sitemap-0.xml" },
    ],
  },
];

interface SocialLink {
  label: string;
  icon: React.ReactElement;
  href: string;
}

export const socialLinks: SocialLink[] = [
  {
    label: "Instagram",
    icon: <FaInstagram />,
    href: "https://www.instagram.com/cusubc/",
  },
  {
    label: "Facebook",
    icon: <FaFacebook />,
    href: "https://www.facebook.com/cusonline/",
  },
  {
    label: "LinkedIn",
    icon: <FaLinkedin />,
    href: "https://www.linkedin.cn/company/cusubc",
  },
  {
    label: "TikTok",
    icon: <IoLogoTiktok />,
    href: "https://www.tiktok.com/@cushowcase",
  },
];

type FooterLink = {
  label: string;
  href: string;
};

export const footerLinks: FooterLink[] = [
  { label: "Terms of Use", href: "#" },
  { label: "Privacy Policy", href: "#" },
];
