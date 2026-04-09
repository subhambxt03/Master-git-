import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Layout from './components/layout/Layout'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import ForgotPassword from './components/auth/ForgotPassword'
import Introduction from './pages/Introduction'
import GitBasics from './pages/GitBasics'
import GitHub from './pages/GitHub'
import GitVsGitHub from './pages/GitVsGitHub'
import GitWorkflow from './pages/GitWorkflow'
import GitCommands from './pages/GitCommands'
import Branching from './pages/Branching'
import Merging from './pages/Merging'
import Collaboration from './pages/Collaboration'
import GitIgnore from './pages/GitIgnore'
import UndoRecovery from './pages/UndoRecovery'
import Quiz from './pages/Quiz'

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/introduction" replace />} />
            <Route path="introduction" element={<Introduction />} />
            <Route path="git-basics" element={<GitBasics />} />
            <Route path="github" element={<GitHub />} />
            <Route path="git-vs-github" element={<GitVsGitHub />} />
            <Route path="git-workflow" element={<GitWorkflow />} />
            <Route path="git-commands" element={<GitCommands />} />
            <Route path="branching" element={<Branching />} />
            <Route path="merging" element={<Merging />} />
            <Route path="collaboration" element={<Collaboration />} />
            <Route path="gitignore" element={<GitIgnore />} />
            <Route path="undo-recovery" element={<UndoRecovery />} />
            <Route path="quiz" element={<Quiz />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App