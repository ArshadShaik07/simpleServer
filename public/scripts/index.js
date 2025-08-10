async function handleSubmit(method) {
  const name = document.querySelector(".nameInput");
  const age = document.querySelector(".ageInput");
  const id = document.querySelector(".idInput");
  let body = {};
  if (method === "DELETE") {
    body = { id: id.value };
  } else {
    body = { id: id.value, name: name.value, age: Number(age.value) };
  }

  const options = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
  try {
    const data = await fetch("http://localhost:8000/api/data", options);
    console.log(await data.json());
  } catch (error) {
    console.error(error);
  }
  age.value = "";
  name.value = "";
  id.value = "";
}

function handleGoto() {
  window.location = "http://localhost:8000/details.html";
}
