// fetches blog items from blogposts

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogDirectory = path.join(process.cwd(), "app", "blog", "blogposts");

// fetches blog data from markdown files in blogposts folder
const getBlogData = () => {
  const fileNames = fs.readdirSync(blogDirectory).filter(f => f.endsWith('.md'));

  if (fileNames.length === 0) {
    return [];
  }

  const blogsData = fileNames.map((fileName) => {
    const fullPath = path.join(blogDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      id: data.id,
      hashtag: data.hashtag,
      title: data.title,
      date: data.date,
      content,
    };
  });

  blogsData.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  return blogsData;
};

const blogData = getBlogData();

export default blogData;
