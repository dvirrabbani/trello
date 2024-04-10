export function ProfileImg({ imgUrl, size }) {
  return (
    <img
      src={imgUrl}
      className={`profile-img${size ? ` profile-img-size-${size}` : ""}`}
    />
  )
}
