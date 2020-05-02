import React, { useState, forwardRef, useImperativeHandle } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const ModalBackDrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.8);
`

const ModalBox = styled.div`
  text-align: center;
  font-size: 1.8em;
  position: relative;
  padding: 2%;
  padding-bottom: 5%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 60%;
  width: 45%;
  background-color: white;
  box-shadow: 0 0 10px rgba(0,0,0,0.25);
  border-radius: 2px;
  z-index: 101;
  overflow-y: auto;
`

const Modal = forwardRef((props, ref) => {

  const [display, setDisplay] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      openModal: () => open(),
      closeModal: () => close()
    }
  });

  const open = () => {
    setDisplay(true);
  }

  const close = () => {
    setDisplay(false);
  }

  if (display) {
    return ReactDOM.createPortal(
      <ModalWrapper>
        <ModalBackDrop />
        <ModalBox>
          {props.children}
        </ModalBox>
      </ModalWrapper>, document.getElementById("modal-root")
    )

  }
  return null;
});

export default Modal;