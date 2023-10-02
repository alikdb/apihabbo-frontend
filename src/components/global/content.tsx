import { motion } from "framer-motion";

interface Props {
  delay?: number;
  exitDelay?: number;
  children: React.ReactNode;
}

export default function OpacityContent({
  children,
  delay,
  exitDelay,
  ...props
}: Props) {
  return (
    <div className="flex min-h-screen flex-1 lg:ml-64">
      <motion.section
        initial={{ opacity: 0 }}
        className="w-full"
        animate={{ opacity: 1, transition: { delay } }}
        exit={{ opacity: 0, transition: { delay: exitDelay } }}
        {...props}
      >
        {children}
      </motion.section>
    </div>
  );
}
