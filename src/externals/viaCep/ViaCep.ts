import axios, { AxiosInstance } from "axios";
import { GeoApiInterface } from "./GeoApiInterface";

class ViaCep implements GeoApiInterface {
    endpoint: string = 'https://viacep.com.br/';
    private api: AxiosInstance

    constructor(){
        this.api = axios.create({
            baseURL: this.endpoint
        })
    }

    getAddress(bodyValue: string) {
        // this.api.get('ws/' + bodyValue + 'json/')
        this.api.get(`ws/${bodyValue}/json/`)
    }
}