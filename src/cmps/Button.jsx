export function Button({ children, onClick, className }) {
  const dynamicClass = className ? `button ${className}` : "button"

  return (
    <button className={dynamicClass} onClick={onClick}>
      {children}
    </button>
  )
}
