import React, { useEffect } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import { useRef } from 'react';

interface props{
  aiOutput:string;
}

const OutputSection = ({aiOutput}:props) => {
  const editorRef:any=useRef(0);

  useEffect(()=>{
    const editorinstance=editorRef.current.getInstance();
    editorinstance.setMarkdown(aiOutput);
  },[aiOutput])

  return (
    <div className='bg-white shadow-lg border rounded-lg'>
      <div className='flex justify-between items-center p-5'>
        <h2 className='font-medium text-lg'>Your Result</h2>
        <Button className='flex gap-2'><Copy className='w-4 h-4'/>Copy</Button>
      </div>
      <Editor
      ref={editorRef}
        initialValue="Your result will appear here"
        initialEditType="wysiwyg"
        height="600px"
        useCommandShortcut={true}
      />
    </div>
  )
}

export default OutputSection;