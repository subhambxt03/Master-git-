import { motion } from 'framer-motion'
import SectionCard from '../components/ui/SectionCard'
import { 
  GitBranch, 
  Database, 
  History, 
  Camera, 
  Users,
  Laptop,
  Globe,
  CheckCircle,
  FolderOpen,
  Save,
  Zap,
  Shield,
  RefreshCw
} from 'lucide-react'

const GitBasics = () => {
  const conceptCards = [
    {
      icon: GitBranch,
      title: 'Git',
      content: 'Git is a version control system that tracks changes in your code and helps you manage development efficiently.',
      example: 'git --version',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20'
    },
    {
      icon: History,
      title: 'Version Control System',
      content: 'A system that records changes to files so you can access previous versions anytime.',
      example: 'Tracking changes in a project over time',
      color: 'from-green-500 to-teal-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20'
    },
    {
      icon: FolderOpen,
      title: 'Repository (Repo)',
      content: 'A folder that contains your project files and Git history.',
      example: 'git init',
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/20'
    },
    {
      icon: Camera,
      title: 'Commit',
      content: 'A saved snapshot of your project changes with a message.',
      example: 'git commit -m "Added login feature"',
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/20'
    }
  ]

  const gitFeatures = [
    {
      icon: Laptop,
      title: 'Works locally on your system',
      description: 'No internet connection needed for basic version control operations',
      benefit: 'Work from anywhere, even without internet'
    },
    {
      icon: Zap,
      title: 'Fast and efficient',
      description: 'Most operations are performed locally, making Git incredibly fast',
      benefit: 'Save time with quick commits and branches'
    },
    {
      icon: Globe,
      title: 'Widely used in the industry',
      description: 'Standard tool for version control in software development',
      benefit: 'Essential skill for any developer'
    }
  ]

  const vscTypes = [
    {
      type: 'Centralized VCS (CVCS)',
      example: 'SVN, CVS, Perforce',
      description: 'Single central server stores all versions of files',
      pros: 'Easy to administer',
      cons: 'Single point of failure'
    },
    {
      type: 'Distributed VCS (DVCS)',
      example: 'Git, Mercurial',
      description: 'Every developer has a complete copy of the repository',
      pros: 'No single point of failure, works offline',
      cons: 'More complex initially'
    }
  ]

  const vcsImportance = [
    {
      icon: History,
      title: 'Tracks every change in code',
      description: 'Complete history of who changed what and when'
    },
    {
      icon: Users,
      title: 'Allows multiple developers to work together',
      description: 'Merge changes from different team members seamlessly'
    },
    {
      icon: RefreshCw,
      title: 'Helps restore previous versions if something breaks',
      description: 'Quickly revert to working code when bugs appear'
    }
  ]

  return (
    <div className="space-y-4 sm:space-y-6">
     
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-accent-primary/10 via-accent-secondary/10 to-accent-primary/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-accent-primary/20"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0 mb-3 sm:mb-4">
          <div className="p-2 sm:p-3 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-xl w-fit">
            <GitBranch size={24} className="sm:w-8 sm:h-8 text-white" />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
            Git Basics
          </h1>
        </div>
        <p className="text-dark-textSecondary text-sm sm:text-base md:text-lg leading-relaxed">
          Master the fundamentals of Git - the most popular version control system used by millions 
          of developers worldwide. Let's start with the core concepts that form the foundation of 
          modern software development.
        </p>
      </motion.div>

   
      <SectionCard title="What is Git?" icon={GitBranch}>
        <div className="space-y-4 sm:space-y-6">
          <div className="bg-dark-bg rounded-lg p-4 sm:p-6 border border-dark-border">
            <p className="text-dark-textSecondary text-sm sm:text-base leading-relaxed mb-4">
              <span className="text-accent-primary font-semibold">Git</span> is a distributed version 
              control system used to track changes in source code during software development. It helps 
              developers manage their code, collaborate with others, and maintain a complete history 
              of their project.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mt-4 sm:mt-6">
              {gitFeatures.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-dark-card rounded-lg p-3 sm:p-4 border border-dark-border hover:border-accent-primary transition-all"
                >
                  <feature.icon className="text-accent-primary mb-2 sm:mb-3" size={24} />
                  <h3 className="text-dark-text font-semibold text-sm sm:text-base mb-1 sm:mb-2">{feature.title}</h3>
                  <p className="text-dark-textSecondary text-xs sm:text-sm mb-2">{feature.description}</p>
                  <div className="flex items-center space-x-2 text-xs text-accent-secondary">
                    <CheckCircle size={12} />
                    <span className="text-xs">{feature.benefit}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </SectionCard>

      
      <SectionCard title="Version Control System (VCS)" icon={History}>
        <div className="space-y-4 sm:space-y-6">
          <div className="bg-dark-bg rounded-lg p-3 sm:p-4 border-l-4 border-accent-secondary">
            <p className="text-dark-textSecondary text-sm sm:text-base">
              A <span className="text-accent-secondary font-semibold">Version Control System</span> is a 
              tool that records changes to files over time so you can recall specific versions later.
            </p>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-dark-text mb-3 sm:mb-4">Why VCS is Important:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {vcsImportance.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-dark-card rounded-lg p-3 sm:p-4 border border-dark-border text-center"
                >
                  <div className="flex justify-center mb-2 sm:mb-3">
                    <div className="p-1.5 sm:p-2 bg-accent-primary/20 rounded-full">
                      <item.icon className="text-accent-primary" size={20} />
                    </div>
                  </div>
                  <h4 className="text-dark-text font-semibold text-sm sm:text-base mb-1 sm:mb-2">{item.title}</h4>
                  <p className="text-dark-textSecondary text-xs sm:text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-dark-text mb-3 sm:mb-4">Types of Version Control Systems:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {vscTypes.map((type, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-dark-card rounded-lg border border-dark-border overflow-hidden"
                >
                  <div className={`p-3 sm:p-4 ${idx === 0 ? 'bg-blue-500/10' : 'bg-green-500/10'} border-b border-dark-border`}>
                    <h4 className="text-dark-text font-semibold text-sm sm:text-base">{type.type}</h4>
                    <p className="text-dark-textSecondary text-xs sm:text-sm">Example: {type.example}</p>
                  </div>
                  <div className="p-3 sm:p-4">
                    <p className="text-dark-textSecondary text-xs sm:text-sm mb-2 sm:mb-3">{type.description}</p>
                    <div className="flex flex-col space-y-1 sm:space-y-2 text-xs sm:text-sm">
                      <div className="flex items-center space-x-2">
                        <CheckCircle size={14} className="text-green-500" />
                        <span className="text-dark-textSecondary text-xs sm:text-sm">✓ {type.pros}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Shield size={14} className="text-yellow-500" />
                        <span className="text-dark-textSecondary text-xs sm:text-sm">⚠ {type.cons}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </SectionCard>

    
      <SectionCard title="Core Git Concepts" icon={Database}>
        <div className="space-y-4 sm:space-y-6">
          <p className="text-dark-textSecondary text-sm sm:text-base">
            Understanding these core concepts is essential for mastering Git. Each concept builds 
            upon the previous one to create a complete version control system.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {conceptCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`${card.bgColor} border ${card.borderColor} rounded-xl overflow-hidden`}
              >
                <div className={`bg-gradient-to-r ${card.color} p-3 sm:p-4`}>
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <card.icon size={20} className="sm:w-6 sm:h-6 text-white" />
                    <h3 className="text-white font-bold text-lg sm:text-xl">{card.title}</h3>
                  </div>
                </div>
                <div className="p-4 sm:p-5">
                  <p className="text-dark-textSecondary text-sm sm:text-base mb-3 sm:mb-4">{card.content}</p>
                  <div className="code-block bg-dark-bg p-2 sm:p-3 rounded-lg overflow-x-auto">
                    <p className="text-accent-secondary text-xs sm:text-sm mb-1">Example:</p>
                    <code className="text-dark-text text-xs sm:text-sm">{card.example}</code>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionCard>


      <SectionCard title="Repository Deep Dive" icon={FolderOpen}>
        <div className="space-y-4 sm:space-y-6">
          <div className="bg-dark-bg rounded-lg p-4 sm:p-6 border border-dark-border">
            <h3 className="text-dark-text font-semibold mb-3 flex items-center gap-2 text-sm sm:text-base">
              <Database size={18} className="sm:w-5 sm:h-5 text-accent-primary" />
              What's inside a Repository?
            </h3>
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="space-y-1 sm:space-y-2">
                <p className="text-dark-textSecondary text-xs sm:text-sm">✓ All project files and folders</p>
                <p className="text-dark-textSecondary text-xs sm:text-sm">✓ Complete commit history</p>
                <p className="text-dark-textSecondary text-xs sm:text-sm">✓ All branches and tags</p>
              </div>
              <div className="space-y-1 sm:space-y-2">
                <p className="text-dark-textSecondary text-xs sm:text-sm">✓ Configuration settings</p>
                <p className="text-dark-textSecondary text-xs sm:text-sm">✓ Staging area information</p>
                <p className="text-dark-textSecondary text-xs sm:text-sm">✓ Remote repository connections</p>
              </div>
            </div>
            
            <div className="code-block bg-dark-bg p-3 sm:p-4 rounded-lg overflow-x-auto">
              <p className="text-accent-secondary text-xs sm:text-sm mb-2"># Create a new repository</p>
              <p className="text-dark-text text-xs sm:text-sm">$ mkdir my-project</p>
              <p className="text-dark-text text-xs sm:text-sm">$ cd my-project</p>
              <p className="text-dark-text text-xs sm:text-sm">$ git init</p>
              <p className="text-green-500 text-xs sm:text-sm mt-2">Initialized empty Git repository in /my-project/.git/</p>
              <p className="text-dark-textSecondary text-xs sm:text-sm mt-3">
                💡 The .git folder contains everything Git needs to track your project!
              </p>
            </div>
          </div>
        </div>
      </SectionCard>

      
      <SectionCard title="Commit Best Practices" icon={Save}>
        <div className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-dark-bg rounded-lg p-4 sm:p-5 border border-dark-border">
              <h3 className="text-dark-text font-semibold mb-2 sm:mb-3 text-accent-primary text-sm sm:text-base">Good Commit Messages ✅</h3>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-dark-textSecondary">
                <li className="break-words">• "Add user authentication feature"</li>
                <li className="break-words">• "Fix login button alignment issue"</li>
                <li className="break-words">• "Update documentation for API endpoints"</li>
                <li className="break-words">• "Remove deprecated functions"</li>
              </ul>
            </div>
            <div className="bg-dark-bg rounded-lg p-4 sm:p-5 border border-dark-border">
              <h3 className="text-dark-text font-semibold mb-2 sm:mb-3 text-red-400 text-sm sm:text-base">Bad Commit Messages ❌</h3>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-dark-textSecondary">
                <li>• "Update"</li>
                <li>• "Fix stuff"</li>
                <li>• "asdf"</li>
                <li>• "temp"</li>
              </ul>
            </div>
          </div>

          <div className="code-block bg-dark-bg p-3 sm:p-4 rounded-lg overflow-x-auto">
            <p className="text-accent-secondary text-xs sm:text-sm mb-2"># Best practice commit workflow</p>
            <p className="text-dark-text text-xs sm:text-sm">$ git add .</p>
            <p className="text-dark-text text-xs sm:text-sm">$ git commit -m "Add descriptive message here"</p>
            <p className="text-dark-text text-xs sm:text-sm">$ git log --oneline  # View commit history</p>
          </div>

          <div className="bg-accent-primary/10 rounded-lg p-3 sm:p-4 border border-accent-primary/20">
            <div className="flex flex-col sm:flex-row sm:items-start space-y-2 sm:space-y-0 sm:space-x-3">
              <Zap size={18} className="sm:w-5 sm:h-5 text-accent-primary" />
              <div>
                <h3 className="text-accent-primary font-semibold mb-1 text-sm sm:text-base">Pro Tip</h3>
                <p className="text-dark-textSecondary text-xs sm:text-sm">
                  Make small, focused commits that do one thing. This makes it easier to track changes 
                  and revert if something goes wrong. Commit early, commit often!
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionCard>

      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-accent-primary/5 to-accent-secondary/5 rounded-xl p-4 sm:p-6 border border-accent-primary/20"
      >
        <h3 className="text-base sm:text-lg font-semibold text-dark-text mb-3 text-center">🎯 Key Takeaways</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-center">
          <div>
            <div className="text-accent-primary font-bold text-lg sm:text-2xl">Git</div>
            <p className="text-dark-textSecondary text-[10px] sm:text-xs">Version Control System</p>
          </div>
          <div>
            <div className="text-accent-secondary font-bold text-lg sm:text-2xl">VCS</div>
            <p className="text-dark-textSecondary text-[10px] sm:text-xs">Tracks file changes</p>
          </div>
          <div>
            <div className="text-accent-primary font-bold text-lg sm:text-2xl">Repo</div>
            <p className="text-dark-textSecondary text-[10px] sm:text-xs">Project storage</p>
          </div>
          <div>
            <div className="text-accent-secondary font-bold text-lg sm:text-2xl">Commit</div>
            <p className="text-dark-textSecondary text-[10px] sm:text-xs">Save snapshots</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default GitBasics