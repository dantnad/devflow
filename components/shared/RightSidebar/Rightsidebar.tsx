import { QUESTIONS, TAGS } from "@/constants";

import Image from "next/image";
import Link from "next/link";
import Tag from "../TagComponent/TagComponent";

const Rightsidebar = () => {
  return (
    <section className="custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Popular Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {QUESTIONS.map((question, index) => (
            <Link
              key={index}
              href={`/question/${question.id}`}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                width={20}
                height={20}
                alt="Chevron right icon"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {TAGS.map((tag, index) => (
            <Tag
              key={index}
              id={tag.id}
              name={tag.name}
              count={tag.count}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Rightsidebar;
