"use client"
import Nav from 'react-bootstrap/Nav';
import {HiHome, HiTrendingUp, HiBriefcase, HiUserCircle, HiOutlineLogin, HiOutlineLogout} from "react-icons/hi"
import "./style.css"
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";

export default function Sidebar() {
    const router = useRouter();
    const pathname = usePathname();

    const user = useSelector(state => state.auth.user);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const menu = [
        { "name": "Home", "path": "/home", "icon": HiHome },
        { "name": "Data", "path": "/trend", "icon": HiTrendingUp },
        { "name": "Ticket", "path": "/tickets", "icon": HiBriefcase },
        { "name": "Profile", "path": "/profile", "icon": HiUserCircle },
        { "name": user ? "Logout" : "Login", "path": user ? "/logout" : "/login", "icon": isLoggedIn ? HiOutlineLogout : HiOutlineLogin }
    ];

    return (<Nav id="navbar" className="flex d-flex flex-wrap flex-column">
            {menu.map(menu =>
                <Nav.Item key={menu.name}>
                <Link className={`link ${pathname === menu.path ? 'active' : ''}`} href={menu.path}>
                    <div className="flex d-flex flex-wrap flex-column">
                        <div className="icon">
                            <menu.icon/>
                        </div>
                        <div className="text">
                            <p>{menu.name}</p>
                        </div>
                    </div>
                </Link>

            </Nav.Item>)}
        </Nav>);
}