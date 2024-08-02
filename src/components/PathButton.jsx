import { useLocation, useNavigate } from "react-router-dom"

// eslint-disable-next-line react/prop-types
export const PathButton = ({path, buttonText}) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = () => navigate(path);

    const buttonClass = location.pathname === path ? '--selected' : '';

    return (
    <button onClick={handleClick} className={`path-button ${buttonClass}`}>{buttonText}</button>
    )
}