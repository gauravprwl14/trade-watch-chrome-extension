import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-20">
      <div className="container mx-auto px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
            Building <span className="text-primary">Digital Excellence</span>
            <br />
            One Project at a Time
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600 dark:text-gray-400">
            With over a decade of experience in software development, we
            transform your ideas into powerful digital solutions.
          </p>

          <div className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
            <button className="group flex items-center space-x-2 rounded-full bg-primary px-8 py-4 text-white transition-all hover:bg-primary/90">
              <span>Get Started</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button className="rounded-full border-2 border-gray-300 px-8 py-4 transition-all hover:border-primary hover:text-primary dark:border-gray-700">
              View Portfolio
            </button>
          </div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 to-transparent dark:from-primary/10" />
    </section>
  );
}
