const BlogCard = ({
  imageUrl,
  authorImage,
  authorName,
  postDate,
  title,
  description,
}) => {
  return (
    <>
      <div className="relative w-full mx-auto group">
        {/* Background Image */}
        <div className="rounded-12px overflow-hidden shadow-box-LGshadow">
          <img
            src={imageUrl}
            alt="Industrial excavator"
            className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Overlapping Content Box */}
        <div className="relative bg-text-White w-11/12 mx-auto rounded-12px p-6 -mt-16 z-10 shadow-box-LGshadow">
          {/* Author Information */}
          <div className="flex items-center mb-4">
            <img
              src={authorImage}
              alt={authorName}
              className="w-12 h-12 rounded-24px object-cover mr-4 border-2 border-text-White shadow-box-shadow"
            />
            <div>
              <p className="font-bold text-gray-800 text-lg">{authorName}</p>
              <p className="text-sm text-gray-500">by Admin | {postDate}</p>
            </div>
          </div>

          {/* Post Title */}
          <h2 className="font-bold text-xl text-gray-900 mb-3 leading-tight">
            {title}
          </h2>

          {/* Post Description */}
          <p className="text-gray-600 mb-6">{description}</p>

          {/* Read More Link */}
          <a
            href="#"
            className="font-semibold text-background transition-colors duration-300 inline-flex items-center"
          >
            Read More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
