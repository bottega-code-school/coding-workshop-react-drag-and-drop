import * as React from "react";
import { VscThreeBars } from "react-icons/vsc";
import { orderBy } from "lodash";

import playlistData from "../data";

type SongType = {
  id: number;
  title: string;
  artist: string;
  released: string;
  thumb: string;
  position: number;
};
export default function Playlist() {
  const [playlist, setPlaylist] = React.useState<SongType[]>(playlistData);

  const listRenderer = orderBy(playlist, "position").map((item) => (
    <div className="list-container__item" key={item.id}>
      <a className="handle">
        <VscThreeBars />
      </a>
      <div>
        <img src={item.thumb} width="100%" />
      </div>
      <div>
        {item.position} - {item.title}
      </div>
      <div>{item.artist}</div>
      <div>{item.released}</div>
    </div>
  ));

  return <div className="list-container">{listRenderer}</div>;
}
