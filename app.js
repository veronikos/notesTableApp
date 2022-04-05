// DATA STARTER
const startData = [
  {
    name: "Shopping List",
    created: "April 20, 2022",
    category: "Task",
    content: "Tomatoes, bread",
    dates: "",
  },
  {
    name: "The theory of evolution",
    created: "April 27, 2022",
    category: "Random Thought",
    content: "The evolution is something cool",
    dates: "",
  },
  {
    name: "New Feature",
    created: "May 5, 2022",
    category: "Idea",
    content: "Implement new feature into this Notes App 3/5/2023, 5/5/2030",
    dates: "3/5/2023, 5/5/2030",
  },
  {
    name: "Simone Biles",
    created: "May 5, 2022",
    category: "Quote",
    content:
      "I’d rather regret the risks that didn’t work out than the chances I didn’t take at all.",
    dates: "",
  },
  {
    name: "Books",
    created: "May 17, 2022",
    category: "Task",
    content: "Learn JS and React",
    dates: "",
  },
  {
    name: "Business",
    created: "May 18, 2022",
    category: "Idea",
    content:
      "You must love and care for yourself 15/7/2023 because that's when the best comes out.",
    dates: "15/7/2023",
  },
  {
    name: "Emma Watson",
    created: "May 19, 2022",
    category: "Quote",
    content: "Girls should never be afraid to be smart.",
    dates: "",
  },
];

// Selectors
const tableHeader = document.querySelector(".table-container");
const tableButtons = document.querySelector(".table-container");
const headerButton = document.querySelector(".header-button");

// Functions

//icon for the category
const categoryIcon = (category) => {
  let output;
  switch (category) {
    case "Task":
      output = `<i class="fa-solid fa-cart-shopping"></i>`;
      break;
    case "Quote":
      output = `<i class="fa-solid fa-quote-left"></i>`;
      break;
    case "Idea":
      output = `<i class="fa-solid fa-lightbulb"></i>`;
      break;
    case "Random Thought":
      output = `<i class="fa-solid fa-brain"></i>`;
      break;
  }
  return output;
};

// SHOW DATA FROM START
const showStartData = (startData) => {
  startData.forEach((data) => {
    const tableRow = document.createElement("div");
    tableRow.classList.add("table-row");
    const name = document.createElement("div");
    name.classList.add("name");
    name.innerHTML = `${categoryIcon(data.category)}
    <b>${data.name}</b>`;
    tableRow.appendChild(name);

    const created = document.createElement("div");
    created.classList.add("created");
    created.innerText = `${data.created}`;
    tableRow.appendChild(created);

    const category = document.createElement("div");
    category.classList.add("category");
    category.innerText = `${data.category}`;
    tableRow.appendChild(category);

    const content = document.createElement("div");
    content.classList.add("content");
    content.innerText = `${data.content}`;
    tableRow.appendChild(content);

    const dates = document.createElement("div");
    dates.classList.add("dates");
    dates.innerText = `${data.dates}`;
    tableRow.appendChild(dates);

    const tableButtons = document.createElement("div");
    tableButtons.classList.add("table-buttons");
    tableButtons.innerHTML = `
    <button>
        <i class="fa-solid fa-pen"></i>
    </button>
    <button>
        <i class="fas fa-box-archive"></i>
    </button>
    <button>
        <i class="fas fa-trash"></i>
    </button>`;
    tableRow.appendChild(tableButtons);

    tableHeader.appendChild(tableRow);
  });
};

const deleteNote = (e) => {
  e.preventDefault();
  let item = e.target;
  console.log("hey, we delele it", e.target.classList);
  const tableRow = item.parentElement.parentElement.parentElement;
  if (
    item.classList[1] === "fa-trash" &&
    tableRow.classList[0] === "table-row"
  ) {
    tableRow.remove();
  }
};

const addNewNote = () => {
  let newName = prompt("Name?");
};

// EVENT LISTENERS
document.addEventListener("DOMContentLoaded", showStartData(startData));
tableButtons.addEventListener("click", deleteNote);
headerButton.addEventListener("click", addNewNote);
