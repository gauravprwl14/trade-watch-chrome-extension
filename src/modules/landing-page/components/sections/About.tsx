'use client';
// src/components/sections/About.tsx
import { motion } from 'framer-motion';
import { Code2, Users, Award, Coffee } from 'lucide-react';

const stats = [
  {
    icon: Code2,
    value: '10+',
    label: 'Years Experience',
  },
  {
    icon: Users,
    value: '100+',
    label: 'Clients Worldwide',
  },
  {
    icon: Award,
    value: '250+',
    label: 'Projects Completed',
  },
  {
    icon: Coffee,
    value: '999+',
    label: 'Coffee Cups',
  },
];

const fadeInUpVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
          className="grid gap-12 md:grid-cols-2"
        >
          {/* Content */}
          <div className="space-y-6">
            <motion.h2
              variants={fadeInUpVariants}
              className="text-3xl font-bold sm:text-4xl"
            >
              Senior Tech Lead with a Passion for Innovation
            </motion.h2>
            <motion.p
              variants={fadeInUpVariants}
              className="text-gray-600 dark:text-gray-400"
            >
              With over a decade of experience in software development and
              technical leadership, I specialize in building scalable,
              enterprise-grade applications that solve real-world problems.
            </motion.p>
            <motion.p
              variants={fadeInUpVariants}
              className="text-gray-600 dark:text-gray-400"
            >
              My expertise spans across full-stack development, cloud
              architecture, and team leadership, ensuring delivery of
              high-quality solutions that exceed client expectations.
            </motion.p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={{
                  initial: { opacity: 0, scale: 0.9 },
                  animate: {
                    opacity: 1,
                    scale: 1,
                    transition: { delay: index * 0.1 },
                  },
                }}
                className="card flex flex-col items-center p-6 text-center"
              >
                <stat.icon className="mb-4 h-8 w-8 text-primary" />
                <div className="text-3xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
