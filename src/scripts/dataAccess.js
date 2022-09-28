const API = "http://localhost:8888";

const applicationState = {
    requests: [],
    plumbers: [],
};
console.log(applicationState);
console.log(applicationState.requests);


/* -------------Requests------------------ */
export const fetchRequests = async () => {
    const dataFetch = await fetch(`${API}/requests`);
    const serviceRequests = await dataFetch.json();
    //console.log(serviceRequests);
    // Store the external state in application state
    applicationState.requests = serviceRequests;
    //console.log(serviceRequests.requests);
};
export const getRequests = () => {
    return applicationState.requests.map((a) => ({ ...a }));
};

export const sendRequest = async (userServiceRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userServiceRequest),
    };

    const mainContainer = document.querySelector("#container");
    const response = await fetch(`${API}/requests`, fetchOptions);
    const responseJson = await response.json();
    mainContainer.dispatchEvent(new CustomEvent("stateChanged"));
    return responseJson;
};

/* -------delete-------- */
export const deleteRequest = async (id) => {
    await fetch(`${API}/requests/${id}`, { method: "DELETE" });
    mainContainer.dispatchEvent(new CustomEvent("stateChanged"));
};
/* -------------------------------------------------- */
/* ----------------------Plumpers------------- */
export const fetchPlumbers = async () => {
    const dataFetch = await fetch(`${API}/plumbers`);
    const plumbers = await dataFetch.json();
    applicationState.plumbers = plumbers;
};
