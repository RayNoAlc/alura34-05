const consumptionGraphUrl = './data/energy-by-region.json'; // Caminho local do JSON

async function loadConsumptionGraph() {
    const response = await fetch(consumptionGraphUrl);
    const data = await response.json();

    const regions = Object.keys(data);
    const consumptionValues = Object.values(data);

    const graphContainer = document.getElementById('graphs');
    const graphDiv = document.createElement('div');
    graphContainer.appendChild(graphDiv);

    const chartData = [
        {
            x: regions,
            y: consumptionValues,
            type: 'bar',
            marker: {
                color: '#38bdf8'
            }
        }
    ];

    Plotly.newPlot(graphDiv, chartData, {
        title: 'Consumo de Energia por Região',
        xaxis: { title: 'Regiões' },
        yaxis: { title: 'Consumo (GWh)' }
    });
}

loadConsumptionGraph();
