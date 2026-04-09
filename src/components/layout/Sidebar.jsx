import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import ProfileMenu from '../ProfileMenu'
import {
  BookOpen,
  GitBranch,
  Github,
  GitMerge,
  Workflow,
  Terminal,
  Share2,
  Code2,
  Users,
  FileText,
  RefreshCw, 
  RotateCcw,
  HelpCircle,
} from 'lucide-react'

const menuItems = [
  { path: '/introduction', name: 'Home', icon: BookOpen },
  { path: '/git-basics', name: 'Git Basics', icon: GitBranch },
  { path: '/github', name: 'GitHub', icon: Github },
  { path: '/git-vs-github', name: 'Git vs GitHub', icon: GitMerge },
  { path: '/git-workflow', name: 'Git Workflow', icon: Workflow },
  { path: '/git-commands', name: 'Git Commands', icon: Terminal },
  { path: '/branching', name: 'Branching', icon: Share2 },
  { path: '/merging', name: 'Merging', icon: Code2 },
  { path: '/collaboration', name: 'Collaboration', icon: Users },
  { path: '/gitignore', name: '.gitignore', icon: FileText },
  { path: '/undo-recovery', name: 'Undo & Recovery', icon: RotateCcw },
  { path: '/quiz', name: 'Quiz', icon: HelpCircle },
]

const Sidebar = ({ isMobile, onClose }) => {
  return (
    <div className="h-full bg-dark-sidebar border-r border-dark-border flex flex-col">
      <div className="flex-1 overflow-y-auto py-4 sm:py-6">
        <nav className="px-2 sm:px-4 space-y-1 sm:space-y-2">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.path}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.05 }}
            >
              <NavLink
                to={item.path}
                onClick={() => isMobile && onClose()}
                className={({ isActive }) =>
                  `flex items-center space-x-2 sm:space-x-3 px-3 py-2 sm:px-4 sm:py-3 rounded-lg transition-all duration-200 group ${
                    isActive
                      ? 'bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 text-accent-primary border-l-4 border-accent-primary'
                      : 'text-dark-textSecondary hover:text-dark-text hover:bg-dark-card'
                  }`
                }
              >
                <item.icon size={18} className="sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium text-sm sm:text-base">{item.name}</span>
              </NavLink>
            </motion.div>
          ))}
        </nav>
      </div>
      
      <div className="p-3 sm:p-4 border-t border-dark-border">
        <ProfileMenu />
      </div>
    </div>
  )
}

export default Sidebar