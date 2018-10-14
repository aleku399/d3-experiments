import * as Plottable from 'plottable';

const data = [2, 4, 6, 8, 10, 20];

export default () => {
    const scale = new Plottable.Scales.Linear();
    const color = new Plottable.Scales.InterpolatedColor();
    color.range(['red', 'yellow']);

    const plot = new Plottable.Plots.Pie()
                    .addDataset(new Plottable.Dataset(data))
                    .sectorValue(d => d, scale)
                    .attr('fill', d => d, color)
                    .labelsEnabled(true)
                    .renderTo('#pieChart');
};
