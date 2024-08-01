import { useLocation, useNavigate } from "react-router-dom"

// eslint-disable-next-line react/prop-types
export const PathButton = ({path, children}) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = () => {
        navigate(path);
    }

    const isActive = location.pathname === path;

    const buttonClass = isActive ? '--selected' : '';


    return (
    <button onClick={handleClick} className={`path-button ${buttonClass}`}>{children}</button>
    )
}