import { useEffect } from "react"

export function useClickedOutside(elRef, onClickOutside) {
  useEffect(() => {
    function onMouseDown(event) {
      if (elRef.current && !elRef.current.contains(event.target)) {
        onClickOutside()
      }
    }

    document.addEventListener("mousedown", onMouseDown)

    return () => {
      document.removeEventListener("mousedown", onMouseDown)
    }
  })
}
