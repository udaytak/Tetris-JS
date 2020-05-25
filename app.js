document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    let squares = Array.from(document.querySelectorAll('.grid div'))
    const ScoreDisplay = document.querySelector('#score')
    const StartBtn = document.querySelector('#start-button')
    const width = 10

    //Tetrominos - l z t o i
    const lTetromino = [
        [1,1+width, 1+width*2, 2],
        [width,width+1,width+2,width*2+2],
        [1,1+width, 1+width*2, width*2],
        [0, width,width+1,width+2]
    ]

    const theTetrominos = [lTetromino]

    let currentPosition = 4
    let current = lTetromino[3]/*theTetrominos[0][0]*/


    //draw tetromino
    function draw() {
        current.forEach(index => {
            squares[currentPosition + index].classList.add('tetromino')
            console.log(squares[currentPosition + index].classList)
        })
    }

    draw()
    

    

})