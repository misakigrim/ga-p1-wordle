let fullAnswer = ['h', 'a', 't', 'c', 'h']
let keys = document.getElementsByClassName('key');

const allRows = document.getElementsByClassName('game-row')
const allTiles = document.getElementsByClassName('tile')

let tileCount = 0
let rowCount = 0

for (let letter of keys) {
    let key = letter.textContent;
    letter.addEventListener('click', function() {
        const row1tiles = allRows[rowCount].children
        row1tiles[tileCount].textContent += key
        tileCount += 1
        if (tileCount == 5){
            tileCount = 0;
            rowCount += 1;
        } 
    })
    
}


function test(rowId) {
    const row = document.getElementById(rowId).children
    for (const index in fullAnswer) {
        if (fullAnswer[index] === row[index].textContent) {
            row[index].classList.add('correct');
            continue;
        } else if (fullAnswer[index] == row[index].textContent){
            row[index].classList.add('correct')
            console.log(fullAnswer[index], row[index].textContent)
        } else if (fullAnswer.includes(row[index].textContent)) {
            row[index].classList.add('positional')
        } else if (fullAnswer[index] !== row[index].textContent) {
            const unused = row[index].textContent
            for (const index in keys) {
                if (keys[index].textContent == unused) {
                    keys[index].classList.add('incorrect');
                }
            }
        }
    }   
}

const submit = document.getElementById('enter')
submit.addEventListener('click', function() {
    test('row1');
    test('row2');
    test('row3');
    test('row4');
    test('row5');
})
