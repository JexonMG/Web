import '/src/App.css'
import { useState } from 'react'

export function TwiterFollowCard({ userName, children, inicialIsFollowing }) {
    const [isFollowing, setIsFollowing] = useState(inicialIsFollowing)
    
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClass = isFollowing 
    ? 'tw-followCard-button is-following' 
    : 'tw-followCard-button'
    
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    
    return (
    <article className="tw-followCard">
        <header className="tw-followCard-header">
            <img 
            className='tw-followCard-avatar' 
            alt='El avatar de midudev' 
            src={`https://unavatar.io/${userName}`}/>
            <div className='tw-followCard-info'>
                <strong> {children}</strong>
                <span 
                className='tw-followCard-infoUserName'>@{userName}
                </span>
            </div>
        </header>

        <aside>
            <button className={buttonClass} onClick={handleClick}>{text} 
            </button>
        </aside>
    </article>
)}

