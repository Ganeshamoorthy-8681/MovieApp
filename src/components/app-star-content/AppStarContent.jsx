import PropTypes from "prop-types";
import styled from "styled-components";

const StyledStarContentWrapper = styled.div`
position: relative;
.image {

  height:70vh;
  user-select: none;
  pointer-events:none;

  img {
    max-height: 70vh;
    width : 100vw;
    object-fit: cover;
  }

  &:before {
    content:"";
    position:absolute;
    display:block;  
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
    to right, 
    rgba(17, 24, 39, 0.7), /* Darker on the left */
    rgba(17, 24, 39, 0.4) 50%, /* Lighter and more transparent in the center */
    rgba(17, 24, 39, 0.6) 70%, /* Slightly darker towards the right */
    rgba(17, 24, 39, 0.6) /* Fully dark on the far right */
  ),
  linear-gradient(
    to top,
    rgba(17, 24, 39, 0.6), /* Darker at the bottom */
    rgba(17, 24, 39, 0.4) 50%, /* Lighter at the center vertically */
    rgba(17, 24, 39, 0.6) /* Fully dark at the top */
  );
  background-blend-mode: multiply;
  }
}

.content {
  color: var(--text-color-2);
  position:absolute;
  display:flex;
  gap:1rem;
  flex-direction:column;
  top: 25%;
  left:10%;

  .title {
    font-size: 3rem;
    font-weight:bold;
  }

  .description { 
    width: 50%;
  }

  .btn {
    button {
      all:unset;
      background-color:var(--active-color);
      padding: 0.5rem 1rem;
      border-radius: 6px;
      color:var(--text-color-2);
      cursor:pointer;
    }
  }
}

`;


export function AppStarContent(props)
{
  const { bannerImageUrl, title, children } = props;

  return (
    <StyledStarContentWrapper>
      <div className="image">
        <img src={bannerImageUrl} alt={title} />
      </div>
      <div className="content">
        {children}
      </div>
    </StyledStarContentWrapper>
  );
}

AppStarContent.propTypes = {
  bannerImageUrl: PropTypes.string.isRequired,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  description: PropTypes.string,
  id: PropTypes.number,
};
