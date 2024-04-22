

import { EmailContentHeader } from './EmailContentHeader'
import { EmailBody } from './EmailBody'
import { EmailResponseAction } from './EmailResponseAction'
import { EmailTitle } from './EmailTitle'


export function EmailContent() {
    return (
        <article className="email-content">
          <EmailTitle />
          <EmailContentHeader />
          <EmailBody />
          <EmailResponseAction />
        </article>
    )
}