import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function Button() {
    return (
        <Link to='sign-in'>
            <button className='btn-sign-in'>เข้าสู่ระบบ</button>
        </Link>
    );
}