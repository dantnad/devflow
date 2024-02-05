import { SidebarLink } from "@/types/index";

export const themes = [
  { value: "light", label: "Light", icon: "/assets/icons/sun.svg" },
  { value: "dark", label: "Dark", icon: "/assets/icons/moon.svg" },
  { value: "system", label: "System", icon: "/assets/icons/computer.svg" },
];

export const sidebarLinks: SidebarLink[] = [
  {
    imgURL: "/assets/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/assets/icons/users.svg",
    route: "/community",
    label: "Community",
  },
  {
    imgURL: "/assets/icons/star.svg",
    route: "/collection",
    label: "Collections",
  },
  {
    imgURL: "/assets/icons/suitcase.svg",
    route: "/jobs",
    label: "Find Jobs",
  },
  {
    imgURL: "/assets/icons/tag.svg",
    route: "/tags",
    label: "Tags",
  },
  {
    imgURL: "/assets/icons/user.svg",
    route: "/profile",
    label: "Profile",
  },
  {
    imgURL: "/assets/icons/question.svg",
    route: "/ask-question",
    label: "Ask a question",
  },
];

export const BADGE_CRITERIA = {
  QUESTION_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  QUESTION_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  TOTAL_VIEWS: {
    BRONZE: 1000,
    SILVER: 10000,
    GOLD: 100000,
  },
};

export const QUESTIONS = [
  {
    id: 1,
    title: "What is the best way to learn React?",
  },
  {
    id: 2,
    title: "Is JavaScript a programming language?",
  },
  {
    id: 3,
    title: "How to become a full-stack developer?",
  },
  {
    id: 4,
    title: "Is NextJS better than React?",
  },
  {
    id: 5,
    title: "Async/Await vs Promises",
  }
]

export const TAGS = [
  {
    id: "1",
    name: "React",
    count: 100,
  },
  {
    id: "2",
    name: "JavaScript",
    count: 200,
  },
  {
    id: "3",
    name: "TypeScript",
    count: 50,
  },
  {
    id: "4",
    name: "NextJS",
    count: 75,
  },
  {
    id: "5",
    name: "NodeJS",
    count: 150,
  },
  {
    id: "6",
    name: "Express",
    count: 100,
  },
]