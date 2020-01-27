import React from "react";
import PropTypes from "prop-types";
import { find, map, size } from "lodash";
import css from "cape-style";
import Peers from "../Peers/Peers";

import {
  Reception,
  Divider,
  PlaceName,
  PlaceBuilding,
  PlaceAddress,
  PlaceHours
} from "./styles";

function LocationItem({ i, location, students, isShowTwo, program }) {
  if (!location) return <p>No location.</p>;
  const { name, galleryHours, building, streetAddress, zip } = location;
  return (
    <li style={css("mb0p5")}>
      <PlaceName>{name}</PlaceName>
      <PlaceBuilding>{building}</PlaceBuilding>
      <PlaceAddress>
        {streetAddress} {zip}
      </PlaceAddress>
      {galleryHours && (
        <PlaceHours className="openHours" style={css("fs0p75")}>
          Open /<br /> {galleryHours}
        </PlaceHours>
      )}
      {size(students) > 0 && (
        <div>
          {isShowTwo && program && (
            <p>{program[Object.keys(program)[0]].name}</p>
          )}
          <Peers students={students} />
        </div>
      )}
    </li>
  );
}
LocationItem.propTypes = {
  location: PropTypes.shape({
    name: PropTypes.string,
    galleryHours: PropTypes.string
  }),
  students: PropTypes.objectOf(PropTypes.object)
};
LocationItem.defaultProps = {
  location: null,
  students: null
};

function LocationList({ show, reception, isShowFilm, isShowTwo, program }) {
  return (
    <div>
      {isShowFilm && (
        <div>
          for more information check{" "}
          <a href="http://micafilmmaking.org/">http://micafilmmaking.org/</a>
        </div>
      )}
      <Divider />
      {isShowFilm && (
        <div>
          <Reception style={css("mb1")}>
            <h3>Screenings</h3>
            <p>April 7, 7:00 – 10:00 p.m. at Parkway Theatre </p>
            <p>April 8, 7:00 – 10:00 p.m. at Parkway Theatre </p>
            <p> April 10, 7:00 – 11:00 p.m. at Falvey Hall, Brown Center.</p>
          </Reception>
        </div>
      )}
      {!isShowFilm && reception && (
        <Reception>
          <h3>Reception</h3>
          <p>{reception}</p>
        </Reception>
      )}
      <Divider />
      <ul style={css("lsNone m0 p0 relative")}>
        {map(show, ({id, location, student, program}) => (
          <LocationItem
            key={id}
            location={find(location)}
            students={student}
            isShowTwo={isShowTwo}
            program={program}
          />
        ))}
      </ul>
    </div>
  );
}
LocationList.propTypes = {
  reception: PropTypes.string,
  show: PropTypes.objectOf(PropTypes.object)
};
LocationList.defaultProps = {
  reception: null,
  show: null
};
export default LocationList;
