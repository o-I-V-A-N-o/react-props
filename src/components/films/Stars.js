import Star from "./Star";

function Stars(props) {
  if (props.count < 1 || props.count > 5) {
    return null;
  }
  
  let star = [];
  
  for(let i = 0; i < props.count; i++){
    star.push(<Star />);
  }

  return star;
}

export default Stars;