import NavBar from './NavBar'
import Sidebar from './Sidebar'

const AppShell = ({ children }) => {
  return (
    <div className="app-shell">
      <NavBar />
      <Sidebar />
      <main className="main-content">
        <div className="main-inner">{children}</div>
      </main>
    </div>
  )
}

export default AppShell


