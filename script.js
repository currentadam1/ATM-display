const firstnameValue = document.getElementById('firstname');
const lastnameValue = document.getElementById('lastname');
const accountTypeValue = document.getElementById('account-type');
const submitBtn = document.getElementById('submit');


const accountTypeText = document.querySelector('.account-type');
const cardNum = document.querySelector('.card-num');
const expiry = document.querySelector('.expiry-date');
const firstNameText = document.querySelector('.firstname');
const lastNameText = document.querySelector('.lastname');


const atmProxy = document.querySelector('.atm-proxy');
const atmCard = document.querySelector('.atm');

// console.log(firstnameValue, lastnameValue, accountTypeValue, submitBtn);
// console.log(accountTypeText, cardNum, expiry, firstNameText, lastNameText, atmProxy, atmCard)

// function

const getCardNum = () => {
    const randomNum = Math.trunc(Math.random() * 10000000000000000) + '';
    const lastFour = randomNum.slice(-4);
    const padNum = lastFour.padStart(randomNum.length, '*')

    // console.log(randomNum, lastFour, padNum)
    return padNum;
}

const getFirstName = (nameString) => {
    const [firstXter, ...otherXter] = nameString
    return [firstXter.toUpperCase(), ...otherXter].join('');

}
const getLastName = (nameString) => {
    return nameString.toUpperCase();
}


const getExpDate = () => {
    const date = new Date();
    const month = date.getMonth();
    const fixmonth = month < 10? '0' + month : month
    const year = (date.getFullYear() + 3) + '';
    // console.log(fixmonth,year.slice(-2));
    return `${fixmonth}/${year.slice(-2)}`;
}

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('submit button')
    

    // display account type

    accountTypeText.textContent = accountTypeValue.value;

    // Display card number

    cardNum.textContent = getCardNum();

    // display first name

    firstNameText.textContent = getFirstName(firstnameValue.value);
    lastNameText.textContent = getLastName(lastnameValue.value);


 
    // display expiry date

    expiry.textContent = getExpDate();


    // dispaly atm card

    atmCard.classList.remove('hidden');
    atmProxy.classList.add('hidden');

})