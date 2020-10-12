// 1.	Дано масив [1,5,7,8,9,0, -5, -55, 105, 0, 5, 299, 6 ,7];
//  Знайти максимальне значення масиву.

// let arr = [1,5,7,8,9,0, -5, -55, 105, 0, 5, 299, 6 ,7];

// let biggerVal= -Infinity;
// for (let i = 0; i < arr.length ; i++) {
// 	if (biggerVal < arr[i]) {
// 		biggerVal = [i];			
// 	}
// }

// alert(`${biggerVal}, max value`);

// 2.	Дано масив [“test”, 12, undefined, null, -5, “javascript”, “1”, false, true, 0 , “!”].
//  Створити новий масив де будуть тільки Стрінгові значення.

// let arr = ['test', 12, undefined, null, -5, 'javascript', '1', false, true, 0 , '!'];

// let arrStr = [];

// for (let i = 0; i < arr.length; i++) {
//     if (isNaN(arr[i])) {
//         arrStr.push(arr[i]);
//     }
// }

// console.log(arrStr);

// 3.	Дано колекцію - [{name: "Yura", age: 55, hobby: ["football", "ski", "hiking"], type: "Admin"}, {name: "Yulian", age: 28, hobby: ["films", "games", "hiking"], type: "user"}, {name: "Taras", age: 38, hobby: ["hunting", "TV", "javascript"], type: "user"}]
//  – Вивести всіх юзерів з типом user. Вивести юзерів які мають хоббі hiking.
//  Додати можливість додати нове поле для всіх юзерів – job (true/false);


// let employees = [
//     {
//         name: "Yura",
//         age: 55,
//         hobby: ["football", "ski", "hiking"], 
//         type: "Admin"
//     }, 
//     {
//          name: "Yulian", 
//          age: 28,
//          hobby: ["films", "games", "hiking"], 
//          type: "user"
//     },
//     {
//         name: "Taras", 
//         age: 38,
//         hobby: ["hunting", "TV", "javascript"], 
//         type: "user"
//     }]

//     let user;

//     function isUser() {
//     for (let key in employees) {
//     if (employees[key].type == "user") {
//         user = console.log(employees[key].name, "це звичайний юзер");
//         }
//     } 
//     return user;
// }

// isUser();

// function showByHobby(hobby) {
//     for (let key in employees) {
//         if (employees[key].hobby = hobby) {
//             console.log(employees[key].name, ` - це юзер, в якого хоббі - ${hobby}`);
//         }
//     }
// };

// showByHobby("hiking");


// function addJob() {
//     for (let key in employees) {
//         let question = confirm(`Does ${employees[key].name} have a job?`);
//         if (question) {
//             employees[key].job = true; 
//         } else {
//             employees[key].job = false;
//             alert(`Hmm, seems like ${employees[key].name} plays Dota 2 instead of having a job :D`);
//         }
//     }
// }

// addJob();
// console.log(employees, "у деяких наших юзерів з'явилась робота, хм, а може і ні, залежить від того, що ти наклацав у конфірмі");

// 4.	Додати на сторінку івент який буде викидати алерт як тільки ми захочемо скопіювати текст з сторінки(додайте 1 рядок будь якого тексту)
//  і сповіщати що це інтелектуальна власність власника.

// let h1 = document.createElement("h1");
// h1.innerHTML = "Don't event try to copy me!";
// document.body.appendChild(h1);

// document.addEventListener("keydown", function(event) {
//     if (event.code == 'KeyC' && event.ctrlKey) {
//         h1.innerHTML = "Helloooooooooo, this is my intelectual property!!!11";
//     }
// })

// document.body.addEventListener("contextmenu", function(event) {
//     event.preventDefault();
//     h1.innerHTML = "Ha-ha, thought you are the smartest one?";
// })

// 5.	https://restcountries.eu/rest/v2/all – АПІ endpoint для країн.
//  Вивести нумерований список з іменами всіх країн та її столицею на сторінку, назву країни зробити великими буквами.

// let url = fetch("https://restcountries.eu/rest/v2/all")
// .then(response => response.json())

// не встиг зробити :(((