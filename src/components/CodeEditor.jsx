import { Box, HStack } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import { useState, useRef } from "react";
import LanguageSelector from "./LanguageSelector";
import Output from "./Output";

// Placeholder for CODE_SNIPPETS object
const CODE_SNIPPETS = {
  javascript: `
  // JavaScript code snippet
  console.log("Hello, " + "Reshu"  + "!");\n`,
  typescript: "// TypeScript code snippet",
  python: "# Python code snippet",
  java: "// Java code snippet",
  csharp: "// C# code snippet",
  php: "// PHP code snippet",
  // Cpp: "//C++ code snippet",
};

const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  return (
    <Box>
      <HStack spacing={4}>
        <Box w="50%">
          <LanguageSelector language={language} onSelect={onSelect} />
          <Editor
            options={{
              minimap: {
                enabled: false,
              },
            }}
            height="75vh"
            border="10px solid red"
            theme="vs-dark"
            language={language}
            defaultValue={CODE_SNIPPETS[language]}
            onMount={onMount}
            value={value}
            onChange={(value) => setValue(value)}
          />
        </Box>
        <Output editorRef={editorRef} language={language} />
      </HStack>
    </Box>
  );
};

export default CodeEditor;
