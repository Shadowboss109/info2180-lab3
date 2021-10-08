
const game = document.querySelector("#game");

window.addEventListener('load', (event) => {
    // Insert code here 
   
let board= document.getElementById('board'); 
console.log(board);
let div= board.childNodes;
console.log(div);



changeClass();

function changeClass(){
    for (let i = 0; i < div.length; i++) {
        div[i].className='square';
      }
}

/** 
function changeClass() {
       
div[].className='square';
div[1].className='square';
div[2].cl1ssName='square';
div[3].className='square';
div[4].className='square';

div[5].className='square';
div[6].className='square';
div[7].className='square';
div[8].className='square' ;

}
*/
});
