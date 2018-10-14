import * as Plottable from 'plottable';

const data = [{ x: 1, y: 1, val: 2 }, { x: 2, y: 1, val: 1 }, { x: 3, y: 1, val: 3 },
    { x: 3, y: 2, val: 3 }, { x: 2, y: 2 , val: 2}, { x: 1, y: 2, val: 1 }];

const rectangleChart = () => {
    const xScale = new Plottable.Scales.Category();
    const yScale = new Plottable.Scales.Category();
    const colorScale = new Plottable.Scales.InterpolatedColor();
    colorScale.range(['red', 'yellow']);

    const plot = new Plottable.Plots.Rectangle()
        .x(d => d.x, xScale)
        .y(d => d.y, yScale)
        .attr('fill', d => d.val, colorScale)
        .addDataset(new Plottable.Dataset(data))
        .renderTo('#rectangleChart');
};

export default rectangleChart;
