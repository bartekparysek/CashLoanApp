import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {
   return ReactDOM.createPortal(
      <div className="modal">
         <div className="modal-content">
            I'm Modal
         </div>
      </div>,
      document.querySelector('#modal')
   )
}

export default Modal;