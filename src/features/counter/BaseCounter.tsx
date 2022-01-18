import React, { useState } from 'react';

import styles from './Counter.module.css';

type BaseCounterProps = {
  count: number;

  onDecrement: () => void;
  onIncrement: () => void;
  onIncrementByAmount: (amount: number) => void;
  onIncrementAsync: (amount: number) => void;
  onIncrementIfOdd: (amount: number) => void;
};

const BaseCounter: React.FC<BaseCounterProps> = ({
  count,
  onDecrement,
  onIncrement,
  onIncrementByAmount,
  onIncrementAsync,
  onIncrementIfOdd,
}) => {
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={onDecrement}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={onIncrement}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => onIncrementByAmount(incrementValue)}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => onIncrementAsync(incrementValue)}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => onIncrementIfOdd(incrementValue)}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
};

export default BaseCounter;
