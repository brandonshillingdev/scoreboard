import React from "react";
import { MdDelete } from "react-icons/md";

function Player({ player, deletePlayer, updateScore }) {
  // Use optional chaining (?.) to handle the case where player is undefined
  const playerName = player?.data?.name || "Unknown Player";

  return (
    <div
      key={player?.id}
      id="row"
      className="grid grid-cols-8 border-t-2 border-slate-700"
    >
      <span className="col-span-5 text-left text-transform: uppercase text-sm flex items-center m-1 ">
        <span className="float-left cursor-pointer text-red-600 mt-1 mr-1 ">
          <button onClick={() => deletePlayer(player?.id)}>
            <MdDelete />
          </button>
        </span>
        {playerName}
      </span>

      <div className="col-span-3 grid grid-cols-11 border-r-1 border-slate-700 border-l-1 items-center">
        <input
          type="button"
          value="-"
          className="cursor-pointer bg-red-600 col-span-3 rounded-sm px-2 py-1 mr-2"
          onClick={() => updateScore(player?.id, player?.data?.score - 1)}
        />
        <div className="bg-slate-50 text-black col-span-5 flex flex-col py-1 items-center text-center">
          <span className="text-sm font-bold">{player?.data?.score || 0}</span>
        </div>
        <input
          type="button"
          value="+"
          className="cursor-pointer bg-emerald-500 col-span-3 rounded-sm px-2 py-1 ml-2"
          onClick={() => updateScore(player?.id, player?.data?.score + 1)}
        />
      </div>
    </div>
  );
}

export default Player;
