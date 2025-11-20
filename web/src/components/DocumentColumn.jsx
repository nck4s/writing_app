import { useNavigate } from 'react-router-dom'
import WordCountBadge from './WordCountBadge'

const DocumentColumn = ({ documents, selectedDocumentId, onSelectDocument, currentFolder }) => {
  const navigate = useNavigate()

  const handleOpen = (docId) => {
    onSelectDocument?.(docId)
    navigate(`/documents/${docId}`)
  }

  return (
    <div className="column-panel" style={{ borderRight: '1px solid var(--border-subtle)' }}>
      <div style={{ marginBottom: 8 }}>
        <p className="column-header" style={{ marginBottom: 4 }}>
          Documents
        </p>
        {currentFolder && (
          <p style={{ color: 'var(--text-muted)', fontSize: 12 }}>in {currentFolder.name}</p>
        )}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {documents.map((doc) => (
          <div
            key={doc.id}
            className={`list-item ${doc.id === selectedDocumentId ? 'active' : ''}`}
            onClick={() => handleOpen(doc.id)}
          >
            <div>
              <p style={{ margin: 0, fontSize: 15 }}>{doc.title}</p>
              <p style={{ margin: 0, fontSize: 12, color: 'var(--text-muted)' }}>
                {doc.wordCount.toLocaleString()} words · Updated {doc.updated}
              </p>
            </div>
            <WordCountBadge count={doc.wordCount} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default DocumentColumn

