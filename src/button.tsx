import React from 'react'
import { DocumentEditorContainerComponent, Toolbar, Inject } from '@syncfusion/ej2-react-documenteditor'
import './App.css'
import { createRoot } from 'react-dom/client';

function Button() {
    let editorObj: DocumentEditorContainerComponent | null;
    const onSave=()=>{
        editorObj?.documentEditor.save("sample", "Docx");
    }
    return (
        <div className="App">
            <button onClick={onSave} style={{}}>Save</button>
            <DocumentEditorContainerComponent ref={(ins=>editorObj=ins)} height='590' enableToolbar={true}>
                <Inject services={[Toolbar]}></Inject>
            </DocumentEditorContainerComponent>
        </div>
    )
}
export default Button;