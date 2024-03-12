import { Pie } from "react-chartjs-2";

const PieChart = ({chartData, monthlyInterest}) => {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Monthly Payment</h2>
      <p style={{ textAlign: "center", fontSize: "26px" }}>${monthlyInterest}</p>
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
            }
          }
        }}
      />
    </div>
  )
}

export default PieChart