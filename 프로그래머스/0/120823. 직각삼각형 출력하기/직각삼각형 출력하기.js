const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const num = Number(input[0]);
    let Str = ''
    for (let i =0; i < num; i++){
        for(let j = 0; j<= i; j++){
            Str+='*'
        }
        Str+='\n'
    }
      console.log(Str)
    console.log(Number(input[0]));
});