import { motion } from 'framer-motion'
import { 
  Users, 
  GitPullRequest, 
  GitMerge,
  Upload,
  Download,
  CheckCircle,
  GitBranch,
  Eye,
  Code
} from 'lucide-react'

const Collaboration = () => {
  const workflowSteps = [
    { step: 1, title: 'Clone repository', icon: Download, description: 'Download project to your system' },
    { step: 2, title: 'Create new branch', icon: GitBranch, description: 'Work on your feature separately' },
    { step: 3, title: 'Make changes', icon: Code, description: 'Write code, fix bugs, add features' },
    { step: 4, title: 'Commit changes', icon: CheckCircle, description: 'Save your progress locally' },
    { step: 5, title: 'Push to remote', icon: Upload, description: 'Upload your branch to GitHub' },
    { step: 6, title: 'Create Pull Request', icon: GitPullRequest, description: 'Request to merge changes' },
    { step: 7, title: 'Code Review', icon: Eye, description: 'Team checks your code' },
    { step: 8, title: 'Merge into main', icon: GitMerge, description: 'Combine approved changes' }
  ]

  const keyConcepts = [
    {
      title: 'Push',
      icon: Upload,
      command: 'git push origin branch-name',
      meaning: 'Upload your local commits to remote repository',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Pull',
      icon: Download,
      command: 'git pull origin main',
      meaning: 'Get latest updates from remote repository',
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Pull Request (PR)',
      icon: GitPullRequest,
      command: 'Created on GitHub',
      meaning: 'Request to merge your branch into another branch',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Review',
      icon: Eye,
      command: 'Team checks code',
      meaning: 'Ensures clean code, no bugs, best practices',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Merge',
      icon: GitMerge,
      command: 'git merge feature-branch',
      meaning: 'Combine approved changes into main branch',
      color: 'from-red-500 to-pink-500'
    }
  ]

  const reviewChecks = [
    'Clean code standards',
    'No bugs or errors',
    'Follows best practices',
    'Proper documentation',
    'Test coverage'
  ]

  return (
    <div className="w-full">
 
      <div className="bg-gradient-to-r from-accent-primary/10 via-accent-secondary/10 to-accent-primary/10 rounded-xl p-4 md:p-8 border border-accent-primary/20 mb-4 md:mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
          <div className="p-3 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-xl w-fit mx-auto md:mx-0 mb-3 md:mb-0">
            <Users size={24} className="text-white" />
          </div>
          <h1 className="text-xl md:text-4xl font-bold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent text-center md:text-left">
            Collaboration in Git
          </h1>
        </div>
        <p className="text-dark-textSecondary text-sm md:text-lg leading-relaxed mt-3 md:mt-4 text-center md:text-left">
          Collaboration means multiple developers working together on the same project using Git and platforms like GitHub. 
          Git makes it easy for teams to work on different features, track changes, and combine code safely.
        </p>
      </div>

      
      <div className="bg-dark-card rounded-xl border border-dark-border overflow-hidden mb-4 md:mb-6">
        <div className="border-b border-dark-border p-3 md:p-6">
          <h2 className="text-base md:text-2xl font-bold text-dark-text">🔄 Team Workflow (Step-by-Step)</h2>
        </div>
        <div className="p-3 md:p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
            {workflowSteps.map((step, idx) => (
              <div key={idx} className="bg-dark-bg rounded-lg p-2 md:p-3 text-center border border-dark-border">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-full flex items-center justify-center mx-auto mb-1 md:mb-2">
                  <step.icon size={14} className="md:w-5 md:h-5 text-white" />
                </div>
                <div className="text-accent-primary font-bold text-[10px] md:text-sm mb-0.5 md:mb-1">{step.step}</div>
                <p className="text-dark-text font-semibold text-[9px] md:text-xs">{step.title}</p>
                <p className="text-dark-textSecondary text-[8px] md:text-[10px] mt-0.5 md:mt-1 hidden md:block">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    
      <div className="bg-dark-card rounded-xl border border-dark-border overflow-hidden mb-4 md:mb-6">
        <div className="border-b border-dark-border p-3 md:p-6">
          <h2 className="text-base md:text-2xl font-bold text-dark-text">🧾 Step-by-Step Explanation</h2>
        </div>
        <div className="p-3 md:p-6 space-y-3 md:space-y-4">
          {workflowSteps.map((step, idx) => (
            <div key={idx} className="bg-dark-bg rounded-lg p-3 md:p-4 border border-dark-border">
              <div className="flex items-center space-x-2 md:space-x-3 mb-2 md:mb-3">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs md:text-sm">{step.step}</span>
                </div>
                <h3 className="text-dark-text font-semibold text-sm md:text-base">{step.title}</h3>
              </div>
              <div className="ml-7 md:ml-11">
                {step.step === 1 && (
                  <div className="bg-gray-900 rounded-lg p-2 md:p-3 overflow-x-auto">
                    <code className="text-accent-secondary text-[10px] md:text-sm">$ git clone https://github.com/user/repo.git</code>
                    <p className="text-dark-textSecondary text-[10px] md:text-sm mt-1 md:mt-2">👉 Download project to your system</p>
                  </div>
                )}
                {step.step === 2 && (
                  <div className="bg-gray-900 rounded-lg p-2 md:p-3 overflow-x-auto">
                    <code className="text-accent-secondary text-[10px] md:text-sm">$ git checkout -b feature-name</code>
                    <p className="text-dark-textSecondary text-[10px] md:text-sm mt-1 md:mt-2">👉 Work on your feature separately</p>
                  </div>
                )}
                {step.step === 3 && (
                  <div className="space-y-1 md:space-y-2">
                    <p className="text-dark-textSecondary text-[10px] md:text-sm">• Write code</p>
                    <p className="text-dark-textSecondary text-[10px] md:text-sm">• Fix bugs</p>
                    <p className="text-dark-textSecondary text-[10px] md:text-sm">• Add features</p>
                  </div>
                )}
                {step.step === 4 && (
                  <div className="bg-gray-900 rounded-lg p-2 md:p-3 overflow-x-auto">
                    <code className="text-accent-secondary text-[10px] md:text-sm">$ git add .</code><br />
                    <code className="text-accent-secondary text-[10px] md:text-sm">$ git commit -m "Added new feature"</code>
                    <p className="text-dark-textSecondary text-[10px] md:text-sm mt-1 md:mt-2">👉 Save your progress locally</p>
                  </div>
                )}
                {step.step === 5 && (
                  <div className="bg-gray-900 rounded-lg p-2 md:p-3 overflow-x-auto">
                    <code className="text-accent-secondary text-[10px] md:text-sm">$ git push origin feature-name</code>
                    <p className="text-dark-textSecondary text-[10px] md:text-sm mt-1 md:mt-2">👉 Upload your branch to GitHub</p>
                  </div>
                )}
                {step.step === 6 && (
                  <div className="space-y-1 md:space-y-2">
                    <p className="text-dark-textSecondary text-[10px] md:text-sm">📌 Created on GitHub platform</p>
                    <p className="text-dark-textSecondary text-[10px] md:text-sm">🎯 Show changes to team and request review</p>
                  </div>
                )}
                {step.step === 7 && (
                  <div className="space-y-1 md:space-y-2">
                    <p className="text-dark-textSecondary text-[10px] md:text-sm">👀 Team members check your code:</p>
                    <p className="text-dark-textSecondary text-[10px] md:text-sm ml-2 md:ml-4">• Find bugs</p>
                    <p className="text-dark-textSecondary text-[10px] md:text-sm ml-2 md:ml-4">• Suggest improvements</p>
                    <p className="text-dark-textSecondary text-[10px] md:text-sm ml-2 md:ml-4">• Ensure code quality</p>
                    <p className="text-yellow-500 text-[10px] md:text-sm mt-1 md:mt-2">👉 You may need to make changes and push updates</p>
                  </div>
                )}
                {step.step === 8 && (
                  <div className="space-y-1 md:space-y-2">
                    <p className="text-dark-textSecondary text-[10px] md:text-sm">✅ After approval:</p>
                    <p className="text-dark-textSecondary text-[10px] md:text-sm ml-2 md:ml-4">• Your code is merged into main</p>
                    <p className="text-dark-textSecondary text-[10px] md:text-sm ml-2 md:ml-4">• Feature becomes part of the project</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

    
      <div className="bg-dark-card rounded-xl border border-dark-border overflow-hidden mb-4 md:mb-6">
        <div className="border-b border-dark-border p-3 md:p-6">
          <h2 className="text-base md:text-2xl font-bold text-dark-text">🔁 Key Concepts Explained</h2>
        </div>
        <div className="p-3 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {keyConcepts.map((concept, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${concept.color} p-3 md:p-4 rounded-xl`}>
                <div className="flex items-center space-x-2 mb-2 md:mb-3">
                  <concept.icon size={16} className="md:w-5 md:h-5 text-white" />
                  <h3 className="text-white font-bold text-sm md:text-lg">{concept.title}</h3>
                </div>
                <div className="bg-black/30 rounded-lg p-1.5 md:p-2 mb-2 md:mb-3 overflow-x-auto">
                  <code className="text-white text-[10px] md:text-sm">{concept.command}</code>
                </div>
                <p className="text-white/90 text-[10px] md:text-sm">💡 {concept.meaning}</p>
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className="bg-dark-card rounded-xl border border-dark-border overflow-hidden mb-4 md:mb-6">
        <div className="border-b border-dark-border p-3 md:p-6">
          <div className="flex items-center space-x-2">
            <GitPullRequest size={18} className="md:w-6 md:h-6 text-accent-primary" />
            <h2 className="text-base md:text-2xl font-bold text-dark-text">📌 What is Pull Request (PR)?</h2>
          </div>
        </div>
        <div className="p-3 md:p-6">
          <p className="text-dark-textSecondary text-sm md:text-base mb-3 md:mb-4">
            A Pull Request (PR) is a request to merge your changes into another branch (usually main).
          </p>
          <div className="bg-dark-bg rounded-lg p-3 md:p-4">
            <p className="text-accent-primary font-semibold text-sm md:text-base mb-2">👉 Created on platforms like GitHub</p>
            <p className="text-dark-textSecondary text-sm md:text-base mb-2">🎯 Purpose:</p>
            <ul className="list-disc list-inside space-y-1 text-dark-textSecondary text-sm md:text-base ml-2 md:ml-4">
              <li>Show your changes to team</li>
              <li>Request review before merging</li>
              <li>Discuss improvements</li>
            </ul>
          </div>
        </div>
      </div>

    
      <div className="bg-dark-card rounded-xl border border-dark-border overflow-hidden mb-4 md:mb-6">
        <div className="border-b border-dark-border p-3 md:p-6">
          <div className="flex items-center space-x-2">
            <Eye size={18} className="md:w-6 md:h-6 text-accent-primary" />
            <h2 className="text-base md:text-2xl font-bold text-dark-text">👀 Code Review</h2>
          </div>
        </div>
        <div className="p-3 md:p-6">
          <p className="text-dark-textSecondary text-sm md:text-base mb-3 md:mb-4">
            Team members check your code before merging to ensure quality and catch issues early.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <div className="bg-green-500/10 rounded-lg p-3 md:p-4 border border-green-500/20">
              <h3 className="text-green-500 font-semibold text-sm md:text-base mb-2 md:mb-3">✅ What reviewers check:</h3>
              <ul className="space-y-1 md:space-y-2">
                {reviewChecks.map((check, idx) => (
                  <li key={idx} className="text-dark-textSecondary text-[11px] md:text-sm flex items-center space-x-2">
                    <CheckCircle size={10} className="md:w-4 md:h-4 text-green-500" />
                    <span>{check}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-yellow-500/10 rounded-lg p-3 md:p-4 border border-yellow-500/20">
              <h3 className="text-yellow-500 font-semibold text-sm md:text-base mb-2 md:mb-3">🔄 After review:</h3>
              <ul className="space-y-1 md:space-y-2">
                <li className="text-dark-textSecondary text-[11px] md:text-sm">• Make requested changes</li>
                <li className="text-dark-textSecondary text-[11px] md:text-sm">• Push updates</li>
                <li className="text-dark-textSecondary text-[11px] md:text-sm">• Get final approval</li>
              </ul>
            </div>
          </div>
        </div>
      </div>


      <div className="bg-dark-card rounded-xl border border-dark-border overflow-hidden mb-4 md:mb-6">
        <div className="border-b border-dark-border p-3 md:p-6">
          <h2 className="text-base md:text-2xl font-bold text-dark-text">📊 Collaboration Flow Visual</h2>
        </div>
        <div className="p-3 md:p-6">
          <div className="bg-gray-900 rounded-lg p-3 md:p-6 overflow-x-auto">
            <pre className="text-accent-secondary text-[8px] md:text-xs font-mono leading-relaxed">
{`Developer A            GitHub              Developer B
    │                   │                   │
    │─── push code ────▶│                   │
    │                   │                   │
    │   Pull Request    │                   │
    │──────────────────▶│                   │
    │                   │                   │
    │                   │   review changes  │
    │                   │◀──────────────────│
    │                   │                   │
    │     merge code    │                   │
    │◀──────────────────│                   │`}
            </pre>
          </div>
        </div>
      </div>

      <div className="bg-dark-card rounded-xl border border-dark-border overflow-hidden mb-4 md:mb-6">
        <div className="border-b border-dark-border p-3 md:p-6">
          <h2 className="text-base md:text-2xl font-bold text-dark-text">🧠 Easy Way to Understand</h2>
        </div>
        <div className="p-3 md:p-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-3">
            <div className="bg-dark-bg rounded-lg p-2 md:p-3 text-center border border-dark-border">
              <Upload size={14} className="md:w-5 md:h-5 text-accent-primary mx-auto mb-1 md:mb-2" />
              <p className="text-dark-text font-semibold text-[10px] md:text-sm">Push</p>
              <p className="text-dark-textSecondary text-[8px] md:text-xs">Send code</p>
            </div>
            <div className="bg-dark-bg rounded-lg p-2 md:p-3 text-center border border-dark-border">
              <Download size={14} className="md:w-5 md:h-5 text-accent-primary mx-auto mb-1 md:mb-2" />
              <p className="text-dark-text font-semibold text-[10px] md:text-sm">Pull</p>
              <p className="text-dark-textSecondary text-[8px] md:text-xs">Get code</p>
            </div>
            <div className="bg-dark-bg rounded-lg p-2 md:p-3 text-center border border-dark-border">
              <GitPullRequest size={14} className="md:w-5 md:h-5 text-accent-primary mx-auto mb-1 md:mb-2" />
              <p className="text-dark-text font-semibold text-[10px] md:text-sm">PR</p>
              <p className="text-dark-textSecondary text-[8px] md:text-xs">Ask to merge</p>
            </div>
            <div className="bg-dark-bg rounded-lg p-2 md:p-3 text-center border border-dark-border">
              <Eye size={14} className="md:w-5 md:h-5 text-accent-primary mx-auto mb-1 md:mb-2" />
              <p className="text-dark-text font-semibold text-[10px] md:text-sm">Review</p>
              <p className="text-dark-textSecondary text-[8px] md:text-xs">Check code</p>
            </div>
            <div className="bg-dark-bg rounded-lg p-2 md:p-3 text-center border border-dark-border">
              <GitMerge size={14} className="md:w-5 md:h-5 text-accent-primary mx-auto mb-1 md:mb-2" />
              <p className="text-dark-text font-semibold text-[10px] md:text-sm">Merge</p>
              <p className="text-dark-textSecondary text-[8px] md:text-xs">Combine</p>
            </div>
          </div>
        </div>
      </div>

      
      <div className="bg-gradient-to-r from-accent-primary/5 to-accent-secondary/5 rounded-xl p-4 md:p-6 border border-accent-primary/20 mb-4 md:mb-6">
        <div className="flex items-center space-x-2 mb-2 md:mb-3">
          <Users size={16} className="md:w-5 md:h-5 text-accent-primary" />
          <h3 className="text-sm md:text-lg font-semibold text-dark-text">💡 Real-Life Example</h3>
        </div>
        <p className="text-dark-textSecondary text-sm md:text-base mb-2 md:mb-3">
          Imagine a team building a website:
        </p>
        <div className="space-y-1 md:space-y-2 text-dark-textSecondary text-sm md:text-base">
          <p><span className="text-accent-primary font-semibold">Developer A</span> → Login feature</p>
          <p><span className="text-accent-primary font-semibold">Developer B</span> → Dashboard</p>
          <p className="text-green-500 mt-1 md:mt-2">✔ Final project combines all features smoothly</p>
        </div>
      </div>

      <div className="bg-dark-card rounded-xl border border-dark-border overflow-hidden mb-4 md:mb-6">
        <div className="border-b border-dark-border p-3 md:p-6">
          <h2 className="text-base md:text-2xl font-bold text-dark-text">✅ Key Benefits of Collaboration</h2>
        </div>
        <div className="p-3 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
            <div className="flex items-center space-x-2">
              <CheckCircle size={12} className="md:w-4 md:h-4 text-green-500" />
              <span className="text-dark-textSecondary text-[11px] md:text-sm">Multiple developers work simultaneously</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle size={12} className="md:w-4 md:h-4 text-green-500" />
              <span className="text-dark-textSecondary text-[11px] md:text-sm">Code quality improves through reviews</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle size={12} className="md:w-4 md:h-4 text-green-500" />
              <span className="text-dark-textSecondary text-[11px] md:text-sm">Features are developed independently</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle size={12} className="md:w-4 md:h-4 text-green-500" />
              <span className="text-dark-textSecondary text-[11px] md:text-sm">Safe merging with PR process</span>
            </div>
          </div>
        </div>
      </div>

    
      <div className="bg-gradient-to-r from-accent-primary/5 to-accent-secondary/5 rounded-xl p-4 md:p-6 border border-accent-primary/20">
        <h3 className="text-sm md:text-lg font-semibold text-dark-text mb-2 md:mb-3 text-center">🎯 Key Takeaway</h3>
        <p className="text-dark-textSecondary text-sm md:text-base text-center">
          Effective collaboration is the heart of modern software development. Git and GitHub provide powerful tools 
          for teams to work together seamlessly. Master the workflow of branches, PRs, and reviews to become an 
          invaluable team member!
        </p>
      </div>
    </div>
  )
}

export default Collaboration