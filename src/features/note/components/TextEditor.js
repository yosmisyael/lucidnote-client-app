import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "../assets/textEditor.css"

export default function TextEditor({ quillContent, setQuillContent }) {
  return <ReactQuill theme='snow' value={quillContent} onChange={setQuillContent}/>
}