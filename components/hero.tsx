import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <div className="container flex flex-col items-center justify-center gap-4 py-24 text-center md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Transform Documents into
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            {" "}
            Insights
          </span>
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
          Powerful AI that reads, understands, and summarizes your documents in seconds.
          Save hours of reading time and extract key information instantly.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex flex-col gap-4 sm:flex-row"
      >
        <Button size="lg" asChild>
          <Link href="/signup">Start Free Trial</Link>
        </Button>
        <Button variant="outline" size="lg">
          Watch Demo
        </Button>
      </motion.div>
    </div>
  );
}