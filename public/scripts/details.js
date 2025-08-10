const details = document.querySelector(".details-container");

async function fetchData() {
  details.innerHTML = "<p>Loading! please wait</p>";
  try {
    const res = await fetch("http://localhost:8000/api/data");
    console.log(res);
    const data = await res.json();
    console.log(data);
    details.innerHTML = "";
    data.forEach((student) => {
      details.innerHTML += `<li class="std-ele">id:${student.id} | Name:${student.name} | Age:${student.age}</li>`;
    });
  } catch (error) {
    console.error(error);
  }
}

window.addEventListener("load", fetchData);
