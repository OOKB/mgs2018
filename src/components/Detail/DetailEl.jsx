import React from "react";
import PropTypes from "prop-types";
import { map, size, sortBy } from "lodash";
import css from "cape-style";
// import './Detail.css'
import DetailMap from "./DetailMap";
import LocationList from "./LocationList";
import StudentLink from "../Peers/StudentLink";
import Logo from "../Logo/Logo";
import Wrapper from "../Wrapper/WrapperEl";
import ImageStack from "../StudentDetail/ImageStack";

import mgsLogo from "../../mgs2018logoarrow.svg";

import {
  MapWrapper,
  MapContainer,
  InfoContainer,
  Title,
  Subtitle,
  Description,
  NameLink,
  Divider,
  Back,
  Loading,
  HideDesktop,
  HideMobile
} from "./styles";

function AllStudents({ program }) {
  return (
    <div>
      <Divider />
      <ul style={css("m0 mt1 p0 lsNone")}>
        {size(program) > 0 &&
          map(program, ({ students }) =>
            map(sortBy(students, "name"), student => (
              <NameLink hasDetail={student.hasDetail} key={student.id}>
                <StudentLink {...student}>
                  <span className="name">{student.name}</span>
                </StudentLink>
              </NameLink>
            ))
          )}
      </ul>
    </div>
  );
}
AllStudents.propTypes = {
  program: PropTypes.objectOf(PropTypes.object).isRequired
};

function DetailEl({ showGroup, detailClose }) {
  if (!showGroup) {
    return <Loading className="flex loading">loading...</Loading>;
  }
  const {
    description,
    extraChild,
    id,
    name,
    lat,
    lng,
    locations,
    program,
    reception,
    show,
    showDate,
    zoom,
    groupType
  } = showGroup;

  const isShowTwo = id === "recesud5HA1rcy0uq";
  const isShowThree = id === "recsTPYsKxM3gBL7C";
  const isShowFilm = id === "recR1TeH47Qy4ftSo";
  const firstShow = show[Object.keys(show)[0]] || null;
  const firstStudent =
    (firstShow &&
      firstShow.student &&
      firstShow.student[Object.keys(firstShow.student)[0]]) ||
    null;

  return (
    <Wrapper>
      <Back onClick={detailClose}>
        <Logo
          primary
          sttc
          left
          logoSrc={mgsLogo}
          siteName="MICA Grad Show 2020"
        />
      </Back>
      <detail className={id}>
        <div className="flex">
          <MapWrapper>
            <MapContainer>
              <DetailMap
                defaultCenter={lat ? { lat, lng } : undefined}
                zoom={zoom}
                locations={locations}
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCWW7BwZB4inhmk-k5RWdXRo2pD-5X--YA&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={
                  <div
                    style={{
                      height: "0",
                      paddingBottom: "100%",
                      position: "relative"
                    }}
                  />
                }
                containerElement={
                  <div
                    style={{
                      height: "0",
                      paddingBottom: "100%",
                      position: "relative"
                    }}
                  />
                }
                mapElement={
                  <div
                    style={{
                      top: "0",
                      bottom: "0",
                      left: "0",
                      right: "0",
                      position: "absolute"
                    }}
                  />
                }
              />
            </MapContainer>
            {size(show) > 0 &&
              map(show, ({ documentation }) => (
                <HideMobile>
                  {documentation && size(documentation) > 0 && (
                    <ImageStack collection={documentation} />
                  )}
                </HideMobile>
              ))}
          </MapWrapper>
          <InfoContainer>
            <Title>{name}</Title>
            {showDate && <Subtitle className="dateRange">{showDate}</Subtitle>}
            {groupType === "City Wide" && firstStudent && firstStudent.name && (
              <Subtitle>{firstStudent.name}</Subtitle>
            )}
            <Description
              className="description"
              dangerouslySetInnerHTML={{ __html: description }}
            />
            <LocationList
              show={show}
              reception={reception}
              isShowFilm={isShowFilm}
              isShowThree={isShowThree}
              isShowTwo={isShowTwo}
              program={program}
            />
            {!isShowFilm && extraChild && (
              <LocationList
                show={extraChild.show}
                reception={extraChild.reception}
                isShowThree={isShowThree}
                isShowTwo={isShowTwo}
                program={program}
              />
            )}
            {isShowThree && program && <AllStudents program={program} />}
            {!isShowThree &&
              size(show) > 0 &&
              map(show, ({ documentation }) => (
                <HideDesktop>
                  {documentation && size(documentation) > 0 && (
                    <ImageStack collection={documentation} />
                  )}
                </HideDesktop>
              ))}
          </InfoContainer>
        </div>
      </detail>
    </Wrapper>
  );
}
DetailEl.propTypes = {
  showGroup: PropTypes.shape({
    description: PropTypes.string,
    gallery: PropTypes.string,
    lat: PropTypes.number,
    lng: PropTypes.number,
    ongoing: PropTypes.bool,
    program: PropTypes.object.isRequired,
    receptionDate: PropTypes.string,
    showDate: PropTypes.string,
    name: PropTypes.string.isRequired,
    zoom: PropTypes.number
  }),
  detailClose: PropTypes.func.isRequired
};
DetailEl.defaultProps = {
  showGroup: null
};
export default DetailEl;
