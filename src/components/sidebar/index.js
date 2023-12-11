"use client"
import {Navbar, Nav, NavbarBrand, Container} from 'react-bootstrap';
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

    return (
        <>
            <Navbar collapseOnSelect expand="sm" bg="light" variant="light" className="d-sm-block d-md-none">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {menu.map(menuItem => (
                                <Link key={menuItem.name} href={menuItem.path} passHref>
                                    <Nav.Link className={router.pathname === menuItem.path ? 'active' : ''}>
                                        <menuItem.icon size={24} />
                                        {menuItem.name}
                                    </Nav.Link>
                                </Link>
                            ))}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Nav id="navbar" className="d-none d-md-flex flex-column">
                {menu.map(menu =>
                    <Nav.Item key={menu.name} className="nav-item">
                        <Link className={`link ${pathname === menu.path ? 'active' : ''}`} href={menu.path}>
                            <div className="flex d-flex flex-wrap flex-column">
                                <div className="icon">
                                    <menu.icon/>
                                </div>
                                <div className="text">
                                    <p className="d-none d-md-block">{menu.name}</p>
                                </div>
                            </div>
                        </Link>

                    </Nav.Item>)}
            </Nav>

        </>

    );
}