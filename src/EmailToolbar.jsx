import './styles/EmailToolbar.css'
import { BackArrow } from './BackArrow'
import { DownloadButton } from './DownloadButton'
import { RubbishButton } from './RubbishButton'




export function EmailToolbar() {
    return (
        <nav className="email-toolbar">
          <ul>
            <li>
              <BackArrow />
            </li>
            <li>
              <DownloadButton />
            </li>
            <li>
              <RubbishButton />
            </li>
          </ul>
          <div className="space"></div>
          <div>
            <p>1 of 25</p>
            <button>&lt;</button>
            <button>&gt;</button>
          </div>
        </nav>
    )
}