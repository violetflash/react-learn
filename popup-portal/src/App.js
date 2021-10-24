import { useState } from 'react';
import { MainPopup } from "./components/ui-kit";
import Dialog from "./components/ui-kit/Dialog/Dialog";


function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const openModal = () => setIsOpened(true);
  const openDialogHandler = () => setOpenDialog(true);
  const closeModal = () => setIsOpened(false);
  const closeDialog = () => setOpenDialog(false);

  return (
    <div className="App">
      <button onClick={openModal}>Открыть попап</button>
      <button onClick={openDialogHandler}>Открыть диалог</button>
      <MainPopup title="Главный попап" isOpened={isOpened} onClose={closeModal} >
        Контент
      </MainPopup>
      <Dialog
        isOpened={openDialog}
        onClose={closeDialog}
        title="Согласны на что-то?"
        onConfirmFunc={() => console.log('Вы согласились!')}
        primaryButtonText="Согласен"
        secondaryButtonText="Не согласен"
      />
    </div>
  );
}

export default App;