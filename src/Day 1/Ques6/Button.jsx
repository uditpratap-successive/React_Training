// 6.Create a functional component named Button that accepts props for text and color.
// Style the button using inline styles or CSS classes based on the color prop.
// Import and render the Button component in the App component with different text and color props.
const Button = (props) => {
  return (
    <>
      {props.binfo.map((val) => {
        console.log(val);
        return (
          <button style={{ margin: "1rem", color: val.color }}>
            {val.text}
          </button>
        );
      })}
    </>
  );
};

export default Button;
