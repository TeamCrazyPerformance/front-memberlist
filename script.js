let users = [{}];
const container = document.getElementById("container");

function GET() {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        users = JSON.parse(xhr.response);
        users.map((obj) => {
          let card = document.createElement("div");
          card.className = "card";
          card.innerHTML = `<article class="card__content"> \
          <span class="card__title">${obj.username}(${obj.name})</span> \
          <span class="card__email">${obj.email}</span> \
          <span class="card__number">${obj.phone}</span> \
          <span class="card__link">${obj.website}</span> \
        </article>`;
          container.appendChild(card);
        });
      } else {
        window.alert("연결 실패!");
      }
    }
  };
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
  xhr.send();
}

GET();
