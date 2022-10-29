import { createContext, useEffect, useState } from "react";
import { getPokemonsAPI } from "../api";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const pokemons = await getPokemonsAPI();

      setData(pokemons);
    })();
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};
