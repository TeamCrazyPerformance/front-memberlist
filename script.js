let users = [{}];
const container = document.getElementById("container");

function GET() {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        console.log("연결 성공");
        users = JSON.parse(xhr.response);
        users.map((obj) => {
          console.log("arr : " + obj);
          let card = document.createElement("div");
          card.className = "card";
          card.innerHTML = `<div> \
                    <div>${obj.name}</div> \
                    <div>${obj.email}</div> \
                  </div> \
                  <div> \
                    <div>${obj.phone}</div> \
                    <div>${obj.website}</div> \
                  </div>`;
          container.appendChild(card);
        });
      } else {
        console.log("연결 실패");
      }
    }
  };
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
  xhr.send();
}

GET();
