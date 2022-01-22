import Dexie from "dexie"

const db = new Dexie("SourahDB")
db.version(1).stores({
  sourahAPI: "id, data"
})

// sourah api functions
const addSourahAPI = (list) => {
  db.sourahAPI.put({
    id: 0,
    data: list
  })
}

const getSourahAPI = async () => {
  return await db.sourahAPI.get(0)
}

/* 
const getChoosedSourah = async (index) => {
  let sourahList = await getSourahAPI()
  return await sourahList.data[index - 1]
}
 */
export { db, addSourahAPI, getSourahAPI }
