import { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import AppShell from '../components/AppShell'
import FolderColumn from '../components/FolderColumn'
import DocumentColumn from '../components/DocumentColumn'

const foldersMock = [
  { id: 'f1', name: 'Act I', documentCount: 5 },
  { id: 'f2', name: 'Act II', documentCount: 4 },
  { id: 'f3', name: 'Notes', documentCount: 7 },
]

const documentsMock = {
  f1: [
    { id: 'd1', title: 'Opening Scene', wordCount: 2300, updated: '2h ago' },
    { id: 'd2', title: 'Inciting Event', wordCount: 4100, updated: 'Yesterday' },
  ],
  f2: [
    { id: 'd3', title: 'Midpoint Twist', wordCount: 3200, updated: '3d ago' },
    { id: 'd4', title: 'Climax Setup', wordCount: 2800, updated: '1w ago' },
  ],
  f3: [
    { id: 'd5', title: 'Character Notes', wordCount: 1900, updated: '4h ago' },
    { id: 'd6', title: 'World Lore', wordCount: 5400, updated: '6h ago' },
  ],
}

const ProjectViewPage = () => {
  const { projectId } = useParams()
  const [selectedFolderId, setSelectedFolderId] = useState(foldersMock[0].id)
  const [selectedDocumentId, setSelectedDocumentId] = useState(null)

  const currentDocuments = useMemo(() => documentsMock[selectedFolderId] ?? [], [selectedFolderId])
  const currentFolder = useMemo(
    () => foldersMock.find((folder) => folder.id === selectedFolderId),
    [selectedFolderId],
  )

  return (
    <AppShell>
      <div style={{ display: 'flex' }}>
        <FolderColumn folders={foldersMock} selectedFolderId={selectedFolderId} onSelectFolder={setSelectedFolderId} />
        <DocumentColumn
          documents={currentDocuments}
          selectedDocumentId={selectedDocumentId}
          onSelectDocument={setSelectedDocumentId}
          currentFolder={currentFolder}
        />
        <div style={{ flex: 1, padding: 32 }}>
          <h2 style={{ marginTop: 0 }}>Project {projectId}</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: 480 }}>
            Select a folder and a document to start editing. Later this area will show project-level context.
          </p>
        </div>
      </div>
    </AppShell>
  )
}

export default ProjectViewPage

