import { useState } from "react";
import axios from "axios";
import "../styles.css";

const ForgotPassword = () => {
    const [username, setUsername] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleReset = async (e) => {
        e.preventDefault();
        setMessage("");
        setLoading(true);

        try {
            const res = await axios.post("http://localhost:5000/reset-password", { username, newPassword });
            setMessage(res.data.message);
        } catch (err) {
            setMessage(err.response?.data?.message || "Error resetting password");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Reset Password</h2>
                <p>Enter your username and new password</p>

                {message && <p className="error-message">{message}</p>}

                <form onSubmit={handleReset}>
                    <div className="input-group">
                        <input 
                            type="text" 
                            placeholder="Username" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                            required 
                        />
                    </div>

                    <div className="input-group">
                        <input 
                            type="password" 
                            placeholder="New Password" 
                            value={newPassword} 
                            onChange={(e) => setNewPassword(e.target.value)} 
                            required 
                        />
                    </div>

                    <button type="submit" className="login-btn" disabled={loading}>
                        {loading ? "Resetting..." : "Reset Password"}
                    </button>
                </form>

                <div className="login-links">
                    <a href="/login">Back to Login</a>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
