import { Link } from "react-router-dom";
import { ArrowBackIcon } from "../Icons";

const Items = (props :any) => {
  const { page } = props;
  if (page === "Home") {
    return <div id="page">{page}</div>;
  } else {
    return (
      <div id="page">
        <Link to="/">
          <button className="btn">
            <ArrowBackIcon /> Back to Home
          </button>
        </Link>
        {page}
      </div>
    );
  }
};

export default Items;