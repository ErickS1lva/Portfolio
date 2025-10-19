import ProjectCard from '../ProjectCard';
import conexaoAbcImg from '@assets/stock_images/modern_website_scree_991fa800.jpg';

export default function ProjectCardExample() {
  return (
    <div className="p-8 max-w-lg bg-background">
      <ProjectCard
        title="Conexão do ABC"
        description="Portal de notícias regional com cobertura completa do ABC Paulista"
        imageUrl={conexaoAbcImg}
        url="https://www.conexaodoabc.com.br/"
        technologies={['HTML', 'CSS', 'JavaScript']}
      />
    </div>
  );
}
