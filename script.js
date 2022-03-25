let fullAnswer = ['t', 'r', 'u', 'm', 'p'] 

const allRows = document.getElementsByClassName('game-row')
const allTiles = document.getElementsByClassName('tile')

let tileCount = 0
let rowCount = 0

let keys = document.getElementsByClassName('key');

for (let letter of keys) {
    let key = letter.textContent;

    letter.addEventListener('click', function() {
        const rowTiles = allRows[rowCount].children;

        if (key == '␡' && tileCount == 0 && rowCount >= 1) {
            rowCount--;
            allRows[rowCount].children[4].textContent = "";
            allRows[rowCount].children[4].classList.remove('filled');
            tileCount += 4;
        } else if (key == '␡' && tileCount == 0 && rowCount == 0) {
            tileCount = 0;
        } else if (key == '␡') {
            tileCount--;
            rowTiles[tileCount].textContent = "";
            rowTiles[tileCount].classList.remove('filled');
        } else if (tileCount < 5) {
            rowTiles[tileCount].textContent += key
            rowTiles[tileCount].classList.add('filled');
            tileCount ++;
        } 
    
        if (tileCount == 5) {
                tileCount = 0;
                rowCount ++;
                console.log(tileCount)
                console.log(rowCount)
                console.log(rowTiles)
                
        }

    
    // switch (key) {
    //     case '␡':
    //         rowTiles[tileCount].textContent = rowTiles[tileCount].textContent.slice(0, rowTiles[tileCount].textContent.length-1);
    //         tileCount--
    //     default:
    //         // output.textContent += key;
        // }
    })
}



function test(rowId) {
    const row = document.getElementById(rowId).children
    for (const index in fullAnswer) {
       if (fullAnswer[index] === row[index].textContent) {
            row[index].classList.add('correct');
        } else if (fullAnswer.includes(row[index].textContent)) {
            row[index].classList.add('positional')
        // } else if ((fullAnswer[index] == row[index].textContent) && 
        //             (row[index].classList.contains('positional').textContent == 
        //             row[index].classList.contains('correct').textContent)){
        //     row[index].classList.remove('positional')
        } else if (fullAnswer[index] !== row[index].textContent) {
            const unused = row[index].textContent
            for (const index in keys) {
                if (keys[index].textContent == unused) {
                    keys[index].classList.add('incorrect');
                }
            }
        }
        // if (row[index].classList.contains('correct').textContent == row[index].classList.contains('positional').textContent) {
        //     row[index].contains('positional').remove('positional');
        // }
    }  
    // if (fullAnswer === row.textContent) {
    //     // explode();
    // }  
}

const submit = document.getElementById('enter')
submit.addEventListener('click', function() {
    test('row1');
    test('row2');
    test('row3');
    test('row4');
    test('row5');
    answerCheck('row1');
    answerCheck('row2');
    answerCheck('row3');
    answerCheck('row4');
    answerCheck('row5');
})

function answerCheck(rowId) {
    const row = document.getElementById(rowId).children;
    if ((row[0].textContent === fullAnswer[0]) && 
        (row[1].textContent === fullAnswer[1]) && 
        (row[2].textContent === fullAnswer[2]) && 
        (row[3].textContent === fullAnswer[3]) && 
        (row[4].textContent === fullAnswer[4])) {
            row[0].classList.add('superCorrect', 'tile2');
            row[1].classList.add('superCorrect', 'tile2');
            row[2].classList.add('superCorrect', 'tile2');
            row[3].classList.add('superCorrect', 'tile2');
            row[4].classList.add('superCorrect', 'tile2');
            setTimeout(openLink(), 5000);
    }
}

function openLink() {
    setTimeout(function(){ window.open("videopage.html", "_blank").focus(); }, 3500);
}

