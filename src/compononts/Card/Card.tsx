import React, { useState } from 'react';
import { Star, Trash2 } from 'lucide-react';

interface Technology {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
  badgeColor?: string;
}

const technologiesData: Technology[] = [
  {
    id: 'react',
    name: 'React',
    category: 'Frontend',
    description:
      'A declarative, component-based JavaScript library for building modern user interfaces.',
    icon: 'https://icon.icepanel.io/Technology/svg/React.svg',
    rating: 4.9,
    difficulty: 'Beginner-Friendly',
    badge: 'Popular',
    badgeColor: 'bg-sky-50 text-sky-500',
  },
  {
    id: 'vuejs',
    name: 'Vue.js',
    category: 'Frontend',
    description:
      'An approachable, performant, and versatile framework for building web user interfaces.',
    icon: 'https://icon.icepanel.io/Technology/svg/Vue.js.svg',
    rating: 4.8,
    difficulty: 'Beginner-Friendly',
    badge: 'Versatile',
    badgeColor: 'bg-emerald-50 text-emerald-600',
  },
  {
    id: 'svelte',
    name: 'Svelte',
    category: 'Frontend',
    description:
      'Cybernetically enhanced web apps with compile-time reactivity and zero virtual DOM overhead.',
    icon: 'https://icon.icepanel.io/Technology/svg/Svelte.svg',
    rating: 4.8,
    difficulty: 'Intermediate',
    badge: 'Fast',
    badgeColor: 'bg-orange-50 text-orange-500',
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'Frontend',
    description:
      'The React framework for full-stack web applications with hybrid static & server rendering.',
    icon: 'https://icon.icepanel.io/Technology/svg/Next.js.svg',
    rating: 4.9,
    difficulty: 'Intermediate',
    badge: 'Trending',
    badgeColor: 'bg-gray-100 text-gray-700',
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'Backend',
    description:
      "An asynchronous event-driven JavaScript runtime built on Chrome's V8 engine.",
    icon: 'https://icon.icepanel.io/Technology/svg/Node.js.svg',
    rating: 4.8,
    difficulty: 'Intermediate',
    badge: 'Standard',
    badgeColor: 'bg-emerald-50 text-emerald-600',
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'Database',
    description:
      'A powerful, open-source object-relational database system with proven reliability.',
    icon: 'https://icon.icepanel.io/Technology/svg/PostgresSQL.svg',
    rating: 4.9,
    difficulty: 'Intermediate',
    badge: 'Top SQL',
    badgeColor: 'bg-indigo-50 text-indigo-500',
  },
  {
    id: 'redis',
    name: 'Redis',
    category: 'Database',
    description:
      'In-memory data structure store used as a high-speed database, cache, and message broker.',
    icon: 'https://icon.icepanel.io/Technology/svg/Redis.svg',
    rating: 4.8,
    difficulty: 'Intermediate',
    badge: 'Cache',
    badgeColor: 'bg-rose-50 text-rose-500',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'Language',
    description:
      'The versatile, ubiquitous scripting language powering dynamic behavior across the web.',
    icon: 'https://icon.icepanel.io/Technology/svg/JavaScript.svg',
    rating: 4.9,
    difficulty: 'Beginner-Friendly',
    badge: 'Ubiquitous',
    badgeColor: 'bg-amber-50 text-amber-600',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'Language',
    description:
      'A strongly typed programming language that builds on JavaScript for robust tooling.',
    icon: 'https://icon.icepanel.io/Technology/svg/TypeScript.svg',
    rating: 4.9,
    difficulty: 'Intermediate',
    badge: 'Essential',
    badgeColor: 'bg-sky-50 text-sky-600',
  },
  {
    id: 'java',
    name: 'Java',
    category: 'Language',
    description:
      'A secure, object-oriented programming language designed for portability and scale.',
    icon: 'https://icon.icepanel.io/Technology/svg/Java.svg',
    rating: 4.6,
    difficulty: 'Intermediate',
    badge: 'Robust',
    badgeColor: 'bg-cyan-50 text-cyan-600',
  },
  {
    id: 'tailwindcss',
    name: 'Tailwind CSS',
    category: 'Styling',
    description:
      'A utility-first CSS framework packed with classes that can be composed to build custom UI.',
    icon: 'https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg',
    rating: 4.9,
    difficulty: 'Beginner-Friendly',
    badge: 'Modern',
    badgeColor: 'bg-teal-50 text-teal-600',
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'DevOps',
    description:
      'A platform designed to build, share, and run containerized applications reliably.',
    icon: 'https://icon.icepanel.io/Technology/svg/Docker.svg',
    rating: 4.9,
    difficulty: 'Intermediate',
    badge: 'Containers',
    badgeColor: 'bg-sky-50 text-sky-500',
  },
];

