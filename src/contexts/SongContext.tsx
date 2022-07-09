import React, { createContext, ReactNode } from "react";
import DataSongs from "../data/songs.json";
import ISong from "../interfaces/Song.interface";

interface SongContextProviderProps {
  children: ReactNode;
}

const SongContextDefaultData = [
  {
    name: "",
    author: "",
    url: "",
    id: 0,
    links: {
      images: [
        {
          url: "",
        },
        {
          url: "",
        },
      ],
    },
  },
];

export const SongContext = createContext<ISong[]>(SongContextDefaultData);

const SongContextProvider = ({ children }: SongContextProviderProps) => {
  return (
    <SongContext.Provider value={DataSongs}>{children}</SongContext.Provider>
  );
};

export default SongContextProvider;
