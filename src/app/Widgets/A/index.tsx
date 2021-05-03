import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from 'types';
import { Text } from 'app/components/Text';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { WidgetBox } from 'app/components/WidgetBox';
import { saga } from './saga';
import { reducer, requestIncrement } from './slice';
import { SagaInjectionModes } from 'redux-injectors2';

export function WidgetA() {
  useInjectReducer({ key: 'widgetA', reducer: reducer });
  useInjectSaga({
    key: 'widgetA',
    saga: saga,
    mode: SagaInjectionModes.COUNTER,
  });

  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.widgetA.count);

  const increment = (val: number = 1) => {
    dispatch(requestIncrement(val));
  };

  return (
    <WidgetBox>
      <Text>This is Widget A - Count: {count}</Text>
      <span style={{ color: 'white' }}>
        Increment [<button onClick={() => increment()}>+1</button>] or [
        <button onClick={() => increment(2)}>+2</button>]
      </span>
    </WidgetBox>
  );
}
