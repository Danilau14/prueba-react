import { useEffect, useState } from 'react'
import './style.css'

const App = () => {
  const [numberLeft, setNumberLeft] = useState<number>(10)
  const [numberRight, setNumberRight] = useState<number>(10)
  const [activate, setActivate] = useState<boolean>(false)
  const [intervalId, setIntervalId] = useState(0);
  const [intervalIdRight, setIntervalIdRight] = useState(0);



  useEffect(() => {
    if (numberLeft == 0) {
      handleRight()
      return clearInterval(intervalId)
    }
  }, [numberLeft])

  useEffect(() => {
    if (numberRight == 0)
      return clearInterval(intervalIdRight)
  }, [numberRight])

  useEffect(() => {
    if (numberLeft == 0 && numberRight == 0) {
      handleLeft()
    }
    if (numberLeft == -10) return clearInterval(intervalId)
  }, [numberLeft, numberRight])

  useEffect(() => {
    if (numberLeft == -10 && numberRight == 0) {
      handleRight()
    }
    if (numberRight == -10) return clearInterval(intervalIdRight)
  }, [numberLeft, numberRight])

  useEffect(() => {
    if (numberLeft == -10 && numberRight == -10) {
      handleLeftPlus()
      handleRightPlus()
    }     
  }, [numberLeft, numberRight])

  const handleLeft = () => {
    const intervalId = setInterval(() => {
      setNumberLeft(numberLeft => numberLeft - 1);
    }, 500);
    setIntervalId(intervalId);
  }
  const handleRight = () => {
    const intervalIdRight = setInterval(() => {
      setNumberRight(numberRight => numberRight - 1);
    }, 500);
    setIntervalIdRight(intervalIdRight);
  }

  const handleLeftPlus = () => {
    const intervalId = setInterval(() => {
      setNumberLeft(numberLeft => numberLeft + 1);
    }, 500);
    setIntervalId(intervalId);
  }

  const handleRightPlus = () => {
    const intervalIdRight = setInterval(() => {
      setNumberRight(numberRight => numberRight + 1);
    }, 500);
    setIntervalIdRight(intervalIdRight);
  }



  return (
    <>
      <div className='wrapper '>
        <div>
          <p className='text'>
            {numberLeft}
          </p>
        </div>
        <p className='text'>
          {numberRight}
        </p>
      </div>
      <div className='button'  >
        <button onClick={handleLeft}
        >
          Iniciar cuenta regresiva
        </button>
      </div>
    </>

  )
}

export default App

