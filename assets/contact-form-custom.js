//logic for our custom contact form

document.addEventListener('DOMContentLoaded', function () {

const businessCheckBox = document.getElementById('businessAccount');
const companyInfoInput = document.getElementById('companyInfo');
const contactReason = document.querySelector("#contactReason");
const productBox = document.getElementById("productNameField");
const orderBox = document.getElementById("orderNumberField");

businessCheckBox.addEventListener('change', function () {
    if (businessCheckBox.checked) {
        companyInfoInput.classList.remove('hidden')
    } else {
        companyInfoInput.classList.add('hidden')
    }
});


contactReason.addEventListener('change', function () {
    
    console.log(contactReason.value)
    
    if(contactReason.value === "product") {
        productBox.classList.remove('hidden')
        orderBox.classList.add('hidden')
    } 
    if(contactReason.value === "order") {
        productBox.classList.add('hidden')
        orderBox.classList.remove('hidden')
    } 
    if(contactReason.value !== "order" && contactReason.value !== "product") {
        productBox.classList.add('hidden')
        orderBox.classList.add('hidden')
    }


})

})