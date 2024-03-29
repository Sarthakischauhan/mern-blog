import React,{useEffect, useState} from 'react'
import styles from "../Carousel/Carousel.module.css";


const Carousel = () => {
  const [values,setValues] = useState(["Gaming","Politics","Sports","Lifestyle","War"]);
  const [selected, setSelected] = useState([]);

  const manageSelected = (propSelected) => {
    if ( selected.includes())
    setSelected([...selected,propSelected.target.id]);
    console.log(selected);
  }

  useEffect(()=>{
    selected.forEach((item) => {
        const obj = document.getElementById(item);
        obj.style.backgroundColor = "#383838";

    })
  },[selected])
  return (
    <div className={styles.frame_carousel}>
        <button className={styles.add_carousel}>
            +
        </button>
        <div id={styles.frame_values}>
            {values.map((value, i) => {
                return (
                    <h5 className={styles.frame_value} id={i} onClick={(toggle) => addSelected(toggle)} key={i}>
                        {value}
                    </h5>
                )
            })}
        </div>
    </div>
  )
}

export default Carousel