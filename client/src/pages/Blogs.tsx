import BlogCard from "../components/BlogCard";

export default function Blogs() {
  return (
    <div className="max-w-7xl mx-auto">
      <BlogCard
        authorName="ashish"
        title="This is a blog"
        content="content of the blog"
        publishedData={"6th August 2024"}
      />
    </div>
  );
}
