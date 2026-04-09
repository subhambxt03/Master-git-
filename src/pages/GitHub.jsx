import { motion } from 'framer-motion'
import { 
  Github, 
  Cloud, 
  Users, 
  Database, 
  Shield, 
  GitBranch,
  GitPullRequest,
  Code2,
  CheckCircle,
  Globe,
  Server,
  MessageCircle,
  Bug,
  Star,
  Lock,
  RefreshCw,
  FolderSync,
  UserCheck
} from 'lucide-react'

// Simple SectionCard component inline to avoid import issues
const SectionCard = ({ title, icon: Icon, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-dark-card rounded-xl border border-dark-border overflow-hidden"
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

const GitHub = () => {
  const conceptCards = [
    {
      icon: Github,
      title: 'What is GitHub?',
      content: 'GitHub is a platform to host and manage code using Git, allowing developers to collaborate easily.',
      features: [
        'Built on top of Git',
        'Used by developers worldwide',
        'Supports both public and private projects'
      ],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20'
    },
    {
      icon: Star,
      title: 'Why Use GitHub?',
      content: 'It provides online storage, collaboration tools, and version tracking for projects.',
      features: [
        'Code Storage: Keeps your project safe online',
        'Backup: Prevents data loss',
        'Collaboration: Multiple developers can work together',
        'Project Showcase: Helps build a strong portfolio',
        'Version Management: Tracks all changes in code',
        'Integration: Works with tools for deployment and testing'
      ],
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/20'
    },
    {
      icon: Cloud,
      title: 'Remote Repository',
      content: 'An online version of your project stored on GitHub that syncs with your local code.',
      features: [
        'Acts as a central place for your code',
        'Can be accessed from any device',
        'Syncs with your local repository'
      ],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      content: 'Multiple developers can work together using branches, pull requests, and code reviews.',
      features: [
        'Branches: Developers work on different features separately',
        'Pull Requests: Propose and review changes before merging',
        'Code Review: Improves code quality',
        'Issue Tracking: Manage bugs and tasks',
        'Discussions: Communicate within the project'
      ],
      color: 'from-green-500 to-teal-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20'
    }
  ]

  const collaborationSteps = [
    {
      icon: GitBranch,
      title: '1. Create Branch',
      description: 'Each developer creates their own branch for features',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Code2,
      title: '2. Write Code',
      description: 'Work on features independently',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: GitPullRequest,
      title: '3. Pull Request',
      description: 'Propose changes for review',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Users,
      title: '4. Code Review',
      description: 'Team reviews and suggests improvements',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: CheckCircle,
      title: '5. Merge',
      description: 'Approved changes are merged to main branch',
      color: 'from-indigo-500 to-purple-500'
    }
  ]

  const githubStats = [
    { value: '100M+', label: 'Repositories', icon: Database },
    { value: '73M+', label: 'Developers', icon: Users },
    { value: '4M+', label: 'Organizations', icon: Globe },
    { value: '90%', label: 'Fortune 100', icon: Star }
  ]

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-purple-500/20"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0 mb-3 sm:mb-4">
          <div className="p-2 sm:p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl w-fit">
            <Github size={24} className="sm:w-8 sm:h-8 text-white" />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            GitHub
          </h1>
        </div>
        <p className="text-dark-textSecondary text-sm sm:text-base md:text-lg leading-relaxed">
          GitHub is a cloud-based platform that allows developers to store, manage, and share their code using Git. 
          It provides an online space where projects (repositories) can be accessed from anywhere, making it the 
          world's largest coding community.
        </p>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4"
      >
        {githubStats.map((stat, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="bg-dark-card rounded-xl p-3 sm:p-4 text-center border border-dark-border"
          >
            <stat.icon className="text-purple-500 mx-auto mb-2" size={20} />
            <div className="text-lg sm:text-2xl font-bold text-dark-text">{stat.value}</div>
            <div className="text-dark-textSecondary text-[10px] sm:text-xs">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Main Concept Cards */}
      <SectionCard title="Understanding GitHub" icon={Github}>
        <div className="space-y-4 sm:space-y-6">
          <p className="text-dark-textSecondary text-sm sm:text-base">
            GitHub revolutionizes how developers work together. Let's explore the key concepts that make 
            GitHub the world's leading development platform.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
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
                  <div className="space-y-1.5 sm:space-y-2">
                    {card.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start space-x-2">
                        <CheckCircle size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-dark-textSecondary text-xs sm:text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionCard>

      {/* Remote Repository Deep Dive */}
      <SectionCard title="Working with Remote Repositories" icon={FolderSync}>
        <div className="space-y-4 sm:space-y-6">
          <div className="bg-dark-bg rounded-lg p-4 sm:p-6 border border-dark-border">
            <h3 className="text-dark-text font-semibold mb-3 flex items-center gap-2 text-sm sm:text-base">
              <Server size={18} className="sm:w-5 sm:h-5 text-accent-primary" />
              What is a Remote Repository?
            </h3>
            <p className="text-dark-textSecondary text-sm sm:text-base mb-4">
              A remote repository is a version of your project that is stored online (on GitHub). It acts as a 
              central place for your code that can be accessed from any device and syncs with your local repository.
            </p>
            
            <div className="bg-gray-900 rounded-lg p-3 sm:p-4 overflow-x-auto border border-dark-border">
              <p className="text-accent-secondary text-xs sm:text-sm mb-2"># Connect local repo to GitHub</p>
              <p className="text-dark-text text-xs sm:text-sm">$ git remote add origin https://github.com/username/repo.git</p>
              <p className="text-dark-text text-xs sm:text-sm">$ git branch -M main</p>
              <p className="text-dark-text text-xs sm:text-sm">$ git push -u origin main</p>
              <p className="text-green-500 text-xs sm:text-sm mt-2">✓ Repository successfully connected to GitHub!</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-4">
              <div className="bg-dark-card rounded-lg p-3 text-center">
                <Cloud size={20} className="text-blue-500 mx-auto mb-2" />
                <p className="text-dark-textSecondary text-xs sm:text-sm">Central Storage</p>
              </div>
              <div className="bg-dark-card rounded-lg p-3 text-center">
                <Globe size={20} className="text-green-500 mx-auto mb-2" />
                <p className="text-dark-textSecondary text-xs sm:text-sm">Access Anywhere</p>
              </div>
              <div className="bg-dark-card rounded-lg p-3 text-center">
                <RefreshCw size={20} className="text-purple-500 mx-auto mb-2" />
                <p className="text-dark-textSecondary text-xs sm:text-sm">Sync Local & Remote</p>
              </div>
            </div>
          </div>
        </div>
      </SectionCard>

      {/* Team Collaboration Workflow */}
      <SectionCard title="Team Collaboration on GitHub" icon={Users}>
        <div className="space-y-4 sm:space-y-6">
          <p className="text-dark-textSecondary text-sm sm:text-base">
            GitHub makes teamwork smooth and efficient. Here's how teams collaborate effectively:
          </p>

          <div className="relative">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
              {collaborationSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className={`bg-gradient-to-br ${step.color} w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-lg`}>
                    <step.icon size={20} className="sm:w-8 sm:h-8 text-white" />
                  </div>
                  <p className="text-dark-text font-semibold text-xs sm:text-sm">{step.title}</p>
                  <p className="text-dark-textSecondary text-[10px] sm:text-xs mt-1">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4">
            <div className="bg-dark-bg rounded-lg p-3 sm:p-4 border border-dark-border">
              <div className="flex items-center space-x-2 mb-2">
                <GitBranch className="text-purple-500" size={18} />
                <h3 className="text-dark-text font-semibold text-sm sm:text-base">Branch Strategy</h3>
              </div>
              <p className="text-dark-textSecondary text-xs sm:text-sm">
                Developers work on different features separately without affecting the main codebase.
              </p>
            </div>
            <div className="bg-dark-bg rounded-lg p-3 sm:p-4 border border-dark-border">
              <div className="flex items-center space-x-2 mb-2">
                <GitPullRequest className="text-blue-500" size={18} />
                <h3 className="text-dark-text font-semibold text-sm sm:text-base">Pull Requests</h3>
              </div>
              <p className="text-dark-textSecondary text-xs sm:text-sm">
                Propose and review changes before merging into the main branch.
              </p>
            </div>
            <div className="bg-dark-bg rounded-lg p-3 sm:p-4 border border-dark-border">
              <div className="flex items-center space-x-2 mb-2">
                <UserCheck className="text-green-500" size={18} />
                <h3 className="text-dark-text font-semibold text-sm sm:text-base">Code Review</h3>
              </div>
              <p className="text-dark-textSecondary text-xs sm:text-sm">
                Improves code quality through peer reviews and suggestions.
              </p>
            </div>
            <div className="bg-dark-bg rounded-lg p-3 sm:p-4 border border-dark-border">
              <div className="flex items-center space-x-2 mb-2">
                <Bug className="text-red-500" size={18} />
                <h3 className="text-dark-text font-semibold text-sm sm:text-base">Issue Tracking</h3>
              </div>
              <p className="text-dark-textSecondary text-xs sm:text-sm">
                Manage bugs, tasks, and feature requests efficiently.
              </p>
            </div>
          </div>
        </div>
      </SectionCard>

      
      <SectionCard title="Why GitHub is the Industry Standard" icon={Shield}>
        <div className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="bg-dark-bg rounded-lg p-3 sm:p-4 border border-dark-border">
              <div className="flex items-center space-x-2 mb-2">
                <Lock className="text-green-500" size={18} />
                <h3 className="text-dark-text font-semibold text-sm sm:text-base">Code Storage & Backup</h3>
              </div>
              <p className="text-dark-textSecondary text-xs sm:text-sm">
                Keeps your project safe online and prevents data loss with redundant storage.
              </p>
            </div>
            <div className="bg-dark-bg rounded-lg p-3 sm:p-4 border border-dark-border">
              <div className="flex items-center space-x-2 mb-2">
                <Star className="text-yellow-500" size={18} />
                <h3 className="text-dark-text font-semibold text-sm sm:text-base">Project Showcase</h3>
              </div>
              <p className="text-dark-textSecondary text-xs sm:text-sm">
                Helps build a strong portfolio and attracts potential employers.
              </p>
            </div>
            <div className="bg-dark-bg rounded-lg p-3 sm:p-4 border border-dark-border">
              <div className="flex items-center space-x-2 mb-2">
                <RefreshCw className="text-blue-500" size={18} />
                <h3 className="text-dark-text font-semibold text-sm sm:text-base">Version Management</h3>
              </div>
              <p className="text-dark-textSecondary text-xs sm:text-sm">
                Tracks all changes in code with complete history and blame information.
              </p>
            </div>
            <div className="bg-dark-bg rounded-lg p-3 sm:p-4 border border-dark-border">
              <div className="flex items-center space-x-2 mb-2">
                <Code2 className="text-purple-500" size={18} />
                <h3 className="text-dark-text font-semibold text-sm sm:text-base">Integration Support</h3>
              </div>
              <p className="text-dark-textSecondary text-xs sm:text-sm">
                Works with CI/CD tools for automated deployment and testing.
              </p>
            </div>
          </div>

          <div className="bg-purple-500/10 rounded-lg p-3 sm:p-4 border border-purple-500/20">
            <div className="flex flex-col sm:flex-row sm:items-start space-y-2 sm:space-y-0 sm:space-x-3">
              <Star size={18} className="sm:w-5 sm:h-5 text-purple-500" />
              <div>
                <h3 className="text-purple-500 font-semibold mb-1 text-sm sm:text-base">Did You Know?</h3>
                <p className="text-dark-textSecondary text-xs sm:text-sm">
                  GitHub hosts over 100 million repositories and is used by 90% of Fortune 100 companies 
                  for their software development needs. It's the largest source code host in the world!
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionCard>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-xl p-4 sm:p-6 border border-purple-500/20"
      >
        <h3 className="text-base sm:text-lg font-semibold text-dark-text mb-3 text-center">🎯 Key Takeaways</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-center">
          <div>
            <div className="text-purple-500 font-bold text-lg sm:text-2xl">GitHub</div>
            <p className="text-dark-textSecondary text-[10px] sm:text-xs">Cloud Platform</p>
          </div>
          <div>
            <div className="text-pink-500 font-bold text-lg sm:text-2xl">Remote</div>
            <p className="text-dark-textSecondary text-[10px] sm:text-xs">Online Storage</p>
          </div>
          <div>
            <div className="text-purple-500 font-bold text-lg sm:text-2xl">PR</div>
            <p className="text-dark-textSecondary text-[10px] sm:text-xs">Pull Requests</p>
          </div>
          <div>
            <div className="text-pink-500 font-bold text-lg sm:text-2xl">CI/CD</div>
            <p className="text-dark-textSecondary text-[10px] sm:text-xs">Automation</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default GitHub