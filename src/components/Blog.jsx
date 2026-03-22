import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: "5 Daily Habits for a Healthier Heart you deserve",
      desc: "Adopt simple daily habits like balanced eating, regular exercise, and stress control to strengthen your heart and boost longevity.",
      image: "checker",
      date: "Jan 25, 2025"
    },
    {
      title: "5 Daily Habits for a Healthier Heart you deserve",
      desc: "Adopt simple daily habits like balanced eating, regular exercise, and stress control to strengthen your heart and boost longevity.",
      image: "checker",
      date: "Jan 25, 2025"
    },
    {
      title: "5 Daily Habits for a Healthier Heart you deserve",
      desc: "Adopt simple daily habits like balanced eating, regular exercise, and stress control to strengthen your heart and boost longevity.",
      image: "checker",
      date: "Jan 25, 2025"
    }
  ];

  return (
    <section id="blog" className="min-h-[1047px] flex items-center justify-center bg-white py-24">
      <div className="w-full max-w-[1636px] mx-auto px-4 lg:px-0">
        
        {/* Section Header - Literal 1636px */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-24 gap-12">
          <div className="max-w-[883px]">
            <span className="inline-flex items-center gap-2.5 text-[14px] font-black text-[#5DA9C6] uppercase tracking-[0.2em] mb-6">
              <span className="text-[18px] font-bold">+</span>
              TESTIMONIALS
            </span>
            <h2 className="text-[44px] md:text-[64px] font-medium text-[#2F6F8F] leading-[1.05] tracking-tighter">
              The MedixWeb Total Care Model <br /> Our Community
            </h2>
          </div>
          
          <div className="w-full lg:w-[641px] pt-12">
            <p className="text-[18px] text-[#6B7C93] leading-[1.52] font-medium opacity-80">
              Providing patient-centered care through expert Providing patient-centered care through expertProviding patient-centered care through expert
            </p>
          </div>
        </div>

        {/* Blog Cards Grid - Literal 1633px cluster, 20px gap */}
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-[20px] max-w-[1633px] mx-auto">
          {posts.map((post, i) => (
            <motion.article 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="w-full lg:w-[531px] flex flex-col gap-[32px]"
            >
              {/* Image Container - Literal 531x488 */}
              <div className="w-full h-[488px] rounded-[20px] overflow-hidden bg-[#f3f4f6] relative">
                {post.image === "checker" ? (
                  <div className="w-full h-full opacity-10" style={{ backgroundImage: 'repeating-conic-gradient(#000 0% 25%, #fff 0% 50%)', backgroundSize: '40px 40px' }} />
                ) : (
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                )}
              </div>
              
              {/* Content Container - Literal 531x294 */}
              <div className="flex flex-col flex-1">
                <h3 className="text-[28px] md:text-[32px] font-black text-[#2F6F8F] mb-4 leading-[1.15] tracking-tight group-hover:text-[#5DA9C6] transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-[#6B7C93] text-[16px] leading-[1.6] font-medium opacity-90 mb-10 overflow-hidden text-ellipsis line-clamp-3">
                  {post.desc} Adopt simple daily habits like balanced eating, regular exercise, and stress control to strengthen your heart and boost longevity.
                </p>

                <div className="mt-auto flex items-center justify-between pt-8 border-t border-gray-100/50">
                  <button className="flex items-center gap-4 text-[15px] font-bold text-[#2F6F8F] transition-colors">
                    Read More
                    <div className="w-11 h-11 rounded-full bg-[#2F6F8F] text-white flex items-center justify-center shadow-md">
                      <ArrowRight size={20} />
                    </div>
                  </button>
                  <span className="text-[14px] font-medium text-[#BCC4CD] tracking-wide">{post.date}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
