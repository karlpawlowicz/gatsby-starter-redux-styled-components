import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import reducer from './reducers';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(reduxThunk))
);

const ReduxWrapper = ({ element }) => (
  <Provider store={store}>{element}</Provider>
);

ReduxWrapper.propTypes = {
  element: PropTypes.element.isRequired,
};

export default ReduxWrapper;
