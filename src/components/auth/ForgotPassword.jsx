import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, Send, ArrowLeft, GitBranch } from 'lucide-react'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) {
      setError('Please enter your email address')
      return
    }
    // Simulate sending reset link
    setSubmitted(true)
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
          <h2 className="text-3xl font-bold text-dark-text">Forgot Password?</h2>
          <p className="text-dark-textSecondary mt-2">We'll send you a reset link</p>
        </div>

        <div className="bg-dark-card rounded-2xl border border-dark-border p-8 shadow-2xl">
          {!submitted ? (
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

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-accent-primary to-accent-secondary text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all"
              >
                <Send size={18} /> Send Reset Link
              </motion.button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-4"
            >
              <div className="w-16 h-16 bg-accent-primary/20 rounded-full flex items-center justify-center mx-auto">
                <Mail size={32} className="text-accent-primary" />
              </div>
              <h3 className="text-xl font-semibold text-dark-text">Check Your Email</h3>
              <p className="text-dark-textSecondary">
                We've sent a password reset link to <strong className="text-accent-primary">{email}</strong>
              </p>
              <p className="text-sm text-dark-textSecondary">
                Didn't receive the email? Check your spam folder or try again.
              </p>
            </motion.div>
          )}

          <Link to="/login" className="mt-6 block text-center text-dark-textSecondary hover:text-accent-primary transition-colors flex items-center justify-center gap-2">
            <ArrowLeft size={16} /> Back to Login
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

export default ForgotPassword