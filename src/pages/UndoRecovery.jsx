import { motion } from 'framer-motion'
import { 
  RotateCcw, 
  AlertTriangle, 
  CheckCircle, 
  Trash2,
  GitBranch,
  FileCode,
  RefreshCw,
  Shield,
  Eye,
  Terminal,
  ArrowLeft,
  ArrowRight,
  Database,
  HardDrive
} from 'lucide-react'

const UndoRecovery = () => {
  const undoCommands = [
    {
      name: 'git restore',
      icon: RefreshCw,
      command: 'git restore <file>',
      purpose: 'Restore a file to its last committed state',
      example: 'git restore app.js',
      explanation: 'Discards changes in the working directory. Reverts file back to last commit.',
      whenToUse: 'You edited a file but want to undo changes',
      warning: 'This will permanently delete uncommitted changes in that file.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'git reset',
      icon: RotateCcw,
      command: 'git reset <file>',
      purpose: 'Unstage files (remove from staging area)',
      example: 'git reset app.js',
      explanation: 'Moves file from staging area back to working directory. Does NOT delete your code.',
      whenToUse: 'You accidentally used git add',
      warning: 'Safe to use, does not delete code',
      color: 'from-green-500 to-teal-500'
    },
    {
      name: 'git rm',
      icon: Trash2,
      command: 'git rm <file>',
      purpose: 'Delete a file from both Git and your system',
      example: 'git rm old-file.js',
      explanation: 'Removes file from working directory and stages the deletion for commit.',
      whenToUse: 'You want to completely remove a file',
      warning: 'Permanently deletes the file from your system',
      color: 'from-red-500 to-pink-500'
    }
  ]

  const advancedCommands = [
    {
      name: 'Soft Reset',
      command: 'git reset --soft HEAD~1',
      purpose: 'Undo last commit but keep changes staged',
      explanation: 'Removes the last commit but keeps all changes in staging area',
      danger: 'Low Risk'
    },
    {
      name: 'Hard Reset',
      command: 'git reset --hard HEAD~1',
      purpose: 'Delete last commit and all changes',
      explanation: 'Permanently deletes the last commit and all associated changes',
      danger: 'High Risk - Permanent data loss'
    }
  ]

  const scenarios = [
    { scenario: 'Undo file changes', command: 'git restore file.js' },
    { scenario: 'Unstage file', command: 'git reset file.js' },
    { scenario: 'Undo last commit (safe)', command: 'git reset --soft HEAD~1' },
    { scenario: 'Delete everything (danger)', command: 'git reset --hard HEAD~1' },
    { scenario: 'Stop tracking a file', command: 'git rm --cached .env' }
  ]

  return (
    <div className="w-full max-w-full overflow-x-hidden px-2 sm:px-3 md:px-0">
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-accent-primary/10 via-accent-secondary/10 to-accent-primary/10 rounded-xl p-4 md:p-8 border border-accent-primary/20 mb-4 md:mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
          <div className="p-3 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-xl w-fit mx-auto md:mx-0 mb-3 md:mb-0">
            <RotateCcw size={24} className="text-white" />
          </div>
          <h1 className="text-xl md:text-4xl font-bold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent text-center md:text-left">
            Undo & Recovery in Git
          </h1>
        </div>
        <p className="text-dark-textSecondary text-sm md:text-lg leading-relaxed mt-3 md:mt-4 text-center md:text-left">
          Git provides commands to undo mistakes, recover changes, and manage files safely. 
          These commands help when you added wrong files, made a wrong commit, or want to remove or restore files.
        </p>
      </div>

      {/* Main Commands - Mobile: Stack vertically, Desktop: Grid */}
      <div className="space-y-4 md:space-y-6">
        {undoCommands.map((cmd, idx) => (
          <div key={idx} className={`bg-gradient-to-br ${cmd.color} rounded-xl overflow-hidden`}>
            <div className="p-3 md:p-4">
              <div className="flex items-center space-x-2 md:space-x-3 mb-3 md:mb-4">
                <cmd.icon size={18} className="md:w-6 md:h-6 text-white" />
                <h2 className="text-base md:text-2xl font-bold text-white">{cmd.name}</h2>
              </div>
              
              <div className="bg-black/30 rounded-lg p-3 md:p-4 space-y-3 md:space-y-4">
                <div>
                  <h3 className="text-white/90 font-semibold text-xs md:text-sm mb-1">📌 Command:</h3>
                  <code className="text-white text-xs md:text-sm block bg-black/30 p-2 rounded">{cmd.command}</code>
                </div>
                
                <div>
                  <h3 className="text-white/90 font-semibold text-xs md:text-sm mb-1">🎯 Purpose:</h3>
                  <p className="text-white/80 text-xs md:text-sm">{cmd.purpose}</p>
                </div>
                
                <div>
                  <h3 className="text-white/90 font-semibold text-xs md:text-sm mb-1">💡 Example:</h3>
                  <code className="text-white text-xs md:text-sm block bg-black/30 p-2 rounded">{cmd.example}</code>
                </div>
                
                <div>
                  <h3 className="text-white/90 font-semibold text-xs md:text-sm mb-1">🧾 Explanation:</h3>
                  <p className="text-white/80 text-xs md:text-sm">{cmd.explanation}</p>
                </div>
                
                <div>
                  <h3 className="text-white/90 font-semibold text-xs md:text-sm mb-1">👉 Use this when:</h3>
                  <p className="text-white/80 text-xs md:text-sm">{cmd.whenToUse}</p>
                </div>
                
                <div className="bg-yellow-500/30 rounded-lg p-2 md:p-3">
                  <div className="flex items-start space-x-2">
                    <AlertTriangle size={14} className="md:w-5 md:h-5 text-yellow-200 mt-0.5" />
                    <div>
                      <h3 className="text-yellow-200 font-semibold text-xs md:text-sm">⚠️ Warning:</h3>
                      <p className="text-yellow-100/80 text-xs md:text-sm">{cmd.warning}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Advanced Reset Options */}
      <div className="bg-dark-card rounded-xl border border-dark-border overflow-hidden my-4 md:my-6">
        <div className="border-b border-dark-border p-3 md:p-6">
          <h2 className="text-base md:text-2xl font-bold text-dark-text">🔹 Advanced Reset Options</h2>
        </div>
        <div className="p-3 md:p-6">
          <div className="flex flex-col md:flex-row gap-4">
            {advancedCommands.map((cmd, idx) => (
              <div key={idx} className="flex-1 bg-dark-bg rounded-lg p-3 md:p-4 border border-dark-border">
                <h3 className="text-accent-primary font-bold text-sm md:text-lg mb-2">{cmd.name}</h3>
                <div className="bg-gray-900 rounded-lg p-2 mb-2 overflow-x-auto">
                  <code className="text-accent-secondary text-xs md:text-sm">{cmd.command}</code>
                </div>
                <p className="text-dark-textSecondary text-xs md:text-sm mb-2">💡 {cmd.purpose}</p>
                <p className="text-dark-textSecondary text-xs md:text-sm">📝 {cmd.explanation}</p>
                <div className={`mt-2 p-2 rounded ${cmd.danger.includes('High') ? 'bg-red-500/30' : 'bg-yellow-500/30'}`}>
                  <p className="text-white text-xs md:text-sm font-semibold">⚠️ {cmd.danger}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Remove Staged Files */}
      <div className="bg-dark-card rounded-xl border border-dark-border overflow-hidden my-4 md:my-6">
        <div className="border-b border-dark-border p-3 md:p-6">
          <h2 className="text-base md:text-2xl font-bold text-dark-text">🔧 Remove Staged Files</h2>
        </div>
        <div className="p-3 md:p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 bg-dark-bg rounded-lg p-3 md:p-4 border border-dark-border">
              <h3 className="text-accent-primary font-semibold text-sm md:text-base mb-2">Using git reset</h3>
              <div className="bg-gray-900 rounded-lg p-2 mb-2 overflow-x-auto">
                <code className="text-accent-secondary text-xs md:text-sm">git reset &lt;file&gt;</code>
              </div>
              <p className="text-dark-textSecondary text-xs md:text-sm">Example: <code className="text-accent-secondary">git reset app.js</code></p>
              <p className="text-dark-textSecondary text-xs md:text-sm mt-2">Removes file from staging area</p>
            </div>
            <div className="flex-1 bg-dark-bg rounded-lg p-3 md:p-4 border border-dark-border">
              <h3 className="text-accent-primary font-semibold text-sm md:text-base mb-2">Using git restore</h3>
              <div className="bg-gray-900 rounded-lg p-2 mb-2 overflow-x-auto">
                <code className="text-accent-secondary text-xs md:text-sm">git restore --staged &lt;file&gt;</code>
              </div>
              <p className="text-dark-textSecondary text-xs md:text-sm">Example: <code className="text-accent-secondary">git restore --staged app.js</code></p>
              <p className="text-dark-textSecondary text-xs md:text-sm mt-2">File remains unchanged, only removed from staging</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Recovery Scenarios */}
      <div className="bg-dark-card rounded-xl border border-dark-border overflow-hidden my-4 md:my-6">
        <div className="border-b border-dark-border p-3 md:p-6">
          <h2 className="text-base md:text-2xl font-bold text-dark-text">🔄 Quick Recovery Scenarios</h2>
        </div>
        <div className="p-3 md:p-6">
          <div className="space-y-2">
            {scenarios.map((sc, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 bg-dark-bg rounded-lg border border-dark-border gap-2">
                <span className="text-dark-textSecondary text-xs md:text-sm">{sc.scenario}</span>
                <code className="text-accent-secondary text-xs md:text-sm bg-gray-900 px-2 py-1 rounded">{sc.command}</code>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Visual Flow - Undo Concept */}
      <div className="bg-dark-card rounded-xl border border-dark-border overflow-hidden my-4 md:my-6">
        <div className="border-b border-dark-border p-3 md:p-6">
          <h2 className="text-base md:text-2xl font-bold text-dark-text">📊 Visual Flow (Undo Concept)</h2>
        </div>
        <div className="p-3 md:p-6">
          <div className="bg-gray-900 rounded-lg p-3 md:p-6">
            {/* Flow Steps */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
              <div className="text-center">
                <HardDrive size={24} className="text-blue-500 mx-auto mb-2" />
                <p className="text-dark-text text-xs md:text-sm">Working Directory</p>
              </div>
              <ArrowRight size={16} className="text-accent-primary hidden md:block" />
              <ArrowRight size={16} className="text-accent-primary rotate-90 md:hidden" />
              <div className="text-center">
                <Database size={24} className="text-yellow-500 mx-auto mb-2" />
                <p className="text-dark-text text-xs md:text-sm">Staging Area</p>
              </div>
              <ArrowRight size={16} className="text-accent-primary hidden md:block" />
              <ArrowRight size={16} className="text-accent-primary rotate-90 md:hidden" />
              <div className="text-center">
                <GitBranch size={24} className="text-green-500 mx-auto mb-2" />
                <p className="text-dark-text text-xs md:text-sm">Local Repo</p>
              </div>
            </div>
            
            {/* Commands */}
            <div className="flex flex-col md:flex-row justify-between gap-2 mt-4 md:mt-6 text-center text-xs md:text-sm">
              <div className="bg-blue-500/20 rounded p-2">
                <p>git restore ◀ (undo changes)</p>
              </div>
              <div className="bg-yellow-500/20 rounded p-2">
                <p>git reset ◀ (unstage files)</p>
              </div>
              <div className="bg-red-500/20 rounded p-2">
                <p>git rm ✖ (delete file)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Keep File but Remove from Git */}
      <div className="bg-dark-card rounded-xl border border-dark-border overflow-hidden my-4 md:my-6">
        <div className="border-b border-dark-border p-3 md:p-6">
          <h2 className="text-base md:text-2xl font-bold text-dark-text">🔹 Keep File but Remove from Git</h2>
        </div>
        <div className="p-3 md:p-6">
          <div className="bg-blue-500/10 rounded-lg p-3 md:p-4 border border-blue-500/20">
            <code className="text-accent-secondary text-sm md:text-base block mb-2">git rm --cached &lt;file&gt;</code>
            <p className="text-dark-textSecondary text-sm md:text-base">👉 Example: <code className="text-accent-secondary">git rm --cached .env</code></p>
            <div className="flex flex-col sm:flex-row sm:space-x-4 mt-3 space-y-2 sm:space-y-0">
              <div className="flex items-center space-x-2">
                <CheckCircle size={16} className="text-green-500" />
                <p className="text-dark-textSecondary text-sm">✔ File stays on your system</p>
              </div>
              <div className="flex items-center space-x-2">
                <AlertTriangle size={16} className="text-red-500" />
                <p className="text-dark-textSecondary text-sm">❌ Removed from Git tracking</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Important Warnings */}
      <div className="bg-dark-card rounded-xl border border-dark-border overflow-hidden my-4 md:my-6">
        <div className="border-b border-dark-border p-3 md:p-6">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="text-red-500" size={20} />
            <h2 className="text-base md:text-2xl font-bold text-dark-text">⚠️ Important Warnings</h2>
          </div>
        </div>
        <div className="p-3 md:p-6">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1 bg-red-500/10 rounded-lg p-3 border border-red-500/20 text-center">
              <RefreshCw size={20} className="text-red-500 mx-auto mb-2" />
              <p className="text-dark-textSecondary text-xs md:text-sm">git restore → deletes uncommitted changes</p>
            </div>
            <div className="flex-1 bg-red-500/10 rounded-lg p-3 border border-red-500/20 text-center">
              <RotateCcw size={20} className="text-red-500 mx-auto mb-2" />
              <p className="text-dark-textSecondary text-xs md:text-sm">git reset --hard → permanently deletes commits</p>
            </div>
            <div className="flex-1 bg-red-500/10 rounded-lg p-3 border border-red-500/20 text-center">
              <Trash2 size={20} className="text-red-500 mx-auto mb-2" />
              <p className="text-dark-textSecondary text-xs md:text-sm">git rm → removes file from system</p>
            </div>
          </div>
          <div className="bg-yellow-500/10 rounded-lg p-3 mt-4 text-center border border-yellow-500/20">
            <p className="text-yellow-500 text-xs md:text-sm">👉 Always double-check before running destructive commands</p>
          </div>
        </div>
      </div>

      {/* Easy Way to Remember */}
      <div className="bg-gradient-to-r from-accent-primary/5 to-accent-secondary/5 rounded-xl p-4 md:p-6 border border-accent-primary/20">
        <h3 className="text-sm md:text-lg font-semibold text-dark-text mb-3 text-center">🧠 Easy Way to Remember</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
          <div className="bg-dark-bg rounded-lg p-2 md:p-3 text-center">
            <RefreshCw size={16} className="md:w-5 md:h-5 text-accent-primary mx-auto mb-1 md:mb-2" />
            <p className="text-dark-text font-semibold text-xs md:text-sm">restore</p>
            <p className="text-dark-textSecondary text-[10px] md:text-xs">undo file changes</p>
          </div>
          <div className="bg-dark-bg rounded-lg p-2 md:p-3 text-center">
            <RotateCcw size={16} className="md:w-5 md:h-5 text-accent-primary mx-auto mb-1 md:mb-2" />
            <p className="text-dark-text font-semibold text-xs md:text-sm">reset</p>
            <p className="text-dark-textSecondary text-[10px] md:text-xs">undo staging/commit</p>
          </div>
          <div className="bg-dark-bg rounded-lg p-2 md:p-3 text-center">
            <Trash2 size={16} className="md:w-5 md:h-5 text-accent-primary mx-auto mb-1 md:mb-2" />
            <p className="text-dark-text font-semibold text-xs md:text-sm">rm</p>
            <p className="text-dark-textSecondary text-[10px] md:text-xs">remove file</p>
          </div>
          <div className="bg-dark-bg rounded-lg p-2 md:p-3 text-center">
            <AlertTriangle size={16} className="md:w-5 md:h-5 text-red-500 mx-auto mb-1 md:mb-2" />
            <p className="text-dark-text font-semibold text-xs md:text-sm">--hard</p>
            <p className="text-dark-textSecondary text-[10px] md:text-xs">dangerous</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UndoRecovery