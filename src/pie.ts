import * as d3 from 'd3';

const svgWidth = 500;
const svgHeight = 300;
const radius = Math.min(svgWidth, svgHeight) / 2;

export default (data) => {
    const pie = d3.select('.pie-chart')
                .attr('width', svgWidth)
                .attr('height', svgHeight);

    const g = pie.append('g')
            .attr('transform', `translate(${radius}, ${radius})`);

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const chart = d3.pie().value( (d: any) => d.percentage);

    const path: any = d3.arc()
                .outerRadius(radius - 20)
                .innerRadius(0);
    const arc = g.selectAll('arc')
                .data(chart(data))
                .enter()
                .append('g');
    arc.append('path')
    .attr('d', path)
    .attr('fill', (d: any) => color(d.data.percentage));
    const label = d3.arc()
                .outerRadius(radius)
                .innerRadius(0);
    arc.append('text')
        .attr('transform', (d: any) => `translate( ${label.centroid(d)} )`)
        .attr('text-anchor', 'middle')
        .text((d: any) =>  `${d.data.platform}:${d.data.percentage}%`);

};
