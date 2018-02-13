import * as d3 from 'd3';

const data = [4, 5, 10, 16, 23, 35];

d3.select('.chart')
.selectAll('div')
.enter()
.data(data)
.append('div')
.style('width', (d) => d + 'px' )
.text(d => '$ ' + d);

console.log('working', 'yes!');
