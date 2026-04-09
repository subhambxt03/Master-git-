import { motion } from 'framer-motion'
import { 
  FileText, 
  Shield, 
  Database, 
  Zap,
  AlertCircle,
  CheckCircle,
  FolderGit,
  Key,
  Package,
  Code,
  Trash2,
  Eye,
  Lock
} from 'lucide-react'

const GitIgnore = () => {
  const reasonsToUse = [
    {
      icon: Database,
      title: 'Avoid Unnecessary Files',
      description: 'Some files are large or auto-generated and don\'t need version control',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Protect Sensitive Data',
      description: 'Files like .env may contain API keys, passwords, and secret tokens',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: FolderGit,
      title: 'Keep Repository Clean',
      description: 'Prevents clutter from build files, logs, and temporary files',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Zap,
      title: 'Improve Performance',
      description: 'Ignoring heavy folders (like node_modules) keeps Git fast',
      color: 'from-purple-500 to-pink-500'
    }
  ]

  const commonExamples = [
    {
      name: 'node_modules/',
      icon: Package,
      explanation: 'Contains all installed dependencies. Very large in size. Can be reinstalled using: npm install',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: '.env',
      icon: Key,
      explanation: 'Stores environment variables. May contain sensitive data. Should never be shared publicly',
      color: 'from-red-500 to-rose-500'
    },
    {
      name: 'dist/',
      icon: Code,
      explanation: 'Contains compiled or production-ready files. Auto-generated during build. Can be recreated anytime',
      color: 'from-blue-500 to-indigo-500'
    }
  ]

  const ignorePatterns = [
    { pattern: 'node_modules/', description: 'Node.js dependencies folder' },
    { pattern: '.env', description: 'Environment variables file' },
    { pattern: 'dist/', description: 'Build output directory' },
    { pattern: 'build/', description: 'Build output directory' },
    { pattern: '*.log', description: 'All log files' },
    { pattern: 'logs/', description: 'Log directory' },
    { pattern: '.DS_Store', description: 'macOS system file' },
    { pattern: 'Thumbs.db', description: 'Windows thumbnail cache' },
    { pattern: '*.tmp', description: 'Temporary files' },
    { pattern: '.vscode/', description: 'VS Code settings folder' }
  ]

  return (
    <div className="space-y-4 sm:space-y-6 px-2 sm:px-0">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-accent-primary/10 via-accent-secondary/10 to-accent-primary/10 rounded-xl p-4 sm:p-6 md:p-8 border border-accent-primary/20"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0">
          <div className="p-2 sm:p-3 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-xl w-fit mx-auto sm:mx-0">
            <FileText size={22} className="sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
          </div>
          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent text-center sm:text-left">
            .gitignore in Git
          </h1>
        </div>
        <p className="text-dark-textSecondary text-xs sm:text-sm md:text-lg leading-relaxed mt-2 sm:mt-3 md:mt-4 text-center sm:text-left">
          .gitignore is a file used to tell Git which files or folders to ignore. 
          Ignored files are not tracked, not committed, and not pushed to remote repositories.
        </p>
      </motion.div>

      {/* Why .gitignore is Used */}
      <div className="bg-dark-card rounded-xl border border-dark-border overflow-hidden">
        <div className="border-b border-dark-border p-3 sm:p-4 md:p-6">
          <h2 className="text-base sm:text-lg md:text-2xl font-bold text-dark-text">🎯 Why .gitignore is Used</h2>
        </div>
        <div className="p-3 sm:p-4 md:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {reasonsToUse.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className={`bg-gradient-to-br ${reason.color} p-3 sm:p-4 rounded-xl`}
              >
                <reason.icon size={20} className="sm:w-5 sm:h-5 text-white mb-2" />
                <h3 className="text-white font-semibold text-sm sm:text-base mb-1">{idx + 1}️⃣ {reason.title}</h3>
                <p className="text-white/80 text-xs sm:text-sm">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Common Examples */}
      <div className="bg-dark-card rounded-xl border border-dark-border overflow-hidden">
        <div className="border-b border-dark-border p-3 sm:p-4 md:p-6">
          <h2 className="text-base sm:text-lg md:text-2xl font-bold text-dark-text">📂 Common Examples</h2>
        </div>
        <div className="p-3 sm:p-4 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            {commonExamples.map((example, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${example.color} p-3 sm:p-4 rounded-xl`}>
                <div className="flex items-center space-x-2 mb-2">
                  <example.icon size={18} className="text-white" />
                  <h3 className="text-white font-bold text-sm sm:text-base">{example.name}</h3>
                </div>
                <p className="text-white/90 text-xs sm:text-sm">{example.explanation}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Example .gitignore File */}
      <div className="bg-dark-card rounded-xl border border-dark-border overflow-hidden">
        <div className="border-b border-dark-border p-3 sm:p-4 md:p-6">
          <h2 className="text-base sm:text-lg md:text-2xl font-bold text-dark-text">🧾 Example .gitignore File</h2>
        </div>
        <div className="p-3 sm:p-4 md:p-6">
          <div className="bg-gray-900 rounded-lg p-3 sm:p-4 overflow-x-auto">
            <pre className="text-accent-secondary text-[10px] sm:text-xs md:text-sm font-mono">
{`# Node dependencies
node_modules/

# Environment variables
.env

# Build files
dist/
build/

# Logs
logs/
*.log

# OS files
.DS_Store
Thumbs.db

# IDE files
.vscode/
.idea/

# Temporary files
*.tmp
*.temp`}
            </pre>
          </div>
        </div>
      </div>

      {/* Ignore Patterns Reference */}
      <div className="bg-dark-card rounded-xl border border-dark-border overflow-hidden">
        <div className="border-b border-dark-border p-3 sm:p-4 md:p-6">
          <h2 className="text-base sm:text-lg md:text-2xl font-bold text-dark-text">📋 Common Ignore Patterns</h2>
        </div>
        <div className="p-3 sm:p-4 md:p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-dark-border">
                  <th className="text-left p-2 sm:p-3 text-dark-text font-semibold text-xs sm:text-sm">Pattern</th>
                  <th className="text-left p-2 sm:p-3 text-dark-text font-semibold text-xs sm:text-sm">Description</th>
                 </tr>
              </thead>
              <tbody>
                {ignorePatterns.map((pattern, idx) => (
                  <tr key={idx} className="border-b border-dark-border hover:bg-dark-bg transition-colors">
                    <td className="p-2 sm:p-3">
                      <code className="text-accent-secondary text-xs sm:text-sm">{pattern.pattern}</code>
                    </td>
                    <td className="p-2 sm:p-3 text-dark-textSecondary text-xs sm:text-sm">{pattern.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Important Notes */}
      <div className="bg-dark-card rounded-xl border border-dark-border overflow-hidden">
        <div className="border-b border-dark-border p-3 sm:p-4 md:p-6">
          <div className="flex items-center space-x-2">
            <AlertCircle className="text-yellow-500" size={18} />
            <h2 className="text-base sm:text-lg md:text-2xl font-bold text-dark-text">⚠️ Important Notes</h2>
          </div>
        </div>
        <div className="p-3 sm:p-4 md:p-6 space-y-3">
          <div className="bg-yellow-500/10 rounded-lg p-3 border border-yellow-500/20">
            <p className="text-yellow-500 text-sm sm:text-base">⚠️ .gitignore only works for untracked files</p>
            <p className="text-dark-textSecondary text-xs sm:text-sm mt-1">
              If a file is already committed, Git will still track it
            </p>
          </div>
          <div className="bg-blue-500/10 rounded-lg p-3 border border-blue-500/20">
            <p className="text-accent-primary text-sm sm:text-base">👉 To stop tracking an already tracked file:</p>
            <div className="bg-gray-900 rounded-lg p-2 mt-2 overflow-x-auto">
              <code className="text-accent-secondary text-xs sm:text-sm">$ git rm -r --cached node_modules</code>
            </div>
            <p className="text-dark-textSecondary text-xs sm:text-sm mt-2">
              This removes the file from Git's tracking but keeps it on your local system
            </p>
          </div>
        </div>
      </div>

      {/* How to Create .gitignore */}
      <div className="bg-dark-card rounded-xl border border-dark-border overflow-hidden">
        <div className="border-b border-dark-border p-3 sm:p-4 md:p-6">
          <h2 className="text-base sm:text-lg md:text-2xl font-bold text-dark-text">📝 How to Create .gitignore</h2>
        </div>
        <div className="p-3 sm:p-4 md:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-dark-bg rounded-lg p-3 border border-dark-border">
              <h3 className="text-dark-text font-semibold text-sm mb-2">Step 1: Create the file</h3>
              <div className="bg-gray-900 rounded-lg p-2">
                <code className="text-accent-secondary text-xs">$ touch .gitignore</code>
              </div>
            </div>
            <div className="bg-dark-bg rounded-lg p-3 border border-dark-border">
              <h3 className="text-dark-text font-semibold text-sm mb-2">Step 2: Add patterns</h3>
              <div className="bg-gray-900 rounded-lg p-2">
                <code className="text-accent-secondary text-xs"># Ignore node_modules<br/>node_modules/</code>
              </div>
            </div>
            <div className="bg-dark-bg rounded-lg p-3 border border-dark-border">
              <h3 className="text-dark-text font-semibold text-sm mb-2">Step 3: Commit the file</h3>
              <div className="bg-gray-900 rounded-lg p-2">
                <code className="text-accent-secondary text-xs">$ git add .gitignore<br/>$ git commit -m "Add .gitignore"</code>
              </div>
            </div>
            <div className="bg-dark-bg rounded-lg p-3 border border-dark-border">
              <h3 className="text-dark-text font-semibold text-sm mb-2">Step 4: Verify</h3>
              <div className="bg-gray-900 rounded-lg p-2">
                <code className="text-accent-secondary text-xs">$ git status<br/># Ignored files won't appear</code>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Easy Way to Understand */}
      <div className="bg-dark-card rounded-xl border border-dark-border overflow-hidden">
        <div className="border-b border-dark-border p-3 sm:p-4 md:p-6">
          <h2 className="text-base sm:text-lg md:text-2xl font-bold text-dark-text">🧠 Easy Way to Understand</h2>
        </div>
        <div className="p-3 sm:p-4 md:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-dark-bg rounded-lg p-3 text-center border border-dark-border">
              <FileText size={24} className="text-accent-primary mx-auto mb-2" />
              <p className="text-dark-text font-semibold text-sm">.gitignore</p>
              <p className="text-dark-textSecondary text-xs">= "Don't upload these files" list</p>
            </div>
            <div className="bg-dark-bg rounded-lg p-3 text-center border border-dark-border">
              <Shield size={24} className="text-accent-primary mx-auto mb-2" />
              <p className="text-dark-text font-semibold text-sm">Keeps your project</p>
              <p className="text-dark-textSecondary text-xs">Clean & Secure</p>
            </div>
            <div className="bg-dark-bg rounded-lg p-3 text-center border border-dark-border">
              <Zap size={24} className="text-accent-primary mx-auto mb-2" />
              <p className="text-dark-text font-semibold text-sm">Improves</p>
              <p className="text-dark-textSecondary text-xs">Performance & Efficiency</p>
            </div>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="bg-gradient-to-r from-accent-primary/5 to-accent-secondary/5 rounded-xl p-3 sm:p-4 md:p-6 border border-accent-primary/20">
        <div className="flex items-center space-x-2 mb-3">
          <CheckCircle size={18} className="text-accent-primary" />
          <h3 className="text-sm sm:text-base md:text-lg font-semibold text-dark-text">✅ Best Practices</h3>
        </div>
        <ul className="space-y-2 text-dark-textSecondary text-xs sm:text-sm md:text-base">
          <li>• Create .gitignore at the beginning of your project</li>
          <li>• Use comments to document why you ignore certain files</li>
          <li>• Keep .gitignore in the root of your repository</li>
          <li>• Use templates from gitignore.io for your tech stack</li>
          <li>• Never commit sensitive data - use .gitignore to prevent it</li>
        </ul>
      </div>

      {/* Key Takeaway */}
      <div className="bg-gradient-to-r from-accent-primary/5 to-accent-secondary/5 rounded-xl p-3 sm:p-4 md:p-6 border border-accent-primary/20">
        <h3 className="text-sm sm:text-base md:text-lg font-semibold text-dark-text mb-2 text-center">🎯 Key Takeaway</h3>
        <p className="text-dark-textSecondary text-xs sm:text-sm md:text-base text-center">
          .gitignore is essential for keeping your repository clean, secure, and efficient. 
          Always configure it at the start of your project to avoid committing unnecessary or 
          sensitive files to version control!
        </p>
      </div>
    </div>
  )
}

export default GitIgnore