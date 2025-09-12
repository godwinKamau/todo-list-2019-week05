document.querySelector('#new-task').addEventListener('click',newRow)
document.querySelector('#del-task').addEventListener('click',delRow)

// Obtain relevant interface elements
const bodySection = document.querySelectorAll("tbody")[0];


function newRow() {
    const row = bodySection.rows.item(bodySection.rows.length - 1); // Select the first row of the body section

    console.log('started')
    let newCell = row.insertCell(0)
    newCell.innerHTML = '<input type="checkbox" class="check">'

    let newCell2 = row.insertCell(1)
    newCell2.textContent = document.getElementById('new-todo').value
    newCell2.className = 'task'

    let newCell3 = row.insertCell(2)
    newCell3.textContent = document.getElementById('new-due').value
    newCell3.className = 'dueDate'

    bodySection.insertRow()
}

function delRow() {
    const checks = document.querySelectorAll('.check')
    
    for (let i=0; i < checks.length; i++) {
        if (checks[i].checked === true) {
            checks[i].closest('tr').remove()
        }
    }    
}