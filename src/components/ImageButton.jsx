// eslint-disable-next-line react/prop-types
export const ImageButton = ({src, onClick}) => {
    return(
        <button onClick={onClick}>
            <img src={src} alt="" />
        </button>
    )
}