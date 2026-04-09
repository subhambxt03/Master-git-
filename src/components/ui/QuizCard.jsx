import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

const QuizCard = ({ question, options, correctAnswer, onAnswer }) => {
  const [selected, setSelected] = useState(null)
  const [isAnswered, setIsAnswered] = useState(false)

  const handleSelect = (option) => {
    if (isAnswered) return
    setSelected(option)
    setIsAnswered(true)
    onAnswer(option === correctAnswer)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-dark-card rounded-lg border border-dark-border p-4 sm:p-6"
    >
      <h3 className="text-dark-text font-semibold text-sm sm:text-base mb-4">{question}</h3>
      <div className="space-y-2 sm:space-y-3">
        {options.map((option, idx) => (
          <motion.button
            key={idx}
            whileHover={{ scale: 1.01 }}
            onClick={() => handleSelect(option)}
            className={`w-full text-left p-2 sm:p-3 rounded-lg border transition-all text-sm sm:text-base ${
              selected === option
                ? option === correctAnswer
                  ? 'border-green-500 bg-green-500/10'
                  : 'border-red-500 bg-red-500/10'
                : 'border-dark-border hover:border-accent-primary'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-dark-text">{option}</span>
              {selected === option && (
                option === correctAnswer ? 
                  <Check size={16} className="text-green-500" /> :
                  <X size={16} className="text-red-500" />
              )}
            </div>
          </motion.button>
        ))}
      </div>
      {isAnswered && selected !== correctAnswer && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-3 sm:mt-4 text-xs sm:text-sm text-red-400"
        >
          Incorrect! The correct answer is: {correctAnswer}
        </motion.p>
      )}
    </motion.div>
  )
}

export default QuizCard