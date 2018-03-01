import * as d3 from 'd3';

const dataset: number[][] = [
    [5, 20], [480, 90], [250, 50], [100, 33], [330, 95],
    [410, 12], [475, 44], [25, 67], [85, 21], [220, 88]
  ];
const scaleX = d3.scaleLinear()
  .domain([5, 500])
  .range([0, 250]);
const scale = d3.scaleLinear()
  .domain([12, 300])
  .range([0, 250]);
const sca_xAxis: any = d3.axisBottom(scaleX);
const sca_yAxis: any = d3.axisLeft(scale);
export default () => {
    const k = d3.select('.scatter')
    .selectAll('circle')
    .data(dataset)
    .enter()
    .append('circle')
    .attr('cx', (d) => scaleX(d[0]))
    .attr('cy', (d) => scale(d[1]))
    .attr('r', 5);
    k.append('g')
    .attr('class', 'axis')
    .attr('transform', 'translate(0, 250)')
    .call(sca_xAxis);
    k.append('g')
.attr('class', 'axis')
.attr('transform', 'translate(0, 0)')
.call(sca_yAxis);
};
