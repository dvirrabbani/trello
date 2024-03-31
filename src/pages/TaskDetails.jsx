import { useEffect, useRef } from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom"

export function TaskDetails() {
  const ref = useRef()
  const params = useParams()

  useEffect(() => {
    ref.current?.showModal()
  }, [])

  return (
    <dialog ref={ref}>
      <Link to={`/board/${params.boardId}`}>Close</Link>
    </dialog>
  )
}
