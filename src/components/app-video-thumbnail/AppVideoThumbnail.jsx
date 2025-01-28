import styled from "styled-components";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PropTypes from "prop-types";
import { Tooltip } from "@mui/material";

const StyledVideoThumbnailWrapper = styled.div`

width:300px;
height:220px;
position:relative;
cursor:pointer;

.title {
  color:var(--text-color-2);
  font-size:1.25rem;
  text-overflow:ellipsis;
  white-space:nowrap;
  overflow:hidden;
  padding: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  background-color: var(--bg-color-2);
}

img {
  width:100%;
  height:80%;
  object-fit:cover;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}
`;

export function AppVideoThumbnail(props)
{
  const { youtubeId, name: title, handleClickEvent } = props;
  return (
    <StyledVideoThumbnailWrapper onClick={handleClickEvent} >
      <PlayArrowIcon
        sx={
          {
            color: "white",
            fontSize: "4rem",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-70%, -70%)"
          }} />

      <img src={`https://img.youtube.com/vi/${ youtubeId }/sddefault.jpg`} alt="video thumbnail" />

      <div className="title">
        <Tooltip title={title} placement="bottom" >
          <span>
            {title}
          </span>
        </Tooltip>
      </div>
    </StyledVideoThumbnailWrapper>
  );
}

AppVideoThumbnail.propTypes = {
  youtubeId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleClickEvent: PropTypes.func.isRequired
};
