import React from 'react';
import styles from './App.scss';

class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>My first React app</h1>
        <h2 className={styles.subtitle}>Hello world!</h2>
        <h3 className={styles.subtitle}>Things to do</h3>
      </main>
    )
  }
}

export default App;