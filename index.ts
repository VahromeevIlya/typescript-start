const emailEl = document.querySelector("#email") as HTMLInputElement;
const titleEl = document.querySelector("#title") as HTMLInputElement;
const textEl = document.querySelector("#text") as HTMLTextAreaElement;
const checkboxEl = document.querySelector("#checkbox") as HTMLInputElement;
const forms = document.querySelectorAll("form");

interface Data {
	email: string;
	title: string;
	text: string;
	checkbox: boolean;
}
const formData: Data = {
	email: "",
	title: "",
	text: "",
	checkbox: false,
};

if (forms.length) {
	forms.forEach((form) => {
		form.addEventListener("submit", (event) => {
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

			const success: boolean = validateFormData(formData);

			if (success) {
				checkFormData(formData,forms);
			}
		});
	});
}
// Последовательность действий:
// 1) Происходит submit любой из форм
// 2) Все данные из 4х полей со страницы переходят в свойства объекта formData
// 3) Запускается функция validateFormData с этим объектом, возвращает true/false
// 4) Если на предыдущем этапе true, то запускается функция checkFormData с этим объектом

function validateFormData(data: Data): boolean {
	// Если каждое из свойств объекта data правдиво...
	const { email, title, text, checkbox } = data;
	if (email.length > 1 && title.length > 1 && text.length > 1 && checkbox) {
		return true;
	} else {
		console.log("Please, complete all fields");
		return false;
	}
}

function checkFormData(data: Data,forms:  NodeListOf<HTMLFormElement>): void {
	const { email } = data;
	const emails = ["example@gmail.com", "example@ex.com", "admin@gmail.com"];

	// Если email совпадает хотя бы с одним из массива
	if (emails.includes(email)) {
		console.log("This email is already exist");
	} else {
		console.log("Posting data...");
		forms.forEach(form => {
			form.reset();
		})
	}
}
