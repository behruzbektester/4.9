// 1 va 2 masalalar
let ages = 0;

function getAverageAge(arr, age) {
    const obj = [];
    for (let i = 0; i < arr.length; i++) {
        arr[i].age > age ? (arr[i].isMerried = true) : (arr[i].isMerried = false);
        obj.push(arr[i]);
    }

    return obj;
}

const people = [
    { name: "Abdulaziz", age: 33 },
    { name: "Erkin", age: 22 },
    { name: "Temur", age: 34 },
    { name: "Sardor", age: 20 },
];

console.log(getAverageAge(people, 25));

// 3- masala

function getNameMaxMinAge(arr) {
    let maxAge = -Infinity;
    let minAge = Infinity;
    let maxAgeName;
    let minAgeName;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].age > maxAge) {
            maxAge = arr[i].age;
            maxAgeName = arr[i].name;
        }
        if (arr[i].age < minAge) {
            minAge = arr[i].age;
            minAgeName = arr[i].name;
        }
    }

    return [maxAgeName, minAgeName];
}

const humans = [
    { name: "Sardor", age: 18 },
    { name: "Temur", age: 35 },
    { name: "Asror", age: 25 },
];

console.log(getNameMaxMinAge(humans));

// 4- masala

function transformObject(input) {
    const result = {};

    const entries = Object.entries(input);
    for (let i = 0; i < entries.length; i++) {
        const [key, value] = entries[i];
        if (!result[value]) {
            result[value] = [];
        }
        result[value].push(Number(key));
    }

    return result;
}

const input = { 1: 20, 2: 30, 3: 20, 4: 40, 5: 30, 6: 50, 7: 40, 8: 20 };
const output = transformObject(input);

console.log(output);

// 5- masala

function getUniqueKeys(obj1, obj2) {
    const result = {};

    for (let key in obj1) {
        if (!(key in obj2)) {
            result[key] = obj1[key];
        }
    }

    for (let key in obj2) {
        if (!(key in obj1)) {
            result[key] = obj2[key];
        }
    }

    return result;
}

const obj1 = { a: 3, b: 10, c: 5, d: 7 };
const obj2 = { a: 10, d: 4, e: 6, f: 15 };

const outputResult = getUniqueKeys(obj1, obj2);

console.log(outputResult);

// 6-masala

const me = {
    firstName: "Abdulaziz",
    lastName: "Toshpulatov",
    age: 23,
    languages: ["js", "python", "c++", "nodejs"],
    friends: ["Jamshid", "Abbos", "Jalol", "Mar'uf"],
};

function formatObject(obj) {
    return `
firstName: ${obj.firstName}
lastName: ${obj.lastName}
age: ${obj.age}
languages: ${obj.languages.join(",")}
friends: ${obj.friends.join("+")}
  `.trim();
}

console.log(formatObject(me));

// 7- masala

function createObject(n) {
    const result = {};

    for (let i = 1; i <= n; i++) {
        result[i] = i * i;
    }

    return result;
}

console.log(createObject(5));

//8-masala

function sumKeysAndValues(obj) {
    let keysSum = 0;
    let valuesSum = 0;

    for (let key in obj) {
        keysSum += +key;
        valuesSum += obj[key];
    }

    return keysSum + valuesSum;
}

const obj = { 1: 1, 2: 4, 3: 9, 4: 16, 5: 25 };
console.log(sumKeysAndValues(obj));

//9-masala

function createObject(arr) {
    const result = {};

    for (let i = 0; i < arr.length; i++) {
        result[arr[i]] = arr[i].length;
    }

    return result;
}

const names = ["Abdulaziz", "Safarmurod", "O’rol", "Jahongir"];
console.log(createObject(names));

//10-masala

function totalPrice(obj) {
    return obj["Apelsin"] + obj["Olma"] + obj["Mandarin"] + obj["Banan"];
}

const products = { Apelsin: 10000, Olma: 12000, Mandarin: 8000, Banan: 20000 };
console.log(totalPrice(products));