import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage'
import ProjectViewPage from './pages/ProjectViewPage'
import EditorPage from './pages/EditorPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/projects/:projectId" element={<ProjectViewPage />} />
        <Route path="/documents/:documentId" element={<EditorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
