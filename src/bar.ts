import * as d3 from 'd3';
const width = 420;
const height = 200;
const scaleY = d3.scaleLinear()
                .domain([0, 42])
                .range([0, 200]);
// const y: any = d3.scaleLinear()
//                 .range([height, 0]);
const scaleX = d3.scaleLinear()
                .domain([0, 42])
                .range([0, 420]);
const xAxis: any = d3.axisBottom(scaleX)
                        .ticks(5);
const yAxis: any = d3.axisLeft(scaleY);
export default (datum: any) => {
 const barChart  =   d3.select('.bar')
    .attr('width', 400)
    .attr('height', 150);

 barChart.selectAll('rect')
    .data(datum)
.enter().append('rect')
    .attr('width', (width / datum.length) - 5)
    .attr('y', (d: any) => height - scaleY(d) )
    .attr('x', (d, i) => i * (width / datum.length))
    .attr('height', (d: any) =>  scaleY(d));

 barChart.selectAll('text')
    .data(datum)
.enter().append('text')
        .attr('x', (d, i) => i * (width / datum.length) )
        .attr('y', (d: any) => height - scaleY(d) - 2 )
        .text( (d: any) => d )
        .attr('fill', '#A64C38')
        .attr('text-anchor', 'middle');
 barChart.append('g')
    .attr('class', 'axis')
    .attr('transform', (d, i) => 'translate(0, ' + (height) + ')')
    .call(xAxis);
 barChart.append('g')
.attr('class', 'axis')
.attr('transform', 'translate(50,  10)')
.call(yAxis);
};
