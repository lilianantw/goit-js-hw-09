// 1. Выбор формы и ключ
const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

// 2. Начальное состояние данных формы (пуста форма)

let formData = {
  email: ' ',
  message: ' ',
};

// 3. Загрузка данных из хранилища при открытии страницы
const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  formData = JSON.parse(savedData);
  form.email.value = formData.email;
  form.message.value = formData.message;
}

// 4. Слушаем ввод пользователя
form.addEventListener('input', event => {
  const { name, value } = event.target;
  formData[name] = value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// 5. Отправка формы
form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email.trim() || !formData.message.trim()) {
    alert('Заполните пожалуйста все поля');
    return;
  }

  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  formData = { email: ' ', message: ' ' };
  form.reset();
});
