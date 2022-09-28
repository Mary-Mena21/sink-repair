import { fetchPlumbers } from "./dataAccess.js";
export const html = `<select class="plumbers" id="plumbers">
<option value="">Choose</option>
${plumbers
    .map((plumber) => {
        return `<option value="${request.id}--${plumber.id}">${plumber.name}</option>`;
    })
    .join("")}
</select>`;

/* -------select--EventListener------- */
mainContainer.addEventListener("change", (event) => {
    if (event.target.id === "plumbers") {
        const [requestId, plumberId] = event.target.value.split("--");

        /*
                    This object should have 3 properties
                       1. requestId
                       2. plumberId
                       3. date_created
                */
        const completion = {};

        /*
                    Invoke the function that performs the POST request
                    to the `completions` resource for your API. Send the
                    completion object as a parameter.
                 */
    }
});
