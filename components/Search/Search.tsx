import { SearchProps } from "./Search.props";
import styles from "./Search.module.css"
import classnames from "classnames"
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import SearchIcon from "./search.svg"
import { KeyboardEvent, useState } from "react";
import { useRouter } from "next/router";

export const Search = ({className, ...props}: SearchProps) : JSX.Element=>{
    
    const [search, setSearch] = useState<string>("");
    const router = useRouter();

    const goToSearch = () =>{
        router.push({
            pathname: '/search',
            query: {
                q: search
            }
        });
    };

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            goToSearch();
        }
    }

    return <div className={classnames(
        className, styles.search
    )} {...props}>
        <Input 
            className={styles.input}
            placeholder="Search..."
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
        />
        <Button 
            appearance='primary' 
            className={styles.searchBtn}
            onClick={goToSearch}
        >
            <SearchIcon/>
        </Button>
    </div>
}