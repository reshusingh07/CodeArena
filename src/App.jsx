import { css } from '@emotion/react';
import { Box, Heading } from "@chakra-ui/react";
import CodeEditor from "./components/CodeEditor";

const customStyles = css`
  .__className_a64ecd {
    font-family: __Inter_a64ecd, __Inter_Fallback_a64ecd;
    font-style: normal;
  }
  body {
    color: rgb(var(--foreground-rgb));
    background: linear-gradient(to bottom, transparent, rgb(43 34 34)) rgb(var(--background-start-rgb));
  }
`;



function App() {
  return (
    <Box minH="100vh" bg="#000" color="gray.500" px={6} py={8}
     css ={customStyles}>
      <Heading as="h1" mb={6} size="lg">
        CODEARENA
      </Heading>
      <CodeEditor />
    </Box>
  );
}

export default App;
