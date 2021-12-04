import axios from "axios";

const api = "https://hpb.health.gov.lk/api/get-current-statistical";

const fetchData = async () => {
    try {
        const response = await axios.get(api);
        console.log(response.data.data.update_date_time);
        console.log(response.data.data.local_new_cases);
        console.log(response.data.data.local_new_deaths);

    } catch (e) {
        console.log(e);
    }
}

fetchData();