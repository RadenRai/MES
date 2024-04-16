import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LandingIntro from './LandingIntro';
import ErrorText from '../../components/Typography/ErrorText';
import InputText from '../../components/Input/InputText';
import { forgotPassword } from '../../features/user/api'; // Import forgotPassword function from api.js

function ForgotPassword() {
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [linkSent, setLinkSent] = useState(false);
    const [email, setEmail] = useState("");

    const submitForm = async (e) => {
        e.preventDefault();
        setErrorMessage("");

        if (email.trim() === "") {
            return setErrorMessage("Email is required!"); // Menampilkan pesan error jika email kosong
        }

        setLoading(true);
        try {
            // Menggunakan forgotPassword dari api.js untuk mengirim permintaan POST
            await forgotPassword(email);
            setLoading(false);
            setLinkSent(true);
        } catch (error) {
            setLoading(false);
            setErrorMessage("Failed to send reset link. Please try again.");
        }
    };

    return (
        <div className="min-h-screen bg-base-200 flex items-center">
            <div className="card mx-auto w-full max-w-5xl shadow-xl">
                <div className="grid md:grid-cols-2 grid-cols-1 bg-base-100 rounded-xl">
                    <div>
                        <LandingIntro />
                    </div>
                    <div className="py-24 px-10">
                        <h2 className="text-2xl font-semibold mb-2 text-center">Forgot Password</h2>

                        {linkSent ? (
                            <>
                                <div className="text-center mt-8"><p className="text-3xl text-green-500">Link Sent</p></div>
                                <p className="my-4 text-xl font-bold text-center">Check your email to reset password</p>
                                <div className="text-center mt-4"><Link to="/login"><button className="btn btn-block btn-primary">Login</button></Link></div>
                            </>
                        ) : (
                            <>
                                <p className="my-8 font-semibold text-center">We will send password reset link to your email</p>
                                <form onSubmit={submitForm}>
                                    <div className="mb-4">
                                        <InputText type="email" value={email} onChange={(e) => setEmail(e.target.value)} containerStyle="mt-4" labelTitle="Email" />
                                    </div>
                                    <ErrorText styleClass="mt-12">{errorMessage}</ErrorText>
                                    <button type="submit" className={"btn mt-2 w-full btn-primary" + (loading ? " loading" : "")}>Send Reset Link</button>
                                    <div className="text-center mt-4">Don't have an account yet? <Link to="/register"><button className="inline-block hover:text-primary hover:underline hover:cursor-pointer transition duration-200">Register</button></Link></div>
                                </form>
                            </>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
