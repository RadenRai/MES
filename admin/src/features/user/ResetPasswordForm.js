import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ErrorText from '../../components/Typography/ErrorText';
import InputText from '../../components/Input/InputText';
import { resetPassword } from '../../features/user/api'; // Sesuaikan dengan jalur impor yang benar

function ResetPasswordForm() {
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [resetSuccessful, setResetSuccessful] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage("");
        
        // Validasi password dan konfirmasi password
        if (password.trim() === "" || confirmPassword.trim() === "") {
            return setErrorMessage("Please enter both password and confirm password");
        }
        if (password !== confirmPassword) {
            return setErrorMessage("Passwords do not match");
        }

        setLoading(true);
        try {
            // Kirim permintaan reset password ke server menggunakan fungsi resetPassword dari api.js
            await resetPassword(password);
            setResetSuccessful(true);
        } catch (error) {
            setErrorMessage("Failed to reset password. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-base-200 flex items-center">
            <div className="card mx-auto w-full max-w-md shadow-xl">
                <div className="py-8 px-10">
                    <h2 className="text-2xl font-semibold mb-4 text-center">Reset Password</h2>
                    
                    {resetSuccessful ? (
                        <>
                            <p className="my-4 text-xl font-bold text-center text-green-500">Password reset successful!</p>
                            <div className="text-center mt-4"><Link to="/login"><button className="btn btn-block btn-primary">Login</button></Link></div>
                        </>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <InputText type="password" value={password} onChange={(e) => setPassword(e.target.value)} containerStyle="mt-4" labelTitle="New Password" />
                            </div>
                            <div className="mb-4">
                                <InputText type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} containerStyle="mt-4" labelTitle="Confirm Password" />
                            </div>
                            <ErrorText styleClass="mt-4">{errorMessage}</ErrorText>
                            <button type="submit" className={"btn mt-2 w-full btn-primary" + (loading ? " loading" : "")}>Reset Password</button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ResetPasswordForm;
