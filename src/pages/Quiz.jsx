import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  HelpCircle, 
  Trophy, 
  Award, 
  CheckCircle, 
  XCircle,
  AlertCircle,
  ChevronRight,
  ChevronLeft,
  Flag,
  Clock
} from 'lucide-react'

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)

  const questions = [
    // Simple Questions (1-5)
    {
      id: 1,
      question: "What command is used to initialize a new Git repository?",
      options: ["git start", "git init", "git new", "git create"],
      correct: "git init",
      difficulty: "Easy",
      explanation: "git init creates a new .git directory and initializes version control."
    },
    {
      id: 2,
      question: "Which command shows the current state of your working directory?",
      options: ["git check", "git log", "git status", "git show"],
      correct: "git status",
      difficulty: "Easy",
      explanation: "git status shows modified, staged, and untracked files."
    },
    {
      id: 3,
      question: "What does 'git add' do?",
      options: [
        "Adds files to the remote repository",
        "Adds files to the staging area",
        "Adds files to the commit history",
        "Adds files to the working directory"
      ],
      correct: "Adds files to the staging area",
      difficulty: "Easy",
      explanation: "git add moves changes to the staging area, preparing them for commit."
    },
    {
      id: 4,
      question: "What is a 'commit' in Git?",
      options: [
        "A backup of your entire project",
        "A snapshot of staged changes",
        "A copy of your repository",
        "A branch pointer"
      ],
      correct: "A snapshot of staged changes",
      difficulty: "Easy",
      explanation: "A commit is a snapshot of your staged changes with a unique ID."
    },
    {
      id: 5,
      question: "What is GitHub primarily used for?",
      options: [
        "Running Git commands",
        "Hosting Git repositories online",
        "Creating Git software",
        "Storing local files"
      ],
      correct: "Hosting Git repositories online",
      difficulty: "Easy",
      explanation: "GitHub is a cloud platform for hosting and sharing Git repositories."
    },
    // Medium Questions (6-12)
    {
      id: 6,
      question: "What does 'git push' do?",
      options: [
        "Downloads changes from remote",
        "Uploads local commits to remote",
        "Creates a new branch",
        "Merges two branches"
      ],
      correct: "Uploads local commits to remote",
      difficulty: "Medium",
      explanation: "git push sends your committed changes to a remote repository."
    },
    {
      id: 7,
      question: "How do you create and switch to a new branch in one command?",
      options: [
        "git branch new",
        "git checkout new",
        "git checkout -b new",
        "git switch -c new"
      ],
      correct: "git checkout -b new",
      difficulty: "Medium",
      explanation: "git checkout -b creates and switches to a new branch simultaneously."
    },
    {
      id: 8,
      question: "What is a merge conflict?",
      options: [
        "When Git crashes",
        "When two branches have conflicting changes",
        "When you forget to commit",
        "When you push without pulling"
      ],
      correct: "When two branches have conflicting changes",
      difficulty: "Medium",
      explanation: "Merge conflicts occur when Git cannot automatically merge changes."
    },
    {
      id: 9,
      question: "Which command downloads changes from a remote repository and merges them?",
      options: ["git fetch", "git pull", "git clone", "git sync"],
      correct: "git pull",
      difficulty: "Medium",
      explanation: "git pull fetches and merges changes from the remote repository."
    },
    {
      id: 10,
      question: "What does the .gitignore file do?",
      options: [
        "Ignores all Git commands",
        "Specifies files Git should not track",
        "Deletes ignored files",
        "Creates backup of files"
      ],
      correct: "Specifies files Git should not track",
      difficulty: "Medium",
      explanation: ".gitignore tells Git which files or folders to ignore."
    },
    {
      id: 11,
      question: "What is a Pull Request (PR)?",
      options: [
        "A request to pull code from a repository",
        "A request to merge changes into another branch",
        "A request to delete a branch",
        "A request to create a new repository"
      ],
      correct: "A request to merge changes into another branch",
      difficulty: "Medium",
      explanation: "A Pull Request asks to review and merge changes into another branch."
    },
    {
      id: 12,
      question: "How do you view the commit history?",
      options: ["git history", "git log", "git show", "git list"],
      correct: "git log",
      difficulty: "Medium",
      explanation: "git log displays the commit history of the repository."
    },
    // Difficult Questions (13-20)
    {
      id: 13,
      question: "What does 'HEAD' represent in Git?",
      options: [
        "The first commit",
        "The current branch reference",
        "The remote repository",
        "The latest tag"
      ],
      correct: "The current branch reference",
      difficulty: "Hard",
      explanation: "HEAD points to the current branch reference and commit."
    },
    {
      id: 14,
      question: "What is the difference between 'git fetch' and 'git pull'?",
      options: [
        "No difference, they are the same",
        "fetch downloads but doesn't merge, pull downloads and merges",
        "fetch merges automatically, pull doesn't",
        "fetch only works for tags"
      ],
      correct: "fetch downloads but doesn't merge, pull downloads and merges",
      difficulty: "Hard",
      explanation: "git fetch only downloads changes, git pull downloads and merges them."
    },
    {
      id: 15,
      question: "How do you undo the last commit while keeping changes staged?",
      options: [
        "git reset --hard HEAD~1",
        "git reset --soft HEAD~1",
        "git revert HEAD",
        "git reset HEAD~1"
      ],
      correct: "git reset --soft HEAD~1",
      difficulty: "Hard",
      explanation: "git reset --soft moves HEAD back but keeps changes in staging."
    },
    {
      id: 16,
      question: "What is a 'detached HEAD' state?",
      options: [
        "When HEAD points to a commit instead of a branch",
        "When HEAD is missing",
        "When you have no commits",
        "When the repository is corrupted"
      ],
      correct: "When HEAD points to a commit instead of a branch",
      difficulty: "Hard",
      explanation: "Detached HEAD occurs when you checkout a specific commit instead of a branch."
    },
    {
      id: 17,
      question: "What does 'git rebase' do?",
      options: [
        "Merges branches",
        "Rewrites commit history",
        "Deletes commits",
        "Creates a new branch"
      ],
      correct: "Rewrites commit history",
      difficulty: "Hard",
      explanation: "git rebase rewrites commit history by moving commits to a new base."
    },
    {
      id: 18,
      question: "How do you squash multiple commits into one?",
      options: [
        "git merge --squash",
        "git rebase -i and use squash",
        "git commit --amend",
        "git reset --soft"
      ],
      correct: "git rebase -i and use squash",
      difficulty: "Hard",
      explanation: "Interactive rebase allows squashing multiple commits together."
    },
    {
      id: 19,
      question: "What is a 'bare repository'?",
      options: [
        "A repository with no files",
        "A repository without a working directory",
        "An empty repository",
        "A corrupted repository"
      ],
      correct: "A repository without a working directory",
      difficulty: "Hard",
      explanation: "Bare repositories have no working tree, used as central remotes."
    },
    {
      id: 20,
      question: "What is the purpose of 'git bisect'?",
      options: [
        "To split branches",
        "To find which commit introduced a bug",
        "To merge two commits",
        "To delete commits"
      ],
      correct: "To find which commit introduced a bug",
      difficulty: "Hard",
      explanation: "git bisect performs binary search to find the commit that introduced a bug."
    }
  ]

  const handleAnswer = (questionId, selectedOption, isCorrect) => {
    // Don't allow changing answer if already answered
    if (answers[questionId] !== undefined) return
    
    setAnswers(prev => ({ ...prev, [questionId]: { selected: selectedOption, isCorrect } }))
  }

  const handleSubmit = () => {
    const totalCorrect = Object.values(answers).filter(a => a.isCorrect).length
    setScore(totalCorrect)
    setSubmitted(true)
    setShowResult(true)
  }

  const handleReset = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setSubmitted(false)
    setShowResult(false)
    setScore(0)
  }

  const goToNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const goToPreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const currentQ = questions[currentQuestion]
  const hasAnswered = answers[currentQ.id] !== undefined
  const totalAnswered = Object.keys(answers).length
  const allAnswered = totalAnswered === questions.length

  // Result Screen
  if (showResult && submitted) {
    const percentage = (score / questions.length) * 100
    let performanceLevel = ''
    let emoji = ''
    
    if (percentage === 100) { performanceLevel = 'Perfect! You\'re a Git Master!'; emoji = '🏆' }
    else if (percentage >= 80) { performanceLevel = 'Excellent! Great knowledge!'; emoji = '🎉' }
    else if (percentage >= 60) { performanceLevel = 'Good job! Keep learning!'; emoji = '👍' }
    else if (percentage >= 40) { performanceLevel = 'Fair effort! Review the material.'; emoji = '📚' }
    else { performanceLevel = 'Need more practice. Keep studying!'; emoji = '💪' }

    return (
      <div className="w-full max-w-4xl mx-auto px-2 sm:px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-dark-card rounded-xl border border-dark-border overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-accent-primary to-accent-secondary p-4 md:p-6 text-center">
            <Trophy size={40} className="text-white mx-auto mb-2" />
            <h2 className="text-xl md:text-3xl font-bold text-white">Quiz Completed!</h2>
          </div>
          
          {/* Score Display */}
          <div className="p-4 md:p-6 text-center">
            <div className="inline-block bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 rounded-full p-6 md:p-8 mb-4">
              <div className="text-3xl md:text-5xl font-bold text-accent-primary">{score}</div>
              <div className="text-dark-textSecondary text-sm">out of {questions.length}</div>
            </div>
            <div className="w-full bg-dark-border rounded-full h-2 md:h-3 mb-4">
              <div 
                className="bg-gradient-to-r from-accent-primary to-accent-secondary h-2 md:h-3 rounded-full transition-all duration-1000"
                style={{ width: `${percentage}%` }}
              />
            </div>
            <div className="text-lg md:text-2xl font-bold text-dark-text mb-2">{emoji} {performanceLevel}</div>
            <p className="text-dark-textSecondary text-sm md:text-base">
              You answered {score} out of {questions.length} questions correctly
            </p>
            <p className="text-dark-textSecondary text-xs md:text-sm mt-2">
              Percentage: {percentage.toFixed(1)}%
            </p>
          </div>

          {/* Score Breakdown by Difficulty */}
          <div className="border-t border-dark-border p-4 md:p-6">
            <h3 className="text-base md:text-lg font-semibold text-dark-text mb-3">Score Breakdown</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-dark-bg rounded-lg p-3 text-center">
                <p className="text-green-500 font-bold text-xl md:text-2xl">
                  {questions.filter((q, i) => q.difficulty === 'Easy' && answers[q.id]?.isCorrect).length}
                </p>
                <p className="text-dark-textSecondary text-sm">Easy Questions</p>
                <p className="text-xs text-dark-textSecondary">out of {questions.filter(q => q.difficulty === 'Easy').length}</p>
              </div>
              <div className="bg-dark-bg rounded-lg p-3 text-center">
                <p className="text-yellow-500 font-bold text-xl md:text-2xl">
                  {questions.filter((q, i) => q.difficulty === 'Medium' && answers[q.id]?.isCorrect).length}
                </p>
                <p className="text-dark-textSecondary text-sm">Medium Questions</p>
                <p className="text-xs text-dark-textSecondary">out of {questions.filter(q => q.difficulty === 'Medium').length}</p>
              </div>
              <div className="bg-dark-bg rounded-lg p-3 text-center">
                <p className="text-red-500 font-bold text-xl md:text-2xl">
                  {questions.filter((q, i) => q.difficulty === 'Hard' && answers[q.id]?.isCorrect).length}
                </p>
                <p className="text-dark-textSecondary text-sm">Hard Questions</p>
                <p className="text-xs text-dark-textSecondary">out of {questions.filter(q => q.difficulty === 'Hard').length}</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="border-t border-dark-border p-4 md:p-6 flex justify-center">
            <button
              onClick={handleReset}
              className="px-6 py-2 md:px-8 md:py-3 bg-gradient-to-r from-accent-primary to-accent-secondary text-white rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Take Quiz Again
            </button>
          </div>
        </motion.div>
      </div>
    )
  }

  // Quiz Screen
  return (
    <div className="w-full max-w-4xl mx-auto px-2 sm:px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-dark-card rounded-xl border border-dark-border overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 p-4 md:p-6">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center space-x-2">
              <HelpCircle size={20} className="md:w-6 md:h-6 text-accent-primary" />
              <h2 className="text-lg md:text-2xl font-bold text-dark-text">Git & GitHub Quiz</h2>
            </div>
            <div className="flex items-center space-x-2">
              <Flag size={16} className="md:w-5 md:h-5 text-accent-primary" />
              <span className="text-dark-textSecondary text-sm">{totalAnswered}/{questions.length} Answered</span>
            </div>
          </div>
          <div className="w-full bg-dark-border rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-accent-primary to-accent-secondary h-2 rounded-full transition-all duration-300"
              style={{ width: `${(totalAnswered / questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question Area */}
        <div className="p-4 md:p-6">
          {/* Difficulty Badge */}
          <div className="mb-4">
            <span className={`inline-block px-2 py-1 rounded text-xs font-semibold
              ${currentQ.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400' : 
                currentQ.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' : 
                'bg-red-500/20 text-red-400'}`}>
              {currentQ.difficulty} Question
            </span>
          </div>

          {/* Question */}
          <h3 className="text-base md:text-xl font-semibold text-dark-text mb-4">
            {currentQ.id}. {currentQ.question}
          </h3>

          {/* Options */}
          <div className="space-y-2 md:space-y-3 mb-6">
            {currentQ.options.map((option, idx) => {
              const isSelected = answers[currentQ.id]?.selected === option
              const isCorrect = answers[currentQ.id]?.isCorrect
              const showFeedback = hasAnswered && isSelected
              
              return (
                <button
                  key={idx}
                  onClick={() => handleAnswer(currentQ.id, option, option === currentQ.correct)}
                  disabled={hasAnswered}
                  className={`w-full text-left p-3 md:p-4 rounded-lg border transition-all text-sm md:text-base
                    ${!hasAnswered ? 'border-dark-border hover:border-accent-primary hover:bg-dark-bg cursor-pointer' : ''}
                    ${showFeedback && isSelected && isCorrect ? 'border-green-500 bg-green-500/10' : ''}
                    ${showFeedback && isSelected && !isCorrect ? 'border-red-500 bg-red-500/10' : ''}
                    ${hasAnswered && !isSelected ? 'opacity-50' : ''}
                  `}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-dark-text">{option}</span>
                    {showFeedback && isSelected && isCorrect && <CheckCircle size={16} className="md:w-5 md:h-5 text-green-500" />}
                    {showFeedback && isSelected && !isCorrect && <XCircle size={16} className="md:w-5 md:h-5 text-red-500" />}
                  </div>
                </button>
              )
            })}
          </div>

          {/* Feedback after answering */}
          {hasAnswered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-3 md:p-4 rounded-lg mb-4 ${
                answers[currentQ.id].isCorrect 
                  ? 'bg-green-500/10 border border-green-500/20' 
                  : 'bg-red-500/10 border border-red-500/20'
              }`}
            >
              <div className="flex items-start space-x-2">
                {answers[currentQ.id].isCorrect ? (
                  <CheckCircle size={16} className="md:w-5 md:h-5 text-green-500 mt-0.5" />
                ) : (
                  <XCircle size={16} className="md:w-5 md:h-5 text-red-500 mt-0.5" />
                )}
                <div>
                  <p className={`font-semibold text-sm md:text-base ${answers[currentQ.id].isCorrect ? 'text-green-500' : 'text-red-500'}`}>
                    {answers[currentQ.id].isCorrect ? 'Correct!' : 'Incorrect!'}
                  </p>
                  <p className="text-dark-textSecondary text-xs md:text-sm mt-1">
                    {answers[currentQ.id].isCorrect 
                      ? currentQ.explanation 
                      : `The correct answer is: ${currentQ.correct}. ${currentQ.explanation}`}
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between gap-3">
            <button
              onClick={goToPreviousQuestion}
              disabled={currentQuestion === 0}
              className={`px-4 py-2 md:px-6 md:py-2 rounded-lg font-semibold transition-all flex items-center space-x-2 text-sm md:text-base
                ${currentQuestion === 0 
                  ? 'bg-dark-border text-dark-textSecondary cursor-not-allowed' 
                  : 'bg-dark-bg border border-dark-border text-dark-text hover:border-accent-primary'}`}
            >
              <ChevronLeft size={16} /> Previous
            </button>
            
            {currentQuestion < questions.length - 1 ? (
              <button
                onClick={goToNextQuestion}
                className="px-4 py-2 md:px-6 md:py-2 bg-dark-bg border border-dark-border text-dark-text rounded-lg font-semibold hover:border-accent-primary transition-all flex items-center space-x-2 text-sm md:text-base"
              >
                Next <ChevronRight size={16} />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!allAnswered}
                className={`px-4 py-2 md:px-6 md:py-2 rounded-lg font-semibold transition-all text-sm md:text-base
                  ${allAnswered 
                    ? 'bg-gradient-to-r from-accent-primary to-accent-secondary text-white hover:shadow-lg' 
                    : 'bg-dark-border text-dark-textSecondary cursor-not-allowed'}`}
              >
                Submit Quiz
              </button>
            )}
          </div>

          {/* Question Progress */}
          <div className="mt-4 text-center">
            <p className="text-dark-textSecondary text-xs md:text-sm">
              Question {currentQuestion + 1} of {questions.length}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Quiz