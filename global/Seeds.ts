import { NavItem } from '../interfaces/NavIten';

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Inicio',
    page: 'home',
    href: '#',
  },
  {
    label: 'Sobre mí',
    page: 'about',
    href: '#',
  },
  {
    label: 'Contacto',
    page: 'contact',
    href: '#',
  },
  {
    label: 'Proyectos',
    page: 'projects',
    href: '#',
  },
];

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Java" },
  { skill: "C#" },
  { skill: "Sass" },
  { skill: "Bootstrap" },
  { skill: "Semantic UI" },
  { skill: "Chakra UI" },
  { skill: "Material UI" },
  { skill: "API Rest" },
  { skill: "GraphQL" },
  { skill: "SQL Server" },
  { skill: "Oracle SQL" },
  { skill: "Scrum" },
]

const projects = [
  {
    name: "Pokemon App",
    description:
      "Proyecto donde se consulta PokéAPI para obtener resultados de pokemones y sus evoluciones. También se puede ver el detalle de un Pokémon, sus Sprites y agregarlo o quitarlo de favoritos.",
    image: "/pokemon-project.jpg",
    github: "https://github.com/jesussaco9/pokemon",
    link: "https://pokemon-9hf1.vercel.app/",
  }
]
const resume = '/Documents/CVJesusSanchezCorderoES.pdf'

export {
  NAV_ITEMS,
  skills,
  projects,
  resume
}
