import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    category: "Featured Stories",
    title: "Meet Our Farmers: Musa in Niger State",
    description:
      "A quick look at Musa’s journey and how your support helped him complete his harvest.",
    date: "July 30, 2025",
    image: "/media/images/frames/musa.svg",
    link: "/blog/musa-niger",
    featured: true,
  },
  {
    id: 2,
    category: "Industry Report",
    title: "Mechanized Farming in Africa",
    description: "Understand why rice is Nigeria’s most supported crop...",
    date: "July 30, 2025",
    image: "/media/images/frames/farmMachine.svg",
    link: "/blog/mechanized-farming",
  },
  {
    id: 3,
    category: "Industry Report",
    title: "Why Rice First?",
    description:
      "Understand why rice is Nigeria’s most supported crop, and how you can help.",
    date: "July 30, 2025",
    image: "/media/images/frames/musa.svg",
    link: "/blog/why-rice",
  },
  {
    id: 4,
    category: "Industry Report",
    title: "New Technologies for Farmers",
    description: "How innovation is transforming farming practices in Africa.",
    date: "July 30, 2025",
    image: "/media/images/frames/farmMachine.svg",
    link: "/blog/new-tech",
  },
];

export function OurBlog() {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-20">
      {/* Header */}
      <div className="mb-8 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          OUR BLOG
        </h2>
        <p className="mt-2 text-gray-600 max-w-2xl">
          Stay connected to the people growing your food. Our blog shares behind
          the scenes stories, smart food tips, and community wins straight from
          the farms and families we support together.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className={`relative rounded-xl overflow-hidden shadow-lg group ${
              post.featured ? "md:col-span-2 lg:col-span-1 lg:row-span-2" : ""
            }`}
          >
            <Image
              src={post.image}
              alt={post.title}
              width={500}
              height={300}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-[url(/media/bg/overlay.svg)] bg-no-repeat bg-center"></div>
            {/* Content */}
            <div className="absolute bottom-0 p-4 text-white">
              <span className="bg-white/20 text-xs px-3 py-1 rounded-full">
                {post.category}
              </span>
              <h3 className="mt-3 text-lg font-semibold">{post.title}</h3>
              {post.featured && (
                <p className="mt-2 text-sm text-gray-200">{post.description}</p>
              )}
              <div className="mt-3 flex items-center justify-between text-sm">
                <span>{post.date}</span>
                <Link
                  href={post.link}
                  className="flex items-center gap-1 hover:underline"
                >
                  {post.featured ? "Read Now" : ""}
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Explore Button */}
      <div className="mt-8 flex justify-center md:justify-end">
        <Link
          href="/blog"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-md flex items-center gap-2"
        >
          Explore Articles <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
