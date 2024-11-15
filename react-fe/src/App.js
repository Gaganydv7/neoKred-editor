import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [text, setText] = useState('');
  const [data, setResponse] = useState('');
  const url = 'http://localhost:1000/';

  async function postnormalTxtInApi(url, normalTxt) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ normalTxt: normalTxt }),
      });
      const result = await response.json();
      setResponse(result);
      // console.log(result);
    } catch (error) {
      console.error('something went wring ', error);
    }
  }

  const realTimenormalTxt = (event) => {
    setText(event.target.value);
    postnormalTxtInApi(url, event.target.value);
  };

  return (
    <div className="center-div">
      <div className="heading"><b className='bold'>Markdown Editor</b></div>
      <textarea className="normal-textarea" placeholder="Please enter normal text..." value={text} onChange={realTimenormalTxt} />
      <div className="right-side-div">
        {<div dangerouslySetInnerHTML={{ __html: data.txtConvertedToHtml }} />}
      </div>
    </div>
  );
};

export default App;
