async function handleSubmit() {
  const name = document.querySelector(".nameInput");
  const age = document.querySelector(".ageInput");
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name.value,
      age: age.value,
    }),
  };
  name.value = "";
  age.value = "";
  const data = await fetch("http://localhost:8000/api/data", options);
  console.log(data);
}
