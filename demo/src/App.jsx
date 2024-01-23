// App.jsx
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS styles
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { MdContentCopy } from 'react-icons/md';
import { HoverButtonDiagonal } from "@devbug/react-hover-button";

function App() {
  const [isCopied, setIsCopied] = useState(false);

  const codeSnippet = `npm i @devbug/react-hover-button`;
  const example1 = `  <HoverButtonDiagonal
  width={200} 
  height={50} 
  color="#333"
  >
  Hover me!
  </HoverButtonDiagonal>`;
  const example2 = `  <HoverButtonDiagonal
  width={200} 
  height={50} 
  color="#333"
  maskColor="green"
  >
  Hover me!
  </HoverButtonDiagonal>`;
  const example3 = `  <HoverButtonDiagonal
  width="12em"
  height="2.5em"
  maskColor="black"
  background="white"
  >
  Hover me!
  </HoverButtonDiagonal>`;

  const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <div className="bg-gray-200 min-h-screen p-5">
      
      <h1 className="text-center mb-4 text-4xl">React Hover Button</h1>
      <div className="flex gap-5 items-center justify-start">
        <h2 className="text-2xl mb-2">Install: </h2>
        <pre className="bg-gray-100 p-3 rounded">{codeSnippet}</pre>
        <CopyToClipboard
          text={codeSnippet}
          onCopy={onCopyText}
          className="cursor-pointer inline-block mt-2 bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          <span>
            {isCopied ? 'Copied!' : <MdContentCopy className="mr-1" />}
          </span>
        </CopyToClipboard>
      </div>
      <div className='flex gap-5 justify-center'>
        <div className='mt-10 flex flex-col gap-5 items-center justify-center'>
          <pre className="bg-gray-100 p-3 rounded">{example1}</pre>
          <HoverButtonDiagonal
            width={200} 
            height={50} 
            color="#333"
          >
          Hover me!
          </HoverButtonDiagonal>
        </div>
        <div className='mt-10 flex flex-col gap-5 items-center justify-center'>
          <pre className="bg-gray-100 p-3 rounded">{example2}</pre>
          <HoverButtonDiagonal
            width={200} 
            height={50} 
            color="#333"
            maskColor="green"
            
          >
          Hover me!
          </HoverButtonDiagonal>
        </div>
        <div className='mt-10 flex flex-col gap-5 items-center justify-center'>
          <pre className="bg-gray-100 p-3 rounded">{example3}</pre>
          <HoverButtonDiagonal
            width="12em"
            height="2.5em"
            maskColor="black"
            background="white"
            
          >
          Hover me!
          </HoverButtonDiagonal>
        </div>
      </div>
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-center">
        Copyright &copy; Cristian Encalada 2024. MIT Licensed.
      </div>
    </div>
  );
}

export default App;
