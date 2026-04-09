import { motion } from 'framer-motion'
import { 
  Workflow, 
  Edit, 
  CheckSquare, 
  Database, 
  Cloud,
  ArrowRight,
  ArrowLeft,
  GitBranch,
  Terminal,
  RefreshCw,
  Shield,
  Users,
  History,
  Upload,
  Download
} from 'lucide-react'

// Import your workflow image
import workflowImg from '../images/workflow.png'

const GitWorkflow = () => {
  const workflowStages = [
    {
      step: 1,
      title: 'Working Directory',
      icon: Edit,
      description: 'Your project folder where you write and edit code',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
      whatHappens: [
        'Create new files',
        'Modify existing files',
        'Delete files',
        'Test your code'
      ],
      important: 'Changes here are not tracked by Git automatically.',
      command: 'git status',
      commandExample: '$ git status',
      commandOutput: 'modified: app.js\nuntracked: newfile.txt'
    },
    {
      step: 2,
      title: 'Staging Area (Index)',
      icon: CheckSquare,
      description: 'A temporary area where you prepare changes before saving them permanently',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20',
      whatHappens: [
        'You select specific files or changes',
        'Only staged files will be committed'
      ],
      important: 'It gives you control over what exactly goes into a commit.',
      command: 'git add',
      commandExample: '$ git add app.js\n$ git add .',
      commandOutput: 'Changes staged for commit'
    },
    {
      step: 3,
      title: 'Local Repository',
      icon: Database,
      description: 'A storage area inside your system where Git saves your project history',
      color: 'from-green-500 to-teal-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20',
      whatHappens: [
        'Changes are saved as commits',
        'Each commit is a snapshot of your project',
        'You can track and restore previous versions'
      ],
      important: 'Keeps complete history of your project. Helps in debugging and rollback.',
      command: 'git commit',
      commandExample: '$ git commit -m "Added login functionality"',
      commandOutput: '[main abc1234] Added login functionality\n1 file changed, 10 insertions(+)'
    },
    {
      step: 4,
      title: 'Remote Repository',
      icon: Cloud,
      description: 'An online version of your repository stored on cloud platforms',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/20',
      whatHappens: [
        'Code is uploaded to the internet',
        'Other developers can access it',
        'Acts as backup'
      ],
      important: 'Enables collaboration. Keeps your code safe online. Allows team development.',
      command: 'git push',
      commandExample: '$ git push origin main',
      commandOutput: '✓ Your code is now live on the remote server'
    }
  ]

  const benefits = [
    { icon: History, title: 'Version Control', description: 'Track every change in your code' },
    { icon: Users, title: 'Easy Collaboration', description: 'Work seamlessly with teams' },
    { icon: Cloud, title: 'Cloud Backup', description: 'Keep your code safe online' },
    { icon: RefreshCw, title: 'Rollback Ability', description: 'Revert to previous versions' },
    { icon: Shield, title: 'Organized Process', description: 'Structured development workflow' }
  ]

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-accent-primary/10 via-accent-secondary/10 to-accent-primary/10 rounded-xl p-4 md:p-8 border border-accent-primary/20"
      >
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-3 md:space-y-0">
          <div className="p-2 md:p-3 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-xl w-fit mx-auto md:mx-0">
            <Workflow size={24} className="md:w-8 md:h-8 text-white" />
          </div>
          <h1 className="text-xl md:text-4xl font-bold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent text-center md:text-left">
            Git Workflow
          </h1>
        </div>
        <p className="text-dark-textSecondary text-sm md:text-lg leading-relaxed mt-3 md:mt-4 text-center md:text-left">
          Git workflow is the process that shows how your code moves from your system to an online repository. 
          It helps developers track changes, manage versions, and collaborate efficiently.
        </p>
      </motion.div>

      {/* Workflow Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-dark-card rounded-xl border border-dark-border overflow-hidden p-4 md:p-6"
      >
        <h2 className="text-lg md:text-2xl font-bold text-dark-text mb-4 text-center">📊 Visual Workflow Diagram</h2>
        <div className="flex justify-center">
          <img 
            src={workflowImg} 
            alt="Git Workflow Diagram" 
            className="w-full max-w-3xl h-auto rounded-lg"
          />
        </div>
      </motion.div>

      {/* Complete Flow Overview */}
      <div className="bg-dark-card rounded-xl border border-dark-border overflow-hidden">
        <div className="border-b border-dark-border p-4 md:p-6">
          <h2 className="text-lg md:text-2xl font-bold text-dark-text text-center">
            🧭 Complete Flow Overview
          </h2>
          <p className="text-dark-textSecondary text-center mt-2 text-sm md:text-base">
            Working Directory → Staging Area → Local Repository → Remote Repository
          </p>
        </div>
        <div className="p-4 md:p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4">
            {['Working Directory', 'Staging Area', 'Local Repository', 'Remote Repository'].map((stage, idx) => (
              <div key={idx} className="flex items-center w-full md:w-auto">
                <div className="bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 rounded-lg p-2 md:p-3 text-center flex-1 md:flex-none">
                  <p className="text-dark-text font-semibold text-xs md:text-sm">{stage}</p>
                </div>
                {idx < 3 && (
                  <ArrowRight className="text-accent-primary mx-1 md:mx-2 hidden md:block" size={16} />
                )}
              </div>
            ))}
          </div>
          <p className="text-dark-textSecondary text-xs md:text-sm text-center mt-4">
            Each step plays an important role in managing your code.
          </p>
        </div>
      </div>

      {/* Detailed Stages */}
      {workflowStages.map((stage, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: idx * 0.1 }}
          className={`${stage.bgColor} rounded-xl border ${stage.borderColor} overflow-hidden`}
        >
          <div className={`bg-gradient-to-r ${stage.color} p-4 md:p-6`}>
            <div className="flex items-center space-x-2 md:space-x-3">
              <stage.icon size={22} className="md:w-8 md:h-8 text-white" />
              <div>
                <div className="text-white/70 text-xs md:text-sm">Step {stage.step}</div>
                <h2 className="text-lg md:text-2xl font-bold text-white">{stage.title}</h2>
              </div>
            </div>
          </div>
          
          <div className="p-4 md:p-6 space-y-4">
            <div>
              <h3 className="text-dark-text font-semibold text-sm md:text-base mb-2">💡 What it is:</h3>
              <p className="text-dark-textSecondary text-sm md:text-base">{stage.description}</p>
            </div>

            <div>
              <h3 className="text-dark-text font-semibold text-sm md:text-base mb-2">🧾 What happens here:</h3>
              <ul className="space-y-1">
                {stage.whatHappens.map((item, i) => (
                  <li key={i} className="text-dark-textSecondary text-sm md:text-base flex items-start space-x-2">
                    <span className="text-accent-primary">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-yellow-500/10 rounded-lg p-3 border border-yellow-500/20">
              <h3 className="text-yellow-500 font-semibold text-sm md:text-base mb-1">⚠️ Important:</h3>
              <p className="text-dark-textSecondary text-sm md:text-base">{stage.important}</p>
            </div>

            <div>
              <h3 className="text-dark-text font-semibold text-sm md:text-base mb-2">🔍 Command:</h3>
              <div className="bg-gray-900 rounded-lg p-3 overflow-x-auto">
                <code className="text-accent-secondary text-xs md:text-sm">{stage.commandExample}</code>
                {stage.commandOutput && (
                  <>
                    <br />
                    <code className="text-green-500 text-xs md:text-sm mt-2 block">{stage.commandOutput}</code>
                  </>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Full Workflow with Commands */}
      <div className="bg-dark-card rounded-xl border border-dark-border overflow-hidden">
        <div className="border-b border-dark-border p-4 md:p-6">
          <h2 className="text-lg md:text-2xl font-bold text-dark-text">🔄 Full Workflow with Commands</h2>
        </div>
        <div className="p-4 md:p-6">
          <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
            <code className="text-accent-secondary text-xs md:text-sm">
              # Step 1: Check changes<br/>
              $ git status<br/><br/>
              # Step 2: Add files to staging<br/>
              $ git add .<br/><br/>
              # Step 3: Commit changes<br/>
              $ git commit -m "Your message"<br/><br/>
              # Step 4: Push to remote<br/>
              $ git push origin main
            </code>
          </div>
        </div>
      </div>

      {/* Reverse Flow - Pulling Code */}
      <div className="bg-dark-card rounded-xl border border-dark-border overflow-hidden">
        <div className="border-b border-dark-border p-4 md:p-6">
          <h2 className="text-lg md:text-2xl font-bold text-dark-text">🔁 Reverse Flow (Pulling Code)</h2>
        </div>
        <div className="p-4 md:p-6">
          <p className="text-dark-textSecondary text-sm md:text-base mb-3">
            When you want the latest updates from remote:
          </p>
          <div className="bg-gray-900 rounded-lg p-3 overflow-x-auto mb-4">
            <code className="text-accent-secondary text-xs md:text-sm">$ git pull origin main</code>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
            <div className="bg-dark-bg rounded-lg p-2 px-4 text-center">
              <p className="text-dark-text text-sm">Remote Repository</p>
            </div>
            <ArrowRight className="text-accent-primary hidden md:block" size={20} />
            <ArrowRight className="text-accent-primary rotate-90 md:hidden" size={16} />
            <div className="bg-dark-bg rounded-lg p-2 px-4 text-center">
              <p className="text-dark-text text-sm">Local Repository</p>
            </div>
            <ArrowRight className="text-accent-primary hidden md:block" size={20} />
            <ArrowRight className="text-accent-primary rotate-90 md:hidden" size={16} />
            <div className="bg-dark-bg rounded-lg p-2 px-4 text-center">
              <p className="text-dark-text text-sm">Working Directory</p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-dark-card rounded-xl border border-dark-border overflow-hidden">
        <div className="border-b border-dark-border p-4 md:p-6">
          <h2 className="text-lg md:text-2xl font-bold text-dark-text">💡 Key Benefits of Git Workflow</h2>
        </div>
        <div className="p-4 md:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-center space-x-3 p-3 bg-dark-bg rounded-lg border border-dark-border">
                <benefit.icon className="text-accent-primary" size={20} />
                <div>
                  <h3 className="text-dark-text font-semibold text-sm">{benefit.title}</h3>
                  <p className="text-dark-textSecondary text-xs">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Simple Summary Table */}
      <div className="bg-dark-card rounded-xl border border-dark-border overflow-hidden">
        <div className="border-b border-dark-border p-4 md:p-6">
          <h2 className="text-lg md:text-2xl font-bold text-dark-text">🧠 Simple Summary</h2>
        </div>
        <div className="p-4 md:p-6 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-dark-border">
                <th className="text-left p-3 text-dark-text font-semibold text-sm md:text-base">Stage</th>
                <th className="text-left p-3 text-dark-text font-semibold text-sm md:text-base">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-dark-border">
                <td className="p-3 text-dark-textSecondary text-sm">Working Directory</td>
                <td className="p-3 text-dark-textSecondary text-sm">Write and edit code</td>
               </tr>
              <tr className="border-b border-dark-border">
                <td className="p-3 text-dark-textSecondary text-sm">Staging Area</td>
                <td className="p-3 text-dark-textSecondary text-sm">Select changes</td>
               </tr>
              <tr className="border-b border-dark-border">
                <td className="p-3 text-dark-textSecondary text-sm">Local Repository</td>
                <td className="p-3 text-dark-textSecondary text-sm">Save versions</td>
               </tr>
              <tr>
                <td className="p-3 text-dark-textSecondary text-sm">Remote Repository</td>
                <td className="p-3 text-dark-textSecondary text-sm">Share and store online</td>
               </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Key Takeaway */}
      <div className="bg-gradient-to-r from-accent-primary/5 to-accent-secondary/5 rounded-xl p-4 md:p-6 border border-accent-primary/20">
        <h3 className="text-base md:text-lg font-semibold text-dark-text mb-2 text-center">🎯 Key Takeaway</h3>
        <p className="text-dark-textSecondary text-sm md:text-base text-center">
          The Git workflow provides a structured way to manage code changes from your local machine to the cloud. 
          Understanding each stage helps you become a more efficient developer and enables seamless team collaboration!
        </p>
      </div>
    </div>
  )
}

export default GitWorkflow