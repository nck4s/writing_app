import WordCountBadge from './WordCountBadge'

const EditorTopBar = ({ title, onTitleChange, wordCount, saveStatus }) => {
  return (
    <div className="editor-top-bar">
      <input
        className="editor-title-input"
        value={title}
        placeholder="Untitled document"
        onChange={(e) => onTitleChange(e.target.value)}
      />
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <WordCountBadge count={wordCount} />
        <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>{saveStatus}</span>
      </div>
    </div>
  )
}

export default EditorTopBar


