import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "6759a297484a4e7dbebc9d3a8bb77ed4",
    },
});
