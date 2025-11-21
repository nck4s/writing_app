import AppShell from '../components/AppShell'
import Card from '../components/Card'
import PrimaryButton from '../components/PrimaryButton'

const mockProjects = [
  { id: '1', name: 'Solaris Rewrite', description: 'Exploring memory, time, and AI empathy.', documents: 12 },
  { id: '2', name: 'Cybernetic Dreams', description: 'Neo-noir serial set in Tallinn.', documents: 8 },
  { id: '3', name: 'Short Story Ideas', description: 'Fragments and experiments.', documents: 21 },
  { id: '4', name: 'Worldbuilding Notes', description: 'Maps, timelines, and lore.', documents: 15 },
]

const DashboardPage = () => {
  return (
    <AppShell>
      <section style={{ maxWidth: 1040, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
          <div>
            <h1 style={{ margin: 0, fontSize: 32 }}>Welcome back!</h1>
            <p style={{ marginTop: 8, color: 'var(--text-secondary)' }}>
              Choose a project or create something new.
            </p>
          </div>
          <PrimaryButton>+ New Project</PrimaryButton>
        </div>

        <div className="dashboard-grid">
          {mockProjects.map((project) => (
            <Card key={project.id} className="project-card">
              <p style={{ fontSize: 18, fontWeight: 600, margin: '0 0 8px' }}>{project.name}</p>
              <p style={{ color: 'var(--text-secondary)', fontSize: 14, margin: '0 0 16px' }}>
                {project.description}
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: 13 }}>{project.documents} documents</p>
            </Card>
          ))}
        </div>
      </section>
    </AppShell>
  )
}

export default DashboardPage


