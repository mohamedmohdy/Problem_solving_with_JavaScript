function drawStairs(n) {
    let case_stares = [] ;
    for(let i = 0 ; i < n ; i++ ){
        case_stares.push(' '.repeat(i) + 'I'); 
    }
    return case_stares.join("\n");
}
