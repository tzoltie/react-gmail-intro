import './styles/EmailContentHeader.css'


import { EmailInfo } from './EmailInfo'
import { EmailActions } from './EmailActions'
import { EmailDateInfo } from './EmailDateInfo'


export function EmailContentHeader() {
    return (
        <header className="email-content--header">
            <div className="avatar"></div>
            <EmailInfo />
            <EmailDateInfo />
            <EmailActions />
          </header>
    )
}