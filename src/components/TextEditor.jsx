// components/RichTextEditor.jsx
import React, { useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

// Toolbar without links or image embeds
const modules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["clean"], // Clear formatting button
  ],
};

// Formats white-list excluding link
const formats = ["header", "bold", "italic", "underline", "strike", "list"];

const TextEditor = ({
  name,
  defaultValue = "",
  placeholder = "Rédigez la description du projet...",
}) => {
  const [content, setContent] = useState(defaultValue);

  return (
    <div className="rich-text-editor">
      {/* Hidden input captures Quill HTML output for fetcher.Form */}
      <input type="hidden" name={name} value={content} />

      <ReactQuill
        theme="snow"
        value={content}
        onChange={setContent}
        modules={modules}
        formats={formats}
        placeholder={placeholder}
      />
    </div>
  );
};
export default TextEditor;
