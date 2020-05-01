let arr = ['', '', '',
           '', '', '',
           '', '', ''];
let cells = document.getElementById('calc');
let out = 0;
let cell = document.getElementsByClassName('btn');
let outer = document.getElementById('root');
let css = document.querySelectorAll('#calc-wrap .btn');
arr.forEach(function(e) {
   let elem = document.createElement('div');
   elem.className = 'btn';
   elem.innerHTML = e;
   cells.appendChild(elem);
})

document.getElementById('res').onclick = function() {
   location.reload();
}
document.querySelectorAll('#calc-wrap .btn').forEach(function(button) {
   button.addEventListener('click', func);
})
function func(e) {
   if (out % 2) {
      if (e.target.innerHTML == '') {
         e.target.innerHTML = 'O';
      } else {
         out--;
      }
   } else {
      if (e.target.innerHTML == '') {
         e.target.innerHTML = 'X';
      } else {
         out--;
      }
   }
   out++;
   checkWin();
}
function checkWin() {
   if (cell[0].innerHTML !== '' && cell[1].innerHTML !== '' && cell[2].innerHTML !== '' && cell[3].innerHTML !== '' && cell[4].innerHTML !== '' && cell[5].innerHTML !== '' && cell[6].innerHTML !== '' && cell[7].innerHTML !== '' && cell[8].innerHTML !== '') outer.innerHTML = 'Draw';
   if (cell[0].innerHTML == 'X' && cell[1].innerHTML == 'X' && cell[2].innerHTML == 'X') outer.innerHTML = 'X wins';
   if (cell[3].innerHTML == 'X' && cell[4].innerHTML == 'X' && cell[5].innerHTML == 'X') outer.innerHTML = 'X wins';
   if (cell[6].innerHTML == 'X' && cell[7].innerHTML == 'X' && cell[8].innerHTML == 'X') outer.innerHTML = 'X wins';
   if (cell[0].innerHTML == 'X' && cell[3].innerHTML == 'X' && cell[6].innerHTML == 'X') outer.innerHTML = 'X wins';
   if (cell[1].innerHTML == 'X' && cell[4].innerHTML == 'X' && cell[7].innerHTML == 'X') outer.innerHTML = 'X wins';
   if (cell[2].innerHTML == 'X' && cell[5].innerHTML == 'X' && cell[8].innerHTML == 'X') outer.innerHTML = 'X wins';
   if (cell[0].innerHTML == 'X' && cell[4].innerHTML == 'X' && cell[8].innerHTML == 'X') outer.innerHTML = 'X wins';
   if (cell[2].innerHTML == 'X' && cell[4].innerHTML == 'X' && cell[6].innerHTML == 'X') outer.innerHTML = 'X wins';

   if (cell[0].innerHTML == 'O' && cell[1].innerHTML == 'O' && cell[2].innerHTML == 'O') outer.innerHTML = 'O wins';
   if (cell[3].innerHTML == 'O' && cell[4].innerHTML == 'O' && cell[5].innerHTML == 'O') outer.innerHTML = 'O wins';
   if (cell[6].innerHTML == 'O' && cell[7].innerHTML == 'O' && cell[8].innerHTML == 'O') outer.innerHTML = 'O wins';
   if (cell[0].innerHTML == 'O' && cell[3].innerHTML == 'O' && cell[6].innerHTML == 'O') outer.innerHTML = 'O wins';
   if (cell[1].innerHTML == 'O' && cell[4].innerHTML == 'O' && cell[7].innerHTML == 'O') outer.innerHTML = 'O wins';
   if (cell[2].innerHTML == 'O' && cell[5].innerHTML == 'O' && cell[8].innerHTML == 'O') outer.innerHTML = 'O wins';
   if (cell[0].innerHTML == 'O' && cell[4].innerHTML == 'O' && cell[8].innerHTML == 'O') outer.innerHTML = 'O wins';
   if (cell[2].innerHTML == 'O' && cell[4].innerHTML == 'O' && cell[6].innerHTML == 'O') outer.innerHTML = 'O wins';
}
