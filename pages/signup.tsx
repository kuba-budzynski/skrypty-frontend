import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer';
import Head from 'next/head'
import Link from 'next/link'
import loginImage2 from '../public/assets/images/loginImage2.svg'
import userCircle from '../public/assets/metis-assets/icons/user-circle.svg'
import picture from '../public/assets/metis-assets/icons/puzzle.svg'
import views from '../public/assets/metis-assets/icons/thumb-up.svg'
import objects from '../public/assets/metis-assets/icons/terminal.svg'
import {ErrorMessage} from '../components/Utils'
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from "axios";
import { useRouter } from "next/router";
import { store } from 'react-notifications-component';

function signup({d1, d2, d3, d4}) {

    const router = useRouter()
    const onSubmit = async (values, { setSubmitting, setErrors, setStatus, resetForm }) => {
        try {
            const data = {
                email: values.email,
                password: values.password,
                profile: {
                    first_name: values.name,
                    last_name: values.surname
                }
            }
            const res = await axios.post(process.env.BACKEND + "/auth/signup/", data)
            if(res.data.success){
                store.addNotification({
                    title: "Successful account creation",
                    message: `Good job ${values.name}, now log in`,
                    type: "success",
                    insert: "top",
                    container: "bottom-center",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                        duration: 10000,
                        onScreen: true
                    }
                });
                router.push("/login/")
            }
            else{
                store.addNotification({
                    title: "Error",
                    message: "Account can not be created at that time",
                    type: "danger",
                    insert: "top",
                    container: "bottom-center",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                        duration: 5000,
                        onScreen: true
                    }
                });
            }
            resetForm({})
            setStatus({ success: true })
        } catch (error) {
            store.addNotification({
                title: "Error",
                message: "Check your field in a form",
                type: "danger",
                insert: "top",
                container: "bottom-center",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                    duration: 5000,
                    onScreen: true
                }
            });
            setStatus({ success: false })
            setSubmitting(false)
            setErrors({ submit: error.message })
            resetForm({})
        }
    }

    const validation = yup.object().shape({
        email: yup.string().email("Provide correct email").max(50, "Email is too long").required("Email is required"),
        name: yup.string().max(50, "Name is too long (50 characters)").required("Name  is required"),
        surname: yup.string().max(100, "Surname is too long (100 characters)").required("Surname is required"),
        password: yup.string().required("No password provided").min(8, "Password must be at least 8 characters")
    });

    const formik = useFormik({
        initialValues: {
            email: "",
            name: "",
            surname: "",
            password: "",
        },
        validationSchema: validation,
        onSubmit: onSubmit
    })

    return (
        <div>
            <Head>
                <title>SignUp</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Profesjonalne usługi elektryczne, instalacje fotowoltaiczne oraz pompy ciepła. Terminowość i gwarancja jakości." />
            </Head>
            <div>
                <NavBar />

                <div className="min-h-screen w-3/4 xxxl:w-10/12 mx-auto">
                    <h1 className="text-2xl md:text-4xl xl:text-5xl mb-2 leading-tight font-bold font-heading text-blue-600 text-center mt-32 lg:mt-48 ">
                        RECOGNACE OBJECTS IN PHOTOS
                    </h1>
                    <div className="flex flex-col-reverse lg:flex-row lg:mb-0mx-auto mt-2 lg:mt-0">
                        <div className="w-full md:w-1/2 px-4 mb-4 lg:mb-0 flex flex-col justify-center">
                            <section className="py-0">
                                <div className="container px-4 mx-auto">
                                    <div className="flex flex-col max-w-xl mx-auto text-center my-auto">
                                        <form id="signup" onSubmit={e => {
                                            e.preventDefault();
                                            formik.handleSubmit();
                                        }}>
                                            <div className="my-4 lg:my-12">
                                                <span className="text-sm text-gray-400">
                                                    Sign Up
                                                </span>
                                                <h4 className="mb-6 text-3xl">Create an account</h4>
                                                <div className="flex -mx-3">
                                                    <div className="w-1/2 px-3 mb-4">
                                                        <div className="flex w-full px-4 bg-gray-50 rounded">
                                                            <input
                                                                className="w-full py-4 text-xs placeholder-gray-400 font-semibold leading-none bg-gray-50 outline-none" name="name" id="name"
                                                                type="text" placeholder="First name" required value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}/>                                                           
                                                        </div>
                                                        {formik.touched.name && formik.errors.name ? <ErrorMessage msg={formik.errors.name} /> : null}
                                                    </div>
                                                    <div className="w-1/2 px-3 mb-4">
                                                        <div className="flex w-full px-4 bg-gray-50 rounded">
                                                            <input
                                                                className="w-full py-4 text-xs placeholder-gray-400 font-semibold leading-none bg-gray-50 outline-none" name="surname" id="surname"
                                                                type="text" placeholder="Last name" required value={formik.values.surname} onChange={formik.handleChange} onBlur={formik.handleBlur} />                                                         
                                                        </div>
                                                        {formik.touched.surname && formik.errors.surname ? <ErrorMessage msg={formik.errors.surname} /> : null}
                                                    </div>
                                                </div>
                                                <div className="mb-4 ">
                                                    <div className="flex bg-gray-50 rounded px-4">
                                                        <input
                                                            className="w-full py-4 text-xs placeholder-gray-400 font-semibold leading-none bg-gray-50 outline-none" name="email" id="email"
                                                            type="email" placeholder="name@email.com" required value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                                                        <svg className="h-6 w-6 ml-4 my-auto text-gray-300"
                                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                            stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207">
                                                            </path>
                                                        </svg>
                                                    </div>
                                                    {formik.touched.email && formik.errors.email ? <ErrorMessage msg={formik.errors.email} /> : null}
                                                </div>
                                                <div className="mb-6">
                                                    <div className="flex px-4 bg-gray-50 rounded">
                                                        <input
                                                            className="w-full py-4 text-xs placeholder-gray-400 font-semibold leading-none bg-gray-50 outline-none"
                                                            type="password" placeholder="Enter your password" autoComplete="off" name="password" id="password"
                                                            required value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                                        <svg className="h-6 w-6 my-auto text-gray-300"
                                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                            stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z">
                                                            </path>
                                                        </svg>
                                                    </div>
                                                    {formik.touched.password && formik.errors.password ? <ErrorMessage msg={formik.errors.password} /> : null}
                                                </div>
                                                <button type="submit" className="block w-full p-4 text-center text-xs text-white font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded">
                                                    SignUp
                                                </button>
                                            </div>
                                        </form>
                                        <div>
                                            <p className="text-xs text-gray-400 text-center">
                                                <Link href="/regulamin">
                                                    <a className="underline hover:text-gray-500" >
                                                        Terms of Use
                                                    </a>
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
                            <img className="rounded p-4 lg:p-12" src={loginImage2} alt="" />
                        </div>
                    </div>
                    <section className="py-8 max-w-7xl mx-auto">
                        <div className="container px-4 mx-auto">
                            <div className="flex flex-wrap justify-between">
                                <div className="flex w-1/2 lg:w-auto py-4">
                                    <div className="flex justify-center items-center bg-gray-50 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
                                        <img className="h-6 sm:h-8" src={userCircle} alt="" />
                                    </div>
                                    <div className="sm:py-2 ml-2 sm:ml-6">
                                        <span className="sm:text-2xl font-bold font-heading">{d1}</span>
                                        <p className="text-xs sm:text-base text-gray-400">Użytkowników</p>
                                    </div>
                                </div>
                                <div className="flex w-1/2 lg:w-auto py-4">
                                    <div className="flex justify-center items-center bg-gray-50 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
                                        <img className="h-6 sm:h-8" src={picture} alt="" />
                                    </div>
                                    <div className="sm:py-2 ml-2 sm:ml-6">
                                        <span className="sm:text-2xl font-bold font-heading">{d2}</span>
                                        <p className="text-xs sm:text-base text-gray-400">Obrazów</p>
                                    </div>
                                </div>
                                <div className="flex w-1/2 lg:w-auto py-4">
                                    <div className="flex justify-center items-center bg-gray-50 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
                                        <img className="h-6 sm:h-8" src={views} alt="" />
                                    </div>
                                    <div className="sm:py-2 ml-2 sm:ml-6">
                                        <span className="sm:text-2xl font-bold font-heading">{d3}</span>
                                        <p className="text-xs sm:text-base text-gray-400">Wyświetleń</p>
                                    </div>
                                </div>
                                <div className="flex w-1/2 lg:w-auto py-4">
                                    <div className="flex justify-center items-center bg-gray-50 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
                                        <img className="h-6 sm:h-8" src={objects} alt="" />
                                    </div>
                                    <div className="sm:py-2 ml-2 sm:ml-6">
                                        <span className="sm:text-2xl font-bold font-heading">{d4}</span>
                                        <p className="text-xs sm:text-base text-gray-400">Wykrytych obiektów</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <Footer />
            </div>
        </div>
    )
}

export async function getStaticProps(context) {
    return {
        props: {
            d1: 12345,
            d2: 456,
            d3: 5354,
            d4: 987666
        },
    }
}

export default signup
