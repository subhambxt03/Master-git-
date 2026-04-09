import { motion } from 'framer-motion'
import { Terminal } from 'lucide-react'

const CommandCard = ({ command, purpose, example, explanation }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-dark-bg rounded-lg border border-dark-border p-3 sm:p-4 hover:border-accent-primary transition-all"
    >
      <div className="flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-3">
        <Terminal size={20} className="text-accent-primary" />
        <div className="flex-1">
          <div className="code-block bg-dark-bg p-2 sm:p-3 rounded-lg mb-3 overflow-x-auto">
            <code className="text-accent-secondary text-xs sm:text-sm">$ {command}</code>
          </div>
          <h4 className="text-dark-text font-semibold text-sm sm:text-base mb-2">{purpose}</h4>
          <p className="text-dark-textSecondary text-xs sm:text-sm mb-2">
            <span className="text-accent-primary">Example:</span> {example}
          </p>
          <p className="text-dark-textSecondary text-xs sm:text-sm">{explanation}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default CommandCard