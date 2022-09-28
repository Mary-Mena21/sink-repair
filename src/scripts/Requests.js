import { getRequests, deleteRequest } from "./dataAccess.js";

export const Requests = () => {
    const requests = getRequests();

    let html = ``;
    html = `<ul>`;
    for (const request of requests) {
        html += `
      <li>
        ${request.description}
        <button class="request__delete" id="request--${request.id}">
          Delete
        </button>
      </li>
    `;
    }
    html += `</ul>`;

    return html;
};


/* -------delete--EventListener------ */
const mainContainer = document.querySelector("#container");

mainContainer.addEventListener("click", (click) => {
    if (click.target.id.startsWith("request--")) {
        const [, requestId] = click.target.id.split("--");
        deleteRequest(parseInt(requestId));
    }
});
