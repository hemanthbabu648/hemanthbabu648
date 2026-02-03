'use client';

import { BookOpen } from 'lucide-react';
import { useEffect, useState } from 'react';

import { MY_WEBSITES } from '@/constants/common';

import { Blog } from '../../types/types';
import BlogCard from '../ui/BlogCard';
import BlogCardSkeleton from '../ui/BlogCardSkeleton';
import Button from '../ui/Button';
import ErrorState from '../ui/ErrorState';
import SectionTitle from '../ui/SectionTitle';

const BLOGS_PER_PAGE = 3;

export default function BlogsPreview() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(BLOGS_PER_PAGE);

  const visibleBlogs = blogs.slice(0, visibleCount);
  const hasMore = visibleCount < blogs.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + BLOGS_PER_PAGE);
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${MY_WEBSITES.blogs}/api/blogs`);
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        const data = await response.json();
        setBlogs(data.data?.posts || []);
      } catch {
        setError('Unable to load blogs');
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <section id="blogs" className="py-16 md:py-24 relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--accent-cyan)]/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative">
        <SectionTitle title="blogs" showViewAll viewAllHref={MY_WEBSITES.blogs} />

        <p className="text-[var(--text-secondary)] mb-8 max-w-2xl leading-relaxed">
          Discover my technical blogs and latest news where I share insights on front-end
          development, modern frameworks, industry trends, and real-world coding practices.
        </p>

        {/* Loading State */}
        {loading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <BlogCardSkeleton key={i} />
            ))}
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <ErrorState
            icon={BookOpen}
            message={error}
            linkText="Visit Blog Site"
            linkHref={MY_WEBSITES.blogs}
          />
        )}

        {/* Empty State */}
        {!loading && !error && blogs.length === 0 && (
          <ErrorState
            icon={BookOpen}
            message="No blogs available yet"
            linkText="Visit Blog Site"
            linkHref={MY_WEBSITES.blogs}
          />
        )}

        {/* Blogs Grid */}
        {!loading && !error && blogs.length > 0 && (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visibleBlogs.map((blog, index) => (
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

            {/* Load More Button */}
            {hasMore && (
              <div className="mt-10 text-center">
                <Button
                  variant="secondary"
                  onClick={handleLoadMore}
                  className="px-6 py-3 rounded-lg"
                >
                  Load More
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
