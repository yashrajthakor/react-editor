//import logo from './logo.svg';
import React, { Component , useState} from 'react';
import './App.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'; //npm install --save @ckeditor/ckeditor5-react @ckeditor/ckeditor5-build-classic
import parse from 'html-react-parser'; //html-react-parser

function App() {
  const[text, setText] = useState('');
  return (
    
    <div className="App"> 
     <div className="editor"> 
    <h2>Using CKEditor 5 build in React</h2>
                 
     <CKEditor
                    editor={ ClassicEditor }
                    data={text}
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setText(data);
                        console.log( { event, editor, data } );
                    } }
                  
                />
                </div>
                <div>
            <h2>context</h2>
            <p>{parse(text)}</p>
            </div>
    </div>
  );
}

export default App;
