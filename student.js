document.getElementById("form1").addEventListener("submit", submitFun1);

var studentDataArr = JSON.parse(localStorage.getItem("studentData")) || [];

function submitFun1(e) {
    e.preventDefault();
    var name = document.querySelector("#name").value;
    var division = document.querySelector("#Division").value;
    var rollNo = document.querySelector("#rollNo").value;

    // Input validation
    if (!name || !division || !rollNo) {
        alert("Please fill out all fields.");
        return;
    }

    var studentObj = {
        name: name,
        division: division,
        rollNo: rollNo,
        attendance: [] // Track attendance here
    };

    studentDataArr.push(studentObj);
    localStorage.setItem("studentData", JSON.stringify(studentDataArr));
    document.querySelector("#form1").reset();
    alert("Student Added Successfully");

    displayFun(studentDataArr);
}

function displayFun(studentDataArr) {
    var count = 1;
    document.querySelector("#tbody").innerHTML = ""; // Clear previous data
    studentDataArr.forEach(function(item) {
        var tr = document.createElement("tr");

        var td1 = document.createElement("td");
        td1.innerHTML = count++;
        var td2 = document.createElement("td");
        td2.innerHTML = item.name;
        var td3 = document.createElement("td");
        td3.innerHTML = item.division;
        var td4 = document.createElement("td");
        td4.innerHTML = item.rollNo;
        var td5 = document.createElement("td");
        var btn1 = document.createElement("button");
        btn1.innerHTML = "P";
        btn1.addEventListener("click", function () {
            td5.innerHTML = "<button >Present</button>";
        });
        var btn2 = document.createElement("button");
        btn2.innerHTML = "A";
        btn2.addEventListener("click", function () {
            td5.innerHTML = "<button id='absent'>Absent</button>";
        
        });


        var td5 = document.createElement("td"); // Create td6 for attendance buttons
        td5.classList.add("td6");
        td5.append(btn1, btn2);

        tr.append(td1, td2, td3, td4, td5); // Add td6 to row

        document.querySelector("#tbody").append(tr);
    });
}

function clearLocalStorage() {
    localStorage.removeItem("studentData");
}

// Initial display
displayFun(studentDataArr);
