import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, Lock, LogIn, GitBranch } from 'lucide-react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !password) {
      setError('Please fill in all fields')
      return
    }
    login(email, password)
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
          <h2 className="text-3xl font-bold text-dark-text">Welcome Back</h2>
          <p className="text-dark-textSecondary mt-2">Sign in to continue learning Git</p>
        </div>

        <div className="bg-dark-card rounded-2xl border border-dark-border p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
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

            <div className="flex items-center justify-between">
              <Link to="/forgot-password" className="text-sm text-accent-primary hover:text-accent-primary/80 transition-colors">
                Forgot Password?
              </Link>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-gradient-to-r from-accent-primary to-accent-secondary text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all"
            >
              <LogIn size={18} /> Sign In
            </motion.button>
          </form>

          <p className="text-center mt-6 text-dark-textSecondary">
            Don't have an account?{' '}
            <Link to="/signup" className="text-accent-primary hover:text-accent-primary/80 transition-colors">
              Sign Up
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default Login