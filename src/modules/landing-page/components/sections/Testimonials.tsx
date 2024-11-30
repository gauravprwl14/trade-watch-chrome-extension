'use client';
// src/components/sections/Testimonials.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Testimonial } from '@/types/portfolio';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'John Smith',
    company: 'Tech Corp',
    quote:
      'Exceptional technical leadership and delivery of our enterprise platform.',
    rating: 5,
    photoUrl: '/images/testimonials/john.jpg',
  },
  // Add more testimonials...
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="bg-gray-50 py-20 dark:bg-gray-800/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">
            Client Testimonials
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            What our clients say about our work
          </p>
        </motion.div>

        <div className="relative mt-16">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="mx-auto max-w-3xl px-4"
              >
                <div className="text-center">
                  <div className="relative mx-auto mb-6 h-20 w-20 overflow-hidden rounded-full">
                    <img
                      src={testimonials[currentIndex].photoUrl}
                      alt={testimonials[currentIndex].name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <blockquote className="mb-6 text-xl italic text-gray-900 dark:text-white">
                    {testimonials[currentIndex].quote}
                  </blockquote>

                  <div className="mb-4 flex justify-center">
                    {[...Array(testimonials[currentIndex].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-yellow-400 text-yellow-400"
                        />
                      )
                    )}
                  </div>

                  <div className="text-lg font-semibold">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonials[currentIndex].company}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg transition-all hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg transition-all hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots */}
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-4 bg-primary'
                    : 'bg-gray-300 dark:bg-gray-700'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
