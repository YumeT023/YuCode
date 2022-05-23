import React, { useEffect, useState } from 'react';
import { Editor } from './Components/Editor';
import * as monaco from 'monaco-editor'
import './App.css';

export const App = () => {
    const [code, updateCode] = useState('');
    
    
    const [stdout, setStdout] = useState({
        status: '0',
        message: ''
    });
    
    useEffect(() => {
        setStdout((state: typeof stdout) => (
            {...state, message: "Hello world"}
        ))
    }, []);

    
    const handleChange = (code: string) => {
        updateCode(code);
    }

    const handleRun = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        (async () => {
            const options = {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Content-Type': 'application/json',
                    'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
                    'X-RapidAPI-Key': '6f19755382mshdf71a8e583f6e22p1fe83ejsnee5039dd282b'
                },
                body: JSON.stringify({
                    language_id: 62,
                    source_code: code,
                    stdin: ``
                })
            };
            
            fetch('https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=true&fields=*', options)
                .then(response => response.json())
                .then((response) => {
                    setStdout((prevState) => {
                        return {...prevState, message: "stdout: " + JSON.stringify(response.stdout) + "\nmemory: " + JSON.stringify(response.memory) + "\ntime: " + JSON.stringify(response.time)}
                    });
                    console.log(stdout.message);
                })
                .catch(err => console.error(err));
        })()
    }

    return (
        <div className="App">   
            <aside className="col">
                <div className='runBtn' onClick={handleRun}>
                    {/* <h4><i className="fa fa-code"></i>        Yu<span>Code</span></h4> */}
                    <h4><span>R</span>un    <span><i className='fa fa-code'></i></span></h4>
                </div>

                <div>
                    <textarea 
                        cols={35} rows={10}
                        spellCheck={false}
                        value={stdout.message || 'waiting for output'}
                        onChange={() => ''}
                        className='outputForm'
                    ></textarea>
                </div>
            </aside>

            <main className="col">
                <div className="Editor">
                    <Editor onChange={handleChange}
                            code={code}
                            theme={'IdleFingers'}
                    />
                </div>
            </main>
        </div>
    );
}