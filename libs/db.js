import Dexie from "dexie";
import { QuranChapter } from "./fetcherAPI";

const db = new Dexie("SourahDB");
db.version(1).stores({
  intervalle: "id, data",
  sourahAPI: "id, data",
});

// intervalle functions
const addIntervale = (arr) => {
  arr.sort((a, b) => a - b);
  db.intervalle.put({
    id: 0,
    data: arr,
  });
};

const getIntervalle = async (arr) => {
  return await db.intervalle.get(0);
};

// sourah api functions
const addSourahAPI = (list) => {
  db.sourahAPI.put({
    id: 0,
    data: list,
  });
};

const getSourahAPI = async () => {
  return await db.sourahAPI.get(0);
};

const getChoosedSourah = async (index) => {
  let sourahList = await getSourahAPI();
  return await sourahList.data[index - 1];
};

const sourahData = (index) => {};

export { db, addIntervale, addSourahAPI, getIntervalle, getChoosedSourah };
