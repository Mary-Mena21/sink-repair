//import { Requests } from "./dataAccess.js"
import { fetchRequests } from "./dataAccess.js"
import { fetchPlumbers } from "./dataAccess.js"
import { SinkRepair } from "./SinkRepair.js"

// 

const mainContainer = document.querySelector("#container")

const render = async () => {
    await fetchRequests()
    await fetchPlumbers()
    mainContainer.innerHTML = SinkRepair()
}

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)



/* import { KneelDiamonds } from "./KneelDiamonds.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = KneelDiamonds()
}

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})

 */