import "./NavButton.css";

const NavButton = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

export default NavButton;
