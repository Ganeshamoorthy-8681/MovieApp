import { useLocation } from "react-router";

export const useSearchParams = ()=>{
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  return queryParams;
}
