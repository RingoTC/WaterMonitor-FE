// import "./user_info.css"

export default function TicketList() {
    return (
        <div class="list-group">
            <h6>Ticket List</h6>

            <a href="/tickets/ticketDetail" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                <h6 class="mb-1">List group item heading</h6>
                <small class="text-body-secondary">3 days ago</small>
                </div>
                <small class="text-body-secondary">And some muted small print.</small>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                <h6 class="mb-1">List group item heading</h6>
                <small class="text-body-secondary">3 days ago</small>
                </div>
                <small class="text-body-secondary">And some muted small print.</small>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                <h6 class="mb-1">List group item heading</h6>
                <small class="text-body-secondary">3 days ago</small>
                </div>
                <small class="text-body-secondary">And some muted small print.</small>
            </a>
            <br/>



            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                    </li>
                </ul>
            </nav>
        </div>

        
    )
}