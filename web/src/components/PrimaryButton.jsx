const PrimaryButton = ({ children, className = '', ...props }) => {
  return (
    <button className={`primary-button ${className}`.trim()} {...props}>
      {children}
    </button>
  )
}

export default PrimaryButton


