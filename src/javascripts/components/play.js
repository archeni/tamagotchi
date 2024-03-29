import print from '../helper/utilities';
import '../../styles/play.scss';

const playPrinter = () => {
  let stringDom = '';
  let fun = 50;
  stringDom += `<div class="playInfo"><h2>Play</h2> 
  <button id="superFun" type="button">Super Fun!</button> 
  <button id="mehFun" type="button">Meh. I guess</button> 
  <p><progress value="${fun}" max="100" id="funProgress"></progress></p></div>`;
  print.printToDom('play', stringDom);
  const hButton = document.getElementById('superFun');
  const bButton = document.getElementById('mehFun');

  hButton.addEventListener('click', () => {
    if (fun + 50 <= 100) {
      fun += 50;
      document.getElementById('funProgress').value = fun;
      console.log(fun);
    }
  });
  bButton.addEventListener('click', () => {
    if (fun + 2 <= 100) {
      fun += 2;
      document.getElementById('funProgress').value = fun;
      console.log(fun);
    }
  });
  const unfunBarReduction = () => {
    if (fun - 13 >= 0) {
      fun -= 13;
      document.getElementById('funProgress').value = fun;
    }
  };
  const unfun = () => {
    setInterval(unfunBarReduction, 40000);
  };

  unfun();
};
export default { playPrinter };
