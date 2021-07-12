const toDoArr = [
    {
        text: 'Новое дело 1',
        done: false
    },
    {
        text: 'Новое дело 2',
        done: false
    },
    {
        text: 'Новое дело 3',
        done: false
    },
    {
        text: 'Новое дело 4',
        done: false
    },
    {
        text: 'Новое дело 5',
        done: false
    }
]
// находим элементы
const input = document.getElementById('input')
const list = document.getElementById('list')
const form = document.getElementById('form')
// основная функция, которая создает нашу верстку
const render = (arr) => {
    list.textContent = '' // при каждом вызове функции очищаем div

    for (let i = 0; i < arr.length; i++) { // цикл для перебора массива
        // создаем элементы для списка
        const newItem = document.createElement('div')
        const checkbox = document.createElement('input')
        const deleteBtn = document.createElement('img')
        const span = document.createElement('span')

        span.textContent = arr[i].text

        newItem.append(span)
        newItem.classList.add('list-item')

        checkbox.type = 'checkbox'
        newItem.prepend(checkbox)

        deleteBtn.src = 'icons/delete.svg'
        newItem.append(deleteBtn)

        list.append(newItem)

        deleteBtn.addEventListener('click', () => {
            remove(i)
        })

        checkbox.addEventListener('click', () => {
            checkTodo(i)
            span.classList.toggle('checked')
        })
    }
}

render(toDoArr)

const remove = (i) => {
    toDoArr.splice(i, 1)
    render(toDoArr)
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (input.value !== '') toDoArr.push({text: input.value, done: false})
    render(toDoArr)
    input.value = ''
})

const checkTodo = (i) => {
    toDoArr[i].done = !toDoArr[i].done
}

// комментш язъя йиш яц, со витиш!