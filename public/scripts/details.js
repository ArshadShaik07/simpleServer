const details = document.querySelector(".details-container");

async function fetchData() {
  const res = await fetch("http://localhost:8000/api/data");
  const data = await res.json();
  details.innerHTML = "";
  data.forEach((student) => {
    details.innerHTML += `<li>Name:${student.name} , Age:${student.age}</li>`;
  });
}

window.addEventListener("load", fetchData);
