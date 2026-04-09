import { motion } from 'framer-motion'

const SectionCard = ({ title, icon: Icon, children, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-dark-card rounded-xl border border-dark-border overflow-hidden ${className}`}
    >
      <div className="border-b border-dark-border p-4 sm:p-6">
        <div className="flex items-center space-x-2 sm:space-x-3">
          {Icon && (
            <div className="p-1.5 sm:p-2 bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 rounded-lg">
              <Icon className="text-accent-primary" size={20} />
            </div>
          )}
          <h2 className="text-xl sm:text-2xl font-bold text-dark-text">{title}</h2>
        </div>
      </div>
      <div className="p-4 sm:p-6">
        {children}
      </div>
    </motion.div>
  )
}

export default SectionCard