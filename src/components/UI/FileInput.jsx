import "./css/FileInput.css";

const FileInput = (props) => {
  return (
    <div className="file-input">
      <label for={props.id}>Select File(s)</label>
      <input type="file" id={props.id} hidden multiple/>
    </div>
  )
}

export default FileInput;