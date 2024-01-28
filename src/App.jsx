import { Main } from "./components/Main";
import { Container } from "./components/Container";
import styles from "./App.module.scss";

function App() {
  return (
    <Main className={styles.main}>
      <Container className={styles.container}></Container>
    </Main>
  );
}

export default App;
