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

let data = [startData];

// Selectors
const tableHeader = document.querySelector(".table-container");
const tableButtons = document.querySelector(".table-container");
const headerButton = document.querySelector(".header-button");
const closePopupButton = document.querySelector(".fa-square-xmark");
const saveNoteButton = document.querySelector(".save-note-button");
const inputArea = document.querySelector(".input-area");
const noteName = document.querySelector("input");
const noteContent = document.querySelector("textarea");
const category = document.querySelector(".choose-category");

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

const showDataNode = (node) => {
  const tableRow = document.createElement("div");
  tableRow.classList.add("table-row");
  const name = document.createElement("div");
  name.classList.add("name");
  name.innerHTML = `${categoryIcon(node.category)}
  <b>${node.name}</b>`;

  const created = document.createElement("div");
  created.classList.add("created");
  created.innerText = `${node.created}`;

  const category = document.createElement("div");
  category.classList.add("category");
  category.innerText = `${node.category}`;

  const content = document.createElement("div");
  content.classList.add("content");
  content.innerText = `${node.content}`;

  const dates = document.createElement("div");
  dates.classList.add("dates");
  dates.innerText = `${node.dates}`;

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

  tableRow.append(name, created, category, content, dates, tableButtons);
  tableHeader.appendChild(tableRow);
};
// SHOW DATA FROM START
const showStartData = (startData) => {
  startData.forEach((data) => {
    showDataNode(data);
  });
};

const iterateNote = (e) => {
  e.preventDefault();
  let item = e.target;
  const tableRow = item.closest(".table-row");

  // DELETE NOTE
  if (
    item.classList[1] === "fa-trash" &&
    tableRow.classList[0] === "table-row"
  ) {
    tableRow.remove();
  }

  // EDIT NOTE
  else if (item.classList[1] === "fa-pen") {
    inputArea.style.display = "flex";
    console.log(e.target.closest(".table-row").children[0].innerText);
    noteName.value = e.target.closest(".table-row").children[0].innerText;
    noteContent.value = e.target.closest(".table-row").children[3].innerText;
    category.value = e.target.closest(".table-row").children[2].innerText;

    console.log(tableHeader.childNodes);
    let data = tableHeader.childNodes;
    console.log(typeof data);
  }
};

const openPopup = () => {
  inputArea.style.display = "flex";
};

const closePopup = () => {
  inputArea.style.display = "none";
};

const saveNote = () => {
  data = [...data];

  data.push({
    name: noteName.value,
    created: new Date().toLocaleDateString(),
    // надо поправить формат даты
    category: category.value,
    content: noteContent.value,
    // надо сделать парсер дат
    dates: "",
  });
  showDataNode(data[data.length - 1]);
  console.log(data[data.length - 1].created);
  noteName.value = "";
  noteContent.value = "";
  closePopup();
};

// EVENT LISTENERS
document.addEventListener("DOMContentLoaded", showStartData(startData));
tableButtons.addEventListener("click", iterateNote);
headerButton.addEventListener("click", openPopup);
closePopupButton.addEventListener("click", closePopup);
saveNoteButton.addEventListener("click", saveNote);
