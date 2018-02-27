import * as d3 from 'd3';

const data = [40, 100, 80, 200, 550];

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
