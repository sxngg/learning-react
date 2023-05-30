export function TwitterFollowCard({userName,alias}) {
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>

                <img className='tw-followCard-avatar'
                    alt="default avatar"
                    src={`https://unavatar.io/twitter/${alias}`}></img>

                <div className='tw-followCard-info'>
                    <strong> {userName}</strong>
                    <span className='tw-followCard-infoUserName'> @{alias}</span>
                </div>

            </header>
            <aside>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}