import print from '../helper/utilities';
import '../../styles/eat.scss';

const eatPrinter = () => {
  let stringDom = '';
  let full = 100;
  stringDom += `<div class="eatInfo"><h2>Eat</h2> 
  <button id="healthyFood" type="button">Eat</button> 
  <button id="badFood" type="button">Dont Eat</button> 
  <p><progress value="${full}" max="100" id="fullProgress"></progress></p></div>`;
  print.printToDom('eat', stringDom);
  const hButton = document.getElementById('healthyFood');
  const bButton = document.getElementById('badFood');

  hButton.addEventListener('click', () => {
    if (full + 10 <= 100) {
      full += 10;
      document.getElementById('fullProgress').value = full;
      console.log(full);
    }
  });
  bButton.addEventListener('click', () => {
    if (full - 3 >= 0) {
      full -= 3;
      document.getElementById('fullProgress').value = full;
      console.log(full);
    }
  });
  const fullnessBarReduction = () => {
    if (full - 7 >= 0) {
      full -= 7;
      document.getElementById('fullProgress').value = full;
    }
  };
  const hunger = () => {
    setInterval(fullnessBarReduction, 20000);
  };

  hunger();
};

export default { eatPrinter };
