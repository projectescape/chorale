import React from "react";
import { useParams } from "react-router-dom";

const ArtistScreen = () => {
  const { artistID } = useParams();
  return (
    <>
      <div>ArtistScreen Component</div>
      <div>Id of artist is {artistID}</div>
    </>
  );
};

export default ArtistScreen;
