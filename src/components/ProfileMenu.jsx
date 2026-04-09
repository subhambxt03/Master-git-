import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { User, LogOut, LogIn, UserPlus, ChevronUp, ChevronDown } from 'lucide-react'

const ProfileMenu = () => {
  const { user, logout } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center space-x-2 sm:space-x-3 px-3 py-2 sm:px-4 sm:py-3 rounded-lg bg-dark-card hover:bg-dark-border transition-all duration-200 group"
      >
        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-full flex items-center justify-center">
          <span className="text-white font-semibold text-sm sm:text-base">
            {user ? user.avatar : 'G'}
          </span>
        </div>
        <div className="flex-1 text-left">
          <p className="text-dark-text font-medium text-xs sm:text-sm">
            {user ? user.name : 'Guest'}
          </p>
          <p className="text-dark-textSecondary text-[10px] sm:text-xs">
            {user ? user.email : 'Not logged in'}
          </p>
        </div>
        {isOpen ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute bottom-full left-0 right-0 mb-2 bg-dark-card border border-dark-border rounded-lg shadow-xl overflow-hidden z-50"
          >
            {user ? (
              <div className="py-2">
                <div className="px-4 py-3 border-b border-dark-border">
                  <p className="text-dark-text font-medium flex items-center gap-2 text-sm">
                    <User size={14} /> {user.name}
                  </p>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full px-4 py-3 text-left text-red-400 hover:bg-dark-border transition-colors flex items-center gap-2 text-sm"
                >
                  <LogOut size={14} /> Logout
                </button>
              </div>
            ) : (
              <div className="py-2">
                <button
                  onClick={() => {
                    navigate('/login')
                    setIsOpen(false)
                  }}
                  className="w-full px-4 py-3 text-left text-dark-text hover:bg-dark-border transition-colors flex items-center gap-2 text-sm"
                >
                  <LogIn size={14} /> Login
                </button>
                <button
                  onClick={() => {
                    navigate('/signup')
                    setIsOpen(false)
                  }}
                  className="w-full px-4 py-3 text-left text-dark-text hover:bg-dark-border transition-colors flex items-center gap-2 text-sm"
                >
                  <UserPlus size={14} /> Sign Up
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ProfileMenu