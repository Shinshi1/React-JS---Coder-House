import './mybutton.css'
import React, {useState} from 'react'

const MyButton = (props) => {
let [colorBtn, setColorBtn] = useState(props.color)

    const handleClick = () => {
        setColorBtn("grey")
    }

  return (
    <div className='btn-info-container'>
        <button onClick={handleClick} className={'btn-info'} style={{backgroundColor: colorBtn}}>Ver más</button>
    </div>
  )
}

export default MyButton