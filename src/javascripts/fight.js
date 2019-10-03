import print from './components/utilities';

const fightPrinter = () => {
  let stringDom = '';
  let strength = 100;
  stringDom += `<div class="fightInfo"><h2>Eat</h2> 
  <button id="excorcise" type="button">Tactical Retreat</button> 
  <button id="villain" type="button">Steal Candy from a Baby</button> 
  <p><progress value="${strength}" max="100" id="strengthProgress"></progress></p></div>`;
  print.printToDom('fight', stringDom);
  const hButton = document.getElementById('excorcise');
  const bButton = document.getElementById('villain');

  hButton.addEventListener('click', () => {
    if (strength + 1 <= 100) {
      strength += 1;
      document.getElementById('strengthProgress').value = strength;
      console.log(strength);
    }
  });
  bButton.addEventListener('click', () => {
    if (strength - 10 >= 0) {
      strength -= 10;
      document.getElementById('strengthProgress').value = strength;
      console.log(strength);
    }
  });
};

export default { fightPrinter };
