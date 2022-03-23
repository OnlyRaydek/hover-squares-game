import React, { useEffect, useState } from 'react'
import AsidePanel from './AsidePanel';
import { apiGet } from './helpers';
import SelectTab from './SelectTab';
import SquaresList from './SquaresList';

//* data for game modes if api doesn't work
// const json = [
//   {
//     name: 'easy',
//     field: 5,
//   },
//   {
//     name: 'normal',
//     field: 15,
//   },
//   {
//     name: 'hard',
//     field: 25,
//   },
// ];

const Main = () => {
  const [fetched, setFetched] = useState([]);
  const [modeState, setModeState] = useState(null);
  const [modeFields, setModeFields] = useState('null');
  const [squaresArray, setSquaresArray] = useState([]);
  const [squareInform, setSquareInform] = useState([])

  useEffect(() => {
    apiGet(setFetched);
    // setFetched(json);
  }, []);

  const selectChange =(event) => {
    const changedMode = fetched.find(el => el.name === event.target.value);
    setModeState(changedMode);
  };

  const startGame = () => {
    if (modeState) {
      setSquaresArray(Array(modeState.field**2).fill(false));
      setModeFields(modeState.name);
    }
  };

  const onOverHandler = (squareId) => {
    setSquareInform((squareInform) => [...squareInform, squareId])
    const arrayReversedSquare = [...squaresArray];
    arrayReversedSquare.splice(squareId, 1, !squaresArray[squareId]);
    setSquaresArray(arrayReversedSquare);
  };

  return (
    <main className="mainContainer">
      <div className='squaresArea'>
        <div className='selectBlock'>
          <SelectTab
            fetchedItems={fetched}
            selectChange={selectChange}
          />
          <button onClick={startGame}>Fetch API</button>
        </div>
        <SquaresList
          squaresArray={squaresArray}
          mode={modeFields.toLowerCase()}
          onOverHandler={onOverHandler}
        />
      </div>
      <div className='asideArea'>
        <AsidePanel squareInform={squareInform}/>
      </div>
    </main>
  );
}

export default Main;