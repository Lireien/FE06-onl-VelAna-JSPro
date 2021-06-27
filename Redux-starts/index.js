const ACTION_TYPES = {
  inc: "inc",
  dec: "dec",
  logging: "logging",
};

const updateState = (state, action) => {
  //reducer
  if (action.type === ACTION_TYPES.inc) return state + action.payload;
  if (action.type === ACTION_TYPES.dec) return state - action.payload;
};

class Store {
  constructor(state, updateState) {
    this._state = state;
    this._updateState = updateState;
    this._reactions = [];
  }
  get state() {
    return this._state;
  }
  update(action) {
    this._state = this._updateState(this._state, action);
    this._reactions.forEach((s) => s());
  }
  subscribe(reactions) {
    this._reactions.push(reactions);
  }
}
const incAction = { type: ACTION_TYPES.inc, payload: 1 }; //actions
const increase = () => ({ type: ACTION_TYPES.inc, payload: 1 });
const increaaseByAmount = (amount) => ({
  type: ACTION_TYPES.inc,
  payload: amount,
});
const decAction = { type: ACTION_TYPES.dec, payload: 1 };
const addFiveAction = { type: ACTION_TYPES.inc, payload: 5 };
const store = new Store(0, updateState);
const observer = () => console.log("Stage changed to:", store.state);
store.subscribe(observer);

store.update(incAction); //dispatch
store.update(increaaseByAmount(5));
store.update(decAction);
store.update(addFiveAction);
