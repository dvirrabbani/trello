import { useState } from "react"
import dayjs from "dayjs"
import { Button } from "../Button"
import { useForm } from "../../customHooks/useForm"

export function TaskDetailsComments({
  comments,
  boardMembers,
  onRemoveComment,
  onAddComment,
  onUpdateComment,
}) {
  const [isEditNewCommentOpen, setIsEditNewCommentOpen] = useState(false)
  const [selectedEditCommentId, setSelectedEditCommentId] = useState(null)

  const [fields, setFields, handleChange, resetForm] = useForm({
    txt: "",
  })

  function onSaveNewComment() {
    onAddComment({ txt: fields.txt }, comments || [])
    setIsEditNewCommentOpen(() => false)
    resetForm()
  }

  function onSaveSelectedComment(comment) {
    onUpdateComment({ ...comment, txt: fields.txt }, comments)
    setSelectedEditCommentId(() => false)
    resetForm()
  }

  function onOpenEditNewComment() {
    setIsEditNewCommentOpen(() => true)
    setSelectedEditCommentId(() => null)
  }

  function onOpenEditSelectedComment(comment) {
    setIsEditNewCommentOpen(() => false)
    setSelectedEditCommentId(() => comment.id)
    setFields((prevFields) => ({ ...prevFields, txt: comment.txt }))
  }

  return (
    <div className="task-details-comments">
      <ul className="comments-list clean-list">
        {/* display edit new comment if not edit selected comment is already displayed  */}

        <div className="comment-item">
          <div className="aside">
            <Button shape={"circle"}>
              {/* TODO replace with the current loggedIn user  */}

              <img
                src={
                  "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                }
              />
            </Button>
          </div>
          {isEditNewCommentOpen ? (
            <div className="edit-comment">
              {/* Submit new comment */}
              <input
                name="txt"
                onChange={handleChange}
                value={fields.txt || ""}
              />
              <div className="actions">
                <Button onClick={onSaveNewComment}>Save</Button>
                <Button onClick={() => setIsEditNewCommentOpen(() => false)}>
                  Cancel
                </Button>
              </div>
            </div>
          ) : (
            <div className="comment-body" onClick={onOpenEditNewComment}>
              <div className="comment-txt">Write a comment...</div>
            </div>
          )}
        </div>

        {comments?.map((comment) => (
          <li key={comment.id} className="comment-item">
            <div className="aside">
              <Button shape={"circle"}>
                <img src={comment.byMember.imgUrl} />
              </Button>
            </div>
            {selectedEditCommentId === comment.id ? (
              <div className="edit-comment">
                {/* edit selected comment */}
                <input name="txt" value={fields.txt} onChange={handleChange} />
                <div className="actions">
                  <Button
                    disabled={!fields.txt}
                    onClick={() => onSaveSelectedComment(comment)}
                  >
                    Save
                  </Button>
                  <Button onClick={() => setSelectedEditCommentId(() => null)}>
                    Cancel
                  </Button>
                </div>
              </div>
            ) : (
              <div className="comment-body">
                <div className="comment-header">
                  <span className="member-name">
                    {
                      boardMembers.find(
                        (boardMember) => boardMember.id === comment.byMember.id
                      ).fullName
                    }
                  </span>
                  <span className="comment-date">
                    {dayjs(comment.byMember.createdAt).format(
                      "MMM D YYYY [at] h:mm A"
                    )}
                  </span>
                </div>
                <p className="comment-txt">{comment.txt}</p>
                <div className="comment-actions">
                  <Button
                    variant="link"
                    onClick={() => onRemoveComment(comment.id, comments)}
                  >
                    Delete
                  </Button>
                  <Button
                    variant="link"
                    onClick={() => onOpenEditSelectedComment(comment)}
                  >
                    Edit
                  </Button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
