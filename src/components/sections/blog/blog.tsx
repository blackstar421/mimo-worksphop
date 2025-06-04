import { BLOG_POST } from "@/constants/blog";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { BsArrowRight } from "react-icons/bs";

const Blog: FC = () => {
  const blogPosts = BLOG_POST;
  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2>Journal de l'Atelier</h2>
          <div className="w-24 h-1 bg-amber-700 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Découvrez nos articles, conseils et actualités autour du bois et de
            la menuiserie artisanale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="relative">
                <Image
                  width={200}
                  height={300}
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-amber-700 text-white text-sm font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-500 text-sm mb-2">{post.date}</p>
                <h3 className="text-xl font-serif font-bold text-wood-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center text-amber-700 hover:text-amber-800 font-medium"
                >
                  Lire l'article <BsArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="#"
            className="inline-block border-2 border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white py-3 px-8 rounded-md font-medium transition-colors duration-300"
          >
            Voir tous les articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
