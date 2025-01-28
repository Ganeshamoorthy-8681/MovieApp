import PropTypes from "prop-types";
import styled from "styled-components";

const StyledPosterWrapper = styled.div`

  min-width: 220px;
  height: 300px;  
  
  :hover {
    cursor:pointer;
  }

    img {
    width:100%;
    height: 96%;
    border-radius: 0.75rem;
  }
}
`;


export function AppPoster(props)
{
  const { posterImageUrl, title, handlePosterClick } = props;
  return (
    <StyledPosterWrapper onClick={handlePosterClick}>
      <img loading="lazy" src={posterImageUrl} alt={title} />
    </StyledPosterWrapper>
  );
}
AppPoster.propTypes = {
  posterImageUrl: PropTypes.string.isRequired,
  title: PropTypes.string,
  genres: PropTypes.array,
  handlePosterClick: PropTypes.func
};
