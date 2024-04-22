import './styles/EmailActions.css'

import { BackArrow } from './BackArrow'
import { RubbishButton } from './RubbishButton'
import { StarButton } from './StarButton'

export function EmailActions() {
    return (
        <div className="email-action-icons">
              <ul>
                <li>
                  <BackArrow />
                </li>
                <li>
                  <StarButton />
                </li>
                <li>
                  <RubbishButton />
                </li>
              </ul>
            </div>
    )
}