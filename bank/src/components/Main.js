import { useEffect, useState } from "react";
import SliderInfo from './SliderInfo'
import SelectYear from './SelectYear';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import PieChart from "./PieChart";
import { Pagination } from '@mui/material';
import './Main.css';
Chart.register(CategoryScale);
function Main() {
    const [homevalue, setHomeValue] = useState(3000);  
  const [downPaymentValue, setDownPaymentValue] = useState(600);  
  const [loanAmountValue, setLoanAmountValue] = useState(2400);  
  const [interestValue, setInterestValue] = useState(5); 
  const [tenureParent, setTenureParent] = useState();
  const [monthlyInterest, setMonthlyInterest] = useState();

  const [chartData, setChartData] = useState({
    labels: ["Principal", "Interest"], 
    datasets: [
      {
        label: "Monthly Payment",
        data: [homevalue, 230],
        backgroundColor: [
          "#F00F00",
          "#FCFCFC",  
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  })

  useEffect(() =>{
   const downPayment = homevalue *0.20;
   setDownPaymentValue(downPayment);

   const loanAmount = homevalue - downPaymentValue
    setLoanAmountValue(loanAmount)
  },[homevalue])

// useEffect(()=>{
//  const loanAmount = homevalue - downPaymentValue;
//  setLoanAmountValue(loanAmount);
// },[downPaymentValue])

// useEffect(()=>{
//     const downPayment =homevalue - loanAmountValue ;
//     setDownPaymentValue(downPayment);
//    },[loanAmountValue])

  useEffect(()=>{
    const r = interestValue/12;
    const n = tenureParent * 12;
    const EMI = (loanAmountValue*r*(1 + r)^n) / ((1 + r)^n - 1)
    setMonthlyInterest(EMI)
  },[loanAmountValue, interestValue, tenureParent])
  return (
    <div className='container'>
        <div className='left-side'>
            <SliderInfo min={1000} max={10000} title={"Home Value"} value={homevalue} setValue={setHomeValue} symbol={"$"} step={100}/>

            <SliderInfo min={0} max={3000} title={"Down Payment"} value={downPaymentValue} symbol={"$"} setValue={setDownPaymentValue} step={100}/>

            <SliderInfo min={0} max={3000} title={"Loan Amount"} value={loanAmountValue} symbol={"$"} setValue={setLoanAmountValue} step={100}/>

            <SliderInfo min={2} max={18} title={"Intrest Rate"} value={interestValue} symbol={"%"} setValue={setInterestValue} step={1}/>

            <SelectYear setTenureParent={setTenureParent}/>
        </div>
        <div className='right-side'></div>
        <PieChart chartData={chartData} monthlyInterest={monthlyInterest} />
    </div>
  )
}

export default Main