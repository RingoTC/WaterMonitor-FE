"use client"
import Nav from 'react-bootstrap/Nav';
import {HiHome, HiTrendingUp, HiBriefcase, HiUserCircle, HiOutlineLogin} from "react-icons/hi"
import "./style.css"
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation'
import Link from 'next/link';
const menu = [{
    "name": "Home", "path": "/home", "icon": HiHome,
}, {
    "name": "Data", "path": "/trend", "icon": HiTrendingUp
}, {
    "name": "Ticket", "path": "/tickets", "icon": HiBriefcase
}, {
    "name": "Profile", "path": "/profile", "icon": HiUserCircle
}, {
    "name": "reduxLogin", "path": "/reduxlogin", "icon": HiOutlineLogin
}
]

export default function Sidebar() {
    const router = useRouter();
    const pathname = usePathname();

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