export const TechExplorer: React.FC = () => {
 
  const [selectedStack, setSelectedStack] = useState<Technology[]>([]);

  const addToStack = (tech: Technology) => {

    if (selectedStack.some((item) => item.id === tech.id)) {
      return;
    }

    setSelectedStack((prev) => [...prev, tech]);
  };

  const removeFromStack = (id: string) => {
    setSelectedStack((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

   
        <div className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Explore the Technologies
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

   
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">

            {technologiesData.map((tech) => {
              const isAdded = selectedStack.some(
                (item) => item.id === tech.id
              );

              return (
                <div
                  key={tech.id}
                  className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                 
                  <div className="mb-5 flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-100 bg-slate-50 p-2">
                      <img
                        src={tech.icon}
                        alt={`${tech.name} logo`}
                        className="h-8 w-8 object-contain"
                      />
                    </div>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        tech.badgeColor ??
                        'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {tech.badge}
                    </span>
                  </div>

             
                  <h2 className="text-lg font-bold text-slate-900">
                    {tech.name}
                  </h2>

   
                  <p className="mt-2 min-h-[72px] text-sm leading-6 text-slate-500">
                    {tech.description}
                  </p>

                  {/* Tags + Rating */}
                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    <span className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                      {tech.category}
                    </span>

                    <span className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                      {tech.difficulty}
                    </span>

                    <div className="ml-auto flex items-center gap-1 text-sm font-semibold text-slate-700">
                      <Star
                        size={15}
                        className="fill-yellow-400 text-yellow-400"
                      />
                      {tech.rating}
                    </div>
                  </div>

           
                  <button
                    type="button"
                    onClick={() => addToStack(tech)}
                    disabled={isAdded}
                    className={`mt-5 w-full rounded-lg py-2.5 text-xs font-semibold transition-all duration-200 ${
                      isAdded
                        ? 'cursor-default bg-emerald-500 text-white'
                        : 'bg-[#0b0f19] text-white shadow-sm hover:bg-slate-800'
                    }`}
                  >
                    {isAdded ? 'Added to Stack' : 'Add to Stack'}
                  </button>
                </div>
              );
            })}

          </div>

        
          <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-6">

            <div className="mb-5">
              <h2 className="text-lg font-bold text-slate-900">
                Your Stack
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                {selectedStack.length === 0
                  ? 'Your stack is empty.'
                  : `${selectedStack.length} item${
                      selectedStack.length > 1 ? 's' : ''
                    } in your stack.`}
              </p>
            </div>

     
            {selectedStack.length === 0 ? (
              <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-8 text-center">
                <p className="text-sm font-medium text-slate-600">
                  No technologies selected yet.
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  Add technologies from the list.
                </p>
              </div>
            ) : (
       
              <div className="space-y-3">
                {selectedStack.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 p-3"
                  >
                    
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-50 p-1.5">
                      <img
                        src={item.icon}
                        alt={`${item.name} logo`}
                        className="h-6 w-6 object-contain"
                      />
                    </div>

                    {/* Name + Category */}
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-slate-800">
                        {item.name}
                      </p>

                      <p className="text-xs text-slate-400">
                        {item.category}
                      </p>
                    </div>

                    {/* Remove */}
                    <button
                      type="button"
                      onClick={() => removeFromStack(item.id)}
                      className="rounded-md p-1 text-slate-400 transition hover:bg-red-50 hover:text-red-500"
                      aria-label={`Remove ${item.name}`}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}

          </aside>
        </div>
      </div>
    </div>
  );
};

export default TechExplorer;