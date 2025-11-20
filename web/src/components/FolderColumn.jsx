const FolderColumn = ({ folders, selectedFolderId, onSelectFolder }) => {
  return (
    <div className="column-panel">
      <p className="column-header">Folders</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {folders.map((folder) => (
          <div
            key={folder.id}
            className={`list-item ${folder.id === selectedFolderId ? 'active' : ''}`}
            onClick={() => onSelectFolder(folder.id)}
          >
            <span style={{ fontSize: 14, fontWeight: 500 }}>{folder.name}</span>
            <span className="badge">{folder.documentCount}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FolderColumn

