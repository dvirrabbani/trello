export function Modal({ children, cb }) {
  function closeModal() {
    cb(null)
  }
  return (
    <div onClick={closeModal} className="modal-container">
      {children}
    </div>
  )
}
