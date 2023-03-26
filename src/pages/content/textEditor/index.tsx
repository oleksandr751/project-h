import React, { useState } from "react";
import { useQuill } from "react-quilljs";
import "react-quill/dist/quill.snow.css";
import { Box } from "@mui/material";
import ReactQuill from "react-quill";

const TextEditor = () => {
  const { quill, quillRef } = useQuill();
  const [value, setValue] = useState("");

  const modules = {
    toolbar: {
      handlers: {},
      container: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ font: [] }],
        [{ size: [] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" },
        ],
        ["link", "image", "video"],
      ],
    },
  };

  React.useEffect(() => {
    if (quill) {
      quill.on("text-change", () => {
        console.log(quillRef.current.firstChild.innerHTML);
        setValue(quillRef.current.firstChild.innerHTML);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quill]);
  console.log(value, "value");

  return (
    <Box>
      <Box>
        {/* <Box ref={quillRef} /> */}
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          modules={modules}
          style={{
            width: 600,
            height: 400,
          }}
        />
      </Box>
    </Box>
  );
};

export default TextEditor;
