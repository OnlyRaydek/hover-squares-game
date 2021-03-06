import classNames from 'classnames';
import { useEffect, useRef } from 'react'

const AsidePanel = ({ squareInform }) => {
  const informEndRef = useRef(null)

  useEffect(() => {
    scrollToBottom()
  }, [squareInform]);

  const scrollToBottom = () => {
    informEndRef.current?.scrollIntoView({ behavior: "smooth" })
  };

  return (
    <>
      <header className="asideHeader">
        Hover Squares
      </header>
      <ul className="asideList">
        {squareInform.map((item) =>
          <li key={Math.random()} className={classNames("asideItem")}>
            {item}
          </li>
        )}
        <div ref={informEndRef} />
      </ul>
    </>
  )
}

export default AsidePanel;