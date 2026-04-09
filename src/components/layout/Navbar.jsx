import { useAuth } from '../../context/AuthContext'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, GitBranch } from 'lucide-react'

const Navbar = ({ onMenuClick }) => {
  const { user } = useAuth()

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 bg-dark-sidebar border-b border-dark-border shadow-lg z-50"
    >
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center space-x-3 sm:space-x-4">
          <button
            onClick={onMenuClick}
            className="text-dark-text hover:text-accent-primary transition-colors md:hidden"
          >
            <Menu size={22} />
          </button>
          
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <GitBranch size={18} className="sm:w-5 sm:h-5 text-white" />
            </div>
            <div>
              <h1 className="text-base sm:text-xl font-bold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                GitMaster
              </h1>
              <p className="text-[10px] sm:text-xs text-dark-textSecondary hidden sm:block">Learn Git & GitHub</p>
            </div>
          </Link>
        </div>

        <div className="flex items-center space-x-3 sm:space-x-4">
          {user ? (
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-dark-card rounded-lg border border-dark-border"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-xs sm:text-sm">{user.avatar}</span>
              </div>
              <span className="text-dark-text font-medium text-sm sm:text-base hidden sm:inline">Hi, {user.name}</span>
            </motion.div>
          ) : (
            <Link to="/login">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1.5 sm:px-4 sm:py-2 bg-accent-primary text-white rounded-lg text-sm sm:text-base hover:bg-accent-primary/80 transition-colors"
              >
                Login
              </motion.button>
            </Link>
          )}
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar