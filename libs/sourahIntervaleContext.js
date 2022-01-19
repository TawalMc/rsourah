import { createHook, createStore } from "react-sweet-state";
import { addIntervale } from "./db";

const sourahIntervaleReducer = (oldValue, id) => {
  //
  let newSourahIntervalle = oldValue;
  let indexID = newSourahIntervalle.indexOf(id);

  if (indexID >= 0) {
    newSourahIntervalle.splice(indexID, 1);
  } else if (indexID < 0 && newSourahIntervalle.length < 2) {
    newSourahIntervalle.push(id);
  }

  newSourahIntervalle.sort((a, b) => a - b);
	addIntervale(newSourahIntervalle)

  return newSourahIntervalle;
};

const Store = createStore({
  initialState: { sourahIntervalle: [1, 114] },
  actions: {
    update:
      (id) =>
      ({ setState, getState }) => {
        setState({
          sourahIntervalle: sourahIntervaleReducer(
            getState().sourahIntervalle,
            id
          ),
        });
      },
		load: (arr) => ({setState, getState}) => {
			setState({
				sourahIntervalle: arr
			})
		}
  },
});

const useIntervalleChoosed = createHook(Store);

export { sourahIntervaleReducer, useIntervalleChoosed};
