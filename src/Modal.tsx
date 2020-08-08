import React, { useEffect, useRef, ReactChild, FunctionComponent } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal");

const Modal: FunctionComponent<{children: ReactChild[]}> = ({ children }) => {
  const elRef = useRef(document.createElement("div"));
  
  useEffect(() => {
    if (!modalRoot) {
      return;
    }
    modalRoot.appendChild(elRef.current);
    return () => {
      modalRoot.removeChild(elRef.current);
    }
  }, []);
  
  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
