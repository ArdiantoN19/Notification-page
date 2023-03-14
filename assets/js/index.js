import users from "../../data.json" assert { type: "json" };

const sectionList = document.querySelector(".section-list");

function mappingDataUser() {
  users.forEach((user) => {
    sectionList.innerHTML += `<li class="section-item ${
      user.isRead ? "is-read" : ""
    }">
    <img src="${user.image}" alt="${user.name}" class="section-item__image">
    <div class="group">
      <div class="section-item__group__notification">
        <div>
          <a href="#" class="section-item__group__notification__name">${
            user.name
          }</a>
          <span class="section-item__group__notification__message">${
            user.messsage
          } <a href="#">${user.titleMessage}</a> ${
      user.isRead ? "" : '<span class="no-read"></span>'
    } </span>
          <p class="section-item__group__notification__timestamp">${
            user.time
          }</p>
        </div>
        ${
          user.comment
            ? `<img src="${user.comment}" alt="${user.comment}" class="section-item__comment"/>`
            : ""
        }
      </div>
      ${
        user.feedback
          ? `<div class="section-item__feedback">${user.feedback}</div>`
          : ""
      }
    </div>
  </li>`;
  });
}

window.addEventListener("load", mappingDataUser());
