import React from 'react'


// TODO: Databinding for label names
// TODO: Ask backend for what to input
export default function Login() {
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
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
