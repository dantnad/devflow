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
import { SelectGroup } from "@radix-ui/react-select";

interface FilterBoxProps {
  filters: Filter[];
  otherClasses?: string;
}

const FilterBox = ({ filters }: FilterBoxProps) => {
  const [currentFilter, setCurrentFilter] = useState<false | Filter>(false);

  const handleFilter = (filterValue: Filter | false): void => {
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
      <div className="mt-10 hidden min-h-[56px] flex-wrap gap-3 sm:min-w-[170px] md:flex">
        {filters.map((filter) => (
          <Button
            key={filter.name}
            onClick={() => handleFilter(filter)}
            className={`body-medium no-focus text-light400_light500 inline-flex items-center rounded-lg border border-none border-transparent px-4 py-2 text-sm font-medium shadow transition-colors ${
              currentFilter && filter.name === currentFilter.name
                ? "bg-primary-100 text-primary-500 hover:bg-primary-500 hover:text-primary-100"
                : "background-light800_dark300 hover:background-light800_dark400"
            }`}
          >
            {filter.name}
          </Button>
        ))}
      </div>
      <div className="hidden gap-4 max-md:flex">
        <Select
          value={currentFilter ? currentFilter.name : ""}
          onValueChange={(value: string | "clear") => {
            if (value === "clear") {
              setCurrentFilter(false);
            }
            const newFilter =
              filters.find((filter) => filter.name === value) || false;
            handleFilter(newFilter);
          }}
        >
          <SelectTrigger className="body-regular light-border background-light800_dark300 text-dark500_light700 min-h-[56px] border px-5 py-2.5">
            <div className="line-clamp-1">
              <SelectValue placeholder="Select a filter..." />
            </div>
          </SelectTrigger>
          <SelectContent className="background-light900_dark300 text-dark200_light900 no-focus border-none outline-none">
            <SelectGroup>
              {filters.map((filter) => (
                <SelectItem key={filter.name} value={filter.name}>
                  {filter.name}
                </SelectItem>
              ))}
            </SelectGroup>
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
