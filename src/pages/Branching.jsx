import { motion } from 'framer-motion'
import { 
  GitBranch, 
  Shield, 
  Users, 
  Beaker,
  Code2,
  Merge,
  Workflow,
  CheckCircle,
  AlertCircle,
  GitMerge,
  Share2,
  Rocket
} from 'lucide-react'

const Branching = () => {
  const reasonsToUseBranches = [
    {
      icon: Shield,
      title: 'Safe Development',
      description: 'You can work on new features without breaking the main code.',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Users,
      title: 'Parallel Work',
      description: 'Multiple developers can work on different features at the same time.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Beaker,
      title: 'Easy Testing',
      description: 'Test new ideas or features without affecting the live project.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Merge,
      title: 'Better Collaboration',
      description: 'Teams can review code before merging into the main branch.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Workflow,
      title: 'Organized Workflow',
      description: 'Each feature or bug fix can have its own branch.',
      color: 'from-indigo-500 to-purple-500'
    }
  ]

  const branchCommands = [
    {
      command: 'git branch feature-login',
      purpose: 'Create a new branch',
      example: 'git branch feature-login'
    },
    {
      command: 'git checkout feature-login',
      purpose: 'Switch to a branch',
      example: 'git checkout feature-login'
    },
    {
      command: 'git checkout -b feature-login',
      purpose: 'Create and switch to a new branch',
      example: 'git checkout -b feature-login'
    },
    {
      command: 'git merge feature-login',
      purpose: 'Merge a branch into current branch',
      example: 'git merge feature-login'
    }
  ]

  const workflowSteps = [
    { step: 1, title: 'Create a new branch', icon: GitBranch },
    { step: 2, title: 'Work on feature', icon: Code2 },
    { step: 3, title: 'Commit changes', icon: CheckCircle },
    { step: 4, title: 'Merge into main', icon: GitMerge }
  ]

  return (
    <div className="space-y-4 sm:space-y-6 px-2 sm:px-0">
      
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-accent-primary/10 via-accent-secondary/10 to-accent-primary/10 rounded-xl p-4 sm:p-6 md:p-8 border border-accent-primary/20"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0">
          <div className="p-2 sm:p-3 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-xl w-fit mx-auto sm:mx-0">
            <GitBranch size={22} className="sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
          </div>
          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent text-center sm:text-left">
            Branching in Git
          </h1>
        </div>
        <p className="text-dark-textSecondary text-xs sm:text-sm md:text-lg leading-relaxed mt-2 sm:mt-3 md:mt-4 text-center sm:text-left">
          A branch in Git is like a separate line of development. It allows you to work on new features, 
          fixes, or experiments without affecting the main project code.
        </p>
      </motion.div>

  
      <div className="bg-dark-card rounded-xl border border-dark-border overflow-hidden">
        <div className="border-b border-dark-border p-3 sm:p-4 md:p-6">
          <h2 className="text-base sm:text-lg md:text-2xl font-bold text-dark-text">📌 What is a Branch?</h2>
        </div>
        <div className="p-3 sm:p-4 md:p-6 space-y-3">
          <p className="text-dark-textSecondary text-sm sm:text-base">
            A branch in Git is like a separate line of development. It allows you to work on new features, 
            fixes, or experiments without affecting the main project code.
          </p>
          
          <div className="bg-dark-bg rounded-lg p-3 sm:p-4">
            <p className="text-dark-text text-sm sm:text-base">👉 By default, every repository starts with a <span className="text-accent-primary font-semibold">main</span> branch:</p>
            <div className="bg-gray-900 rounded-lg p-2 sm:p-3 mt-2 overflow-x-auto">
              <code className="text-accent-secondary text-xs sm:text-sm">main</code>
            </div>
          </div>

          <div className="bg-dark-bg rounded-lg p-3 sm:p-4">
            <p className="text-dark-text text-sm sm:text-base">👉 When you create a new branch:</p>
            <ul className="list-disc list-inside space-y-1 mt-2 text-dark-textSecondary text-sm sm:text-base">
              <li>It copies the current state of your project</li>
              <li>You can safely make changes independently</li>
            </ul>
          </div>
        </div>
      </div>

   
      <div className="bg-dark-card rounded-xl border border-dark-border overflow-hidden">
        <div className="border-b border-dark-border p-3 sm:p-4 md:p-6">
          <h2 className="text-base sm:text-lg md:text-2xl font-bold text-dark-text">🎯 Simple Example</h2>
        </div>
        <div className="p-3 sm:p-4 md:p-6">
          <p className="text-dark-textSecondary text-sm sm:text-base mb-3">
            Imagine your project is a road:
          </p>
          <div className="space-y-2">
            <div className="bg-dark-bg rounded-lg p-2 sm:p-3">
              <p className="text-green-500 text-sm sm:text-base">main branch → Stable production code</p>
            </div>
            <div className="bg-dark-bg rounded-lg p-2 sm:p-3">
              <p className="text-blue-500 text-sm sm:text-base">feature branch → New feature development</p>
            </div>
          </div>
          
          {/* Visual Diagram */}
          <div className="bg-gray-900 rounded-lg p-3 sm:p-4 mt-4 overflow-x-auto">
            <pre className="text-accent-secondary text-[10px] sm:text-xs md:text-sm">
{`main ────────────────●───────────────
                      \\
                       ●──●──● (feature-login)`}
            </pre>
          </div>
        </div>
      </div>

      {/* Why Developers Use Branches */}
      <div className="bg-dark-card rounded-xl border border-dark-border overflow-hidden">
        <div className="border-b border-dark-border p-3 sm:p-4 md:p-6">
          <h2 className="text-base sm:text-lg md:text-2xl font-bold text-dark-text">🚀 Why Developers Use Branches</h2>
        </div>
        <div className="p-3 sm:p-4 md:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {reasonsToUseBranches.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className={`bg-gradient-to-br ${reason.color} p-3 sm:p-4 rounded-xl`}
              >
                <reason.icon size={20} className="sm:w-5 sm:h-5 text-white mb-2" />
                <h3 className="text-white font-semibold text-sm sm:text-base mb-1">{idx + 1}️⃣ {reason.title}</h3>
                <p className="text-white/80 text-xs sm:text-sm">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Common Branch Commands */}
      <div className="bg-dark-card rounded-xl border border-dark-border overflow-hidden">
        <div className="border-b border-dark-border p-3 sm:p-4 md:p-6">
          <h2 className="text-base sm:text-lg md:text-2xl font-bold text-dark-text">🛠️ Common Branch Commands</h2>
        </div>
        <div className="p-3 sm:p-4 md:p-6">
          <div className="grid grid-cols-1 gap-3">
            {branchCommands.map((cmd, idx) => (
              <div key={idx} className="bg-dark-bg rounded-lg border border-dark-border overflow-hidden">
                <div className="bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 p-2 sm:p-3">
                  <code className="text-accent-secondary text-xs sm:text-sm font-mono">{cmd.command}</code>
                </div>
                <div className="p-2 sm:p-3">
                  <p className="text-dark-textSecondary text-xs sm:text-sm mb-1">{cmd.purpose}</p>
                  <div className="bg-gray-900 rounded p-1.5 sm:p-2 mt-1 overflow-x-auto">
                    <code className="text-dark-text text-xs sm:text-sm">{cmd.example}</code>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      
      <div className="bg-dark-card rounded-xl border border-dark-border overflow-hidden">
        <div className="border-b border-dark-border p-3 sm:p-4 md:p-6">
          <h2 className="text-base sm:text-lg md:text-2xl font-bold text-dark-text">🔄 Branch Workflow (Step-by-Step)</h2>
        </div>
        <div className="p-3 sm:p-4 md:p-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
            {workflowSteps.map((step, idx) => (
              <div key={idx} className="flex items-center w-full sm:w-auto">
                <div className="flex-1 sm:flex-none text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-full flex items-center justify-center mx-auto mb-2">
                    <step.icon size={18} className="sm:w-5 sm:h-5 text-white" />
                  </div>
                  <p className="text-dark-text font-semibold text-xs sm:text-sm">{step.step}. {step.title}</p>
                </div>
                {idx < workflowSteps.length - 1 && (
                  <div className="hidden sm:block text-accent-primary mx-2">↓</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-dark-card rounded-xl border border-dark-border overflow-hidden">
        <div className="border-b border-dark-border p-3 sm:p-4 md:p-6">
          <h2 className="text-base sm:text-lg md:text-2xl font-bold text-dark-text">📊 Branch Flow Visual</h2>
        </div>
        <div className="p-3 sm:p-4 md:p-6">
          <div className="bg-gray-900 rounded-lg p-3 sm:p-4 overflow-x-auto">
            <pre className="text-accent-secondary text-[10px] sm:text-xs md:text-sm">
{`            (feature branch)
                 ●──●──●
                /
               /
●──●──●──●──●──────────────  main branch`}
            </pre>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
            <div className="bg-dark-bg rounded-lg p-2 sm:p-3 text-center">
              <p className="text-accent-primary text-sm sm:text-base">Branch = Copy of your code</p>
            </div>
            <div className="bg-dark-bg rounded-lg p-2 sm:p-3 text-center">
              <p className="text-accent-secondary text-sm sm:text-base">Main = Stable version</p>
            </div>
            <div className="bg-dark-bg rounded-lg p-2 sm:p-3 text-center">
              <p className="text-accent-primary text-sm sm:text-base">Feature branch = Work area</p>
            </div>
            <div className="bg-dark-bg rounded-lg p-2 sm:p-3 text-center">
              <p className="text-accent-secondary text-sm sm:text-base">Merge = Combine changes</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-accent-primary/5 to-accent-secondary/5 rounded-xl p-3 sm:p-4 md:p-6 border border-accent-primary/20">
        <div className="flex items-center space-x-2 mb-3">
          <Rocket size={18} className="sm:w-5 sm:h-5 text-accent-primary" />
          <h3 className="text-sm sm:text-base md:text-lg font-semibold text-dark-text">💡 Real-World Use Case</h3>
        </div>
        <p className="text-dark-textSecondary text-xs sm:text-sm md:text-base">
          <span className="text-accent-primary font-semibold">Scenario:</span> Your team is building a shopping website. 
          While the main branch contains the stable version, three developers work simultaneously on different features:
        </p>
        <ul className="mt-2 space-y-1 text-dark-textSecondary text-xs sm:text-sm md:text-base">
          <li>• Developer A creates a "payment-gateway" branch</li>
          <li>• Developer B creates a "user-profile" branch</li>
          <li>• Developer C creates a "product-search" branch</li>
        </ul>
        <p className="text-dark-textSecondary text-xs sm:text-sm md:text-base mt-2">
          Each works independently, commits changes to their branches, and later merges into main after code review. 
          This keeps the main branch always stable and deployable!
        </p>
      </div>

      {/* Key Takeaway */}
      <div className="bg-gradient-to-r from-accent-primary/5 to-accent-secondary/5 rounded-xl p-3 sm:p-4 md:p-6 border border-accent-primary/20">
        <h3 className="text-sm sm:text-base md:text-lg font-semibold text-dark-text mb-2 text-center">🎯 Key Takeaway</h3>
        <p className="text-dark-textSecondary text-xs sm:text-sm md:text-base text-center">
          Branching is one of Git's most powerful features. It enables safe, parallel development and 
          makes team collaboration smooth and organized. Master branching to become a more effective developer!
        </p>
      </div>
    </div>
  )
}

export default Branching