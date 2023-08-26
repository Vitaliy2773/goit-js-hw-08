
import throttle from "lodash.throttle"
const form = document.querySelector(".feedback-form")

const FEEDBACK_FORM = "feedback-form-state"



let dataForm = JSON.parse(localStorage.getItem(FEEDBACK_FORM)) || {}

form.addEventListener("input", throttle(saveMessage,500))

form.addEventListener("submit", formSubmit)

reloadPage();

    function saveMessage(e) {
    dataForm[e.target.name] = e.target.value
    console.log(dataForm);
    localStorage.setItem(FEEDBACK_FORM, JSON.stringify(dataForm))
}


    function formSubmit(e) {
        e.preventDefault();
        const { email, message } = e.currentTarget.elements;
        console.log({ email: email.value, menubar: message.value });
        console.log(dataForm);
        e.currentTarget.reset();
        localStorage.removeItem(FEEDBACK_FORM);
        dataForm = {};
    }

    function reloadPage() {
    if (dataForm) {
        let { email, message } = form.elements;
        email.value = dataForm.email || "";
        message.value = dataForm.message || "";
         }
     }

