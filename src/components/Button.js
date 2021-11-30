import "../styles/Button.css";

function Button(props) {
    return (
        <div
            className="button"
            style={{ minWidth: "150px", textAlign: "center", ...props.style }}
            {...props}
        >
            {props.children}
        </div>
    );
}

export default Button;
