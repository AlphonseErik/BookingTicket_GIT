import { Injectable } from "@angular/core";

import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from "@angular/common/http";

import { Observable } from "rxjs";

@Injectable()

export class TokenInterceptor implements HttpInterceptor {

    constructor() { }

    token = localStorage.getItem("credentials")

        ? JSON.parse(localStorage.getItem("credentials")).accessToken

        : "";

    intercept(

        request: HttpRequest<any>,

        next: HttpHandler

    ): Observable<HttpEvent<any>> {

        request = request.clone({

            setHeaders: {

                Authorization: `Bearer ${this.token}`

            }

        });

        return next.handle(request);

    }

}