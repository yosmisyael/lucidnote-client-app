import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TextEditor = () => {
  return (
    <ReactQuill theme='snow' placeholder='write note here' style={{ width: '100%', height: '80%'}}/> 
  )
}
 
export default TextEditor;