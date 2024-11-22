const globalStatsUrl = './data/global-energy-stats.json'; // Caminho local do JSON

async function loadGlobalStats() {
    const response = await fetch(globalStatsUrl);
    const data = await response.json();

    const totalConsumption = (data.total_consumption / 1e9).toFixed(1); // Em GWh
    const renewablePercentage = data.renewable_percentage;

    const statsContainer = document.getElementById('statistics');
    statsContainer.innerHTML = `
        <p>Total de energia consumida: <span>${totalConsumption} GWh</span></p>
        <p>Porcentagem de energia renovável: <span>${renewablePercentage}%</span></p>
    `;
}

loadGlobalStats();
