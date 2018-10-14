import * as Plottable from 'plottable';

const data = [{ x: 'China', y: 1365 }, { x: 'The Republic 0f India', y: 1237 }, { x: 'U.S.A', y: 313 },
    { x: 'Indonesia', y: 247 }, { x: 'Brazil', y: 199 }, { x: 'Uganda', y: 400 }];

const barChart = () => {
    const xScale = new Plottable.Scales.Category();
    const yScale = new Plottable.Scales.Linear();
    const xAxis = new Plottable.Axes.Category(xScale, 'bottom');
    const yAxis = new Plottable.Axes.Numeric(yScale, 'left');

    const plot = new Plottable.Plots.Bar()
        .x(d => d.x, xScale)
        .y(d => d.y, yScale)
        .addDataset(new Plottable.Dataset(data))
        // TODO: @aleku399 look into why this was causing bars not to show
        // .animated(true)
        .renderTo('#barChart');
    // const title = new Plottable.Components.Label('Population of Countries (millions)');

    const chart = new Plottable.Components.Table([
                        [yAxis, plot],
                        [null, xAxis]
                        ]);
    // const chart = new Plottable.Components.Table([
    //                     [title]
    //                     [chartTable]
    // ]);
    chart.renderTo('#barChart');
};

export default barChart;
