// An example to demonstrate the differences of implementations between Redux and useReducer
import React from 'react';

import CounterRedux from './CounterRedux';
import CounterLocal from './CounterLocal';

import styles from './Counter.module.css';

// comparison side by side
const Counter: React.FC = () => (
  <>
    <p className={styles.value}>Redux</p>
    <CounterRedux />
    <div className={styles.row} />
    <p className={styles.value}>Local Reducer</p>
    <CounterLocal />
  </>
);

export default Counter;
