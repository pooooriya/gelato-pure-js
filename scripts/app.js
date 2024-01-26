// ravesh aval => classic addi ajax zadan

// const xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function (data) {
//   console.log(data);
// };

// xhr.open(
//   "GET",
//   "https://restaurant.delino.com/restaurant/menu/252983dd-4fce-4433-b9b0-793651952666"
// );

// xhr.send();

// fetch api

const handleCreateIceCreamList = ({ categories }) => {
  const parent = document.querySelector(".container_main_content_products");
  categories.forEach((element) => {
    element.sub.map((sub) => {
      sub.food.map((iceCream) => {
        const divElm = document.createElement("div");
        divElm.className = "container_main_content_products_item";
        const content = `<div><img src="${iceCream.img.replace(
          "#SIZEOFIMAGE#",
          "560x350"
        )}" alt="bastani" /> <h3>${iceCream.title}</h3> <span> ${
          iceCream.price
        } </span></div>`;
        divElm.innerHTML = content;
        parent.appendChild(divElm);
      });
    });
  });
};

fetch(
  "https://restaurant.delino.com/restaurant/menu/252983dd-4fce-4433-b9b0-793651952666"
)
  .then((res) => res.json())
  .then((res) => handleCreateIceCreamList(res));

//   <div class="container_main_content_products_item">
//   <img
//     src="https://static.delino.com/Image/Restaurant/Food/s5adlzol.bx5_560x350.jpg"
//     alt="bastani"
//   />
//   <h3>فرروی بونتی Bounty Ferrero</h3>
//   <span> 108,000 تومان </span>
// </div>
