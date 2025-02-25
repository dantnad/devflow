import { Button } from "@/components/ui/button";
import FilterBox from "@/components/shared/Search/Filters";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";
import QuestionCard from "@/components/shared/QuestionCard/QuestionCard";
import SearchBar from "@/components/shared/Search/SearchBar";

const MockUser = {
  id: "1",
  name: "John Doe",
  avatar: "https://picsum.photos/200/200",
};

const MockTags = [
  { id: "1", name: "javascript" },
  { id: "2", name: "react" },
];

const MockDate = new Date();

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex flex-col justify-between gap-5 max-md:flex-row max-sm:flex-col">
        <SearchBar local dataType="questions" extraClasses="flex-1" />{" "}
        <FilterBox filters={HomePageFilters} />
      </div>
      <div className="mt-8 flex flex-col gap-6">
        <QuestionCard
          id="test"
          title="How can I use NextJS within a Docker Container"
          tags={MockTags}
          author={MockUser}
          votes={200}
          answers={15}
          views={12500}
          date={MockDate}
        />
        <QuestionCard
          id="test"
          title="How can I use NextJS within a Docker Container"
          tags={MockTags}
          author={MockUser}
          votes={200}
          answers={15}
          views={12500}
          date={MockDate}
        />
        <QuestionCard
          id="test"
          title="How can I use NextJS within a Docker Container"
          tags={MockTags}
          author={MockUser}
          votes={200}
          answers={15}
          views={12500}
          date={MockDate}
        />
        <QuestionCard
          id="test"
          title="How can I use NextJS within a Docker Container"
          tags={MockTags}
          author={MockUser}
          votes={200}
          answers={15}
          views={12500}
          date={MockDate}
        />
        <QuestionCard
          id="test"
          title="How can I use NextJS within a Docker Container"
          tags={MockTags}
          author={MockUser}
          votes={200}
          answers={15}
          views={12500}
          date={MockDate}
        />
      </div>
    </>
  );
}
