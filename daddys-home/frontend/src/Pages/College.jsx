import VirginiaTech from "../Components/College/VirginiaTech";
import GeorgeMason from "../Components/College/GeorgeMason";
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types'; // Import PropTypes

const College = ({ setID }) => {
  const { id } = useParams();
	setID(id);

	if (id === "george-mason") {
    return <GeorgeMason />;
  } else if (id === "virginia-tech") {
    return <VirginiaTech />;
  } else {
    return <div>College not found</div>;
  }
};

College.propTypes = {
  setID: PropTypes.func.isRequired, // Validate that setID is a function and is required
};

export default College;
