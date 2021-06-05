let proxiedUrl = "https://onepiececover.com/api/chapters/"

const url = new URL('http://proxy.hackeryou.com');

url.search = new
URLSearchParams({
    reqUrl: proxiedUrl,
});

Promise.all([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106].map(id =>
    fetch(`${url}${id}`).then(response => response.json())
    ))
.then(console.log);


// fetch(url)
// .then(function(response) {
//     return response.json()
// })
// .then(function(data) {
//     console.log(data)
// })

// const requests = proxiedUrl.map(url => fetch(url));

// Promise.all(requests)
//     .then(response => response.forEach(
//         response => console.log(response.url)
//     ))

// Promise.all([
//     fetch('https://onepiececover.com/api/chapters/1').then(resp => resp.json()),
//     fetch('https://onepiececover.com/api/chapters/2').then(resp => resp.json()),
//     fetch('https://onepiececover.com/api/chapters/3').then(resp => resp.json()),
//     fetch('https://onepiececover.com/api/chapters/4').then(resp => resp.json()),
//     fetch('https://onepiececover.com/api/chapters/5').then(resp => resp.json())
// ])
// .then(console.log)
