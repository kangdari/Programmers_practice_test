process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
        
    let answer = ''
    for(let i=0; i<b; i++){
        for(let j=0; j<a; j++){
            answer += '*'
        }
        answer += '\n'
    }
    console.log(answer)

});

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);

    const row = `${'*'.repeat(a)}\n`
    const col = row.repeat(b)
    
    console.log(col)
});