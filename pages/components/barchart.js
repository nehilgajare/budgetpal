import { Bar } from 'react-chartjs-2';

const BarChart = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Sales',
                data: [12, 19, 3, 5, 2, 3, 13],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y:
            {

                beginAtZero: true,

            },
            x: {
                barPercentage: 0.6,
                categoryPercentage: 0.5,
            }
        },
    };

    return (
        <div className='flex m-auto mt-4 h-72 w-72'>
            <Bar data={data} options={options} />
        </div>
        
    );
};

export default BarChart;
