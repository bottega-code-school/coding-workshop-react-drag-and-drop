import * as React from "react";
import playlistData from "../data";
import { VscThreeBars } from "react-icons/vsc";

export default function Playlist() {
  const [playlist, setPlaylist] = React.useState(playlistData);

  const listRenderer = playlist.map((item) => (
    <div className="list-container__item" key={item.id}>
      <div className="handle">
        <VscThreeBars />
      </div>
      <div>
        <img src={item.thumb} width="100%" />
      </div>
      <div>{item.title}</div>
      <div>{item.artist}</div>
      <div>{item.released}</div>
    </div>
  ));

  return <div className="list-container">{listRenderer}</div>;
}
