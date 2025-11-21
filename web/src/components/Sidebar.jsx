import { useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'

const mockProjects = [
  { id: '1', name: 'Solaris Rewrite', documents: 12 },
  { id: '2', name: 'Cybernetic Dreams', documents: 8 },
  { id: '3', name: 'Short Story Ideas', documents: 21 },
]

const Sidebar = () => {
  const location = useLocation()

  const activeProjectId = useMemo(() => {
    if (location.pathname.startsWith('/projects/')) {
      return location.pathname.split('/')[2]
    }
    if (location.pathname.startsWith('/documents/')) {
      return '1'
    }
    return null
  }, [location.pathname])

  return (
    <aside className="sidebar">
      <div>
        <p className="sidebar-label">Projects</p>
        <div className="sidebar-list">
          {mockProjects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className={`sidebar-item ${activeProjectId === project.id ? 'active' : ''}`}
            >
              <span>{project.name}</span>
              <span className="badge">{project.documents}</span>
            </Link>
          ))}
        </div>
      </div>
      <div className="sidebar-footer">
        <button className="primary-button" style={{ width: '100%' }}>
          + New Project
        </button>
      </div>
    </aside>
  )
}

export default Sidebar


