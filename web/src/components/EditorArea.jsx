const EditorArea = ({ value, onChange }) => {
  return (
    <div className="editor-area">
      <div className="editor-pad">
        <textarea
          className="editor-textarea"
          value={value}
          placeholder="Start writing your chapter..."
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  )
}

export default EditorArea

