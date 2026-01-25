import type { Blog } from "../types/blog";

type Props = {
  blog: Blog;
};
export default function BlogContent({ blog }: Props) {
  return (
    <section className="blog-content">
      <section className="tag">{blog.tag}</section>
      <section className="publish-date">
        Published {blog.date.toLocaleDateString()}
      </section>
      <h3>{blog.title}</h3>
      <section className="description">{blog.description}</section>
    </section>
  );
}
