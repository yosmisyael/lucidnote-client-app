import React, { useCallback, useEffect, useRef } from "react"
import Quill from "quill"
import "quill/dist/quill.snow.css"
import "../assets/textEditor.css"

export default function TextEditor({quillContent, setQuillContent}) {
  const wrapperRef = useRef(null)
  const quillRef = useRef(null)

  const handleMutation = useCallback(() => {
    if (quillRef.current) {
      const content = quillRef.current.getContents()
      setQuillContent(content)
    }
  }, [setQuillContent])

  useEffect(() => {
    const wrapper = wrapperRef.current
    if (!wrapper) return

    const options = {
      theme: "snow",
      placeholder: "write your note here",
    }

    wrapper.innerHTML = ""
    const editor = document.createElement("div")
    wrapper.append(editor)
    quillRef.current = new Quill(editor, options)

    const observer = new MutationObserver(handleMutation)
    observer.observe(editor, { childList: true, subtree: true })
    
    return () => {
      observer.disconnect()
    }
  }, [handleMutation])
  return (
    <div ref={wrapperRef}></div>
  )
}