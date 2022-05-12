dailyword = 'Begining of a mission is half of dealing the mission.';
subject = 'Recursive Functions';

console.log(dailyword);
console.log(subject);
number = 5;

console.log(`Foctoriel of ${number} => ${factoriel(number)}`);

function factoriel(num) {
    return num === 0 ? 1 : num * factoriel(num - 1);
}