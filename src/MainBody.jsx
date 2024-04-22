



import { EmailContent } from './EmailContent'
import { EmailToolbar } from './EmailToolbar'


export function MainBody() {
    return (
        <main className="email-view">
            <EmailToolbar />
            <EmailContent />
        </main>
    )
}