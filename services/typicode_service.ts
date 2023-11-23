import { APIRequestContext } from "@playwright/test";

export class TypicodeService{

    request: APIRequestContext;
    constructor(_request: APIRequestContext){
        this.request = _request;
    }

    //if this requires authentication call the auth service function first - the requestContext will save the cookies
    async get(){
        const response = await this.request.get(`https://jsonplaceholder.typicode.com/todos/1`);
        return await response.json();
    }
}