import ProjectsGallery from '../ProjectsGallery';
import conexaoAbcImg from '@assets/stock_images/modern_website_scree_991fa800.jpg';
import absOficinaImg from '@assets/stock_images/modern_website_scree_44fb8563.jpg';
import assistenteSocialImg from '@assets/stock_images/social_worker_helpin_570300b8.jpg';
import petShopImg from '@assets/stock_images/pet_shop_animals_dog_42641b8a.jpg';

export default function ProjectsGalleryExample() {
  const projects = [
    {
      id: 1,
      title: 'Conexão do ABC',
      description: 'Portal de notícias regional com cobertura completa',
      imageUrl: conexaoAbcImg,
      url: 'https://www.conexaodoabc.com.br/',
      technologies: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      id: 2,
      title: 'ABS Oficina Multimarcas',
      description: 'Site institucional para oficina automotiva',
      imageUrl: absOficinaImg,
      url: 'https://www.absoficinamultimarcas.com/',
      technologies: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      id: 3,
      title: 'Assistente Social',
      description: 'Website profissional para assistente social',
      imageUrl: assistenteSocialImg,
      technologies: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      id: 4,
      title: 'Pet Shop',
      description: 'E-commerce para loja de produtos pet',
      imageUrl: petShopImg,
      technologies: ['HTML', 'CSS', 'JavaScript'],
    },
  ];

  return (
    <div className="bg-background">
      <ProjectsGallery projects={projects} />
    </div>
  );
}
