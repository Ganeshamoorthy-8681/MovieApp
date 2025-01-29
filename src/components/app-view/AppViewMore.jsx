import { AppPoster } from "@cs/components/app-poster/AppPoster";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledAppViewMore = styled.div`
  width:100%;
  box-sizing:border-box;
  background-color: var(--bg-color-3);
  padding:1rem;
  
  .title {
    font-size:2rem;
    padding-left: 1rem;
    margin-bottom:1rem;
    color:var(--text-color-2);
  }
    .content {
      max-width:1400px;
      margin:0 auto;
      display:flex;
      flex-wrap:wrap;
      gap:1rem;
    }
    .load-more-btn {
      all: unset;
      color: var(--active-color);
      cursor: pointer;
      background-color: var(--active-color);
      padding: 0.5rem 1rem;
      border-radius: 6px;
      color: var(--text-color-2);
    }
`;

export function AppViewMore(props)
{
  const { handleLoadMore, title, items, handlePosterClick, isLoadMore = true } = props;

  return (
    <StyledAppViewMore>
      <div className="title">
        {title}
      </div>
      <div className="content">
        {items.map((item) => <AppPoster key={item.id} {...item} handlePosterClick={() => handlePosterClick(item.id, item.mediaType)} />)}
      </div>
      {
        isLoadMore && <div style={{ textAlign: "center", marginTop: "1rem" }}> <button type="button" className="load-more-btn" onClick={handleLoadMore}>Load More</button></div>
      }
    </StyledAppViewMore>
  );
}

AppViewMore.propTypes = {
  handleLoadMore: PropTypes.func,
  title: PropTypes.string,
  handlePosterClick: PropTypes.func,
  items: PropTypes.array,
  isLoadMore: PropTypes.bool
};
