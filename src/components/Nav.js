import whiteLogo from '../images/tinder_logo_white.png'
import colorLogo from '../images/color_logo_tinder.png'

const Nav = ({ minimal, setShowModal, showModal, setIsSignUp }) => {
    const handleClick = () => {
        setShowModal(true)
        setIsSignUp(false)
    }

    const authToken = false
    return (
        <nav>
            <div className="logo-container">
                <img alt="logo" className="logo" src={minimal ? colorLogo : whiteLogo} />
            </div>
            {!authToken && !minimal && <button 
                className="nav-button" 
                onClick={handleClick}
                disabled={showModal}
            >Log in</button>}
        </nav>
    )
}

export default Nav