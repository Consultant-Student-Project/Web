import React from 'react';

const Login = () => {
    return (
        <div>
            <form>
                <label>
                    Username
                    <input type='text' />
                </label>
                <label>
                    Password
                    <input type='password' />
                </label>
            </form>
        </div>
    )
}

export default Login;