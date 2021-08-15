function getInput() {
    const first = document.getElementById("firstname").value;
    const last = document.getElementById("lastname").value;
    const addr = document.getElementById("address").value;
    const pin = document.getElementById("pincode").value;
    // const gen = document.getElementsByName("gender").value;
  
    const state = document.getElementById("state").value;
    const coun = document.getElementById("country").value;
  
    const tbl = document.getElementById("table1");
    const row = tbl.insertRow();
    const cell1 = row.insertCell();
    cell1.innerText = first;
    const cell2 = row.insertCell();
    cell2.innerText = last;
    const cell3 = row.insertCell();
    cell3.innerText = addr;
    const cell4 = row.insertCell();
    cell4.innerText = pin;
    const ele = document.getElementsByName("gender");
    for (let i = 0; i < ele.length; i++) {
      if (ele[i].checked) {
        const cell5 = row.insertCell();
        cell5.innerText = ele[i].value;
      }
    }
  
    const cell7 = row.insertCell();
    cell7.innerText = state;
    const cell8 = row.insertCell();
    cell8.innerText = coun;
    // document.body.append(tbl);
    // cell1.innerText = document.querySelector(".container").innerHTML = first;
  }
  // function res(event) {
  //   const fname = event.target.value;
  //   console.log(fname);
  //   const lname = event.target.value;
  //   console.log(lname);
  //   // window.localStorage.setItem("fname", fname);
  