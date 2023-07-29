import React, { useCallback } from "react"
import Quill from "quill"
import "quill/dist/quill.snow.css"
import "../assets/textEditor.css"

export default function TextEditor() {
  const wrapperRef = useCallback(wrapper => {
    const options = {
      theme: "snow",
      placeholder: "write your note here"
    }
    if (wrapper == null) return
    wrapper.innerHTML = ""
    const editor = document.createElement("div")
    wrapper.append(editor)
    new Quill(editor, options) 
  }, [])

  return (
    <div ref={wrapperRef}></div>
  )
}