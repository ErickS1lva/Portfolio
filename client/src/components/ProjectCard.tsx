import { ExternalLink, MousePointerClick } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  url?: string;
  technologies: string[];
}

export default function ProjectCard({ title, description, imageUrl, url, technologies }: ProjectCardProps) {
  const handleClick = () => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`group relative overflow-hidden rounded-xl sm:rounded-2xl border border-border/50 transition-all duration-500 ${
        url ? 'cursor-pointer hover:-translate-y-3 hover:shadow-2xl hover:border-primary/50' : ''
      }`}
      data-testid={`card-project-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="relative aspect-video w-full overflow-hidden bg-muted">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
        
        {url && (
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="bg-white/20 backdrop-blur-md rounded-full p-1.5 sm:p-2 border border-white/30">
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
          </div>
        )}
      </div>
      
      <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6">
        <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5 sm:mb-2 drop-shadow-lg" data-testid={`text-project-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>
            {title}
          </h3>
          
          {description && (
            <p className="text-xs sm:text-sm text-white/95 mb-3 sm:mb-4 line-clamp-2 drop-shadow-md" data-testid={`text-project-description-${title.toLowerCase().replace(/\s+/g, '-')}`}>
              {description}
            </p>
          )}
          
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2">
            {technologies.slice(0, 3).map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-white/25 text-white border-white/40 backdrop-blur-md hover:bg-white/35 transition-colors text-xs"
                data-testid={`badge-tech-${tech.toLowerCase()}-${index}`}
              >
                {tech}
              </Badge>
            ))}
          </div>

          {url && (
            <div className="flex items-center gap-1.5 sm:gap-2 text-white/90 text-xs sm:text-sm mt-1.5 sm:mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <MousePointerClick className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Clique para visitar</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
