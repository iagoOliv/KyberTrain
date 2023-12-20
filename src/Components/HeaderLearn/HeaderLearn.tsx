import './HeaderLearn.scss';

const HeaderLearn = () => {
    return (
        <>
            <header className="headerlearn">
                <div className="headerlearn__wrapper util__wrapper--1_6rem">
                    <div className="headerlearn__progress">
                        <span className="headerlearn__progress--text">Seu progresso</span>
                        <div className="headerlearn__progress--disc">0%</div>
                    </div>
                </div>

                <div className="headerlearn__wrapper util__wrapper--1_6rem">
                    <div className="headerlearn__account">
                        <span className="headerlearn__account--text">Minha conta</span>
                        <img src="https://placehold.co/42" alt="Placeholder image for the user profile picture." />
                    </div>
                </div>
            </header>
            <div className="header__pusher"></div>
        </>
    )
}

export default HeaderLearn;