import React from "react";
import ContactsForm from "./components/ContactsForm/ContactsForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <h1>Phonebook</h1>
        <ContactsForm />
        <SearchBox />
        <ContactList />
      </PersistGate>
    </Provider>
  );
}

export default App;
