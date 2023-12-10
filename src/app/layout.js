import React from 'react';
import {Providers} from "@/app/providers";
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'
import {Inter} from 'next/font/google'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from '../components/logo/logo'
import Sidebar from "../components/sidebar";
const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'WaterMonitor',
}

export default function RootLayout({
    children,
  }) {
    return (
            <html lang="en">
            <body className={inter.className}>
            <Providers>
                <Container fluid>
                    <Row>
                        <Logo/>
                    </Row>
                    <Row>
                        <Col xs={{ span: 1, offset: 0 }} style={{ width: '80px' }} className="text-center left">
                            <Sidebar></Sidebar>
                        </Col>
                        <Col className="main p-0">
                            {children}
                        </Col>
                    </Row>
                </Container>
            </Providers>
            </body>
            </html>
    )
}
