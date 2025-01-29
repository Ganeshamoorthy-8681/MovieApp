import { AppViewMore } from "@cs/components/app-view/AppViewMore";
import { ImagePath } from "@cs/constants/ImageConstants";
import { useSearchParams } from "@cs/hooks/useSearchQueryParams";
import { SearchService } from "@cs/services/searchService";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export function AppSearch()
{
  const query = useSearchParams().get("query");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoadMore, setIsLoadMore] = useState(false);
  const navigate = useNavigate();

  const [searchData, setSearchData] = useState([]);

  useEffect(() =>
  {
    setSearchData([]);
    setCurrentPage(1);
  }, [query]);

  useEffect(() =>
  {
    SearchService.getSearchResult(query, currentPage)
      .then((response) =>
      {
        const isLoadMore = currentPage <= response.data?.total_pages - 1;
        setIsLoadMore(isLoadMore);
        const data = response.data.results.filter((data) => data.media_type !== "person" && data.poster_path)
          .map((item) => ({
            id: item.id,
            posterImageUrl: ImagePath.POSTER_PATH + item.poster_path,
            title: item.title,
            mediaType: item.media_type
          }
          ));
        setSearchData((prevData) => prevData.concat(data));
      });
  }, [currentPage, query]);


  return (
    <>
      {searchData &&
        <AppViewMore
          title={`Shown Results for ${ query }`}
          items={searchData}
          isLoadMore={isLoadMore}
          handleLoadMore={() => setCurrentPage((prevValue) => prevValue + 1)}
          handlePosterClick={(id, mediaType) => navigate(`/${ mediaType === "movie" ? "movies" : "tv" }/${ id }`)}
        />
      }
    </>
  );
}
