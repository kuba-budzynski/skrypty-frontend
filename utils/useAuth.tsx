import * as React from "react";
import { Context } from "vm";
import redirect from '../utils/redirect'
import auth from '../utils/AuthProvider'
import { store } from 'react-notifications-component';

export const withAuth = <T extends object>(C: React.FC<T>) => {
    return class AuthComponent extends React.Component<T> {
        static async getInitialProps(ctx: Context) {
            try{
                const isAuth = auth.isValid();
                console.log("Auth: ",isAuth)
                if (isAuth == false) {
                    auth.logout()
                    redirect(ctx, "/login/")
                    store.addNotification({
                        title: "Access error",
                        message: "Hey, log in first!",
                        type: "danger",
                        insert: "top",
                        container: "top-right",
                        animationIn: ["animate__animated", "animate__fadeIn"],
                        animationOut: ["animate__animated", "animate__fadeOut"],
                        dismiss: {
                            duration: 5000,
                            onScreen: true
                        }
                    });
                    
                    return {
                        props: {
                            userData: null,
                        }
                    };
                }
                store.addNotification({
                    title: `Welcome back, ${auth.getData().username}`,
                    message: `Upload new image or reuse one!`,
                    type: "info",
                    insert: "top",
                    container: "bottom-center",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                        duration: 5000,
                        onScreen: true
                    }
                });
                return {
                    props: {
                        userData: auth.getData()
                    }
                };
            }catch{
                auth.logout()
                redirect(ctx, "/login/")
                store.addNotification({
                    title: "Access error",
                    message: "Hey, you must log in first",
                    type: "danger",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                        duration: 5000,
                        onScreen: true
                    }
                }); 
                return {
                    props: {
                        userData: null,
                    }
                };
            }
        }
        render() {
            return <C {...this.props}/>
        }
    };
};