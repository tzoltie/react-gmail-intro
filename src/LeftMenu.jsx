import './styles/LeftMenu.css'
import { InboxList } from "./InboxList";

export function LeftMenu() {
    return (
        <nav className="left-menu">
            <InboxList />
        </nav>
    )
}