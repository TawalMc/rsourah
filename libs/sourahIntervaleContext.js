import React from "react";
import { createHook, createStore } from "react-sweet-state";
import { db, getIntervalle } from "./db";

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

  return newSourahIntervalle;
};

const getIntervalleChoosed = async () => {
  let stored = await getIntervalle();
  return stored.data;
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
  },
});

const useIntervalleChoosed = createHook(Store);

export { sourahIntervaleReducer, useIntervalleChoosed };
