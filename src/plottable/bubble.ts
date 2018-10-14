import * as Plottable from 'plottable';

const data = [{ x: 1, y: 3, color: 'red' }, { x: 2, y: 3, color: 'yellow' }, { x: 3, y: 4, color: 'blue' },
    { x: 4, y: 8, color: 'green' }, { x: 2, y: 12, color: '#009CDE' }, { x: 3, y: 14, color: 'indigo' }];

const bubbleChart = () => {
    const xScale = new Plottable.Scales.Linear().domain([0, 5]);
    const yScale = new Plottable.Scales.Linear().domain([1, 16]);
    const xAxis = new Plottable.Axes.Numeric(xScale, 'bottom');
    const yAxis = new Plottable.Axes.Numeric(yScale, 'right');

    const plot = new Plottable.Plots.Scatter()
        .x(d => d.x, xScale)
        .y(d => d.y, yScale)
        .size( d => d.x / 2 * 20)
        .attr('fill', d => d.color)
        .addDataset(new Plottable.Dataset(data));

    const gridlines = new Plottable.Components.Gridlines(xScale, yScale);

    const group = new Plottable.Components.Group([plot, gridlines, yAxis]);

    const chart = new Plottable.Components.Table([
                        [group],
                        [xAxis]
                        ]);
    chart.renderTo('#bubbleChart');
};

export default bubbleChart;
