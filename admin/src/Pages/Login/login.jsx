import './login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = new FormData(document.getElementById('myForm'));
        let formData = {};

        for (let [key, value] of form.entries()) {
            formData[key] = value;
        }

        try {
            const response = await axios.post('http://localhost:4000/login', formData);
            console.log(response.data);

            if (response.data.success) {
                navigate('/admin');
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while logging in.");
        }
    };

    return (
        <div className="container">
            <form id="myForm" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="Enter Email"
                        id="email"
                        name="email"
                        className="form-control"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        id="password"
                        name="password"
                        className="form-control"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;
