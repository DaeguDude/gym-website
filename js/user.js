const userFactory = (name, phoneNum) => {
  
  const getName = () => name;
  const getPhoneNum = () => phoneNum;
 
  return {
    getName,
    getPhoneNum
  }
}

