"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import { Input } from "@/components/ui/input";

type DataOptions = "questions" | "answers" | "users" | "tags" | "jobs";

interface commonProps {
  local?: boolean;
  icon?: string;
  extraClasses?: string;
  iconPosition?: "left" | "right";
}

interface LocalSearchProps extends commonProps {
  local: true;
  dataType: DataOptions;
}

interface GlobalSearchProps extends commonProps {
  local?: false;
  dataType?: never;
}

type SearchProps = LocalSearchProps | GlobalSearchProps;

// ? Idea for routing
// const dataRoutes = {
//   questions: "/questions",
//   answers: "/answers",
//   users: "/users",
//   tags: "/tags",
//   jobs: "/jobs",
// };

const SearchBar = ({
  local,
  dataType,
  icon,
  iconPosition = "left",
  extraClasses,
}: SearchProps) => {
  // ? Idea const route = local ? dataRoutes[dataType] : "/";

  const [search, setSearch] = useState("");

  useEffect(() => {}, [search]);

  return (
    <div
      className={`background-light800_darkgradient text-dark500_light500 relative flex min-h-[56px] items-center gap-1 rounded-xl px-4 ${extraClasses}`}
    >
      <Image
        src={`${icon || "/assets/icons/search.svg"}`}
        width={24}
        height={24}
        alt="search"
        className={`cursor-pointer ${
          iconPosition === "left" ? "order-1" : "order-3"
        }`}
      />

      <Input
        type="text"
        placeholder={`Search ${local ? dataType : "globally"}`}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="paragraph-regular no-focus placeholder order-2 border-none bg-transparent shadow-none outline-none"
      />
    </div>
  );
};
export default SearchBar;
