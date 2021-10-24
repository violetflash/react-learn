import { useDispatch, useSelector } from 'react-redux';
import { openMainModal, closeMainModal, openDialog, closeDialog } from './redux';
import { MainPopup, Dialog } from "./components/ui-kit";

function App() {
  const dispatch = useDispatch();
  const { mainModalOpened, dialogOpened } = useSelector(state => state.popup)
  const openModal = () => dispatch(openMainModal());
  const closeModal = () => dispatch(closeMainModal());
  const openDialogHandler = () => dispatch(openDialog());
  const closeDialogHandler = () => dispatch(closeDialog());

  return (
    <div className="App">
      <button onClick={openModal}>Открыть попап</button>
      <button onClick={openDialogHandler}>Открыть диалог</button>

      <MainPopup title="Главный попап"  onClose={closeModal} isOpened={mainModalOpened}>
        Контент
      </MainPopup>

      <Dialog
        isOpened={dialogOpened}
        onClose={closeDialogHandler}
        title="Согласны на что-то?"
        onConfirmFunc={() => console.log('Вы согласились!')}
        primaryButtonText="Согласен"
        secondaryButtonText="Не согласен"
      />
    </div>
  );
}

export default App;