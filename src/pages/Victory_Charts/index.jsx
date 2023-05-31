import React from 'react'
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory'

import './styles.css'

export default function VictoryCharts() {
  const data = [
    {quarter: 1, earnings: 0, color:'red'},
    {quarter: 2, earnings: 16500, color:'red'},
    {quarter: 3, earnings: 14250, color:'white'},
    {quarter: 4, earnings: 19000, color:'#00FF00'},
    {quarter: 5, earnings: 29000, color:'pink'},
    {quarter: 6, earnings: 17000, color:'red'},
    {quarter: 7, earnings: 19000, color:'red'},
    {quarter: 8, earnings: 20000, color:'red'},
    {quarter: 9, earnings: 12000, color:'red'},
    {quarter: 10, earnings: 0, color:'red'}
  
  ];

  return (
    <div className='VictoryCharts'>
        <h2>
          Victory Charts
        </h2>
        <section className="charts_container">
          <div className="barchar">
            <h3>Bar Char</h3>
            <VictoryChart>
              <VictoryAxis
                tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                tickFormat={["", "Q1", "Q2", "Q3", "Q4", "Q5", "Q6", 'Q7', 'Q8', '']}
                theme={VictoryTheme.material}
              />
              <VictoryAxis
                dependentAxis
                tickFormat={(x) => (`${x / 1000}k`)}
              />
              <VictoryBar
                  data={data}
                  x="quarter"
                  y="earnings"
                  style={{ data: { fill: "#2c0139" } }}
              />
            </VictoryChart>
          </div>
          <div className="barchar">
            <h3>Bar Char</h3>
            <VictoryBar
                data={data}
                x="quarter"
                y="earnings"
            />
          </div>
          <div className="barchar">
            <h3>Bar Char</h3>
            <VictoryBar
                data={data}
                x="quarter"
                y="earnings"
            />
          </div>
          <div className="barchar">
            <h3>Bar Char</h3>
            <VictoryBar
                data={data}
                x="quarter"
                y="earnings"
            />
          </div>

        </section>
    </div>
  )
}
