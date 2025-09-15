document.querySelector('#new-task').addEventListener('click',newRow)
document.querySelector('#del-task').addEventListener('click',delRow)
document.querySelector('#new-task2').addEventListener('click',newRow)
document.querySelector('#del-task2').addEventListener('click',delRow)

// Obtain relevant interface elements
const bodySection = document.querySelectorAll("tbody")[0];


const dateControl = document.querySelector('input[type="date"]')

const utc = new Date().toJSON().slice(0,10)
dateControl.min = utc

function newRow() {
    const row = bodySection.rows.item(bodySection.rows.length - 1); // Select the first row of the body section

    let newCell = row.insertCell(0)
    newCell.innerHTML = '<input type="checkbox" class="check">'

    let newCell2 = row.insertCell(1)
    newCell2.textContent = document.getElementById('new-todo').value
    newCell2.className = 'task'

    const dateCheck = document.getElementById('new-due').value
    const dateNumbers = dateCheck.split('-')
    const utcList = utc.split('-')
    console.log(dateNumbers,utcList)
    

    if (Number(dateNumbers[1]) <= Number(utcList[1]) && Number(dateNumbers[2]) < Number(utcList[2])) {
        let newCell3 = row.insertCell(2)
        newCell3.textContent = 'f*ck!'
    } else {
        let newCell3 = row.insertCell(2)
        newCell3.textContent = document.getElementById('new-due').value
        newCell3.className = 'dueDate'
    }
    // let newCell3 = row.insertCell(2)
    // newCell3.textContent = document.getElementById('new-due').value
    // newCell3.className = 'dueDate'

    bodySection.insertRow()
    document.getElementById('new-todo').value = ''
}

function delRow() {
    const checks = document.querySelectorAll('.check')
    
    for (let i=0; i < checks.length; i++) {
        if (checks[i].checked === true) {
            checks[i].closest('tr').remove()
        }
    }    
}