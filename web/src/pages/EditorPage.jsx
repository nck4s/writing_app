import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import AppShell from '../components/AppShell'
import EditorTopBar from '../components/EditorTopBar'
import EditorArea from '../components/EditorArea'

const initialDraft = `Commander Hale watched the aurora bleed across the horizon.

“If the sky is falling,” she whispered, “let it fall on my terms.”`

const EditorPage = () => {
  const { documentId } = useParams()
  const [title, setTitle] = useState('Opening Scene')
  const [content, setContent] = useState(initialDraft)
  const [saveStatus, setSaveStatus] = useState('Saved')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSaveStatus('Saved')
    }, 1200)

    return () => clearTimeout(timeout)
  }, [content, title])

  const handleTitleChange = (value) => {
    setSaveStatus('Saving…')
    setTitle(value)
  }

  const handleContentChange = (value) => {
    setSaveStatus('Saving…')
    setContent(value)
  }

  const wordCount = useMemo(() => {
    return content.trim().length === 0 ? 0 : content.trim().split(/\s+/).length
  }, [content])

  return (
    <AppShell>
      <section className="editor-container">
        <EditorTopBar title={title} onTitleChange={handleTitleChange} wordCount={wordCount} saveStatus={saveStatus} />
        <EditorArea value={content} onChange={handleContentChange} />
        <div style={{ padding: '16px 32px', color: 'var(--text-muted)', fontSize: 13 }}>
          Currently editing document #{documentId}
        </div>
      </section>
    </AppShell>
  )
}

export default EditorPage

