const Display = (() => {
  let userInfoTable = document.querySelector('.user-info-table');


  const getUserName = () => {
    let td = document.querySelectorAll('td')[0]
    let input = td.firstChild;
    let name = input.value;
    console.log(name);
  }

  const getDateOfBirth = () => {
    let td = document.querySelectorAll('td')[1]
    let input = td.firstChild;
    let date = input.value;
    console.log(date);
  }

  const getGender = () => {
    let femaleRadio = document.querySelectorAll("input[type='radio']")[0];
    let maleRadio = document.querySelectorAll("input[type='radio']")[1];
    
    if(femaleRadio.checked) {
      console.log('여자');
    } else if(maleRadio.checked) {
      console.log('남자');
    }
  }

  const getContact = () => {
    let telInputs = document.querySelectorAll("input[type='tel']");
    let startNums = telInputs[0];
    let midNums = telInputs[1];
    let endNums = telInputs[2];

    let contact = startNums.value + midNums.value + endNums.value;
    console.log(contact);
  }

  const getAddress = () => {
    let td = document.querySelectorAll('td')[4]
    let input = td.firstChild;
    let address = input.value;
    console.log(address);
  }

  const getBelt = () => {
    let select = document.querySelectorAll('select')[0];
    let belt = select.options[select.selectedIndex].value
    console.log(belt);
  }

  const getStripe = () => {
    let select = document.querySelectorAll('select')[1];
    let stripe = select.options[select.selectedIndex].value
    console.log(stripe);
  }

  const getStartDate = () => {
    let td = document.querySelectorAll('td')[6];
    let input = td.firstChild;
    let date = input.value;
    console.log(date);
  }

  const getFinishDate = () => {
    let td = document.querySelectorAll('td')[7];
    let input = td.firstChild;
    let date = input.value;
    console.log(date);
  }
  
  return
})();