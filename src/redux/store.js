import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { composeWithDevTools } from "redux-devtools-extension";

// Import Combination of all Reducer
import rootReducers from "./rootReducers";
// Import All Saga code 
import { rootSaga } from "./saga";


const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducers,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga)

export default store
