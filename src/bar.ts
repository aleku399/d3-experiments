import * as d3 from 'd3';

const scale = d3.scaleLinear()
                .domain([0, 550])
                .range([0, 300]);
const sca_xAxis: any = d3.axisBottom(scale);
const sca_yAxis: any = d3.axisLeft(scale);
export default (datum: number[]) => {
 const b  =   d3.select('.bar')
    .attr('height', 200)
    .attr('width', 300)
    .selectAll('rect')
    .data(datum)
.enter().append('rect')
    .attr('width', 15)
    .attr('x', (d, i) => i * 20)
    .attr('y', d => 200 - scale(d) )
    .attr('height', (d) => scale(d))
    .attr('fill', 'teal');
 b.selectAll('text')
.data(datum)
.text(d => d);
 b.enter()
.append('text')
.text(d => d)
.attr('x', (d, i) => i * 20)
.attr('y', d => 200 - (d))
.attr('fill', 'white');
 b.append('g')
    .attr('class', 'axis')
    .attr('transform', 'translate(0, 300)')
    .call(sca_xAxis);
 b.append('g')
.attr('class', 'axis')
.call(sca_yAxis);
};
