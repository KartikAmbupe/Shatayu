import PropTypes from "prop-types";

const LoginLayout = ({ children }) => {
  return <div className="login-layout">{children}</div>;
};

LoginLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LoginLayout;
