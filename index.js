let tbody = document.getElementById("tbody");
const URL = "http://localhost:3000/user";

//fetch function
//easy, logical way to fetch resources asynchronously across the network
fetch("http://localhost:3000/user") // GET, PUT/PATCH, CREATE, DELETE
  .then((res) => res.json()) // response.json
  .then((json) => {
    json.map((data) => {
      //   console.log(data);
      tbody.append(td_fun(data));
    });
  });

//   CRUD
const createUser = (user) => {
  const options = {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  };

  fetch(URL, options);
}; // C

const getAllUsers = () => {}; // R

const findUserbyId = (id) => {
  fetch(`${URL}/?id=${id}`)
    .then((res) => res.json())
    .then((user) => console.log(user));
}; // R

findUserbyId(3);

const UpdateUser = (id) => {}; // U

const DeleteUser = (id) => {}; // D

//create table data
function td_fun({ profile, name, email, status, role }) {
  let td = document.createElement("tr");
  td.innerHTML = `
    <td class="px-6 py-4 whitespace-nowrap">
            <div class="flex items-center">
                <div class="flex-shrink-0 h-10 w-10">
                    <img src="${profile}" class="h-10 w-10 rounded-full" alt="">
                </div>
                <div class="ml-4">
                    <div class="text-sm font-medium font-gray-900">
                        ${name}
                    </div>
                    <div class="text-sm text-gray-500">
                        ${email}
                    </div>
                </div>
            </div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
            <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                ${status}
            </span>
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
            <span class="text-sm text-gray-500">${role}</span>
        </td>
    `;
  return td;
}
