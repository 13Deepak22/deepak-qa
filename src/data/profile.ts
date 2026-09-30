/**
 * Identity, contact details, and site navigation, taken from Deepak Gupta's QA resume.
 * Date of birth is intentionally omitted.
 */

import { experienceLabel } from "@/lib/career";

export const profile = {
  name: "Deepak Gupta",
  role: "QA Engineer",
  location: "India",
  email: "deepak1322007@gmail.com",
  phone: "+91 7888768621",
  phoneHref: "tel:+917888768621",
  linkedin: "https://www.linkedin.com/in/deepak-gupta13/",
  github: "https://github.com/13Deepak22",
  availability: "Connect me",
  places: "Noida",
  headline: "I test the money before it moves.",
  get lede() {
    return `QA engineer with ${experienceLabel()} years in manual and automation testing. I find the critical bugs, build frameworks that hold up, and keep fintech releases accurate.`;
  },
  focus: ["Mobile", "Web", "API", "Automation", "Load"],
};

export const roleTitles = [
  "QA Engineer",
  "Quality Assurance Engineer",
  "QA Analyst",
  "Quality Analyst",
  "Software QA Engineer",
  "Software Test Engineer",
  "Test Engineer",
  "Software Tester",
  "QA Tester",
  "Test Analyst",
  "Quality Engineer",
  "Automation Test Engineer",
  "QA Automation Engineer",
  "SDET",
  "Quality Assurance Analyst",
  "Software Quality Engineer",
];

export const headlines = [
  {
    mark: "money",
    rows: [["I test the"], ["money", " before"], ["it moves."]],
  },
  {
    mark: "release",
    rows: [["I hold the"], ["release", " until"], ["the evidence is in."]],
  },
  {
    mark: "defect",
    rows: [["I trace the"], ["defect", " back"], ["to the cause."]],
  },
  {
    mark: "automate",
    rows: [["I ", "automate"], ["the path that"], ["ships again."]],
  },
];

export const nav = [
  { href: "/about", label: "About Me", hint: "Meet the tester" },
  { href: "/services", label: "Services", hint: "Testing services & methodology" },
  { href: "/skills", label: "Skills", hint: "Full toolkit & ATS keywords" },
  { href: "/rca", label: "RCA", hint: "Defect investigation & race condition" },
  {
    href: "/#experience",
    label: "Experience",
    get hint() {
      return `Two teams, ${experienceLabel()} years`;
    },
  },
  { href: "/#work", label: "Work", hint: "15+ apps & portals" },
  { href: "/resume", label: "Resume", hint: "Plain resume, ATS-ready" },
];
