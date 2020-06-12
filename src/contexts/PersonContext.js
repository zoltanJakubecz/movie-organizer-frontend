import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const PersonContext = createContext();


export const PersonProvider = props => {
  const [data, setData] = useState({
    totalPersonCount: 0,
    page: 1,
    persons: [
      {
        "id": "1",
        "name": "Lapos Elemer",
        "comment": "Very good actor....",
        "playedIn": ["Zollo", "Heros of Kukutyin", "But", "The mask of the cloistress"],
        "creatorOf": ["Morro", "Victims of Kukutyin", "Not"]
      }
    ],
  });

  //   useEffect(() => {
  //     async function getData() {
  //       const res = await axios.get("http://localhost:8080/api/movies/?page=1");
  //       setData(Object.assign(res.data, { page: 1 }));
  //     }
  //     getData();
  //   }, []);

  return (
    <PersonContext.Provider value={{
      total: data.totalPersonCount,
      page: data.page,
      persons: data.persons,
      //   actions: {
      // loadPage,
      // add,
      // update,
      // delete: handleDeleteFromContext
      //   }
    }}>
      {props.children}
    </PersonContext.Provider>
  )
}