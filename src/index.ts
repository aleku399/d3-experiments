import * as d3 from 'd3';

const data: number[] = [40, 100, 80, 200, 550];
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
const b = d3.select('.bar')
        .attr('height', 200)
        .attr('width', 600)
        .selectAll('rect')
        .data(data)
    .enter().append('rect')
        .attr('width', 15)
        .attr('x', (d, i) => i * 20)
        .attr('y', d => 200 - d )
        .attr('height', (d) => d)
        .attr('fill', 'teal');
b.selectAll('text')
    .data(data)
    .enter()
    .append('text')
    .text(d => d)
    .attr('x', (d, i) => i * 20)
    .attr('y', d => 200 - (d * 4))
    .attr('fill', 'white');
const k = d3.select('.scatter')
    .attr('preserveAspectRatio', 'xMinYMin meet')
    .attr('viewBox', '0 0 250 250')
    .selectAll('circle')
    .data(dataset)
    .enter()
    .append('circle')
    .attr('cx', (d) => scaleX(d[0]))
    .attr('cy', (d) => scale(d[1]))
    .attr('r', 5);
const sca_xAxis: any = d3.axisBottom(scaleX);
k.append('g')
    .attr('class', 'axis')
    .attr('transform', 'translate(0, 250)')
    .call(sca_xAxis);
const sca_yAxis: any = d3.axisLeft(scale);
k.append('g')
.attr('class', 'axis')
.attr('transform', 'translate(0, 0)')
.call(sca_yAxis);

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
