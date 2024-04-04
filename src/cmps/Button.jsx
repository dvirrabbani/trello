export function Button({ children, onClick, className, variant = "text" }) {
  const dynamicClass = `button${className ? ` ${className}` : ""}${
    variant ? ` variant-${variant}` : ""
  }`

  return (
    <button className={dynamicClass} onClick={onClick}>
      {children}
    </button>
  )
}
