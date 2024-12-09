import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./FirstTime.scss";

const FirstTime = () => {
  return (
    <Typography className="first-time">
      פעם ראשונה?{" "}
      <Link to="/register" style={{ color: "#007bff", textDecoration: "none" }}>
        פה נרשמים
      </Link>
    </Typography>
  );
};

export default FirstTime;
