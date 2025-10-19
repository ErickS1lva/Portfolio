import ProjectCard from './ProjectCard';
import type { Project } from '@shared/schema';
import { Code2 } from 'lucide-react';

interface ProjectsGalleryProps {
  projects: Project[];
}

export default function ProjectsGallery({ projects }: ProjectsGalleryProps) {
  return (
    <section id="projetos" className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <div className="text-center mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <Code2 className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent" data-testid="text-projects-title">
            Meus Projetos
          </h1>
        </div>
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
          Alguns dos trabalhos que desenvolvi para clientes e projetos pessoais
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            url={project.url}
            technologies={project.technologies}
          />
        ))}
      </div>
    </section>
  );
}
