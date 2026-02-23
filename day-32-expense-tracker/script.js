let balance = 0;
let income = 0;
let expense = 0;

function addTransaction(type) {
    let desc = document.getElementById("desc").value;
    let amount = parseInt(document.getElementById("amount").value);

    if (!desc || !amount) return;

    let list = document.getElementById("transactionList");
    let li = document.createElement("li");

    li.innerText = desc + " - ₹ " + amount;
    list.appendChild(li);

    if (type === "income") {
        income += amount;
        balance += amount;
    } else {
        expense += amount;
        balance -= amount;
    }

    document.getElementById("income").innerText = income;
    document.getElementById("expense").innerText = expense;
    document.getElementById("balance").innerText = balance;

    document.getElementById("desc").value = "";
    document.getElementById("amount").value = "";
}
