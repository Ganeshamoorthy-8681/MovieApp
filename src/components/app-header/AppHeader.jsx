import { NavLink, useNavigate } from "react-router";
import styles from "./AppHeader.module.css";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import { useSearchParams } from "@cs/hooks/useSearchQueryParams";

export function AppHeader()
{
    const navigate = useNavigate();
    const queryParams = useSearchParams();
    const [searchValue, setSearchValue] = useState(queryParams.get("query") ?? "");

    useEffect(() =>
    {
        if (searchValue?.length)
        {
            navigate(`/search/?query=${ searchValue }`);
        }
    }, [searchValue]);


    return (
        <div className={styles.header}>
            <div className={styles.headerWrapper}>
                <div className={styles.logo}>
                    <span>CineSphere</span>
                </div>
                <div className={styles.links}>
                    <NavLink to="/" className={(navProps) => navProps.isActive ? styles.active : ""} >
                        All
                    </NavLink>
                    <NavLink to="movies" className={(navProps) => navProps.isActive ? styles.active : ""} >
                        Movies
                    </NavLink>
                    <NavLink to="tv" className={(navProps) => navProps.isActive ? styles.active : ""}  >
                        TV Series
                    </NavLink>
                </div>
            </div>

            <div className={styles.searchBar}>
                <input
                    value={searchValue}
                    placeholder="Search for Movies, Tv series"
                    onChange={(e) =>
                    {
                        setSearchValue(e.target.value);
                        if (e.target.value == "") { window.history.back(); }

                    }} />
                <div className={styles["close-icon"]}>
                    <IconButton size="sm" onClick={() =>
                    {
                        setSearchValue("");
                        window.history.back();
                    }}>
                        <CloseIcon sx={{ color: "white", fontSize: "1.25rem" }} />
                    </IconButton>
                </div>

            </div>
        </div>
    );
}
