import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import whyChooseUsImg from '../assets/why-choose-us.png';

const Blog = () => {
  const posts = [
    {
      title: "5 Daily Habits for a Healthier Heart you deserve.",
      desc: "Adopt simple daily habits like balanced eating, regular exercise, and stress control to strengthen your heart and boost longevity.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800",
      date: "Jan 25, 2025"
    },
    {
      title: "Top Benefits of Regular Health Checkups.",
      desc: "Discover how routine health checkups help detect issues early, prevent serious diseases, and promote long-term physical and mental wellness.",
      image: whyChooseUsImg,
      date: "Jan 25, 2025"
    },
    {
      title: "The Link Between Stress & Physical Health.",
      desc: "Understand how unmanaged stress affects your body and why regular health checkups are vital for early detection and prevention.",
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800",
      date: "Jan 25, 2025"
    }
  ];

  return (
    <section id="blog" className="pt-[60px] pb-[120px] bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-[70px] gap-8">
          <div className="max-w-[750px]">
            <span className="inline-flex items-center gap-2 text-[13px] font-bold text-[#1E3A5F60] uppercase tracking-[0.25em] mb-6">
              <span className="text-[22px] font-bold text-[#10B981]">+</span> BLOG
            </span>
            <h2 className="text-[36px] md:text-[52px] font-extrabold text-[#1E3A5F] leading-[1.1] tracking-tight">
              Explore Expert Insights for a <br /> Healthier, Happier Life
            </h2>
          </div>
          <p className="text-[14px] text-[#6B7C93] leading-[1.7] font-medium opacity-80 max-w-[420px] pb-2">
            Discover expert health insights, wellness advice, and medical updates to help you make informed decisions and live a healthier life every day.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid md:grid-cols-3 gap-[40px]">
          {posts.map((post, i) => (
            <motion.article 
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="mb-8 overflow-hidden rounded-[40px] aspect-[4/3] shadow-premium relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1579684388383-659f4299b794?auto=format&fit=crop&q=80&w=800";
                  }}
                />
              </div>
              
              <div className="px-2">
                <h3 className="text-[22px] font-extrabold text-[#1E3A5F] mb-4 leading-[1.3] group-hover:text-[#2F6F8F] transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-[#6B7C93] text-[15px] leading-relaxed font-medium mb-8">
                  {post.desc}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <button className="flex items-center gap-3 text-[14px] font-extrabold text-[#1E3A5F40] uppercase tracking-wider group-hover:text-[#2F6F8F] transition-colors">
                    Read More
                    <div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-[#2F6F8F] group-hover:text-white group-hover:border-transparent transition-all">
                      <ArrowRight size={14} />
                    </div>
                  </button>
                  <span className="text-[12px] font-bold text-[#1E3A5F40]">{post.date}</span>
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
