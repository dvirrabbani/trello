export function Button({
  children,
  onClick,
  className,
  variant = "text",
  shape = "regular",
}) {
  const dynamicClass = `button${className ? ` ${className}` : ""}${
    variant ? ` variant-${variant}` : ""
  }${variant ? ` shape-${shape}` : ""}`

  return (
    <button className={dynamicClass} onClick={onClick}>
      {children}
    </button>
  )
}
