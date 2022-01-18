// An example to showcase the logic and syntax for Redux Toolkit
import React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';

import BaseCounter from './BaseCounter';

import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
} from './counterSlice';

// code structure if using redux
const CounterRedux: React.FC = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <BaseCounter
      count={count}
      onDecrement={() => dispatch(decrement())}
      onIncrement={() => dispatch(increment())}
      onIncrementByAmount={(amount) => dispatch(incrementByAmount(amount))}
      onIncrementAsync={(amount) => dispatch(incrementAsync(amount))}
      onIncrementIfOdd={(amount) => dispatch(incrementIfOdd(amount))}
    />
  );
};

export default CounterRedux;
