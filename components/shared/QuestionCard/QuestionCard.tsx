import { Tag, User } from "@/types";
import { daysAgo, prettyCount } from "@/utils";

import Image from "next/image";
import Link from "next/link";
import TagComponent from "../TagComponent/TagComponent";

interface QuestionCardProps {
  id: string;
  title: string;
  tags: Tag[];
  date: Date;
  author: User;
  votes: number;
  answers: number;
  views: number;
}

interface StatsProps {
  votes: number;
  answers: number;
  views: number;
}

const Stats = ({ votes, answers, views }: StatsProps) => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex gap-1">
        <Image
          src="/assets/icons/like.svg"
          width={15}
          height={15}
          alt="votes"
        />
        {prettyCount(votes)} votes
      </div>
      <div className="flex gap-1">
        <Image
          src="/assets/icons/message.svg"
          height={15}
          width={15}
          alt="answers"
        />
        {prettyCount(answers)} answers
      </div>
      <div className="flex gap-1">
        <Image src="/assets/icons/eye.svg" height={15} width={15} alt="eye" />
        {prettyCount(views)} views
      </div>
    </div>
  );
};

const QuestionCard = ({
  title,
  tags,
  date,
  author,
  votes,
  answers,
  views,
}: QuestionCardProps) => {
  const days = daysAgo(date);

  return (
    <div className="background-light900_dark200 text-dark200_light900 flex flex-col gap-4 rounded-xl p-10 shadow-md">
      <Link href="/">
        <h3 className="h3-bold">{title}</h3>
      </Link>
      <div className="flex gap-4">
        {tags.map((tag) => (
          <TagComponent key={tag.id} id={tag.id} name={tag.name} />
        ))}
      </div>
      <div className="flex justify-between text-xs">
        <div className="flex items-center gap-2">
          <Link className="flex items-center" href="/">
            <Image
              className="mr-2 rounded-full"
              src={author.avatar}
              alt={author.name}
              width={15}
              height={15}
            />
            <p>{author.name}</p>
          </Link>
          <p>– asked {`${days === 0 ? "today" : `${days} days ago`}`}</p>
        </div>
        <Stats votes={votes} answers={answers} views={views} />
      </div>
    </div>
  );
};

export default QuestionCard;
