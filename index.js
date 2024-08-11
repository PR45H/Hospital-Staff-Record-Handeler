// fill in javascript code here
let tbody = document.querySelector('tbody')
let form = document.querySelector('form')

let docRecordsData = [];

form.addEventListener('submit', (e) => {
    submitHandler(e)
})
function submitHandler(e) {
    e.preventDefault()
    let nameInput = document.getElementById("name").value
    let idInput = Number(document.getElementById('docID').value)
    let sepInput = document.getElementById('dept').value
    let expInput = Number(document.getElementById('exp').value)
    let emailInput = document.getElementById('email').value
    let mobileInput = document.getElementById('mbl').value

    let docRecords = {
        name: nameInput,
        docId: idInput,
        specl: sepInput,
        exp: expInput,
        email: emailInput,
        mobile: mobileInput
    }

    docRecordsData.push(docRecords)

    showData(docRecordsData);
}

function showData(docRecordsData) {
    
    tbody.innerHTML = ""
    docRecordsData.forEach(function (ele) {
        let tr = document.createElement('tr')

        let tdName = document.createElement('td')
        tdName.innerHTML = ele.name
        tr.append(tdName)
        
        let tdId = document.createElement('td')
        tdId.innerHTML = ele.docId
        tr.append(tdId)

        let tdspecl = document.createElement('td')
        tdspecl.innerHTML = ele.specl
        tr.append(tdspecl)
        
        let tdExp = document.createElement('td')
        tdExp.innerHTML = ele.exp
        tr.append(tdExp)

        let tdEmail = document.createElement('td')
        tdEmail.innerHTML = ele.email
        tr.append(tdEmail)
        
        let tdMno = document.createElement('td')
        tdMno.innerHTML = ele.mobile
        tr.append(tdMno)

        let tdRole = document.createElement('td')
        if (ele.exp > 5) {
            tdRole.innerText = "Senior"
        } else if (ele.exp <= 5 && ele.exp >= 2) {
            tdRole.innerText = "Junior"
        } else if (ele.exp <= 1 && ele.exp >= 0) {
            tdRole.innerText = "Trainee"
        } else {
            tdRole.innerText = "Entered Expereince is not valid"
        }
        tr.append(tdRole)

        let deleteBtn = document.createElement('button')
        deleteBtn.innerText = "Delete"
        tr.append(deleteBtn)

        deleteBtn.addEventListener('click', () => {
            deleteHandler(ele.docId)
        })



        tbody.append(tr)
        
    })
}


function deleteHandler(id) {
    docRecordsData = docRecordsData.filter(function (ele) {
            return ele.docId !== id
    })
    showData(docRecordsData)
}