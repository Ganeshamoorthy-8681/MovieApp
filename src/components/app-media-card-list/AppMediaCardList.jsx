import { AppPoster } from "@cs/components/app-poster/AppPoster";
import "./app-media-card-list.css";
import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { AppVideoThumbnail } from "@cs/components/app-video-thumbnail/AppVideoThumbnail";
export function AppMediaCardList(props)
{
  const { items, title, handleViewMore, isVideo = false, isViewMore = true, mediaType = "movies" } = props;
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  // In order to keep track of the current scroll position
  const [currentScroll, setCurrentScroll] = useState(0);
  const mediaContentList = useRef();

  function handlePrevBtnClick()
  {
    if (currentScroll === 0) return;
    const boundingClient = mediaContentList.current.getBoundingClientRect();
    mediaContentList.current.scrollBy({ left: -boundingClient.width, behavior: 'smooth' });
    setCurrentScroll((prev) => prev - boundingClient.width);
  }

  function handleNextBtnClick()
  {
    const boundingClient = mediaContentList.current.getBoundingClientRect();
    mediaContentList.current.scrollBy({ left: currentScroll + boundingClient.width, behavior: "smooth" });
    setCurrentScroll((prev) => prev + boundingClient.width);
  }

  return (
    <div className="media-card-list">
      <div className="header">
        <div>  <span className="title">{title}</span> </div>
        {isViewMore && <button type="button" onClick={handleViewMore}>View More</button>}
      </div>
      <div className="media-card-content-wrapper"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >

        {isHovered &&
          <button type="button" className="action-btn prev-btn" onClick={handlePrevBtnClick}> {"<"}  </button>
        }

        <div className="media-card-content" ref={mediaContentList} >
          {items?.map((item) => isVideo ?
            <AppVideoThumbnail
              key={item.id}
              youtubeId={item.key}
              name={item.name}
              handleClickEvent={
                () => navigate(`video/${ item.key }`)
              } /> :
            <AppPoster key={item.id} {...item} handlePosterClick={() =>
            {
              navigate(`/${ mediaType }/${ item.id }`);
            }}
            />
          )
          }
        </div>
        {isHovered && <button type="button" className="action-btn next-btn" onClick={handleNextBtnClick} >{">"}</button>}
      </div>

    </div>
  );

}
AppMediaCardList.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  total: PropTypes.number,
  handleViewMore: PropTypes.func,
  isVideo: PropTypes.bool,
  isViewMore: PropTypes.bool,
  mediaType: PropTypes.string

};
