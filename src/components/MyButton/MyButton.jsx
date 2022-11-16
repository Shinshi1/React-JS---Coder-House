import './mybutton.css'
// import React, {useState} from 'react'

const MyButton = ({color, children, classBtn, onClick}) => {
  /*
  let [colorBtn, setColorBtn] = useState(color)

    const handleClick = () => {
        setColorBtn("grey")
    }
*/
  return (
        <button onClick={onClick} className={classBtn} /* style={{backgroundColor: colorBtn}} */>{children}</button>
  )
}

export default MyButton