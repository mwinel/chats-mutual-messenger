import React from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import chatsReducer from "./store/reducers/chats";
import ChatsNavigator from "./navigation/ChatsNavigator";

const rootReducer = combineReducers({
  chats: chatsReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <ChatsNavigator />
    </Provider>
  );
}
