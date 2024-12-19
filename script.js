async function task1() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Task 1 completed");
            resolve();
        }, 1000);
    });
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

fetchPostTitles();
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))










































      // async function fetchExchangeRates() {
//     const response = await fetch('https://belarusbank.by/api/kursExchange');
//     const data = await response.json();
//     const exchangeRatesElement = document.getElementById('exchange-rates');

//     data.forEach(rate => {
//         const li = document.createElement('li');
//         li.textContent = `Currency: ${rate.Cur_Name}, Buy: ${rate.Cur_OfficialRate}`;
//         exchangeRatesElement.appendChild(li);
//     });
// }

// fetchExchangeRates();


// async function fetchPostTitles() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     const posts = await response.json();
//     const postTitlesElement = document.getElementById('post-titles');

//     posts.forEach(post => {
//         const li = document.createElement('li');
//         li.textContent = post.title;
//         postTitlesElement.appendChild(li);
//     });
// }