//logic for our custom contact form

document.addEventListener('DOMContentLoaded', function () {


    const busAcc = document.getElementById('businessAccount');
    const coInfo = document.getElementById('companyInfo');

    const reasonForContact = document.querySelector('#contactReason');
    const prodName = document.querySelector('#productNameField');
    const orderNumDiv = document.querySelector('#orderNumberField');


    reasonForContact.addEventListener('change', function() {
        
        prodName.classList.add('hidden');
        orderNumDiv.classList.add('hidden');
        if (reasonForContact.value == "product") 
            {prodName.classList.remove('hidden')} 
        else if (reasonForContact.value == "order") 
            {(orderNumDiv.classList.remove('hidden'))} 

    })

    busAcc.addEventListener('change', function() {

        busAcc.checked ? coInfo.classList.remove('hidden') : coInfo.classList.add('hidden');
    })






});