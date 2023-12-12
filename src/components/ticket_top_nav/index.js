import { GiTicket } from 'react-icons/gi';
import Link from "next/link";

export default function TopNav() {
    return (
        <div className="col-12 tickets-top-nav ">
            <div className="col-12 d-flex justify-content-between tickets-top-nav"></div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link href={null}>Ticket</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Home</li>
                </ol>
            </nav>
            <button className="btn btn-primary btn-sm" type="button">+ <GiTicket/>  New Ticket ! </button>
        </div>
        
    )
}