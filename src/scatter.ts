import * as d3 from 'd3';

const dataset: number[][] = [
    [5, 20], [480, 90], [250, 50], [100, 33], [330, 95],
    [410, 12], [475, 44], [25, 67], [85, 21], [220, 88]
  ];
const width = 250;
const height = 250;
const padding = 20;
const scaleX = d3.scaleLinear()
  .domain([5, 500])
  .range([padding, width - padding * 2]);
const scaleY = d3.scaleLinear()
  .domain([12, 300])
  .range([height - padding, padding]);
const yAxis = d3.scaleLinear()
            .domain([12, 300])
            .range([height, 0]);
const sca_xAxis: any = d3.axisBottom(scaleX).ticks(5);
const sca_yAxis: any = d3.axisLeft(yAxis).ticks(5);
export default () => {
    const svg = d3.select('.scatter')
    .attr('width', width)
    .attr('height', height);
    svg.selectAll('circle')
    .data(dataset)
    .enter()
    .append('circle')
    .attr('cx', (d) => scaleX(d[0]))
    .attr('cy', (d) => scaleY(d[1]))
    .attr('r', 5);
    svg.append('g')
    .attr('class', 'axis')
    .attr('transform', 'translate(-6, ' + (height ) + ')')
    .call(sca_xAxis);
    svg.append('g')
.attr('class', 'axis')
.attr('transform', 'translate(13, 0)')
.call(sca_yAxis);
};
