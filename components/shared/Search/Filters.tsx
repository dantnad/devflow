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

const FILTERS = ["Newest", "Recommended", "Frequent", "Unanswered"] as const;

type Filter = (typeof FILTERS)[number];
type FilterState = false | Filter;

const FilterBox = () => {
  const [currentFilter, setCurrentFilter] = useState<FilterState>(false);

  const handleFilter = (filterValue: Filter): void => {
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
        {FILTERS.map((filter) => (
          <Button
            key={filter}
            onClick={() => handleFilter(filter)}
            className={`subtle-medium no-focus text-light400_light500 inline-flex items-center rounded-md border border-none border-transparent px-4 py-2 text-sm font-medium shadow transition-colors ${
              filter === currentFilter
                ? "bg-primary-100 text-primary-500"
                : "background-light800_dark300"
            }`}
          >
            {filter}
          </Button>
        ))}
      </div>
      <div className="flex gap-4 sm:hidden">
        <Select
          value={currentFilter || ""}
          onValueChange={(value: Filter | "clear"): void => {
            if (value === "clear") return setCurrentFilter(false);
            handleFilter(value);
          }}
        >
          <SelectTrigger className="no-focus background-light900_dark300 text-dark200_light900 w-[180px] focus:ring-0 focus:ring-transparent dark:border-light-850">
            <SelectValue placeholder="Choose a filter..." />
          </SelectTrigger>
          <SelectContent className="background-light900_dark300 text-dark200_light900 no-focus border-none outline-none">
            {FILTERS.map((filter) => (
              <SelectItem key={filter} value={filter}>
                {filter}
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
