import { APIRequestContext } from "@playwright/test";
import { AuthService } from "./auth_service";
import { TypicodeService } from "./typicode_service";

//Use this class to add new service classes as they will be accessible through DI

export class ServiceAggregator{
    request: APIRequestContext;
    authService: AuthService;
    typicodeService: TypicodeService;
    
    constructor(_request: APIRequestContext){
        this.request = _request;
        this.authService = new AuthService(this.request);
        this.typicodeService = new TypicodeService(this.request);
    }
}