import { combineReducers } from "redux";
import testReducer from "../../features/testArea/testReducer";
import eventReducer from "../../features/event/eventReducer";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  test: testReducer,
  events: eventReducer,
  form: formReducer
});

export default rootReducer;
