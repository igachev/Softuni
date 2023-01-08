function attachEventsListeners() {
let allConvertBtns = Array.from(document.querySelectorAll("input[type='button']"))
let days = document.getElementById('days')
let hours = document.getElementById('hours')
let minutes = document.getElementById('minutes')
let seconds = document.getElementById('seconds')
allConvertBtns.forEach((btn) => {
    btn.addEventListener('click',(e) => {
        let currentTextField = e.currentTarget.previousElementSibling;
        let currentTextFieldValue = Number(currentTextField.value);
        let currentTextFieldId = currentTextField.getAttribute('id');
        switch(currentTextFieldId) {
            case 'days':
            days.value = currentTextFieldValue;
            hours.value = currentTextFieldValue * 24;
            minutes.value = Number(hours.value) * 60;
            seconds.value = Number(minutes.value) * 60
            break;

            case 'hours':
            days.value = currentTextFieldValue / 24;
            minutes.value = Number(hours.value) * 60;
            seconds.value = Number(minutes.value) * 60
            break;

            case 'minutes':
            hours.value = currentTextFieldValue / 60
            days.value = Number(hours.value) / 24
            seconds.value = Number(minutes.value) * 60
            break;

            case 'seconds':
            minutes.value = currentTextFieldValue / 60;
            hours.value = Number(minutes.value) / 60;
            days.value = Number(hours.value) / 24;
            break;
        }
        })
})
}