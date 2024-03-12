import React, {useState} from 'react'
import Slider from '@mui/material/Slider';
function SliderInfo(props) {
    function valuetext(value) {
        return `${value}°C`;
      }
  return (
    <div>
        <h4 style={{fontWeight: "400"}}>{props.title}</h4>
        <span>{props.symbol}{props.value}</span>
          <Slider
        aria-label="Temperature"
        defaultValue={props.value}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        shiftStep={30}
        step={props.step}
        marks
        min={props.min}
        max={props.max}
        onChange={(e)=>{
          props.setValue(e.target.value);
        }}
      />
      <div style={{display: "flex", width:"100%", justifyContent: "space-between", alignItems:"start"}}>
      <span style={{fontSize: "14px", color:"rgba(0, 0, 0, 0.6)"}}>{props.symbol}{props.min}</span>
      <span style={{fontSize: "14px", color:"rgba(0, 0, 0, 0.6)"}}>{props.symbol}{props.max}</span>
    </div>
    </div>
  )
}

export default SliderInfo