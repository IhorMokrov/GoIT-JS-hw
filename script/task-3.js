// Напиши скрипт имитирующий авторизацию администратора в панели управления.

// Есть переменная message в которую будет записано сообщение о результате. При загрузке страницы у посетителя запрашивается пароль через prompt:

// Если нажали Cancel, записать в message строку 'Отменено пользователем!'
// В протовном случае, если введен пароль который совпадает со значением константы ADMIN_PASSWORD, записать в message строку 'Добро пожаловать!'
// В противном случае, то есть если ни одно из предыдущих условий не выполнилось, записать в message строку 'Доступ запрещен, неверный пароль!'
// После всех проверок вывести в alert значение переменной message.

// Write a script simulating administrator authorization in the control panel.

// There's a variable called message where the result message will be stored. When the page loads, the visitor is prompted to enter a password using the prompt:

// If Cancel is clicked, assign the string 'Canceled by user!' to the message.
// Otherwise, if the entered password matches the value of the constant ADMIN_PASSWORD, assign the string 'Welcome!' to the message.
// Otherwise, i.e., if none of the previous conditions are met, assign the string 'Access denied, wrong password!' to the message.
// After all checks, display the value of the variable message in an alert.

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

// Запрос пароля через prompt
let userPassword = prompt('Введите пароль для авторизации:');

if (userPassword === null) {
  // Если пользователь нажал "Отмена"
  message = 'Отменено пользователем!';
} else if (userPassword === ADMIN_PASSWORD) {
  // Если пароль введен верно
  message = 'Добро пожаловать!';
} else {
  // Если пароль введен неверно
  message = 'Доступ запрещен, неверный пароль!';
}

// Вывод результата через alert
alert(message);
