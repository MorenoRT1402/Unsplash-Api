import { useLocation, useNavigate } from "react-router-dom"

// eslint-disable-next-line react/prop-types
export const PathButton = ({path, buttonText}) => {
    const navigate = useNavigate();
    const location = useLocation();

    const buttonClass = location.pathname === path ? '--selected' : '';

    return (
    <button onClick={() => navigate(path)} className={`path-button ${buttonClass}`}>{buttonText}</button>
    )
}