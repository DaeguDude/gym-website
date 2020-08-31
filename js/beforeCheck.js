// 회원번호 입력하기 전의 화면, 평소에 띄워져 있는 화면이다.
const beforeCheck = () => {
  let container = document.createElement('div');
  container.setAttribute('id', 'm-left-box-bottom');
  container.setAttribute('class', 'main-box-items');

  let dailyQuoteBox = document.createElement('div');
  dailyQuoteBox.setAttribute('id', 'daily-quote-box');

  let dailyQuote = document.createElement('p');
  dailyQuote.setAttribute('id', 'daily-quote');
  
  let iTag = document.createElement('i');
  iTag.innerHTML = '쉽게 얻는 것은 쉽게 사라집니다. 모든 일에 최선을 다하세요.';

  // m-left-box-bottom의 내용물
  dailyQuote.appendChild(iTag);
  dailyQuoteBox.appendChild(dailyQuote);

  // m-left-box-bottom 완성
  container.appendChild(dailyQuoteBox);

  return container;
}

export { beforeCheck };