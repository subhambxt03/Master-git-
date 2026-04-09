import { motion } from 'framer-motion'
import { 
  Terminal, 
  GitBranch, 
  Download, 
  Upload, 
  RefreshCw,
  PlusCircle,
  Save,
  GitPullRequest,
  Share2,
  Command,
  BookOpen
} from 'lucide-react'

const GitCommands = () => {
  const commands = [
    {
      name: 'git init',
      icon: GitBranch,
      purpose: 'Initialize a new Git repository in your project',
      example: 'git init',
      explanation: 'This command creates a hidden .git folder in your project. It allows Git to start tracking all changes in that directory.',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20'
    },
    {
      name: 'git clone',
      icon: Download,
      purpose: 'Download a repository from a remote server to your local system',
      example: 'git clone https://github.com/user/project.git',
      explanation: 'It creates a copy of an existing repository along with all files, branches, and commit history.',
      color: 'from-green-500 to-teal-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20'
    },
    {
      name: 'git status',
      icon: RefreshCw,
      purpose: 'Check the current state of your repository',
      example: 'git status',
      explanation: 'Shows which files are: Modified, Staged, or Untracked. Helps you understand what\'s going on before committing.',
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/20'
    },
    {
      name: 'git add',
      icon: PlusCircle,
      purpose: 'Add changes to the staging area',
      example: 'git add app.js  or  git add .',
      explanation: 'Moves selected files from the working directory to the staging area so they can be committed.',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20'
    },
    {
      name: 'git commit',
      icon: Save,
      purpose: 'Save changes to the local repository',
      example: 'git commit -m "Added login feature"',
      explanation: 'Creates a snapshot of staged changes. Each commit has a message describing what was changed.',
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/20'
    },
    {
      name: 'git push',
      icon: Upload,
      purpose: 'Upload local commits to a remote repository',
      example: 'git push origin main',
      explanation: 'Sends your committed changes to platforms like GitHub so others can access them.',
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/20'
    },
    {
      name: 'git pull',
      icon: Download,
      purpose: 'Fetch and update your local repository with remote changes',
      example: 'git pull origin main',
      explanation: 'Downloads the latest updates and merges them into your current branch.',
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/20'
    },
    {
      name: 'git branch',
      icon: GitBranch,
      purpose: 'Manage branches in your repository',
      example: 'git branch new-feature',
      explanation: 'View all branches, create new branches, helps in working on features separately.',
      color: 'from-teal-500 to-green-500',
      bgColor: 'bg-teal-500/10',
      borderColor: 'border-teal-500/20'
    },
    {
      name: 'git checkout',
      icon: Share2,
      purpose: 'Switch between branches',
      example: 'git checkout new-feature',
      explanation: 'Moves you from one branch to another so you can work on different features or versions.',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/20'
    },
    {
      name: 'git merge',
      icon: GitPullRequest,
      purpose: 'Combine changes from one branch into another',
      example: 'git merge new-feature',
      explanation: 'Takes the changes from a branch and merges them into your current branch (usually main).',
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/20'
    }
  ]

  return (
    <div className="space-y-4 sm:space-y-6 px-2 sm:px-0">
      {/* Hero Section - Mobile Responsive */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-accent-primary/10 via-accent-secondary/10 to-accent-primary/10 rounded-xl p-4 sm:p-6 md:p-8 border border-accent-primary/20"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0">
          <div className="p-2 sm:p-3 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-xl w-fit mx-auto sm:mx-0">
            <Terminal size={22} className="sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
          </div>
          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent text-center sm:text-left">
            Git Commands
          </h1>
        </div>
        <p className="text-dark-textSecondary text-xs sm:text-sm md:text-lg leading-relaxed mt-2 sm:mt-3 md:mt-4 text-center sm:text-left">
          Master the essential Git commands with practical examples and detailed explanations. 
          Each command card includes purpose, example, and real-world usage.
        </p>
      </motion.div>

      {/* Command Cards Grid - Responsive */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
        {commands.map((cmd, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: (idx % 10) * 0.05 }}
            whileHover={{ scale: 1.02 }}
            className={`${cmd.bgColor} border ${cmd.borderColor} rounded-xl overflow-hidden`}
          >
            {/* Card Header */}
            <div className={`bg-gradient-to-r ${cmd.color} p-3 sm:p-4 md:p-5`}>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="p-1 sm:p-1.5 bg-white/20 rounded-lg">
                  <cmd.icon size={16} className="sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
                </div>
                <div>
                  <code className="text-white font-mono font-bold text-sm sm:text-base md:text-lg">
                    {cmd.name}
                  </code>
                </div>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-3 sm:p-4 md:p-5 space-y-2 sm:space-y-3">
              {/* Purpose */}
              <div>
                <div className="flex items-center space-x-1 sm:space-x-2 mb-1">
                  <span className="text-accent-primary text-xs sm:text-sm font-semibold">🎯 Purpose:</span>
                </div>
                <p className="text-dark-textSecondary text-xs sm:text-sm md:text-base">{cmd.purpose}</p>
              </div>

              {/* Example */}
              <div>
                <div className="flex items-center space-x-1 sm:space-x-2 mb-1">
                  <span className="text-accent-secondary text-xs sm:text-sm font-semibold">💡 Example:</span>
                </div>
                <div className="bg-gray-900 rounded-lg p-2 sm:p-3 overflow-x-auto">
                  <code className="text-accent-secondary text-xs sm:text-sm md:text-base whitespace-pre-wrap break-words">
                    {cmd.example}
                  </code>
                </div>
              </div>

              {/* Explanation */}
              <div>
                <div className="flex items-center space-x-1 sm:space-x-2 mb-1">
                  <span className="text-accent-primary text-xs sm:text-sm font-semibold">🧾 Explanation:</span>
                </div>
                <p className="text-dark-textSecondary text-xs sm:text-sm md:text-base">{cmd.explanation}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quick Reference Section - Responsive Table */}
      <div className="bg-dark-card rounded-xl border border-dark-border overflow-hidden">
        <div className="border-b border-dark-border p-3 sm:p-4 md:p-6">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <Command size={16} className="sm:w-4 sm:h-4 md:w-5 md:h-5 text-accent-primary" />
            <h2 className="text-base sm:text-lg md:text-2xl font-bold text-dark-text">Quick Command Reference</h2>
          </div>
        </div>
        <div className="p-3 sm:p-4 md:p-6 overflow-x-auto">
          {/* Mobile View - Card Layout */}
          <div className="block md:hidden space-y-3">
            {commands.map((cmd, idx) => (
              <div key={idx} className="bg-dark-bg rounded-lg p-3 border border-dark-border">
                <code className="text-accent-secondary text-sm font-bold block mb-2">{cmd.name}</code>
                <p className="text-dark-textSecondary text-xs mb-2">{cmd.purpose.substring(0, 80)}...</p>
                <code className="text-dark-text text-xs bg-gray-900 p-1 rounded block">{cmd.example}</code>
              </div>
            ))}
          </div>

          {/* Desktop View - Table Layout */}
          <table className="hidden md:table w-full min-w-[600px]">
            <thead>
              <tr className="border-b-2 border-dark-border">
                <th className="text-left p-3 text-dark-text font-semibold">Command</th>
                <th className="text-left p-3 text-dark-text font-semibold">Purpose</th>
                <th className="text-left p-3 text-dark-text font-semibold">Example</th>
              </tr>
            </thead>
            <tbody>
              {commands.map((cmd, idx) => (
                <tr key={idx} className="border-b border-dark-border hover:bg-dark-bg transition-colors">
                  <td className="p-3">
                    <code className="text-accent-secondary text-sm">{cmd.name}</code>
                  </td>
                  <td className="p-3 text-dark-textSecondary text-sm">{cmd.purpose.substring(0, 60)}...</td>
                  <td className="p-3">
                    <code className="text-dark-text text-sm">{cmd.example.substring(0, 40)}</code>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Command Categories - Responsive Grid */}
      <div className="bg-dark-card rounded-xl border border-dark-border overflow-hidden">
        <div className="border-b border-dark-border p-3 sm:p-4 md:p-6">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <BookOpen size={16} className="sm:w-4 sm:h-4 md:w-5 md:h-5 text-accent-primary" />
            <h2 className="text-base sm:text-lg md:text-2xl font-bold text-dark-text">Command Categories</h2>
          </div>
        </div>
        <div className="p-3 sm:p-4 md:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="bg-dark-bg rounded-lg p-3 sm:p-4 border border-dark-border">
              <h3 className="text-accent-primary font-semibold text-sm sm:text-base mb-2">🔧 Setup & Configuration</h3>
              <div className="space-y-1">
                <p className="text-dark-textSecondary text-xs sm:text-sm">• git init - Initialize repository</p>
                <p className="text-dark-textSecondary text-xs sm:text-sm">• git clone - Clone repository</p>
              </div>
            </div>
            <div className="bg-dark-bg rounded-lg p-3 sm:p-4 border border-dark-border">
              <h3 className="text-accent-primary font-semibold text-sm sm:text-base mb-2">📝 Tracking & Status</h3>
              <div className="space-y-1">
                <p className="text-dark-textSecondary text-xs sm:text-sm">• git status - Check status</p>
                <p className="text-dark-textSecondary text-xs sm:text-sm">• git add - Stage changes</p>
                <p className="text-dark-textSecondary text-xs sm:text-sm">• git commit - Save changes</p>
              </div>
            </div>
            <div className="bg-dark-bg rounded-lg p-3 sm:p-4 border border-dark-border">
              <h3 className="text-accent-primary font-semibold text-sm sm:text-base mb-2">☁️ Syncing & Sharing</h3>
              <div className="space-y-1">
                <p className="text-dark-textSecondary text-xs sm:text-sm">• git push - Upload to remote</p>
                <p className="text-dark-textSecondary text-xs sm:text-sm">• git pull - Download from remote</p>
              </div>
            </div>
            <div className="bg-dark-bg rounded-lg p-3 sm:p-4 border border-dark-border">
              <h3 className="text-accent-primary font-semibold text-sm sm:text-base mb-2">🌿 Branching & Merging</h3>
              <div className="space-y-1">
                <p className="text-dark-textSecondary text-xs sm:text-sm">• git branch - Manage branches</p>
                <p className="text-dark-textSecondary text-xs sm:text-sm">• git checkout - Switch branches</p>
                <p className="text-dark-textSecondary text-xs sm:text-sm">• git merge - Combine branches</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pro Tips Section - Responsive */}
      <div className="bg-gradient-to-r from-accent-primary/5 to-accent-secondary/5 rounded-xl p-3 sm:p-4 md:p-6 border border-accent-primary/20">
        <h3 className="text-sm sm:text-base md:text-lg font-semibold text-dark-text mb-2 sm:mb-3 text-center">💡 Pro Tips</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
          <div className="flex items-start space-x-2">
            <span className="text-accent-primary text-sm sm:text-base">✓</span>
            <p className="text-dark-textSecondary text-xs sm:text-sm md:text-base">
              Use <code className="text-accent-secondary text-xs">git add -p</code> to stage changes interactively
            </p>
          </div>
          <div className="flex items-start space-x-2">
            <span className="text-accent-primary text-sm sm:text-base">✓</span>
            <p className="text-dark-textSecondary text-xs sm:text-sm md:text-base">
              Use <code className="text-accent-secondary text-xs">git commit --amend</code> to modify last commit
            </p>
          </div>
          <div className="flex items-start space-x-2">
            <span className="text-accent-primary text-sm sm:text-base">✓</span>
            <p className="text-dark-textSecondary text-xs sm:text-sm md:text-base">
              Use <code className="text-accent-secondary text-xs">git log --oneline --graph</code> for visual history
            </p>
          </div>
          <div className="flex items-start space-x-2">
            <span className="text-accent-primary text-sm sm:text-base">✓</span>
            <p className="text-dark-textSecondary text-xs sm:text-sm md:text-base">
              Use <code className="text-accent-secondary text-xs">git diff</code> to see changes before staging
            </p>
          </div>
        </div>
      </div>

      {/* Key Takeaway - Responsive */}
      <div className="bg-gradient-to-r from-accent-primary/5 to-accent-secondary/5 rounded-xl p-3 sm:p-4 md:p-6 border border-accent-primary/20">
        <h3 className="text-sm sm:text-base md:text-lg font-semibold text-dark-text mb-2 text-center">🎯 Key Takeaway</h3>
        <p className="text-dark-textSecondary text-xs sm:text-sm md:text-base text-center">
          Mastering these 10 essential Git commands will cover 90% of your daily version control needs. 
          Practice each command regularly to build muscle memory and become more efficient with Git!
        </p>
      </div>
    </div>
  )
}

export default GitCommands