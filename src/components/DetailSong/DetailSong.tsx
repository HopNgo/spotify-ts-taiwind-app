import React from "react";

const DetailSong = ({ songActive }: any) => {
  return (
    <div
      className={`bg-gray-100 max-h-[540px] min-h-[76.3vh] object-cover`}
      style={{ backgroundImage: `url(${songActive.links.images[1].url})` }}
    >
      <div className="text-red-400 font-bold pt-2 ml-2">Now Playing...</div>
      <div className="text-gray-50 text-xl ml-2">{songActive.name}</div>

      <div className="pt-8 pb-20 flex justify-evenly items-center mt-80">
        <div className="w-16 h-16">
          <img
            className="w-full h-full object-cover rounded-full"
            src={songActive.links.images[0].url}
            alt=""
          />
        </div>
        <div className="text-xl text-red-400 font-bold">
          {songActive.author}
        </div>
      </div>
    </div>
  );
};

export default DetailSong;
