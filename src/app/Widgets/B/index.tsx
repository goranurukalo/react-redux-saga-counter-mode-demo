import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from 'types';
import { Text } from 'app/components/Text';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { WidgetBox } from 'app/components/WidgetBox';
import { saga } from './saga';
import { reducer, requestMultiply } from './slice';

export function WidgetB() {
  useInjectReducer({ key: 'widgetB', reducer: reducer });
  useInjectSaga({ key: 'widgetB', saga: saga });

  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.widgetB.value);

  const multiply = (val: number = 2) => {
    dispatch(requestMultiply(val));
  };

  return (
    <WidgetBox color="blue">
      <Text>This is Widget B - value: {count}</Text>
      <span style={{ color: 'white' }}>
        Multiply [<button onClick={() => multiply()}>x2</button>]
      </span>
    </WidgetBox>
  );
}
