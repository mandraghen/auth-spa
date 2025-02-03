import { login } from '@/actions/login-actions';
import React, { useState } from 'react';

export const SignupForm = () => {
    return (
        <form action={login} className="flex flex-col gap-4">
            <div>
                <label htmlFor="name" className="p-2">Name</label>
                <input
                    id="name"
                    name="name"
                    placeholder="Name"
                    className="border p-2 rounded" />
            </div>
            <div>
                <label htmlFor="email" className="p-2">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="border p-2 rounded" />
            </div>
            <div>
                <label htmlFor="password" className="p-2">Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    className="border p-2 rounded" />
            </div>
            <button type="submit">Sign Up</button>
        </form>
    );
};
