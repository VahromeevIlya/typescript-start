var emailEl = document.querySelector("#email");
var titleEl = document.querySelector("#title");
var textEl = document.querySelector("#text");
var checkboxEl = document.querySelector("#checkbox");
var forms = document.querySelectorAll("form");
var formData = {
    email: "",
    title: "",
    text: "",
    checkbox: false
};
if (forms.length) {
    forms.forEach(function (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            if (emailEl) {
                formData.email = emailEl.value;
            }
            if (titleEl) {
                formData.title = titleEl.value;
            }
            if (textEl) {
                formData.text = textEl.value;
            }
            if (checkboxEl) {
                formData.checkbox = checkboxEl.checked;
            }
            var success = validateFormData(formData);
            if (success) {
                checkFormData(formData, forms);
            }
        });
    });
}
// Последовательность действий:
// 1) Происходит submit любой из форм
// 2) Все данные из 4х полей со страницы переходят в свойства объекта formData
// 3) Запускается функция validateFormData с этим объектом, возвращает true/false
// 4) Если на предыдущем этапе true, то запускается функция checkFormData с этим объектом
function validateFormData(data) {
    // Если каждое из свойств объекта data правдиво...
    var email = data.email, title = data.title, text = data.text, checkbox = data.checkbox;
    if (email.length > 1 && title.length > 1 && text.length > 1 && checkbox) {
        return true;
    }
    else {
        console.log("Please, complete all fields");
        return false;
    }
}
function checkFormData(data, forms) {
    var email = data.email;
    var emails = ["example@gmail.com", "example@ex.com", "admin@gmail.com"];
    // Если email совпадает хотя бы с одним из массива
    if (emails.includes(email)) {
        console.log("This email is already exist");
    }
    else {
        console.log("Posting data...");
        forms.forEach(function (form) {
            form.reset();
        });
    }
}
