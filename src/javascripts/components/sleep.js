import print from '../helper/utilities';
import '../../styles/sleep.scss';

const sleepPrinter = () => {
  let stringDom = '';
  let energy = 50;
  stringDom += `<div class="sleepInfo"><h2>Sleep</h2> 
  <button id="nap" type="button">Nap</button> 
  <button id="deepSleep" type="button">Deep REM Sleep</button> 
  <p><progress value="${energy}" max="100" id="energyProgress"></progress></p></div>`;
  print.printToDom('sleep', stringDom);
  const hButton = document.getElementById('nap');
  const bButton = document.getElementById('deepSleep');

  hButton.addEventListener('click', () => {
    if (energy + 50 <= 100) {
      energy += 50;
      document.getElementById('energyProgress').value = energy;
      console.log(energy);
    }
  });
  bButton.addEventListener('click', () => {
    if (energy + 60 <= 100) {
      energy += 60;
      document.getElementById('energyProgress').value = energy;
      console.log(energy);
    }
  });

  const tirednessBarReduction = () => {
    if (energy - 1 >= 0) {
      energy -= 1;
      document.getElementById('energyProgress').value = energy;
    }
  };
  const tiredness = () => {
    setInterval(tirednessBarReduction, 10000);
  };

  tiredness();
};

export default { sleepPrinter };
