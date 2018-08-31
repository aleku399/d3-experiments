import * as d3 from 'd3';

export default (data) => {
    const svgWidth = 600;
    const svgHeight = 400;
    const margin = {top: 20, right: 20, bottom: 30, left: 50 };
    const width = svgWidth - margin.left - margin.right;
    const height = svgHeight - margin.top - margin.bottom;

    const svg = d3.select('.line-chart')
                .attr('width', svgWidth)
                .attr('height', svgHeight);
    const g: any = svg.append('g')
                .attr('transform', `translate( ${margin.left}, ${margin.top} )`);
    const x: any = d3.scaleTime()
                .rangeRound([0, width]);
    const y: any = d3.scaleLinear()
            .rangeRound([height, 0]);
    const line = d3.line()
                .x((d: any) => x(d.date))
                .y((d: any) => y(d.value));
    x.domain(d3.extent(data, (d: any) => d.date));
    y.domain(d3.extent(data, (d: any) => d.value));
    g.append('g')
        .attr('transform', `translate(0, ${height} )`)
        .call(d3.axisBottom(x))
        .select('.domain')
        .remove();
    g.append('g')
        .call(d3.axisLeft(y))
        .append('text')
        .attr('fill', '#000')
        .attr('transform', 'rotate(-90)')
        .attr('y', 6)
        .attr('dy', '0.71em')
        .attr('text-anchor', 'end')
        .text('Price ($)');

    g.append('path')
        .datum(data)
        .attr('fill', 'none')
        .attr('stroke', 'steelblue')
        .attr('stroke-linejoin', 'round')
        .attr('stroke-linecap', 'round')
        .attr('stroke-width', 1.5)
        .attr('d', line);
};
