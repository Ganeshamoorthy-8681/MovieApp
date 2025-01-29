import styled from "styled-components";
import PropTypes from "prop-types";
import { ImagePath } from "@cs/constants/ImageConstants";

const StyledAppCastCrew = styled.div`

.title {
  font-size:1.5rem;
  padding-left:1rem;
  font-weight:bold;
  margin:1rem;
  color:var(--text-color-2);
}

.cast-crew-content {
  display:flex;
  padding: 1rem 2rem;
  gap:2rem;
}
  .cast{
    & img {
      width: 120px;
      height:120px;
      object-fit:cover;
      border-radius:50%;
      user-select:none;
    }

    &-name {
      font-size:1.1rem;
      color:var(--text-color-2);
    }

    &-department {
      color:var(--text-color);
    }

  }
`;

export function AppCastCrew(props)
{
  const cast = props.credits?.cast ?? [];
  const crew = props.credits?.crew ?? [];

  const combined = [
    ...cast,
    ...crew.filter((crewMember) => !cast.some((castMember) => castMember.id === crewMember.id)),
  ];

  const credits = combined.filter((person) => person.profile_path).slice(0, 5);

  return (
    <StyledAppCastCrew>
      <p className="title">Cast & Crew</p>
      <div className="cast-crew-content">
        {credits.map((credit) =>

          <div className="cast" key={credit.id}>
            <img src={ImagePath.POSTER_PATH + credit.profile_path} alt={credit.name} />
            <div className="cast-name">{credit.name}</div>
            <div className="cast-department">{credit.known_for_department}</div>
          </div>
        )}
      </div>

    </StyledAppCastCrew>
  );
}


AppCastCrew.propTypes = {
  credits: PropTypes.object.isRequired
};
