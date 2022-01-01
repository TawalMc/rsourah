import React from "react";

const INITIAL_STATE = {
  sourahIntervalle: [1, 114],
};

const ACTION = {
  update: "UPDATE",
};

const SourahIntervaleContext = React.createContext();

const SourahIntervaleReducer = (state, action) => {
  switch (action.type) {
    case ACTION.update: {
      //
      let newSourahIntervalle = state.sourahIntervalle;
      let indexID = newSourahIntervalle.indexOf(action.value);

      if (indexID >= 0) {
        newSourahIntervalle.splice(indexID, 1);
      } else if (indexID < 0 && newSourahIntervalle.length < 2) {
        newSourahIntervalle.push(action.value);
      }

      newSourahIntervalle.sort((a, b) => a - b);
      console.log(newSourahIntervalle);

      return {
        ...state,
        sourahIntervalle: newSourahIntervalle,
      };
    }

    default:
      return state;
  }
};

export {
  ACTION,
  INITIAL_STATE,
  SourahIntervaleContext,
  SourahIntervaleReducer,
};
