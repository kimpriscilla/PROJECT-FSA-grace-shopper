import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Chart } from 'chart.js';
import * as ChartGeo from 'chartjs-chart-geo';

export default function OrderMap() {
  const data = useSelector((state) => state.stateOrders);
  console.log(data)

  useEffect(() => {
    fetch('https://unpkg.com/us-atlas/states-10m.json')
    .then((res) => res.json())
    .then((us) => {
      const nation = ChartGeo.topojson.feature(us, us.objects.nation).features[0];
      const states = ChartGeo.topojson.feature(us, us.objects.states).features;
      console.log('states', states)
      console.log('data', states.map((d) => ({feature: d, value: Math.random() * 10})))

      const chart = new Chart(document.getElementById("canvas").getContext("2d"), {
        type: 'choropleth',
        data: {
          labels: states.map((d) => d.properties.name),
          datasets: [{
            label: 'States',
            outline: nation,
            data: states.map((d) => ({feature: d, value: Math.random() * 10})),
          }]
        },
        options: {
          plugins: {
            legend: {
              display: false
            },
          },
          scales: {
            xy: {
              projection: 'albersUsa'
            },
            color: {
              quantize: 5,
              legend: {
                position: 'bottom-right',
                align: 'bottom'
              },
            }
          },
        }
      });
  });
  }, []);

  return (
    <div>
      <canvas id='canvas'></canvas>
    </div>
  );
};
