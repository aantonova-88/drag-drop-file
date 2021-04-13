import React from 'react';

import './dropzone.css';

const DropZone = ({ onFileUploaded }) => {

  const dragOverHandler = (e) => {
        e.preventDefault();
    }

  const dragOver = (e) => {
        dragOverHandler(e);
    }

  const readFile = (file) => {

      let reader = new FileReader();

      reader.readAsText(file);

      reader.onload = function() {
        onFileUploaded(reader.result);
      };
 }

const fileDrop = (e) => {
   e.preventDefault();
   const file = e.dataTransfer.files[0];

   if (file.type !== 'application/json') {
     alert('File type not permitted. Use only json.')
   } else {
     let newDiv = document.createElement("div");
     newDiv.innerHTML = file.name;
     document.body.prepend(newDiv);
     readFile(file);
   }
 };


    return (
      <div className="container">
        <div className="drop-container"
             onDragOver={dragOver}
             onDrop={fileDrop}>
          <div className="drop-message">
            Drag & Drop files here
            </div>
          </div>
      </div>
    )
}
export default DropZone;
