import { Injectable } from '@angular/core'
import { ComponentStore } from '@ngrx/component-store';


export interface AuthState {
    accessToken: string | null;
    tokenType: string | null;
    expiresIn: number;
    state: string | null;
}

@Injectable()
export class AuthStore extends ComponentStore<AuthState> {

    constructor() {
        super(<AuthState>{});
    }
}