import { RxCross1 } from "react-icons/rx";
import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ onClose, isOpen, children }) => {
  return ReactDOM.createPortal(
    isOpen && (
      <>
      
      <div className="backdrop-blur absolute h-screen w-screen top-0 z-40 grid place-items-center">
        <div className="m-auto z-50 relative min-h-[200px] max-w-[80%] bg-white p-4">
          <div className="flex justify-end">
            <RxCross1 onClick={onClose}/>
          </div>
          {children}
        </div> 
       </div>
      </>
    ),
    document.getElementById("modal-root")
  );
};

export default Modal;
