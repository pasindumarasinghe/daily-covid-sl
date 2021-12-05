/* Fetch necessary data from https://hpb.health.gov.lk */

import axios from "axios";

const api = "https://hpb.health.gov.lk/api/get-current-statistical";

const last_updated = document.getElementById("last-updated");
const new_cases = document.getElementById("new-cases");
const deaths = document.getElementById("deaths");
const error = document.getElementById("error");
// const results = document.getElementById("results");
const button = document.getElementById("fetch-button");

// //fetch the data and put them in proper places
const fetchData = async () => {
    try {
        const response = await axios.get(api);
        last_updated.textContent = response.data.data.update_date_time;
        new_cases.textContent = response.data.data.local_new_cases;
        deaths.textContent = response.data.data.local_new_deaths;
    } catch (e) {
        error.textContent = "Error";
    }
}

button.addEventListener("click", () => {
    fetchData();
})
