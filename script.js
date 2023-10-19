// console.log("hello");
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let element_arr = [];
let ele_data = document.querySelectorAll(".player_data_info");
ele_data.forEach((e) => {
  element_arr.push(e);
});
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(e.target.children);
  // let val=document.querySelectorAll(".box",(vals)=>{
  //     console.log(val);
  // });
  let first_name = e.target.children[0].value;
  let last_name = e.target.children[1].value;
  let country_name = e.target.children[2].value;
  let score_number = e.target.children[3].value;
  let error_message = document.querySelector(".error");

  //   console.log(first_name, last_name, country_name, score_number, error_message);
  error_message.style.display = "none";

  if (
    first_name == "" ||
    last_name == "" ||
    country_name == "" ||
    score_number == ""
  ) {
    return (error_message.style.display = "block");
  }
  let score_board = document.querySelector(".player_data");
  let new_score_element = document.createElement("div");
  new_score_element.classList.add("player_data_info");

  new_score_element.innerHTML = `<div class="name_and_date">
       <p>${first_name} ${last_name}</p>
       <p>${
         months[new Date().getMonth()]
       } ${new Date().getFullYear()} ${new Date().getDate()} ${new Date().getHours()}.${new Date().getMinutes()}.${new Date().getSeconds()}</p>
     </div>
     <p>${country_name}</p>
     <p>${score_number}</p>
     <div class="btns">
       <button class="clicks">🗑</button>
       <button class="clicks">+5</button>
       <button class="clicks">-5</button>
     </div>
       `;
  console.log(new_score_element);
  score_board.appendChild(new_score_element);
  activatebtn();

//   ele.addEventListener("click", (e) => {
//     let buttonclick = e.target.textContent;
//     let score_of_player = e.target.parentElement.parentElement.children[2];

//     if (buttonclick == "🗑") {
//       e.target.parentElement.parentElement.remove();
//     } else if (buttonclick == "+5") {
//       score_of_player.innerText = parseInt(score_of_player.innerText) + 5;
//     } else {
//       score_of_player.innerText = parseInt(score_of_player.innerText) - 5;
//     }
//     sort_data(element_arr);
//   });


  element_arr.push(new_score_element);
  sort_data(element_arr);
});

function activatebtn() {
  document.querySelectorAll(".btns").forEach((ele) => {
    ele.addEventListener("click", (e) => {
      let buttonclick = e.target.textContent;
      let score_of_player = e.target.parentElement.parentElement.children[2];

      if (buttonclick == "🗑") {
        e.target.parentElement.parentElement.remove();
      } else if (buttonclick == "+5") {
        score_of_player.innerText = parseInt(score_of_player.innerText) + 5;
      } else {
        score_of_player.innerText = parseInt(score_of_player.innerText) - 5;
      }
      sort_data(element_arr);
    });
  });
}
function sort_data(element_arr) {
    element_arr.sort((a, b) => {
        let aInt = parseInt(a.children[2].innerText);
        let bInt = parseInt(b.children[2].innerText);
        if (aInt > bInt) {
            return -1;
        } else if (aInt < bInt) {
            return 1;
        } else {
            return 0;
        }
    });
  document.querySelector(".player_data").replaceChildren(...element_arr);
}
sort_data(element_arr);
activatebtn();
// console.log(element_arr);
