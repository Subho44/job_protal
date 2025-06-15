import axios from "axios";

export default axios.create({
    basedURL:"http://localhost:5800/api/auth"
});
