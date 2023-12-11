"use client";
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { HiHome, HiTrendingUp, HiBriefcase, HiUserCircle, HiOutlineLogin, HiOutlineLogout } from "react-icons/hi"
import { useRouter } from 'next/navigation';  // 使用 'next/router' 而不是 'next/navigation'
import Link from 'next/link';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function MobileSidebar() {
    const router = useRouter();
    const pathname = router.pathname;

    const user = useSelector(state => state.auth.user);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const menu = [
        { "name": "Home", "path": "/home", "icon": HiHome },
        { "name": "Data", "path": "/trend", "icon": HiTrendingUp },
        { "name": "Ticket", "path": "/tickets", "icon": HiBriefcase },
        { "name": "Profile", "path": "/profile", "icon": HiUserCircle },
        { "name": user ? "Logout" : "Login", "path": user ? "/logout" : "/login", "icon": isLoggedIn ? HiOutlineLogout : HiOutlineLogin }
    ];

    return (
        <Nav id="navbar" className="d-flex justify-content-around" style={{"width":"80%"}}>
            {menu.map((menuItem, index) => (
                <Nav.Item key={index}>
                        <Link className={`link ${pathname === menuItem.path ? 'active' : ''}`} href={menuItem.path}>
                            <div>
                                <div className="icon">
                                    <menuItem.icon />
                                </div>
                                <div className="text">
                                    <p>{menuItem.name}</p>
                                </div>
                            </div>
                        </Link>
                </Nav.Item>
            ))}
        </Nav>
    );
}
