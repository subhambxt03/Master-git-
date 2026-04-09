import { motion } from 'framer-motion'
import { 
  GitBranch, 
  Github, 
  Cloud, 
  Laptop, 
  Users, 
  GitPullRequest,
  Database,
  Terminal,
  Layout,
  CheckCircle,
  ArrowRight,
  Clock,
  Share2,
  RefreshCw
} from 'lucide-react'

const GitVsGitHub = () => {
  const comparisonData = [
    { feature: 'Definition', git: 'Git is a distributed version control system used to track changes in source code.', github: 'GitHub is a cloud-based platform that hosts Git repositories and enables collaboration.' },
    { feature: 'Primary Role', git: 'Manages version history and tracks code changes.', github: 'Provides a platform to store, share, and manage Git repositories online.' },
    { feature: 'Working Environment', git: 'Works locally on your computer.', github: 'Works over the internet (cloud-based).' },
    { feature: 'Internet Dependency', git: 'Not required for most operations', github: 'Required to push, pull, and collaborate online.' },
    { feature: 'Data Storage', git: 'Stores data in a local repository (.git folder)', github: 'Stores data in remote repositories on servers.' },
    { feature: 'User Interface', git: 'Mainly command-line interface (CLI)', github: 'Web-based interface + desktop apps' },
    { feature: 'Collaboration', git: 'Limited (manual sharing via patches)', github: 'Advanced collaboration with built-in tools' },
    { feature: 'Key Features', git: 'Branching, merging, commits', github: 'Pull requests, issues, actions, discussions' },
    { feature: 'Security', git: 'Local control over code', github: 'Access control & private repositories' },
    { feature: 'Backup', git: 'No automatic backup', github: 'Cloud backup for your code' },
    { feature: 'Learning Curve', git: 'Requires understanding of commands', github: 'Easier with visual interface' }
  ]

  const gitFeatures = [
    { icon: GitBranch, title: 'Version Control', description: 'Tracks every change made to files' },
    { icon: Clock, title: 'Complete History', description: 'Maintains a complete history of the project' },
    { icon: Share2, title: 'Branching', description: 'Create branches and experiment safely' },
    { icon: RefreshCw, title: 'Rollback', description: 'Revert to previous versions if errors occur' },
    { icon: Laptop, title: 'Offline Work', description: 'Works offline, fast and reliable' }
  ]

  const githubFeatures = [
    { icon: Cloud, title: 'Remote Storage', description: 'Stores your code in remote repositories' },
    { icon: Users, title: 'Team Collaboration', description: 'Multiple developers work together' },
    { icon: GitPullRequest, title: 'Pull Requests', description: 'Review code before merging' },
    { icon: Database, title: 'Issue Tracking', description: 'Track bugs and tasks' },
    { icon: Terminal, title: 'CI/CD Integration', description: 'Automate deployment and testing' }
  ]

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-accent-primary/10 via-accent-secondary/10 to-accent-primary/10 rounded-xl p-4 md:p-8 border border-accent-primary/20"
      >
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-3 md:space-y-0">
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <div className="p-2 md:p-3 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-xl">
              <GitBranch size={20} className="md:w-8 md:h-8 text-white" />
            </div>
            <span className="text-xl md:text-3xl font-bold text-dark-text">vs</span>
            <div className="p-2 md:p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
              <Github size={20} className="md:w-8 md:h-8 text-white" />
            </div>
          </div>
          <h1 className="text-xl md:text-4xl font-bold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent text-center md:text-left">
            Git vs GitHub
          </h1>
        </div>
        <p className="text-dark-textSecondary text-sm md:text-lg leading-relaxed mt-3 md:mt-4 text-center md:text-left">
          Understanding the difference between Git (the version control system) and GitHub (the collaboration platform) 
          is crucial for modern software development.
        </p>
      </motion.div>

      {/* Side-by-Side Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {/* Git Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl border border-blue-500/20 overflow-hidden"
        >
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4 md:p-6">
            <div className="flex items-center space-x-2 md:space-x-3">
              <GitBranch size={22} className="md:w-8 md:h-8 text-white" />
              <h2 className="text-lg md:text-2xl font-bold text-white">Git - The Engine</h2>
            </div>
            <p className="text-white/80 text-xs md:text-base mt-1 md:mt-2">Local version control system</p>
          </div>
          <div className="p-4 md:p-6">
            <div className="space-y-2 md:space-y-3">
              {[
                '✓ Tracks changes and history',
                '✓ Works offline',
                '✓ Uses commands like commit, branch, merge',
                '✓ Focus: Code Management'
              ].map((text, idx) => (
                <p key={idx} className="text-dark-textSecondary text-sm md:text-base">{text}</p>
              ))}
            </div>
          </div>
        </motion.div>

        {/* GitHub Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20 overflow-hidden"
        >
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 md:p-6">
            <div className="flex items-center space-x-2 md:space-x-3">
              <Github size={22} className="md:w-8 md:h-8 text-white" />
              <h2 className="text-lg md:text-2xl font-bold text-white">GitHub - The Platform</h2>
            </div>
            <p className="text-white/80 text-xs md:text-base mt-1 md:mt-2">Cloud-based hosting service</p>
          </div>
          <div className="p-4 md:p-6">
            <div className="space-y-2 md:space-y-3">
              {[
                '✓ Stores repositories online',
                '✓ Enables team collaboration',
                '✓ Features: PRs, Issues, Actions',
                '✓ Focus: Collaboration & Sharing'
              ].map((text, idx) => (
                <p key={idx} className="text-dark-textSecondary text-sm md:text-base">{text}</p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Detailed Comparison Table - Mobile Friendly */}
      <div className="bg-dark-card rounded-xl border border-dark-border overflow-hidden">
        <div className="border-b border-dark-border p-4 md:p-6">
          <div className="flex items-center space-x-2 md:space-x-3">
            <div className="p-1.5 md:p-2 bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 rounded-lg">
              <Layout size={16} className="md:w-5 md:h-5 text-accent-primary" />
            </div>
            <h2 className="text-lg md:text-2xl font-bold text-dark-text">Detailed Comparison</h2>
          </div>
        </div>
        <div className="p-3 md:p-6 overflow-x-auto">
          {/* Mobile View - Card Layout */}
          <div className="block md:hidden space-y-4">
            {comparisonData.map((item, idx) => (
              <div key={idx} className="bg-dark-bg rounded-lg p-3 border border-dark-border">
                <div className="font-bold text-accent-primary text-sm mb-2">{item.feature}</div>
                <div className="space-y-2">
                  <div>
                    <span className="text-blue-500 font-semibold text-xs">Git: </span>
                    <span className="text-dark-textSecondary text-xs">{item.git}</span>
                  </div>
                  <div>
                    <span className="text-purple-500 font-semibold text-xs">GitHub: </span>
                    <span className="text-dark-textSecondary text-xs">{item.github}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop View - Table Layout */}
          <table className="hidden md:table w-full min-w-[600px]">
            <thead>
              <tr className="border-b-2 border-dark-border">
                <th className="text-left p-3 text-dark-text font-semibold">Feature</th>
                <th className="text-left p-3 text-blue-500 font-semibold">Git</th>
                <th className="text-left p-3 text-purple-500 font-semibold">GitHub</th>
               </tr>
            </thead>
            <tbody>
              {comparisonData.map((item, idx) => (
                <tr key={idx} className="border-b border-dark-border">
                  <td className="p-3 text-dark-text font-medium text-sm">{item.feature}</td>
                  <td className="p-3 text-dark-textSecondary text-sm">{item.git}</td>
                  <td className="p-3 text-dark-textSecondary text-sm">{item.github}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Git Features - Responsive Grid */}
      <div className="bg-dark-card rounded-xl border border-dark-border overflow-hidden">
        <div className="border-b border-dark-border p-4 md:p-6">
          <div className="flex items-center space-x-2 md:space-x-3">
            <div className="p-1.5 md:p-2 bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 rounded-lg">
              <GitBranch size={16} className="md:w-5 md:h-5 text-accent-primary" />
            </div>
            <h2 className="text-lg md:text-2xl font-bold text-dark-text">Git - Core Tool</h2>
          </div>
        </div>
        <div className="p-4 md:p-6">
          <p className="text-dark-textSecondary text-sm md:text-base mb-4">
            <span className="text-accent-primary font-semibold">Git</span> is the backbone of version control.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {gitFeatures.map((feature, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-3 md:p-4 rounded-xl border border-blue-500/20">
                <feature.icon size={18} className="md:w-6 md:h-6 text-blue-500 mb-1 md:mb-2" />
                <h3 className="text-dark-text font-semibold text-sm md:text-base mb-1">{feature.title}</h3>
                <p className="text-dark-textSecondary text-xs md:text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-dark-bg rounded-lg p-3 md:p-5 border border-dark-border mt-4">
            <h3 className="text-dark-text font-semibold mb-2 md:mb-3 text-sm md:text-base">👉 Example Workflow:</h3>
            <div className="space-y-1 md:space-y-2">
              <p className="text-dark-textSecondary text-sm md:text-base">1. Modify files</p>
              <p className="text-dark-textSecondary text-sm md:text-base">2. Stage changes (git add .)</p>
              <p className="text-dark-textSecondary text-sm md:text-base">3. Save snapshot (git commit)</p>
            </div>
            <div className="bg-gray-900 rounded-lg p-2 md:p-3 mt-2 md:mt-3 overflow-x-auto">
              <code className="text-accent-secondary text-xs md:text-sm">$ git add .</code><br />
              <code className="text-accent-secondary text-xs md:text-sm">$ git commit -m "Update UI"</code>
            </div>
          </div>
        </div>
      </div>

      {/* GitHub Features - Responsive Grid */}
      <div className="bg-dark-card rounded-xl border border-dark-border overflow-hidden">
        <div className="border-b border-dark-border p-4 md:p-6">
          <div className="flex items-center space-x-2 md:space-x-3">
            <div className="p-1.5 md:p-2 bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 rounded-lg">
              <Github size={16} className="md:w-5 md:h-5 text-accent-primary" />
            </div>
            <h2 className="text-lg md:text-2xl font-bold text-dark-text">GitHub - Collaboration Platform</h2>
          </div>
        </div>
        <div className="p-4 md:p-6">
          <p className="text-dark-textSecondary text-sm md:text-base mb-4">
            <span className="text-accent-secondary font-semibold">GitHub</span> builds on Git and adds collaboration features.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {githubFeatures.map((feature, idx) => (
              <div key={idx} className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-3 md:p-4 rounded-xl border border-purple-500/20">
                <feature.icon size={18} className="md:w-6 md:h-6 text-purple-500 mb-1 md:mb-2" />
                <h3 className="text-dark-text font-semibold text-sm md:text-base mb-1">{feature.title}</h3>
                <p className="text-dark-textSecondary text-xs md:text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-dark-bg rounded-lg p-3 md:p-5 border border-dark-border mt-4">
            <h3 className="text-dark-text font-semibold mb-2 md:mb-3 text-sm md:text-base">👉 Example Workflow:</h3>
            <div className="space-y-1 md:space-y-2">
              <p className="text-dark-textSecondary text-sm md:text-base">1. Push code to GitHub</p>
              <p className="text-dark-textSecondary text-sm md:text-base">2. Create a branch</p>
              <p className="text-dark-textSecondary text-sm md:text-base">3. Open a pull request</p>
              <p className="text-dark-textSecondary text-sm md:text-base">4. Team reviews and merges changes</p>
            </div>
          </div>
        </div>
      </div>

      {/* When to Use - Responsive Grid - FIXED: Removed duplicate className */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="bg-blue-500/10 rounded-xl p-4 md:p-6 border border-blue-500/20">
          <div className="flex items-center space-x-2 mb-2 md:mb-3">
            <GitBranch className="text-blue-500" size={18} />
            <h3 className="text-blue-500 font-bold text-base md:text-lg">When to use Git?</h3>
          </div>
          <ul className="space-y-1 md:space-y-2">
            <li className="text-dark-textSecondary text-sm md:text-base">✓ When working on local projects</li>
            <li className="text-dark-textSecondary text-sm md:text-base">✓ When you need version control</li>
            <li className="text-dark-textSecondary text-sm md:text-base">✓ When working offline</li>
            <li className="text-dark-textSecondary text-sm md:text-base">✓ When you want to track changes</li>
            <li className="text-dark-textSecondary text-sm md:text-base">✓ When creating branches for features</li>
          </ul>
        </div>

        <div className="bg-purple-500/10 rounded-xl p-4 md:p-6 border border-purple-500/20">
          <div className="flex items-center space-x-2 mb-2 md:mb-3">
            <Github className="text-purple-500" size={18} />
            <h3 className="text-purple-500 font-bold text-base md:text-lg">When to use GitHub?</h3>
          </div>
          <ul className="space-y-1 md:space-y-2">
            <li className="text-dark-textSecondary text-sm md:text-base">✓ When collaborating with a team</li>
            <li className="text-dark-textSecondary text-sm md:text-base">✓ When you need cloud backup</li>
            <li className="text-dark-textSecondary text-sm md:text-base">✓ When sharing open source code</li>
            <li className="text-dark-textSecondary text-sm md:text-base">✓ When using CI/CD pipelines</li>
            <li className="text-dark-textSecondary text-sm md:text-base">✓ When managing issues and PRs</li>
          </ul>
        </div>
      </div>

      {/* Key Takeaway */}
      <div className="bg-gradient-to-r from-accent-primary/5 to-accent-secondary/5 rounded-xl p-4 md:p-6 border border-accent-primary/20">
        <h3 className="text-base md:text-lg font-semibold text-dark-text mb-2 md:mb-3 text-center">🎯 Key Takeaway</h3>
        <p className="text-dark-textSecondary text-sm md:text-base text-center">
          <span className="text-accent-primary font-semibold">Git</span> is the tool that tracks your code changes locally, 
          while <span className="text-accent-secondary font-semibold">GitHub</span> is the platform that hosts your Git 
          repositories online and enables team collaboration. You need both for modern development!
        </p>
      </div>
    </div>
  )
}

export default GitVsGitHub