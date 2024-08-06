interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedData: String;
}

export default function BlogCard({
  authorName,
  title,
  content,
  publishedData,
}: BlogCardProps) {
  return (
    <div className="flex flex-col space-y-1 border-b border-slate-200 p-4 w-full">
      <div className="flex items-center gap-4 mb-3">
        <div className="flex flex-col justify-center items-center">
          <AvatarName name={authorName} />
        </div>
        <p className="flex items-center gap-1">
          {" "}
          <span className="font-normal ">{authorName}</span>{" "}
          <span className="text-slate-600 text-xs"> &#9679;</span>{" "}
          <span className="text-slate-600">{publishedData}</span>
        </p>
      </div>
      <div className="text-xl font-bold">{title}</div>
      <div className="text-normal font-normal">
        {content.slice(0, 100) + "..."}
      </div>

      <div className="text-sm font-thin text-slate-500">{`${Math.ceil(
        content.length / 100
      )} minute(s) read`}</div>
    </div>
  );
}

function AvatarName({ name }: { name: string }) {
  return (
    <div className="relative inline-flex items-center justify-center size-8   overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
      <span className="font-medium text-gray-600 dark:text-gray-300">
        {name[0]}
      </span>
    </div>
  );
}
