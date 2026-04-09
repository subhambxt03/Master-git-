import { motion } from 'framer-motion'
import { ArrowRight, Code, GitBranch, Cloud } from 'lucide-react'

const WorkflowDiagram = () => {
  const steps = [
    { name: 'Working Directory', icon: Code, color: 'from-blue-500 to-cyan-500' },
    { name: 'Staging Area', icon: GitBranch, color: 'from-purple-500 to-pink-500' },
    { name: 'Local Repo', icon: Code, color: 'from-green-500 to-teal-500' },
    { name: 'Remote Repo', icon: Cloud, color: 'from-orange-500 to-red-500' },
  ]

  return (
    <div className="bg-dark-card rounded-xl border border-dark-border p-4 sm:p-8">
      <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4">
        {steps.map((step, idx) => (
          <div key={idx} className="flex items-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: idx * 0.2 }}
              className="text-center"
            >
              <div className={`w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-br ${step.color} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-lg`}>
                <step.icon size={20} className="sm:w-8 sm:h-8 text-white" />
              </div>
              <p className="text-dark-text font-medium text-[10px] sm:text-sm">{step.name}</p>
            </motion.div>
            {idx < steps.length - 1 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.2 + 0.1 }}
              >
                <ArrowRight size={16} className="sm:w-6 sm:h-6 text-accent-primary mx-1 sm:mx-2" />
              </motion.div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-4 sm:mt-8 text-center">
        <div className="inline-flex flex-wrap gap-2 sm:gap-4 text-[10px] sm:text-sm text-dark-textSecondary">
          <span>📝 git add</span>
          <span>📦 git commit</span>
          <span>☁️ git push</span>
        </div>
      </div>
    </div>
  )
}

export default WorkflowDiagram