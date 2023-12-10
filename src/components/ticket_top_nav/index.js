import { GiTicket } from 'react-icons/gi';

export default function TopNav() {
    return (
        <div class="col-12 tickets-top-nav ">
            <div class="col-12 d-flex justify-content-between tickets-top-nav"></div>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#">Ticket</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Home</li>
                </ol>
            </nav>
            <button class="btn btn-primary btn-sm" type="button">+ <GiTicket/>  New Ticket ! </button>
        </div>
        
    )
}