import { motion } from 'framer-motion'
import { 
  GitMerge, 
  AlertTriangle, 
  CheckCircle, 
  Code2,
  FileCode,
  Users,
  AlertCircle,
  ArrowRight,
  Shield,
  Workflow
} from 'lucide-react'

const Merging = () => {
  const mergeTypes = [
    {
      type: 'Fast-Forward Merge',
      description: 'Happens when no new changes were made in main',
      before: 'main ─────●\n           \\\n            ●──● (feature)',
      after: 'main ─────●──●──●',
      note: '✔ Simple and clean merge',
      color: 'from-green-500 to-teal-500'
    },
    {
      type: '3-Way Merge',
      description: 'Happens when both branches have new changes',
      before: '      ●──● (feature)\n     /    \n●──●────● (main)',
      after: '      ●──●\n     /    \\\n●──●────●──● (merge commit)',
      note: '✔ Creates a special merge commit',
      color: 'from-blue-500 to-cyan-500'
    }
  ]

  const conflictSteps = [
    { step: 1, title: 'Open the file with conflict', icon: FileCode },
    { step: 2, title: 'Choose correct code', icon: Code2 },
    { step: 3, title: 'Remove conflict markers', icon: AlertCircle },
    { step: 4, title: 'Save the file', icon: CheckCircle },
    { step: 5, title: 'Stage and commit', icon: GitMerge }
  ]

  const benefits = [
    'Combines feature work into main project',
    'Keeps development structured',
    'Supports teamwork and collaboration'
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
            <GitMerge size={22} className="sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
          </div>
          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent text-center sm:text-left">
            Merging in Git
          </h1>
        </div>
        <p className="text-dark-textSecondary text-xs sm:text-sm md:text-lg leading-relaxed mt-2 sm:mt-3 md:mt-4 text-center sm:text-left">
          Merging is the process of combining changes from one branch into another. 
          Most commonly, you merge a feature branch into the main branch.
        </p>
      </motion.div>

      {/* What is Merging */}
      <div className="bg-dark-card rounded-xl border border-dark-border overflow-hidden">
        <div className="border-b border-dark-border p-3 sm:p-4 md:p-6">
          <h2 className="text-base sm:text-lg md:text-2xl font-bold text-dark-text">📌 What is Merging?</h2>
        </div>
        <div className="p-3 sm:p-4 md:p-6 space-y-3">
          <p className="text-dark-textSecondary text-sm sm:text-base">
            Merging is the process of combining changes from one branch into another.
          </p>
          <div className="bg-dark-bg rounded-lg p-3 sm:p-4">
            <p className="text-dark-text text-sm sm:text-base">
              Most commonly: <span className="text-accent-primary font-semibold">You merge a feature branch → main branch</span>
            </p>
            <p className="text-dark-textSecondary text-sm sm:text-base mt-2">
              👉 This brings all your new work into the main project.
            </p>
          </div>
        </div>
      </div>

      {/* Simple Example */}
      <div className="bg-dark-card rounded-xl border border-dark-border overflow-hidden">
        <div className="border-b border-dark-border p-3 sm:p-4 md:p-6">
          <h2 className="text-base sm:text-lg md:text-2xl font-bold text-dark-text">🎯 Simple Example</h2>
        </div>
        <div className="p-3 sm:p-4 md:p-6">
          <p className="text-dark-textSecondary text-sm sm:text-base mb-3">
            You worked on a login feature in a separate branch:
          </p>
          <div className="bg-gray-900 rounded-lg p-3 sm:p-4 overflow-x-auto">
            <pre className="text-accent-secondary text-[10px] sm:text-xs md:text-sm">
{`main ────────────────●───────────────
                      \\
                       ●──●──● (feature-login)`}
            </pre>
          </div>
          <p className="text-dark-textSecondary text-sm sm:text-base mt-3 mb-2">
            After merging:
          </p>
          <div className="bg-gray-900 rounded-lg p-3 sm:p-4 overflow-x-auto">
            <pre className="text-green-500 text-[10px] sm:text-xs md:text-sm">
{`main ────────────────●────●────●────●`}
            </pre>
          </div>
          <div className="bg-green-500/10 rounded-lg p-2 sm:p-3 mt-3 border border-green-500/20">
            <p className="text-green-500 text-sm sm:text-base">✔ Now the login feature is part of the main branch</p>
          </div>
        </div>
      </div>

      {/* Merge Command */}
      <div className="bg-dark-card rounded-xl border border-dark-border overflow-hidden">
        <div className="border-b border-dark-border p-3 sm:p-4 md:p-6">
          <h2 className="text-base sm:text-lg md:text-2xl font-bold text-dark-text">🛠️ Merge Command</h2>
        </div>
        <div className="p-3 sm:p-4 md:p-6">
          <div className="bg-gray-900 rounded-lg p-3 sm:p-4 overflow-x-auto mb-3">
            <code className="text-accent-secondary text-xs sm:text-sm">$ git checkout main</code><br />
            <code className="text-accent-secondary text-xs sm:text-sm">$ git merge feature-login</code>
          </div>
          <div className="space-y-2">
            <div className="flex items-start space-x-2">
              <span className="text-accent-primary text-sm">1️⃣</span>
              <p className="text-dark-textSecondary text-sm sm:text-base">Switch to the branch you want to merge into (main)</p>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-accent-primary text-sm">2️⃣</span>
              <p className="text-dark-textSecondary text-sm sm:text-base">Merge the other branch (feature-login)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Types of Merge */}
      <div className="bg-dark-card rounded-xl border border-dark-border overflow-hidden">
        <div className="border-b border-dark-border p-3 sm:p-4 md:p-6">
          <h2 className="text-base sm:text-lg md:text-2xl font-bold text-dark-text">🔄 Types of Merge (Basic)</h2>
        </div>
        <div className="p-3 sm:p-4 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mergeTypes.map((type, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${type.color} p-4 rounded-xl`}>
                <h3 className="text-white font-bold text-base sm:text-lg mb-2">{type.type}</h3>
                <p className="text-white/80 text-sm mb-3">{type.description}</p>
                <div className="bg-black/30 rounded-lg p-2 mb-2 overflow-x-auto">
                  <pre className="text-white text-[10px] sm:text-xs">{type.before}</pre>
                </div>
                <div className="bg-black/30 rounded-lg p-2 overflow-x-auto">
                  <pre className="text-white text-[10px] sm:text-xs">{type.after}</pre>
                </div>
                <p className="text-white/90 text-xs sm:text-sm mt-2">{type.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Merge Conflict Explanation */}
      <div className="bg-dark-card rounded-xl border border-dark-border overflow-hidden">
        <div className="border-b border-dark-border p-3 sm:p-4 md:p-6">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="text-red-500" size={20} />
            <h2 className="text-base sm:text-lg md:text-2xl font-bold text-dark-text">⚠️ What is a Merge Conflict?</h2>
          </div>
        </div>
        <div className="p-3 sm:p-4 md:p-6 space-y-3">
          <p className="text-dark-textSecondary text-sm sm:text-base">
            A merge conflict happens when:
          </p>
          <ul className="list-disc list-inside space-y-1 text-dark-textSecondary text-sm sm:text-base">
            <li>Two branches change the <span className="text-accent-primary font-semibold">same file</span></li>
            <li>And Git cannot decide which change is correct</li>
          </ul>
          
          <div className="bg-red-500/10 rounded-lg p-3 sm:p-4 border border-red-500/20 mt-3">
            <h3 className="text-red-500 font-semibold text-sm sm:text-base mb-2">💥 Conflict Example</h3>
            <div className="space-y-2">
              <p className="text-dark-textSecondary text-sm">Branch A: <code className="text-accent-secondary">color = blue</code></p>
              <p className="text-dark-textSecondary text-sm">Branch B: <code className="text-accent-secondary">color = red</code></p>
              <p className="text-yellow-500 text-sm mt-2">Git gets confused: 👉 Which one should be final?</p>
            </div>
          </div>
        </div>
      </div>

      {/* How Conflict Looks in Code */}
      <div className="bg-dark-card rounded-xl border border-dark-border overflow-hidden">
        <div className="border-b border-dark-border p-3 sm:p-4 md:p-6">
          <h2 className="text-base sm:text-lg md:text-2xl font-bold text-dark-text">📂 How Conflict Looks in Code</h2>
        </div>
        <div className="p-3 sm:p-4 md:p-6">
          <div className="bg-gray-900 rounded-lg p-3 sm:p-4 overflow-x-auto">
            <pre className="text-red-400 text-xs sm:text-sm">
{`<<<<<<< HEAD
color = blue
=======
color = red
>>>>>>> feature-branch`}
            </pre>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-3 text-center">
            <div className="bg-red-500/10 rounded p-2">
              <p className="text-red-400 text-xs">&lt;&lt;&lt; HEAD</p>
              <p className="text-dark-textSecondary text-xs">Your current branch</p>
            </div>
            <div className="bg-yellow-500/10 rounded p-2">
              <p className="text-yellow-400 text-xs">=======</p>
              <p className="text-dark-textSecondary text-xs">Separator</p>
            </div>
            <div className="bg-blue-500/10 rounded p-2">
              <p className="text-blue-400 text-xs">&gt;&gt;&gt;&gt;&gt;</p>
              <p className="text-dark-textSecondary text-xs">Incoming branch</p>
            </div>
          </div>
        </div>
      </div>

      {/* How to Resolve Conflict */}
      <div className="bg-dark-card rounded-xl border border-dark-border overflow-hidden">
        <div className="border-b border-dark-border p-3 sm:p-4 md:p-6">
          <h2 className="text-base sm:text-lg md:text-2xl font-bold text-dark-text">🧾 How to Resolve Conflict</h2>
        </div>
        <div className="p-3 sm:p-4 md:p-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 mb-4">
            {conflictSteps.map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-full flex items-center justify-center mx-auto mb-1 sm:mb-2">
                  <step.icon size={14} className="sm:w-4 sm:h-4 text-white" />
                </div>
                <p className="text-dark-text font-semibold text-[10px] sm:text-xs">{step.step}. {step.title}</p>
              </div>
            ))}
          </div>
          <div className="bg-gray-900 rounded-lg p-3 sm:p-4 overflow-x-auto">
            <code className="text-accent-secondary text-xs sm:text-sm">$ git add .</code><br />
            <code className="text-accent-secondary text-xs sm:text-sm">$ git commit -m "Resolved merge conflict"</code>
          </div>
        </div>
      </div>

      {/* Visual: Merge Conflict Flow */}
      <div className="bg-dark-card rounded-xl border border-dark-border overflow-hidden">
        <div className="border-b border-dark-border p-3 sm:p-4 md:p-6">
          <h2 className="text-base sm:text-lg md:text-2xl font-bold text-dark-text">📊 Visual: Merge Conflict Flow</h2>
        </div>
        <div className="p-3 sm:p-4 md:p-6">
          <div className="bg-gray-900 rounded-lg p-3 sm:p-4 overflow-x-auto mb-4">
            <pre className="text-accent-secondary text-[10px] sm:text-xs md:text-sm">
{`        ●──● (feature)
       /
●──●──● (main)
       \\
        ❌ conflict`}
            </pre>
          </div>
          <p className="text-dark-textSecondary text-sm sm:text-base mb-2">After resolving:</p>
          <div className="bg-gray-900 rounded-lg p-3 sm:p-4 overflow-x-auto">
            <pre className="text-green-500 text-[10px] sm:text-xs md:text-sm">
{`        ●──●
       /    \\
●──●──●────● (merged)`}
            </pre>
          </div>
        </div>
      </div>

      {/* Easy Way to Understand */}
      <div className="bg-dark-card rounded-xl border border-dark-border overflow-hidden">
        <div className="border-b border-dark-border p-3 sm:p-4 md:p-6">
          <h2 className="text-base sm:text-lg md:text-2xl font-bold text-dark-text">🧠 Easy Way to Understand</h2>
        </div>
        <div className="p-3 sm:p-4 md:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-dark-bg rounded-lg p-3 text-center border border-dark-border">
              <GitMerge className="text-accent-primary mx-auto mb-2" size={24} />
              <p className="text-dark-text font-semibold text-sm">Merge = Combine branches</p>
            </div>
            <div className="bg-dark-bg rounded-lg p-3 text-center border border-dark-border">
              <AlertTriangle className="text-red-500 mx-auto mb-2" size={24} />
              <p className="text-dark-text font-semibold text-sm">Conflict = Same code changed in both</p>
            </div>
            <div className="bg-dark-bg rounded-lg p-3 text-center border border-dark-border sm:col-span-2">
              <CheckCircle className="text-green-500 mx-auto mb-2" size={24} />
              <p className="text-dark-text font-semibold text-sm">Resolution = You decide the final code</p>
            </div>
          </div>
        </div>
      </div>

      {/* Real-World Use Case */}
      <div className="bg-gradient-to-r from-accent-primary/5 to-accent-secondary/5 rounded-xl p-3 sm:p-4 md:p-6 border border-accent-primary/20">
        <div className="flex items-center space-x-2 mb-3">
          <Users size={18} className="sm:w-5 sm:h-5 text-accent-primary" />
          <h3 className="text-sm sm:text-base md:text-lg font-semibold text-dark-text">💡 Real-World Use Case</h3>
        </div>
        <div className="space-y-2 text-dark-textSecondary text-xs sm:text-sm md:text-base">
          <p><span className="text-accent-primary font-semibold">Developer A</span> → working on UI</p>
          <p><span className="text-accent-primary font-semibold">Developer B</span> → working on same file</p>
          <p className="text-yellow-500">👉 When merging, conflict may happen</p>
          <p className="text-green-500">👉 They manually fix it and continue</p>
        </div>
      </div>

      {/* Key Benefits */}
      <div className="bg-dark-card rounded-xl border border-dark-border overflow-hidden">
        <div className="border-b border-dark-border p-3 sm:p-4 md:p-6">
          <h2 className="text-base sm:text-lg md:text-2xl font-bold text-dark-text">✅ Key Benefits of Merging</h2>
        </div>
        <div className="p-3 sm:p-4 md:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <CheckCircle size={16} className="text-green-500" />
                <span className="text-dark-textSecondary text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Takeaway */}
      <div className="bg-gradient-to-r from-accent-primary/5 to-accent-secondary/5 rounded-xl p-3 sm:p-4 md:p-6 border border-accent-primary/20">
        <h3 className="text-sm sm:text-base md:text-lg font-semibold text-dark-text mb-2 text-center">🎯 Key Takeaway</h3>
        <p className="text-dark-textSecondary text-xs sm:text-sm md:text-base text-center">
          Merging is essential for integrating work from different branches. While merge conflicts can be intimidating, 
          they're easy to resolve once you understand the process. Always communicate with your team and resolve 
          conflicts carefully to maintain code quality!
        </p>
      </div>
    </div>
  )
}

export default Merging