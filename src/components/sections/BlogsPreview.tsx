'use client';

import { ArrowUpRight, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Blog } from '../../types';
import BlogCard from '../ui/BlogCard';
import SectionTitle from '../ui/SectionTitle';

const BLOGS_SITE_URL = 'https://blogs.hemanthbabu648.com';

export default function BlogsPreview() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${BLOGS_SITE_URL}/api/blogs`);
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        const data = await response.json();
        setBlogs(data.data?.posts?.slice(0, 3) || []);
      } catch (err) {
        setError('Unable to load blogs');
        console.error('Error fetching blogs:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <section id="blogs" className="py-16 md:py-24 relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--np-accent-cyan)]/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative">
        <SectionTitle title="blogs" showViewAll viewAllHref={BLOGS_SITE_URL} />

        {/* Description */}
        <p className="text-[var(--np-text-secondary)] mb-8 max-w-2xl leading-relaxed">
          Here you&apos;ll find a collection of my technical blogs where I explore front-end
          development, modern frameworks, and real-world coding practices.
        </p>

        {/* Loading State */}
        {loading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-[var(--np-bg-secondary)] rounded-xl overflow-hidden border border-[var(--np-border-muted)] animate-pulse"
              >
                <div className="h-48 bg-[var(--np-bg-tertiary)]" />
                <div className="p-5 space-y-3">
                  <div className="h-4 bg-[var(--np-bg-tertiary)] rounded w-3/4" />
                  <div className="h-4 bg-[var(--np-bg-tertiary)] rounded w-1/2" />
                  <div className="h-3 bg-[var(--np-bg-tertiary)] rounded w-full" />
                  <div className="h-3 bg-[var(--np-bg-tertiary)] rounded w-2/3" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--np-bg-secondary)] mb-4">
              <BookOpen size={32} className="text-[var(--np-text-muted)]" />
            </div>
            <p className="text-[var(--np-text-secondary)] mb-4">{error}</p>
            <Link
              href={BLOGS_SITE_URL}
              target="_blank"
              className="inline-flex items-center gap-2 text-[var(--np-accent-purple)] hover:underline"
            >
              Visit Blog Site
              <ArrowUpRight size={16} />
            </Link>
          </div>
        )}

        {/* Blogs Grid */}
        {!loading && !error && blogs.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <div
                key={blog.slug}
                className="opacity-0 animate-fade-in"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: 'forwards',
                }}
              >
                <BlogCard
                  title={blog.title}
                  excerpt={blog.excerpt}
                  coverImage={blog.coverImage}
                  date={blog.date}
                  readTime={blog.readTime}
                  url={blog.url}
                  tags={blog.tags}
                />
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && blogs.length === 0 && (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--np-bg-secondary)] mb-4">
              <BookOpen size={32} className="text-[var(--np-text-muted)]" />
            </div>
            <p className="text-[var(--np-text-secondary)] mb-4">No blogs available yet</p>
            <Link
              href={BLOGS_SITE_URL}
              target="_blank"
              className="inline-flex items-center gap-2 text-[var(--np-accent-purple)] hover:underline"
            >
              Visit Blog Site
              <ArrowUpRight size={16} />
            </Link>
          </div>
        )}

        {/* View All Link */}
        {!loading && blogs.length > 0 && (
          <div className="mt-10 text-center">
            <Link
              href={BLOGS_SITE_URL}
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--np-bg-secondary)] border border-[var(--np-border-muted)] text-[var(--np-text-secondary)] hover:text-white hover:border-[var(--np-accent-purple)]/50 transition-all group"
            >
              <span>View all blogs</span>
              <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
