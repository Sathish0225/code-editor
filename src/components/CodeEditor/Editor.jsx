import React from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/neat.css';
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/mode/xml/xml.js";
import "codemirror/mode/javascript/javascript.js";
import "codemirror/mode/css/css.js";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/matchtags";
import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/edit/matchbrackets";

const Editor = (props) => {
  let mode = props.language;
  return (
    <>
      <CodeMirror
        key={mode}
        value={props.value}
        options={{
          mode: mode,
          theme: "material",
          lineNumbers: true,
          scrollbarStyle: "null",
          lineWrapping: true,
          autoCloseTags: true,
          matchTags: true,
          autoCloseBrackets: true,
          matchBrackets: true,
        }}
        onBeforeChange={(editor, data, value) => {
          props.onChange(value);
        }}
      />
    </>
  )
}

export default Editor
