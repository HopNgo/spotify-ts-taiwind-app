import React, { useContext } from "react";
import { SongContext } from "../../contexts/SongContext";
import ISong from "../../interfaces/Song.interface";

const ListSong = ({ songActive, setSongActive }: any) => {
  const songs = useContext(SongContext);
  const handleClickSong = (song: ISong): void => {
    setSongActive(song);
  };

  return (
    <div className="bg-gray-50 h-[76.3vh] text-gray-400 overflow-hidden overflow-y-scroll">
      <table className="">
        <thead className="table-auto">
          <tr className="bg-gray-100 h-14">
            <th className="w-[10%]">#</th>
            <th className="w-[60%] text-left">Title</th>
            <th className="w-[20%]">Author</th>
            <th className="w-[10%] text-[20px]">
              <i className="fa fa-download"></i>
            </th>
          </tr>
        </thead>
        <tbody className="text-center">
          {songs.map((song) => (
            <tr
              key={song.id}
              className={`h-14 text-gray-500 hover:bg-slate-200 hover:cursor-pointer ${
                song.id === songActive.id &&
                "bg-slate-200 text-red-500 text-[18px]"
              }`}
              onClick={() => handleClickSong(song)}
            >
              <td className="w-[10%]">{song.id + 1}</td>
              <td className="w-[61%] text-left">{song.name}</td>
              <td className="">{song.author}</td>
              <td className="w-[200px]">
                <a href={song.url}>
                  <i className="fa fa-download hover:text-red-400 text-[18px]" />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListSong;
