import print from './components/utilities';

const sleepPrinter = () => {
  let stringDom = '';
  stringDom += '<h2>Sleep</h2>';
  print.printToDom('sleep', stringDom);
};

export default { sleepPrinter };
