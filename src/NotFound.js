import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry,</h2>
            <p>Resource you are trying to Fetch is Not Found</p>
            <Link to="/">Back To Home</Link>
        </div>
     );
}
 
export default NotFound;