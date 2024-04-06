export function Modal({ children, cb }) {
  return (
    <div onClick={() => cb(null)} className="modal-container">
      {children}
    </div>
  )
}
