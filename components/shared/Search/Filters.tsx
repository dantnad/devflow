"use client";

import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import { Filter } from "@/types";

interface FilterBoxProps {
  filters: Filter[];
  otherClasses?: string;
}

const FilterBox = ({ filters }: FilterBoxProps) => {
  const [currentFilter, setCurrentFilter] = useState<false | Filter["name"]>(
    false
  );

  const handleFilter = (filterValue: Filter["name"]): void => {
    if (filterValue === currentFilter) {
      setCurrentFilter(false);
    } else {
      setCurrentFilter(filterValue);
    }
  };

  useEffect(() => {
    console.log(currentFilter);
  }, [currentFilter]);

  return (
    <>
      <div className="flex gap-4 max-sm:hidden">
        {filters.map((filter) => (
          <Button
            key={filter.name}
            onClick={() => handleFilter(filter.name)}
            className={`subtle-medium no-focus text-light400_light500 inline-flex items-center rounded-md border border-none border-transparent px-4 py-2 text-sm font-medium shadow transition-colors ${
              filter.name === currentFilter
                ? "bg-primary-100 text-primary-500"
                : "background-light800_dark300"
            }`}
          >
            {filter.name}
          </Button>
        ))}
      </div>
      <div className="flex gap-4 sm:hidden">
        <Select
          value={currentFilter || ""}
          onValueChange={(value: string | "clear"): void => {
            if (value === "clear") return setCurrentFilter(false);
            handleFilter(value);
          }}
        >
          <SelectTrigger className="no-focus background-light900_dark300 text-dark200_light900 w-[180px] focus:ring-0 focus:ring-transparent dark:border-light-850">
            <SelectValue placeholder="Choose a filter..." />
          </SelectTrigger>
          <SelectContent className="background-light900_dark300 text-dark200_light900 no-focus border-none outline-none">
            {filters.map((filter) => (
              <SelectItem key={filter.name} value={filter.name}>
                {filter.name}
              </SelectItem>
            ))}
            <SelectItem
              key="clear"
              value="clear"
              className="text-light400_light500"
            >
              Clear filters
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </>
  );
};
export default FilterBox;
