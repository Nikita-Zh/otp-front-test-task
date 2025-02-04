import { Provider } from "react-redux";
import { UsersList } from "./components/UsersList";
import { store } from "./store";

import styles from "./App.module.css";

function App() {
  return (
    <Provider store={store}>
      <main className={styles.main}>
        <div className={styles.header}>
          <p className={styles.title}>Front-end test task</p>
          <p className={styles.subtitle}>Никита Жуйков</p>
        </div>
        <UsersList />
      </main>
    </Provider>
  );
}

export default App;
