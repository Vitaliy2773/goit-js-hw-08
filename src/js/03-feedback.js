
import throttle from "lodash.throttle"
const form = document.querySelector(".feedback-form")

const btn = document.querySelector("button")
const FEEDBACK_FORM = "feedback-form-state"



const dataForm = {}

const saveMessage = (e) => {
    e.preventDefault();
    dataForm[e.target.name] = e.target.value
    console.log(dataForm);
    localStorage.setItem(FEEDBACK_FORM, JSON.stringify(dataForm))
}


    const btnSubmit = (e) => {
        e.preventDefault();
    // e.currentTarget.reset()
    localStorage.removeItem(FEEDBACK_FORM)
    localStorage.getItem(FEEDBACK_FORM, JSON.stringify(dataForm))
    console.log(dataForm);
}

form.addEventListener("input", throttle(saveMessage,500))

btn.addEventListener("click", btnSubmit)