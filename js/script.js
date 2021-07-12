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

const input = document.getElementById('input')
const list = document.getElementById('list')
const addBtn = document.getElementById('add')

const render = (arr) => {
    list.textContent = ''

    for (let i = 0; i < arr.length; i++) {
        const newItem = document.createElement('div')
        const deleteBtn = document.createElement('img')

        newItem.textContent = arr[i].text
        newItem.classList.add('list-item')
        deleteBtn.src = 'icons/delete.svg'

        newItem.append(deleteBtn)
        list.append(newItem)

        deleteBtn.addEventListener('click', (e) => {
            e.target.parentNode.remove()
        })
    }
}

render(toDoArr)

const remove = (i) => {
    toDoArr.splice(i, 1)
    render(toDoArr)
}



const addToDo = () => {
    toDoArr.push({text: input.value, done: false})
    render(toDoArr)
    input.value = ''
}

addBtn.addEventListener('click', addToDo)