import React from "react";
import MonacoEditor from "react-monaco-editor"
import { EditorDidMount } from "react-monaco-editor";
import * as monaco from 'monaco-editor';
import { MonacoServices } from "monaco-languageclient"
import { MONACO_OPTIONS as Editor_Option, defineAllTheme } from './Tools/MonacoOptions'
import { EditorProps } from "./Interface/PropType";


export const Editor = ({code, onChange, theme}: EditorProps) => {
    const editorDidMount: EditorDidMount = (editor) => {
        MonacoServices.install(monaco as any);
        if (editor && editor.getModel()) {
            const editorModel = editor.getModel();
            if (editorModel) {
                editorModel.setValue(code || ':)');
            }
        }
        editor.focus();
    };

    defineAllTheme();

    return (
        <MonacoEditor
            width="100%"
            height="100%"
            language="typescript"
            value={code}
            onChange={(updatedCode: string) => onChange(updatedCode)}
            theme={theme}
            options={Editor_Option}
            editorDidMount={editorDidMount}
        />
    );
}