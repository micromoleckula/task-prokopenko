import styles from "./App.module.css";
import { Header } from "./components/Header/Header.jsx";
import { Located } from "./components/Located/Located.jsx";
import { TotalAmount } from "./components/TotalAmount/TotalAmount.jsx";

function App() {
  return (
    <main>
      <Header />
      <div className={styles.box}>
        <Located />
        <TotalAmount />
      </div>
    </main>
  );
}

export default App;
