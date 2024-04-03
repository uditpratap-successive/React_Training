import React, { useState } from 'react';
import useClipboard from './useClipboard';

const CopyTextButton = () => {
  const { copied, copyToClipboard } = useClipboard();
  const[text,Settext]=useState('')

  return (
    <div>
      <textarea value={text}
      onChange={(e)=>Settext(e.target.value)} />
      <button onClick={()=>copyToClipboard(text)}>
        {copied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  );
};

export default CopyTextButton;
