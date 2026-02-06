
const travels = [];

const addBtn = document.querySelector(".add_btn");
const modal = document.querySelector(".form");
const closeBtn = document.querySelector(".close_btn");
const form = document.querySelector("form");

const cardsContainer = document.getElementById("cardsContainer");
const categoryButtons = document.querySelectorAll(".category-btn");


addBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});


document.addEventListener("DOMContentLoaded", () => {
  renderTravels(travels);
});


form.addEventListener("submit", (e) => {
  e.preventDefault();

  const travel = {
    id: Date.now(),
    title: title.value,
    destination: destination.value,
    category: category.value.toUpperCase(),
    note: note.value,
    image: image.value
  };

  travels.push(travel);
  renderTravels(travels);

  form.reset();
  modal.classList.add("hidden");
});


function renderTravels(data) {
  cardsContainer.innerHTML = "";

  if (data.length === 0) {
    cardsContainer.innerHTML =
      "<p class='text-center text-gray-500'>No travels yet</p>";
    return;
  }

  data.forEach(travel => {
    const card = document.createElement("div");
    card.className = "rounded-[25px] overflow-hidden shadow";

    card.innerHTML = `
      <img src="${travel.image}" class="w-full h-60 object-cover">
      <div class="bg-white py-4 flex justify-around items-center">
        <span>${travel.note} ⭐</span>
        <span>${travel.destination}</span>
      </div>
    `;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "text-red-500 text-sm";
    deleteBtn.addEventListener("click", () => deleteTravel(travel.id));

    card.querySelector("div").appendChild(deleteBtn);
    cardsContainer.appendChild(card);
  });
}


function deleteTravel(id) {
  const index = travels.findIndex(t => t.id === id);
  if (index !== -1) {
    travels.splice(index, 1);
    renderTravels(travels);
  }
}

