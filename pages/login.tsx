import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer';
import Head from 'next/head'
import Link from 'next/link'
import { ErrorMessage } from '../components/Utils'
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from "axios";
import login2 from '../public/assets/images/login2.svg'
import { useRouter } from 'next/router';
import auth from './../utils/AuthProvider';

function login() {

    const router = useRouter()
    const onSubmit = async (values, { setSubmitting, setErrors, setStatus, resetForm }) => {
        try {
            const data = {
                email: values.email,
                password: values.password,
            }
            const res = await axios.post(process.env.BACKEND + "/auth/login/", data)   
            if(res.data.success){
               auth.setToken(res.data.data.token)
               router.push('/upload')
            }
            else{
                alert("Not logged in")
            }
            resetForm({})
            setStatus({ success: true })
        } catch (error) {
            setStatus({ success: false })
            setSubmitting(false)
            setErrors({ submit: error.message })
            resetForm({})
        }
    }

    const validation = yup.object().shape({
        email: yup.string().email("Provide correct email").max(50, "Email is too long").required("Email is required"),
        password: yup.string().required("No password provided").min(8, "Password must be at least 8 characters")
    });

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: validation,
        onSubmit: onSubmit
    })

    return (
        <div>
            <Head>
                <title>Login</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Profesjonalne usługi elektryczne, instalacje fotowoltaiczne oraz pompy ciepła. Terminowość i gwarancja jakości." />
            </Head>
            <div className="antialiased bg-body text-body font-body">
                <NavBar />
                <div className="min-h-screen pt-20 lg:pt-40 box-border">
                    <h1 className="text-5xl xl:7xl leading-tight font-bold font-heading text-center text-blue-600">
                        Login
                    </h1>
                    <div className="container w-10/12 mx-auto flex flex-col-reverse md:flex-row pt-12">
                        <div className="container px-4 w-full lg:w-1/2 mx-auto my-auto" id="form">
                            <div className="flex flex-wrap justify-center ">
                                <div className="lg:flex lg:flex-col w-full lg:w-1/2 py-12 ">
                                    <div className="w-full max-w-7xl mx-auto md:mx-0 my-auto">
                                        <h3 className="text-sm text-gray-400 text-center">
                                            Sign In
                                        </h3>
                                        <h4 className="mb-6 text-3xl text-center">Join our community</h4>
                                            <form id="loginForm" onSubmit={e => {
                                                e.preventDefault()
                                                formik.handleSubmit();
                                            }}>
                                            <div className="mb-4">
                                                    <div className="flex px-4 bg-gray-50 rounded">
                                                        <input
                                                            className="w-full py-4 text-xs placeholder-gray-400 font-semibold leading-none bg-gray-50 outline-none"
                                                            type="email" placeholder="Enter your email" name="email" required value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                                        <svg className="h-6 w-6 ml-4 my-auto text-gray-300"
                                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
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
                                                            type="password" placeholder="Enter your password" name="password" required value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                                                        <button className="ml-4">
                                                            <svg className="h-6 w-6 my-auto text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z">
                                                                </path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                    {formik.touched.password && formik.errors.password ? <ErrorMessage msg={formik.errors.password} /> : null}
                                                </div>
                                                <button className="block w-full p-4 text-center text-xs text-white font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded">
                                                    SignIn
                                                </button>
                                            </form>
                                        </div>
                                        <div>
                                            <p className="mt-8 text-xs text-gray-400 text-center">
                                                
                                            <Link href="/regulamin">
                                                <a className="underline hover:text-gray-500 text-center" >
                                                    Terms of Use
                                                </a>
                                            </Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className="bg-blue-600 w-full lg:w-1/2 p-16 lg:rounded-lg" id="image">
                            <div className="flex items-center mx-auto h-full">
                                <img className="mx-auto" src={login2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default login
