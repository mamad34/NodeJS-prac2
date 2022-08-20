setTimeout(() => {
    console.log("two sec fucked up");
}, 2000);

const names = ["johnny", "alexis", "jia lisa"];
const shortName = names.filter((name) => {
    return name.length <= 4;
});

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longtitude: 0,
        };
        callback(data);
    }, 2000);
};

geocode("Isfahan", (data) => {
    console.log(data);
});

const add = (num1, num2, callback) => {
    setTimeout(() => {
        callback(num1 + num2);
    }, 2000);
};

add(1, 4, (sum) => {
    console.log(sum);
});