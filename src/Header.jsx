import { HeaderLeftMenu } from "./HeaderLeftMenu";
import { Searchbar } from "./Searchbar";

export function Header() {
    return (
        <header className="header">
            <HeaderLeftMenu />
            <Searchbar />
        </header>
    )
}