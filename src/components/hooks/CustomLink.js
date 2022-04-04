
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link className="header-nav-div-a"
                style={{
                    paddingBottom: match ? 15 : 15,
                    borderBottomColor: match ? "blue" : "gray",
                    hover: match ? "blue" : "black",
                    color: match ? "blue" : "black"
                }}
                to={to}
                {...props}
            >
                {children}
            </Link>
            {match && ''}
        </div>
    );
}

export default CustomLink;