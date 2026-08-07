import axios from "axios";
import type { Article } from "../types/article";

const API = axios.create({
    baseURL: "http://127.0.0.1:8000",
});

export async function searchNews(query: string) {
    console.log("Sending request...");

    const response = await API.post<Article[]>("/search", {
        query,
    });
    console.log("Response arrived");

    return response.data;
}