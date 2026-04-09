import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { User, Mail, Lock, UserPlus, GitBranch } from 'lucide-react'

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const { signup } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields')
      return
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }
    signup(name, email, password)
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-dark-bg flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full"
      >
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-2xl mb-4">
            <GitBranch size={32} className="text-white" />
          </div>
          <h2 className="text-3xl font-bold text-dark-text">Create Account</h2>
          <p className="text-dark-textSecondary mt-2">Start your Git learning journey</p>
        </div>

        <div className="bg-dark-card rounded-2xl border border-dark-border p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-500/10 border border-red-500 text-red-500 rounded-lg p-3 text-sm"
              >
                {error}
              </motion.div>
            )}

            <div>
              <label className="block text-dark-textSecondary text-sm font-medium mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-textSecondary" size={18} />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-dark-bg border border-dark-border rounded-lg focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 text-dark-text transition-all"
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div>
              <label className="block text-dark-textSecondary text-sm font-medium mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-textSecondary" size={18} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-dark-bg border border-dark-border rounded-lg focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 text-dark-text transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-dark-textSecondary text-sm font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-textSecondary" size={18} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-dark-bg border border-dark-border rounded-lg focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 text-dark-text transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div>
              <label className="block text-dark-textSecondary text-sm font-medium mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-textSecondary" size={18} />
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-dark-bg border border-dark-border rounded-lg focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 text-dark-text transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-gradient-to-r from-accent-primary to-accent-secondary text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all"
            >
              <UserPlus size={18} /> Sign Up
            </motion.button>
          </form>

          <p className="text-center mt-6 text-dark-textSecondary">
            Already have an account?{' '}
            <Link to="/login" className="text-accent-primary hover:text-accent-primary/80 transition-colors">
              Sign In
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default Signup