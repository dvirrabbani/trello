import { useRef, useState } from "react"
import { uploadService } from "../../services/upload.service"
import { Loader } from "../shared/Loader"
import { Button } from "../Button"
import SvgIcon from "../SvgIcon"

export function BtnImgUploader({ title, onUploaded = null }) {
  const [isUploading, setIsUploading] = useState(false)
  const inputFileRef = useRef(null)

  function onClick() {
    inputFileRef.current.click()
  }

  async function uploadImg(ev) {
    setIsUploading(true)
    const { secure_url } = await uploadService.uploadImg(ev)
    setIsUploading(false)
    onUploaded && onUploaded(secure_url)
  }

  return (
    <div className="btn-img-uploader bg-option">
      {isUploading && <Loader />}
      {!isUploading && (
        <>
          <Button
            onClick={onClick}
            className={
              "img-bg flex align-center justify-center variant-contained"
            }
          >
            {title === "" ? <SvgIcon iconName="plus" size={"md"} /> : title}
          </Button>
          <input
            ref={inputFileRef}
            type="file"
            onChange={uploadImg}
            accept="img/*"
            id="imgUpload"
          />
        </>
      )}
    </div>
  )
}
