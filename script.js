async function task1() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Task 1 completed");
            resolve();
        }, 1000);
    });
}
async function tsk1()
{
    return new Promise(
        resolve => 
        {
            setTimeout(()=>
            {
                console.log("Tsk1 completed successfully");
                resolve();
            },1000);
        }
    )
}
async function task2() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Task 2 completed");
            resolve();
        }, 1500);
    });
}

async function task3() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Task 3 completed");
            resolve();
        }, 2000);
    });
}

async function runTasks() {
    await task1();
    await task2();
    await task3();
}

runTasks();

document.addEventListener('DOMContentLoaded', function () {
    const fetchRatesButton = document.getElementById('fetch-rates');
    const dateInput = document.getElementById('date');
    
    fetchRatesButton.addEventListener('click', function () {
        const selectedDate = dateInput.value;
        const url = `https://api.nbrb.by/exrates/rates?periodicity=0&ondate=${selectedDate}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const table = document.getElementById('currency-table');
                table.innerHTML = ''; // Очистка таблицы перед добавлением новых данных

                data.forEach(rate => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${rate.Date}</td>
                        <td>${rate.Cur_Abbreviation}</td>
                        <td>${rate.Cur_Scale}</td>
                        <td>${rate.Cur_OfficialRate}</td>
                    `;
                    table.appendChild(row);
                });
            })
            .catch(error => console.error('Error fetching data:', error));
    });
});


