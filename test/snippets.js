// СОЗДАНИЕ ЭЛЕМЕНТА ЧЕРЕЗ ДОБАВЛЕНИЕ HTML РАЗМЕТКИ:
function createTask(str) {
  const taskText = document.querySelector('.task p');
  const task = `
    <article class="task">
      <p></p>
      <div class="task__panel">
        <img class="task__panel-button" src="./img/editDark.svg" alt="Button to change the task.">
        <img class="task__panel-button" src="./img/trashDark.svg" alt="Button for deleting a task.">
      </div>
    </article>`;

  listContainer.insertAdjacentHTML('afterbegin', task);
  taskText.insertAdjacentText('afterbegin', str);
}

/**
 * Создание элемента task через копирования узла:
 *
 * @param {string} str Текст из строки ввода.
 */
function cloneTask(str) {
  const task = taskPrototype.cloneNode(true);
  const taskText = task.querySelector('.task__content p');
  taskText.innerText = str;
  listContainer.prepend(task);
}

// ОБРЕЗАНИЕ ВНЕШНИХ ПРОБЕЛОВ СТРОКИ
const regExpDeletionSpaces = (iputBox.value).replace(/^\s+|\s+$/g, '');
const newString = (iputBox.value).trim();

// ИМЕНОВАНИЕ ДАННЫХ ПО ИХ СОДЕРЖАНИЮ И ИНДЕКСУ В localstorage:
let counters = document.querySelectorAll('.todo-app__counter-value');
let textArray = Array.from(counters).map(el => {
  return el.textContent;
})
textArray.forEach((element, index) => {
  let nameElement = element.match(/\b[a-zA-Z]+\b/gi).join('') + '_' + index;
  localStorage.setItem(`${nameElement}`, element);
})

// ПРОВЕРКА ТЕКСТА В ПОЛЕ input:
function splitSpace(str) {
  str = str.split(' ').join('');
  console.log(str);
  return str ? true : false;
}

// checked НЕ checked - заменилось toggle~
function taskChecker(eventTarget, taskElement) {
  let taskContent = taskElement.querySelector('.task__content')

  if (!taskContent.classList.contains('checked')) {
    taskContent.classList.add('checked');
  } else {
    taskContent.classList.remove('checked');
  }
}

// ФИЛЬТРАЦИЯ task ПО КЛАССУ task__content checked/task__content
const inTheRow = appFilter.querySelector('.todo-app__filter-row span');
const allItems = Array.from(document.querySelectorAll('.task'));

allItems.forEach(element => {
  switch (inTheRow.id) {
    case 'all':
      element.style.display = 'flex';
      break;
    case 'checked':
      if (element.firstElementChild.classList.contains('checked')) {
        element.style.display = 'flex';
      } else {
        element.style.display = 'none';
      }
      break;
    case 'unchecked':
      if (element.firstElementChild.classList.contains('unchecked')) {
        element.style.display = 'flex';
      } else {
        element.style.display = 'none';
      }
      break;
  }
});

// МЕТОДЫ УДАЛЕНИЯ ПРОБЕЛОВ В МУЛЬТИСТРОКЕ:
let someText = `

          <span class="todo-app__counter-value">tasks: 0</span>
          <span class="todo-app__counter-value">checked: 0</span>

          `;
console.log(someText.replace(/^\s+/gim, ''));
console.log(someText.replace(/^\s+|\s+$/gim, ''));
console.log(someText.split('\n').map((el, i) => el.match(/\S+/g) ? el.trim() : el = '').join('\n').trim());

// ФУНКЦИЯ ПЕРЕВОРОТА СЛОВ ОТ 5 СИМВОЛОВ В СТРКОЕ:
function spinWords00(s) {
  return s.split(' ').map(w => w.length > 4 ? w.split('').reverse().join('') : w).join(' ');
}
function spinWords01(string) {
  return string.replace(/\w{5,}/gim, (el) => { return el.split('').reverse().join('') })
}

// УДАЛЕНИЕ ВНЕШНИХ ПРОБЕЛОВ В СТОКЕ:
const input = '   Hello, world!     ';
input.replace(/^\s+|\s+$/g, '');
input.trim();

// ПРОВЕРКА СТРОКИ НА ЗАПОЛНЕННОСТЬ:
function splitSpace00(str) {
  str = str.split(' ').join('');
  if (str) {
    console.log(true, 'long');
  } else {
    console.log(false, 'long');
  }
}

function splitSpace01(str) {
  str = str.split(' ').join('');
  return str ? console.log(str, true, 'short') : console.log(str, false, 'short');
}
