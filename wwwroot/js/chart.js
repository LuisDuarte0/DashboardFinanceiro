let chartInstance = null;

function renderizarGrafico(canvasId, labels, valores) {
    const ctx = document.getElementById(canvasId).getContext('2d');

    // Destruir o gráfico anterior, se existir
    if (chartInstance) {
        chartInstance.destroy();
    }

    // Criar um novo gráfico
    chartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels, // Eixo X: datas
            datasets: [{
                data: valores, // Eixo Y: preços
                borderColor: '#FBA611', // Cor da linha
                borderWidth: 2, // Espessura da linha
                fill: false, // Sem preenchimento abaixo da linha
                pointBackgroundColor: '#FBA611', // Cor dos pontos
                pointBorderColor: '#FFFFFF', // Borda dos pontos
                pointHoverBackgroundColor: '#FFFFFF', // Cor ao passar o mouse
                pointHoverBorderColor: '#FBA611' // Borda ao passar o mouse
            }]
        },
        options: {
            responsive: true, // Gráfico responsivo
            maintainAspectRatio: false, // Não manter proporção fixa
            scales: {
                y: {
                    beginAtZero: false, // Eixo Y não começa em zero
                    grid: {
                        color: '#2E2F33' // Cor das linhas de grade do eixo Y
                    },
                    ticks: {
                        color: '#FFFFFF' // Cor dos números do eixo Y
                    }
                },
                x: {
                    grid: {
                        color: '#2E2F33' // Cor das linhas de grade do eixo X
                    },
                    ticks: {
                        color: '#FFFFFF' // Cor dos números do eixo X
                    }
                }
            },
            plugins: {
                legend: {
                    display: false // Remove o rótulo "Preço da Ação"
                },
                tooltip: {
                    backgroundColor: '#1E1F22', // Cor de fundo do tooltip
                    titleColor: '#FBA611', // Cor do título do tooltip
                    bodyColor: '#FFFFFF', // Cor do texto do tooltip
                    borderColor: '#FBA611', // Cor da borda do tooltip
                    borderWidth: 1 // Espessura da borda do tooltip
                }
            }
        }
    });

    return chartInstance;
}

function destruirGrafico(chart) {
    if (chart) {
        chart.destroy(); // Destruir o gráfico
    }
}