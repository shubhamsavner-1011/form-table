import { IconPath } from "@/constants/iconPath";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Show = ({about}) => {
    const [showMore, setShowMore] = useState(false); 
  return (
    <div>
      <p>
        {showMore ? about : `${about?.substring(0, 20)}`}
        <button className="btn" onClick={() => setShowMore(!showMore)}>
          {showMore ? (
            <p style={{ textDecoration: "underline", color: "navy" }}>
              Show Less
              <span style={{ marginLeft: "5px" }}>
                <FontAwesomeIcon icon={IconPath.showUp} />
              </span>
            </p>
          ) : (
            <p style={{ textDecoration: "underline", color: "navy" }}>
              Show More
              <span style={{ marginLeft: "5px" }}>
                <FontAwesomeIcon icon={IconPath.showDown} />
              </span>{" "}
            </p>
          )}
        </button>
      </p>
    </div>
  );
};

export default Show;
