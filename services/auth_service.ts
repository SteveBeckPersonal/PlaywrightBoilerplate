import { APIRequestContext } from "@playwright/test";

export class AuthService{

    request: APIRequestContext;
    constructor(_request: APIRequestContext){
        this.request = _request
    }

    
    async auth(username:string, password:string){
        const response = await this.request.post(`/auth`, {
            params: {
              UserName: username,
              Password: password,
            },
          });
    }
}