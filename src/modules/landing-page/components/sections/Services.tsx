'use client';
// src/components/sections/Services.tsx
import { motion } from 'framer-motion';
import {
  Code,
  Smartphone,
  Cloud,
  Database,
  Layout,
  Settings,
} from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Full Stack Development',
    description:
      'End-to-end development using modern technologies like React, Node.js, and TypeScript.',
    technologies: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'],
  },
  {
    icon: Cloud,
    title: 'Cloud Architecture',
    description:
      'Scalable cloud solutions using AWS, Azure, or GCP with microservices architecture.',
    technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description:
      'Cross-platform mobile applications using React Native and Flutter.',
    technologies: ['React Native', 'Flutter', 'iOS', 'Android'],
  },
  {
    icon: Database,
    title: 'Database Design',
    description:
      'Efficient database architecture for scalable and performant applications.',
    technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'],
  },
  {
    icon: Layout,
    title: 'UI/UX Design',
    description:
      'Modern and intuitive user interfaces with focus on user experience.',
    technologies: ['Figma', 'Adobe XD', 'Tailwind CSS', 'Material-UI'],
  },
  {
    icon: Settings,
    title: 'DevOps & CI/CD',
    description:
      'Automated deployment pipelines and infrastructure management.',
    technologies: ['Jenkins', 'GitHub Actions', 'GitLab CI', 'ArgoCD'],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-gray-50 py-20 dark:bg-gray-800/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Comprehensive solutions for your digital needs
          </p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: index * 0.1 },
                },
              }}
              className="card group cursor-pointer"
            >
              <service.icon className="mb-4 h-8 w-8 text-primary transition-transform group-hover:scale-110" />
              <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
