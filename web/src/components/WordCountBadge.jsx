const WordCountBadge = ({ count = 0 }) => {
  const formatted = new Intl.NumberFormat('en-US').format(count)
  return <span className="word-count-badge">{formatted} words</span>
}

export default WordCountBadge

