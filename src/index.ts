import * as d3 from 'd3';
import bar from './bar';
import scatter from './scatter';

const data: number[] = [40, 100, 80, 200, 550];
bar(data);
scatter();

const x = d3.scaleLinear()
    .domain([0, 100])
    .range([0, 400]);
const xAxis: any = d3.axisBottom(x);
const s = d3.select('.scale')
.attr('width', 400)
.attr('height', 100);
s.append('g')
    .attr('class', 'axis')
    .attr('transform', 'translate(0, 100)')
    .call(xAxis);
const y = d3.scaleLinear()
    .domain([0, 100])
    .range([0, 100]);
const yAxis: any = d3.axisLeft(y);
s.append('g')
.attr('class', 'axis')
.attr('transform', 'translate(0, 0)')
.call(yAxis);
