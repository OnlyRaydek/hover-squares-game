import classNames from "classnames";

const Square = ({
  squareItem,
  squareId,
  onOverHandler
}) => {
  console.log(squareItem);

  return (
    <li className={classNames("square", {squareHovered: squareItem})} onMouseEnter={() => onOverHandler(squareId)}>
    </li>
  );
};

export default Square;