import './App.css'
import { Background } from './components/ui/background';
import { Button } from './components/ui/button';
import { Modal } from './components/ui/modal'
import { useRef } from 'react'

function App() {
  const modalRef = useRef<HTMLDialogElement>(null);

  const openModal = () => {
    modalRef.current?.showModal();
  };

  return (
    <>
      <Background />
      <Button id="open-modal" onClick={openModal}>Open modal</Button>
      <Modal title="Modal" id="modal" ref={modalRef}>
        <p>Modal content</p>
      </Modal>
    </>
  )
}

export default App
