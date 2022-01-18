// An example to demonstrate using RTK for useReducer hook
import React, { useReducer } from 'react';

import BaseCounter from './BaseCounter';

// Local reducer
import counterReducer, {
  INITIAL_COUNTER_STATE,
  incrementLocal,
  decrementLocal,
  incrementByAmountLocal,
  incrementIfOddLocal,
  incrementAsyncLocal,
} from './counterSlice2';
import { fetchCount } from './counterAPI';

const CounterLocal: React.FC = () => {
  const [counterState, localDispatch] = useReducer(
    counterReducer,
    INITIAL_COUNTER_STATE
  );

  // RTK can save up time by generating actions and reducers that can be consumed by useReducer
  // However useReducer does not support Thunk, therefore we will need to manually add event handlers and use localDispatch after async activities are completed
  const incrementAsync = async (amount: number) => {
    const response = await fetchCount(amount);
    localDispatch(incrementAsyncLocal(response.data));
  };

  return (
    <BaseCounter
      count={counterState.value}
      onDecrement={() => localDispatch(decrementLocal())}
      onIncrement={() => localDispatch(incrementLocal())}
      onIncrementByAmount={(amount) =>
        localDispatch(incrementByAmountLocal(amount))
      }
      onIncrementAsync={incrementAsync}
      onIncrementIfOdd={(amount) => localDispatch(incrementIfOddLocal(amount))}
    />
  );
};

export default CounterLocal;
