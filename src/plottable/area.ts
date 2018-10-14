import * as Plottable from 'plottable';

const data = [{ x: 0, y: 1 }, { x: 1, y: 3 }, { x: 2, y: 1 },
    { x: 3, y: 8 }, { x: 4, y: 5 }, { x: 5, y: 16 }];

const areaChart = () => {
    const xScale = new Plottable.Scales.Linear();
    const yScale = new Plottable.Scales.Linear();
    const xAxis = new Plottable.Axes.Numeric(xScale, 'bottom');
    const yAxis = new Plottable.Axes.Numeric(yScale, 'left');

    const plot = new Plottable.Plots.Area()
        .x(d => d.x, xScale)
        .y(d => d.y, yScale)
        .addDataset(new Plottable.Dataset(data));

    const chart = new Plottable.Components.Table([
                        [yAxis, plot],
                        [null, xAxis]
                        ]);
    chart.renderTo('#areaChart');
};

export default areaChart;
