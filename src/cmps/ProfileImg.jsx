import { useState } from "react"

export function ProfileImg({ member, size }) {
  const [imgError, setImgError] = useState(false)

  const getInitial = (fullName) => {
    const names = fullName.split(" ")
    return names.map((name) => name.charAt(0).toUpperCase()).join("")
  }

  return (
    <div className={`profile-img${size ? ` profile-img-size-${size}` : ""}`}>
      {imgError ? (
        <div className="initial">
          <span>{getInitial(member.fullName)}</span>
        </div>
      ) : (
        <img
          src={member.imgUrl}
          alt={member.fullName}
          onError={() => setImgError(true)}
        />
      )}
    </div>
  )
}
