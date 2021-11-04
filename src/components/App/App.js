import React from 'react';
import styles from './App.scss';

class App extends React.Component {
  render() {
    const {title, subtitle} = this.props;
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        {/*
        <List {...listData} />
        */}
      </main>
    );
  }
}

export default App;