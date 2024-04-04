export function TaskDetailsDescription({ fields, handleChange }) {
  return (
    <section className="task-description-container">
      <h3 className="task-description-title flex">
        <SvgIcon iconName="description" /> Description
      </h3>
      {!task.description && (
        <Button onClick={onShowDescriptionForm}>
          Add a more details description...{" "}
        </Button>
      )}
      <input
        name="description"
        onChange={handleChange}
        value={fields.description}
      />

      <button onClick={onAddDescription}>Save</button>
    </section>
  )
}
