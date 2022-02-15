const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  fetch('php.php', {
    method: "POST",
    body: formData
  })
  .then((response) => {
    let res = response.json();
    return res;
  }).then((res) =>{

    console.log(res);
  })
})