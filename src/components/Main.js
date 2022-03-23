import classNames from 'classnames';
import { useEffect, useState } from 'react'
import AsidePanel from './AsidePanel';
import { apiGet } from './helpers';
import SelectTab from './SelectTab';
import SquaresList from './SquaresList';

const rulesText = `
  For start choose mode from select dropdown.
  When you move mouse over square it's changing color into blue.
  When you hover colored square it's changed color again into white.
  For win you must coloring all squaers into blue.
  Good luck!
`;

const Main = () => {
  const [fetched, setFetched] = useState([]);
  const [modeState, setModeState] = useState(null);
  const [modeFields, setModeFields] = useState('null');
  const [squaresArray, setSquaresArray] = useState([]);
  const [squareInform, setSquareInform] = useState([]);
  const [startPlay, setStartPlay] = useState(false);

  useEffect(() => {
    apiGet(setFetched);
  }, []);

  useEffect(() => {
    if (squaresArray.length > 0 && squaresArray.every(el => el === true)) {
      alert('Congrats');
      setStartPlay(false);
    }
  }, [squaresArray])

  const selectChange =(event) => {
    const changedMode = fetched.find(el => el.name === event.target.value);
    setModeState(changedMode);
  };

  const startGame = () => {
    if (modeState) {
      setSquaresArray(Array(modeState.field**2).fill(false));
      setModeFields(modeState.name);
      setSquareInform([]);
      setStartPlay(true);
    }
  };

  const rulesOfGame = () => {
    alert(rulesText);
  };

  const onOverHandler = (squareId) => {
    if (startPlay) {
      const row = Math.ceil((squareId + 1) / modeState.field);
      const column = Math.ceil((squareId + 1) % modeState.field);
      setSquareInform((squareInform) => [
        ...squareInform,
        `
          row ${row}
          column ${column === 0 ? modeState.field : column}
        `
      ]);

      const arrayReversedSquare = [...squaresArray];
      arrayReversedSquare.splice(squareId, 1, !squaresArray[squareId]);
      setSquaresArray(arrayReversedSquare);
    }
  };

  return (
    <main className="mainContainer">
      <div className='squaresArea'>
        <div className='selectBlock'>
          <SelectTab
            fetchedItems={fetched}
            selectChange={selectChange}
          />
          <button className='startButton' onClick={startGame}>Start Game</button>
          <button className='rulesButton' onClick={rulesOfGame}>Rules</button>
        </div>
        {squaresArray.length ?
          <SquaresList
            squaresArray={squaresArray}
            mode={modeFields.toLowerCase()}
            onOverHandler={onOverHandler}
          /> : (
            <div className={classNames('squaresBlock', 'chooseModeText')}>
              Choose Mode
            </div>
          )
        }
      </div>
      <div className='asideArea'>
        <AsidePanel squareInform={squareInform}/>
      </div>
    </main>
  );
}

export default Main;