/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import Navigation from './Navigation/Navigation';
import Colors from './Constants/Colors';
import {Root} from 'native-base';
import RNBootSplash from 'react-native-bootsplash';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import cartReducer from './store/reducers/cart';
const rootReducer = combineReducers({
  cart: cartReducer,
  // orders: ordersReducer,
});

const store = createStore(rootReducer);

const App = () => {
  let init = async () => {};
  useEffect(() => {
    init().finally(() => {
      // without fadeout: RNBootSplash.hide()
      RNBootSplash.hide({duration: 250});
    });
  }, []);

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.primaryColor}
      />
      <Root>
        <Provider store={store}>
          <Navigation />
        </Provider>
      </Root>
    </>
  );
};

export default App;
