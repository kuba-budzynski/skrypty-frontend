import jwtDecode from "jwt-decode";
import cookie from 'react-cookies'

export const TOKEN_STORAGE_KEY = "skrypty.authToken";

export type DecodedToken = {
    readonly email: string;
    readonly username: string,
    readonly user_id: string
    readonly exp: number;
}

export class AuthProvider{
    private token: string = null
    private decoded: DecodedToken = { email: "", exp: 0, user_id: "", username: "" };

    constructor(){
        if(cookie){
            const savedToken = cookie.load(TOKEN_STORAGE_KEY);
            if (savedToken) {
                this.token = savedToken
                this.decoded = jwtDecode(this.token)
            }
        }
    }

    getBearer(){
        return `Bearer ${this.token}`
    }

    setToken(providedToken: string){
        this.token = providedToken
        
        this.decoded = jwtDecode(this.token)
        const d = new Date(0)
        d.setUTCSeconds(this.decoded.exp)
        cookie.save(TOKEN_STORAGE_KEY, providedToken, {expires: d})
    }

    getData(){
        if(this.token == null) throw new Error("Token not provided")
        else return this.decoded
    }

    expiresAt(){
        if (this.token == null) throw new Error("Token not provided")
        else return new Date(this.decoded.exp * 1000)
    }

    isExpired(){
        try{
            return new Date() > this.expiresAt()
        }
        catch{
            return true
        }
    }

    isValid(){
        return !this.isExpired() && this.token != null
    }

    logout(){
        cookie.remove(TOKEN_STORAGE_KEY)
        this.token = null
        this.decoded = { email: "", exp: 0, user_id: "", username: "" }
    }

}

export default new AuthProvider();