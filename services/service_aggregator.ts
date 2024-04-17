import { APIRequestContext } from "@playwright/test";
import { TypicodeService } from "./typicode_service";

//Use this class to add new service classes as they will be accessible through DI

export class ServiceAggregator{
    request: APIRequestContext;
    typicodeService: TypicodeService;
    
    constructor(_request: APIRequestContext){
        this.request = _request;
        this.typicodeService = new TypicodeService(this.request);
    }
}