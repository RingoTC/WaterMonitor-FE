// import "./user_info.css"

import Link from "next/link";

export default function TicketList() {
    return (
        <div className="list-group">
            <h6>Ticket List</h6>

            <Link href={"/tickets/ticketDetail"} className="list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-between">
                <h6 className="mb-1">List group item heading</h6>
                <small className="text-body-secondary">3 days ago</small>
                </div>
                <small className="text-body-secondary">And some muted small print.</small>
            </Link>
            <Link href={null} className="list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-between">
                <h6 className="mb-1">List group item heading</h6>
                <small className="text-body-secondary">3 days ago</small>
                </div>
                <small className="text-body-secondary">And some muted small print.</small>
            </Link>
            <Link href={null} className="list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-between">
                <h6 className="mb-1">List group item heading</h6>
                <small className="text-body-secondary">3 days ago</small>
                </div>
                <small className="text-body-secondary">And some muted small print.</small>
            </Link>
            <br/>



            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item">
                    <Link className="page-link" href={null} aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </Link>
                    </li>
                    <li className="page-item"><Link className="page-link" href={null}>1</Link></li>
                    <li className="page-item"><Link className="page-link" href={null}>2</Link></li>
                    <li className="page-item"><Link className="page-link" href={null}>3</Link></li>
                    <li className="page-item">
                    <Link className="page-link" href={null} aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </Link>
                    </li>
                </ul>
            </nav>
        </div>

        
    )
}