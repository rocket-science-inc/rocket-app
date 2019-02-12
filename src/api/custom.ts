import axios from "axios";
import { ENV } from "@configs/env";

export const $custom = axios.create({
    baseURL: ENV.BASE_URL
});