'use client';

import { FolderGit2 } from 'lucide-react';
import { useEffect, useState } from 'react';

import { MY_WEBSITES } from '@/constants/common';

import { getAllProjects } from '../../services/projects';
import { Project, ProjectsAPIResponse } from '../../types/types';
import Button from '../ui/Button';
import ErrorState from '../ui/ErrorState';
import ProjectCard from '../ui/ProjectCard';
import ProjectCardSkeleton from '../ui/ProjectCardSkeleton';
import SectionTitle from '../ui/SectionTitle';

const PROJECTS_PER_PAGE = 3;

export default function ProjectsPreview() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(PROJECTS_PER_PAGE);

  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + PROJECTS_PER_PAGE);
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res: ProjectsAPIResponse = await getAllProjects();
        setProjects(res.data.projects || []);
      } catch {
        setError('Unable to load projects');
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-16 md:py-24 relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--accent-purple)]/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative">
        <SectionTitle title="projects" showViewAll viewAllHref={MY_WEBSITES.apps} />

        {/* Loading State */}
        {loading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <ProjectCardSkeleton key={i} />
            ))}
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <ErrorState
            icon={FolderGit2}
            message={error}
            linkText="Visit Projects Site"
            linkHref={MY_WEBSITES.apps}
          />
        )}

        {/* Empty State */}
        {!loading && !error && projects.length === 0 && (
          <ErrorState
            icon={FolderGit2}
            message="No projects available yet"
            linkText="Visit Projects Site"
            linkHref={MY_WEBSITES.apps}
          />
        )}

        {/* Projects Grid */}
        {!loading && !error && projects.length > 0 && (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visibleProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="opacity-0 animate-fade-in"
                  style={{
                    animationDelay: `${index * 150}ms`,
                    animationFillMode: 'forwards',
                  }}
                >
                  <ProjectCard
                    title={project.name}
                    description={project.description}
                    image={project.image}
                    tags={project.tags}
                    liveUrl={project.liveUrl || project.projectUrl}
                    sourceUrl={project.sourceCodeLink}
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
