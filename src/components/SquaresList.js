import classnames from "classnames";
import Square from "./Square";

const SquaresList = ({
  squaresArray,
  mode,
  onOverHandler
}) => {

  return (
    <ul className={classnames('squaresBlock', [`${mode}-mode`])}>
      {squaresArray.map((item, key) =>
        <Square
          key={`${item}-${key}`}
          squareItem={item}
          squareId={key}
          onOverHandler={onOverHandler}
        />
      )}
    </ul>
  );
};

export default SquaresList;