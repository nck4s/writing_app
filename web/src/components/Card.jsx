const Card = ({ children, onClick, className = '' }) => {
  const clickable = typeof onClick === 'function'
  return (
    <div
      className={`card ${clickable ? 'clickable' : ''} ${className}`.trim()}
      role={clickable ? 'button' : undefined}
      tabIndex={clickable ? 0 : undefined}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default Card


