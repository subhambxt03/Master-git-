import { motion } from 'framer-motion'
import SectionCard from '../components/ui/SectionCard'
import { 
  BookOpen, 
  Terminal, 
  FolderTree, 
  Users, 
  Shield, 
  GitBranch,
  Globe,
  Code2,
  AlertCircle,
  CheckCircle,
  Cloud,
  GitPullRequest,
  BarChart
} from 'lucide-react'

const Introduction = () => {
  const features = [
    {
      icon: Terminal,
      title: 'Git Command Guidance',
      description: 'Helps users understand and use essential Git commands effectively.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FolderTree,
      title: 'Project Management Support',
      description: 'Assists in organizing and maintaining project files.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Learning Interface',
      description: 'Designed especially for beginners to understand version control concepts easily.',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: GitBranch,
      title: 'Real-Time Workflow',
      description: 'Demonstrates how changes are tracked and managed in development.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Globe,
      title: 'Clean & Responsive UI',
      description: 'Ensures smooth usage across all devices.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: AlertCircle,
      title: 'Error Handling Help',
      description: 'Guides users in resolving common Git issues like merge conflicts or push errors.',
      color: 'from-red-500 to-pink-500'
    }
  ]

  const gitImportance = [
    {
      icon: Code2,
      title: 'Tracks Code Changes',
      description: 'Maintains a complete history of modifications.',
      benefit: 'Never lose track of what changed and when'
    },
    {
      icon: Shield,
      title: 'Safe Development',
      description: 'Reduces the risk of losing important code.',
      benefit: 'Your code is always backed up and recoverable'
    },
    {
      icon: GitBranch,
      title: 'Branching System',
      description: 'Enables working on multiple features simultaneously.',
      benefit: 'Work on new features without affecting stable code'
    },
    {
      icon: Users,
      title: 'Collaboration Friendly',
      description: 'Multiple developers can contribute without overwriting each other\'s work.',
      benefit: 'Team productivity increases significantly'
    },
    {
      icon: AlertCircle,
      title: 'Rollback Feature',
      description: 'Easily revert to previous versions if needed.',
      benefit: 'Fix mistakes by going back to working code'
    }
  ]

  const githubImportance = [
    {
      icon: Cloud,
      title: 'Online Code Storage',
      description: 'Keeps your project accessible from anywhere.',
      benefit: 'Access your code from any device, anywhere'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Makes it easy to work with other developers.',
      benefit: 'Seamless teamwork with built-in tools'
    },
    {
      icon: GitPullRequest,
      title: 'Pull Requests & Reviews',
      description: 'Helps maintain code quality through reviews.',
      benefit: 'Catch bugs early with peer reviews'
    },
    {
      icon: BarChart,
      title: 'Project Showcasing',
      description: 'Acts as a portfolio for developers.',
      benefit: 'Build your professional reputation'
    },
    {
      icon: AlertCircle,
      title: 'Issue Tracking',
      description: 'Manage bugs and tasks efficiently.',
      benefit: 'Keep track of todos, bugs, and features'
    },
    {
      icon: Terminal,
      title: 'Automation Support',
      description: 'Integrates CI/CD tools for deployment.',
      benefit: 'Automate testing and deployment'
    }
  ]

  return (
    <div className="w-full max-w-full overflow-x-hidden px-2 sm:px-3 md:px-0 space-y-3 sm:space-y-4 md:space-y-6">
      
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-accent-primary/10 via-accent-secondary/10 to-accent-primary/10 rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 border border-accent-primary/20"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0 mb-3 sm:mb-4">
          <div className="p-2 sm:p-3 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-lg md:rounded-xl w-fit mx-auto sm:mx-0">
            <BookOpen size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
          </div>
          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent text-center sm:text-left">
            Welcome to Git Master
          </h1>
        </div>
        <p className="text-dark-textSecondary text-sm sm:text-base md:text-lg leading-relaxed text-center sm:text-left">
          Git Master is a web-based platform designed to simplify and enhance the way developers 
          understand and manage version control using Git and GitHub. It provides a structured 
          and interactive environment where users can learn, track, and manage their development 
          workflow efficiently.
        </p>
      </motion.div>

      {/* What Git Master Does */}
      <SectionCard title="What Git Master Does" icon={BookOpen}>
        <div className="space-y-3 sm:space-y-4 md:space-y-6">
          <p className="text-dark-textSecondary text-sm sm:text-base leading-relaxed">
            Git Master bridges the gap between theoretical knowledge and practical implementation 
            of version control systems. Our platform provides:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`bg-gradient-to-br ${feature.color} p-3 sm:p-4 rounded-lg md:rounded-xl shadow-lg`}
              >
                <feature.icon size={22} className="sm:w-6 sm:h-6 md:w-7 md:h-7 text-white mb-2 sm:mb-3" />
                <h3 className="text-white font-semibold text-sm sm:text-base mb-1 sm:mb-2">{feature.title}</h3>
                <p className="text-white/80 text-xs sm:text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-accent-primary/10 rounded-lg p-3 sm:p-4 border border-accent-primary/20">
            <p className="text-accent-primary font-semibold text-center text-sm sm:text-base">
              🎯 Overall, Git Master aims to bridge the gap between theoretical knowledge and 
              practical implementation of version control systems.
            </p>
          </div>
        </div>
      </SectionCard>

      {/* Why Git is Important */}
      <SectionCard title="Why Git is Important" icon={GitBranch}>
        <div className="space-y-3 sm:space-y-4 md:space-y-6">
          <div className="bg-dark-bg rounded-lg p-3 sm:p-4 border-l-4 border-accent-primary">
            <p className="text-dark-textSecondary text-sm sm:text-base">
              <span className="text-accent-primary font-semibold">Git</span> is an essential tool in 
              modern software development that allows developers to track, manage, and control changes 
              in their code.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {gitImportance.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-dark-bg rounded-lg p-3 sm:p-4 border border-dark-border hover:border-accent-primary transition-all"
              >
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <div className="p-1.5 sm:p-2 bg-accent-primary/20 rounded-lg">
                    <item.icon className="text-accent-primary" size={16} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-dark-text font-semibold text-sm sm:text-base mb-1">{item.title}</h3>
                    <p className="text-dark-textSecondary text-xs sm:text-sm mb-1 sm:mb-2">{item.description}</p>
                    <div className="flex items-center space-x-1 sm:space-x-2 text-[10px] sm:text-xs text-accent-secondary">
                      <CheckCircle size={10} />
                      <span>{item.benefit}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-gray-900 rounded-lg p-3 sm:p-4 border border-dark-border overflow-x-auto">
            <p className="text-accent-secondary text-xs sm:text-sm mb-2"># Check if Git is installed on your system</p>
            <p className="text-dark-text text-xs sm:text-sm">$ git --version</p>
            <p className="text-green-500 text-xs sm:text-sm mt-1">git version 2.40.0.windows.1</p>
            <p className="text-dark-textSecondary text-xs sm:text-sm mt-2 md:mt-3">
              💡 Over 90% of developers use Git for version control - making it an essential skill!
            </p>
          </div>
        </div>
      </SectionCard>

      {/* Why GitHub is Important */}
      <SectionCard title="Why GitHub is Important" icon={Cloud}>
        <div className="space-y-3 sm:space-y-4 md:space-y-6">
          <div className="bg-dark-bg rounded-lg p-3 sm:p-4 border-l-4 border-accent-secondary">
            <p className="text-dark-textSecondary text-sm sm:text-base">
              <span className="text-accent-secondary font-semibold">GitHub</span> is a cloud-based 
              platform that uses Git for version control and enables collaboration among developers worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {githubImportance.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-dark-bg rounded-lg p-3 sm:p-4 border border-dark-border hover:border-accent-secondary transition-all group"
              >
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <div className="p-1.5 sm:p-2 bg-accent-secondary/20 rounded-lg group-hover:scale-110 transition-transform">
                    <item.icon className="text-accent-secondary" size={16} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-dark-text font-semibold text-sm sm:text-base mb-1">{item.title}</h3>
                    <p className="text-dark-textSecondary text-xs sm:text-sm mb-1 sm:mb-2">{item.description}</p>
                    <div className="flex items-center space-x-1 sm:space-x-2 text-[10px] sm:text-xs text-accent-primary">
                      <CheckCircle size={10} />
                      <span>{item.benefit}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-gray-900 rounded-lg p-3 sm:p-4 border border-dark-border overflow-x-auto">
            <p className="text-accent-secondary text-xs sm:text-sm mb-2"># Connect your local Git repository to GitHub</p>
            <p className="text-dark-text text-xs sm:text-sm">$ git remote add origin https://github.com/username/repo.git</p>
            <p className="text-dark-text text-xs sm:text-sm">$ git branch -M main</p>
            <p className="text-dark-text text-xs sm:text-sm">$ git push -u origin main</p>
            <p className="text-green-500 text-xs sm:text-sm mt-1">✓ Successfully connected to GitHub!</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="bg-green-500/10 rounded-lg p-3 sm:p-4 border border-green-500/20">
              <h3 className="text-green-500 font-semibold text-sm sm:text-base mb-2 flex items-center gap-2">
                <CheckCircle size={14} /> Version Control System (VCS)
              </h3>
              <p className="text-dark-textSecondary text-xs sm:text-sm">
                Git tracks every change made to your code, creating a complete history. You can always 
                go back to any previous version, see who made what changes, and why.
              </p>
            </div>
            <div className="bg-blue-500/10 rounded-lg p-3 sm:p-4 border border-blue-500/20">
              <h3 className="text-blue-500 font-semibold text-sm sm:text-base mb-2 flex items-center gap-2">
                <Globe size={14} /> Development Platform
              </h3>
              <p className="text-dark-textSecondary text-xs sm:text-sm">
                GitHub hosts your Git repositories online, adds collaboration features like pull requests, 
                issues, project boards, and makes open-source contribution easy.
              </p>
            </div>
          </div>
        </div>
      </SectionCard>

      {/* Quick Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4"
      >
        <div className="bg-dark-card rounded-lg md:rounded-xl p-4 sm:p-5 md:p-6 text-center border border-dark-border">
          <div className="text-2xl sm:text-3xl font-bold text-accent-primary mb-1 sm:mb-2">90%+</div>
          <p className="text-dark-textSecondary text-xs sm:text-sm">Developers use Git</p>
        </div>
        <div className="bg-dark-card rounded-lg md:rounded-xl p-4 sm:p-5 md:p-6 text-center border border-dark-border">
          <div className="text-2xl sm:text-3xl font-bold text-accent-secondary mb-1 sm:mb-2">100M+</div>
          <p className="text-dark-textSecondary text-xs sm:text-sm">GitHub Repositories</p>
        </div>
        <div className="bg-dark-card rounded-lg md:rounded-xl p-4 sm:p-5 md:p-6 text-center border border-dark-border">
          <div className="text-2xl sm:text-3xl font-bold text-accent-primary mb-1 sm:mb-2">73M+</div>
          <p className="text-dark-textSecondary text-xs sm:text-sm">GitHub Developers</p>
        </div>
      </motion.div>
    </div>
  )
}

export default Introduction