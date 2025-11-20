const NavBar = () => {
  return (
    <header className="nav-bar">
      <div className="nav-left">
        <span className="nav-brand">WritingApp</span>
      </div>
      <div className="nav-actions">
        <button
          className="icon-button"
          aria-label="Settings"
          style={{
            width: 36,
            height: 36,
            borderRadius: 10,
            border: '1px solid var(--border-subtle)',
            background: 'var(--bg-surface)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-secondary)',
            cursor: 'pointer',
          }}
        >
          ⋮
        </button>
        <div className="avatar" aria-label="User avatar" />
      </div>
    </header>
  )
}

export default NavBar

