import bar from './bar';
import scatter from './scatter';
import pieChart from './pie';
import drawChart from './lineChart';

const data: number[] = [4, 8, 15, 16, 23, 42];

const pieData = [
    {platform: 'Android', percentage: 40.11},
    {platform: 'Windows', percentage: 36.69},
    {platform: 'iOS', percentage: 13.06}
];

const api = 'https://api.coindesk.com/v1/bpi/historical/close.json?start=2017-12-31&end=2018-04-01';

bar(data);
scatter();
pieChart(pieData);

/**
 * Loading data from API when DOM Content has been loaded'.
 */
document.addEventListener('DOMContentLoaded', (event) => {
    fetch(api)
        .then((response) =>  response.json() )
        .then((_data) => {
            const parsedData = parseData(_data);
            drawChart(parsedData);
        })
        .catch((err) =>  console.log(err) );
    });

    /**
     * Parse data into key-value pairs
     * @param {object} data Object containing historical data of BPI
     */
function parseData(_data) {
        const arr: any = [];
        for (const [key, value] of Object.entries(_data.bpi)) {
            arr.push({
                date: new Date(key), // date
                value: Number(value) // convert string to number
            });
        }
        return arr;
    }
