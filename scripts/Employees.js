import { getEmployees, getOrders } from "./database.js";

const employees = getEmployees();

export const Employees = () => {
  let html = `<ul>`;

  for (const employee of employees) {
    html += `<li data-type="employee" data-id="${employee.id}">${employee.name}</li>`;
  }

  html += `</ul>`;

  return html;
};

document.addEventListener("click", (eventClick) => {
  const employeeClick = eventClick.target;
  if (employeeClick.dataset.type === "employee") {
    const employeeID = employeeClick.dataset.id;
    let itemCounter = 0;
    const orders = getOrders();
    for (const order of orders) {
      if (parseInt(employeeID) === order.employeeId) {
        itemCounter++;
      }
    }
    window.alert(`${employeeClick.innerText} sold ${itemCounter} products.`);
  }
});
