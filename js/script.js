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

const list = document.getElementById('list')

const render = (arr) => {
    list.textContent = ''

    for (let i = 0; i < arr.length; i++) {
        const newItem = document.createElement('div')
        newItem.textContent = arr[i].text
        list.append(newItem)
    }
}

render(toDoArr)

const remove = (i) => {
    toDoArr.splice(i, 1)
    render(toDoArr)
}