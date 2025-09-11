import BlogCard from "../CommonComponents/BlogCard";
import PageHeader from "../CommonComponents/PageHeader";

const Blog = () => {
  return (
    <div className="container">
      <div className="py-20">
        <div className="pb-10">
          <PageHeader
            title="Latest Blog Updates"
            desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
          />
        </div>
        <div className="md:flex md:gap-x-6 px-5 md:px-0">
          <div className="w-full md:w-1/2">
            <BlogCard
              imageUrl="https://images.pexels.com/photos/28718309/pexels-photo-28718309.jpeg"
              authorImage="https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg"
              authorName="Monica Wagase"
              postDate="12 Jan 2019"
              title="Ten Ways To Tell You're Suffering From An Obession With Industry"
              description="Pream Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry standrd dummy text never."
            />
          </div>

          <div className="w-full md:w-1/2">
            <BlogCard
              imageUrl="https://images.pexels.com/photos/28718309/pexels-photo-28718309.jpeg"
              authorImage="https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg"
              authorName="Monica Wagase"
              postDate="12 Jan 2019"
              title="Ten Ways To Tell You're Suffering From An Obession With Industry"
              description="Pream Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry standrd dummy text never."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
