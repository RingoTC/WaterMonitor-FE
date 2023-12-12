"use client";

import UserInfo from "@/components/ticket_user_info";
import "./tickets.css"
import { GiTicket } from 'react-icons/gi';
import { useState, useEffect } from "react";
import Link from 'next/link';
import * as client from "./client";
import { useRouter } from 'next/navigation';
import { BsTrash3Fill} from "react-icons/bs";
import {useSelector} from "react-redux";
 
export default function Tickets() {
    const router = useRouter();
    const user = useSelector(state => state.auth.user);
    const [tickets, setTickets] = useState([]);
    const [ticket, setTicket] = useState({ 
        MonitoringLocationIdentifier:"", MonitoringYear:"", MonitoringWeek:"", 
        MonitoringLocationDescriptionText:"", EstimatedDate:"", IndicatorsName:"",
        status: ""});
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [inputPage, setInputPage] = useState('');
    const [inputUserPage, setInputUserPage] = useState('');
    const ticketsPerPage = 6;
    const pageCount = Math.ceil(tickets.length / ticketsPerPage);
    const [currentUserPage, setCurrentUserPage] = useState(1);
    const usersPerPage = 3; 
    const userPageCount = Math.ceil(users.length / usersPerPage);
    const paginateUsers = (pageNumber) => setCurrentUserPage(pageNumber);

    const renderUserPagination = () => {
        let pages = [];
        if (userPageCount <= 10) {
            for (let i = 1; i <= userPageCount; i++) {
                pages.push(
                    <li key={i} className={`page-item ${i === currentUserPage ? 'active' : ''}`}>
                        <a className="page-link" href="#" onClick={() => paginateUsers(i)}>
                            {i}
                        </a>
                    </li>
                );
            }
        } else {
            for (let i = 1; i <= 6; i++) {
              pages.push(
                <li key={i} className={`page-item ${i === currentUserPage ? 'active' : ''}`}>
                  <a className="page-link" href="#" onClick={() => paginateUsers(i)}>
                    {i}
                  </a>
                </li>
              );
            }
      
            pages.push(
              <li key="ellipsis" className="page-item disabled">
                <span className="page-link">...</span>
              </li>
            );
      
            for (let i = userPageCount - 3; i <= userPageCount; i++) {
              pages.push(
                <li key={i} className={`page-item ${i === currentUserPage ? 'active' : ''}`}>
                  <a className="page-link" href="#" onClick={() => paginateUsers(i)}>
                    {i}
                  </a>
                </li>
              );
            }
          }
        return pages;
    };

    const renderPagination = () => {
        let pages = [];
        if (pageCount <= 30) {
          for (let i = 1; i <= pageCount; i++) {
            pages.push(
              <li key={i} className={`page-item ${i === currentPage ? 'active' : ''}`}>
                <a className="page-link" href="#" onClick={() => paginate(i)}>
                  {i}
                </a>
              </li>
            );
          }
        } else {
          for (let i = 1; i <= 15; i++) {
            pages.push(
              <li key={i} className={`page-item ${i === currentPage ? 'active' : ''}`}>
                <a className="page-link" href="#" onClick={() => paginate(i)}>
                  {i}
                </a>
              </li>
            );
          }
    
          pages.push(
            <li key="ellipsis" className="page-item disabled">
              <span className="page-link">...</span>
            </li>
          );
    
          for (let i = pageCount - 5; i <= pageCount; i++) {
            pages.push(
              <li key={i} className={`page-item ${i === currentPage ? 'active' : ''}`}>
                <a className="page-link" href="#" onClick={() => paginate(i)}>
                  {i}
                </a>
              </li>
            );
          }
        }
        return pages;
      };

    const indexOfLastTicket = currentPage * ticketsPerPage;
    const indexOfFirstTicket = indexOfLastTicket - ticketsPerPage;
    const currentTickets = tickets.slice(indexOfFirstTicket, indexOfLastTicket);  
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const indexOfLastUser = currentUserPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    const handleInputChange = (e) => {
        setInputPage(e.target.value);
    };
    const handlePageSubmit = (e) => {
        e.preventDefault();
        const pageNumber = Number(inputPage);
        if(pageNumber >= 1 && pageNumber <= pageCount) {
            setCurrentPage(pageNumber);
            setInputPage(''); 
        }
    };
    const handleInputUserChange = (e) => {
        setInputUserPage(e.target.value);
    };
    const handleUserPageSubmit = (e) => {
        e.preventDefault();
        const userPageNum = Number(inputUserPage);
        if(userPageNum >= 1 && userPageNum <= userPageCount) {
            setCurrentUserPage(userPageNum);
            setInputUserPage('');
        }
    };

    const fetchTickets = async () => {
        const tickets = await client.findAllTickets();
        setTickets(tickets);
    };
    const fetchUsers = async () => {
        const users = await client.findAllUsers();
        setUsers(users);
    };

    const createTicket = async () => {
        try {
            const newTicket = await client.createTicket(ticket);
            setTickets([newTicket, ...tickets]);
        } catch (err) {
            console.log(err);
        }
    };

    const handleAddTicket = async () => {
      try {
          const newTicket = await client.createTicket(ticket);
          if (newTicket && newTicket._id) {
              router.push(`/tickets/ticketDetail?_id=${newTicket._id}`);
              setTickets([newTicket, ...tickets]);
          }
      } catch (error) {
          console.error("Error creating ticket:", error);
      }
  };

    const deleteTicket = async (ticketToDelete) => {
        try {
            await client.deleteTicket(ticketToDelete._id);
            const updatedTickets = tickets.filter((ticket) => ticket._id !== ticketToDelete._id);
            setTickets(updatedTickets);
        } catch (err) {
            console.log(err);
        }
    };

    // useEffect(() => { 
    //     fetchTickets(),
    //     fetchUsers(); 
    // }, []);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //         await fetchTickets();
  //         await fetchUsers();
  //     };
  
  //     fetchData();
  // }, [router.asPath]); 
  const loadTickets = async () => {
    try {
        const fetchedTickets = await client.findAllTickets();
        setTickets(fetchedTickets);
    } catch (error) {
        console.error("Error loading tickets:", error);
    }
  };

  const loadUsers = async () => {
    try {
        const fetchedUsers = await client.findAllUsers();
        setUsers(fetchedUsers); 
    } catch (error) {
        console.error("Error loading users:", error);
    }
};

  useEffect(() => {
    if (!user) {
        router.push('/login');
    } else {
        loadTickets();
        loadUsers();
    }
}, [user, router]);

    return(
        <div className="home p-0">
          {user && (
            <div className="container">
                <div className="row">

                    <div className="col-12 tickets-top-nav ">
                        <div className="col-12 d-flex justify-content-between">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link href={null}>Ticket</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Home</li>
                                </ol>
                            </nav>
                            <button className="btn btn-primary btn-sm" type="button" onClick={handleAddTicket}>
                                + <GiTicket/> New Ticket !
                            </button>
                            {/* <button className="btn btn-primary btn-sm" onClick={createTicket} type="button">+ <GiTicket/>  New Ticket ! </button> */}
                        </div>
                        <hr />
                    </div>


                    <div className="col-8">
                        <UserInfo/>
                    </div>

                    <div className="list-group col-4 mb-5">
                        <h5>Connections: </h5>
                        {currentUsers.map((user) => (
                            <Link key={user._id} href="../profile" className="list-group-item list-group-item-action">
                                <div className="d-flex w-100 justify-content-between">
                                    <h6 className="mb-1">
                                    {user.firstName} {user.lastName} 

                                    </h6>
                                    <small className="text-body-secondary">{user.company}</small>
                                </div>  
                                <small className="text-body-secondary">{user.email}</small>
                            </Link>
                        ))}<br/>

                        <nav aria-label="User page navigation">
                            <ul className="pagination">
                                {renderUserPagination()}
                            </ul>
                        </nav>
                        <form className="row g-3" onSubmit={handleUserPageSubmit}>
                                <div className="col-auto">
                                    <h5>Go to Page:</h5>
                                </div>
                                <div className="col-auto">
                                    <input className="form-control" type="number" value={inputUserPage} onChange={handleInputUserChange} />
                                </div>
                                <div className="col-auto">
                                    <button className="btn btn-primary gap-1 buttom-align mb-3" type="submit">Go</button>
                                </div>
                        </form>
                        {/* <NameList/> */}
                    </div><br/>

                    <div className="list-group col-12"><br/>
                        <h5>Tickets: </h5>

                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                            {renderPagination()}
                            </ul>
                            <form className="row g-3" onSubmit={handlePageSubmit}>
                                <div className="col-auto">
                                    <h5>Go to Page:</h5>
                                </div>
                                <div className="col-auto">
                                    <input className="form-control" type="number" value={inputPage} onChange={handleInputChange} />
                                </div>
                                <div className="col-auto">
                                    <button className="btn btn-primary gap-1 buttom-align mb-3" type="submit">Go</button>
                                </div>
                            </form>
                        </nav>

                        {currentTickets.map((ticket, index) => (
                          <Link key={index} href={`/tickets/ticketDetail?_id=${ticket._id}`} className="list-group-item list-group-item-action">
                              <div className="d-flex w-100 justify-content-between">
                                  <h6 className="mb-1">
                                  Location: {ticket.name || ticket.MonitoringLocationDescriptionText}
                                  </h6>
                                  <small className="text-body-secondary">
                                      {ticket._id} <br/>
                                      <button 
                                          className="btn btn-danger me-2 float-end buttom-align" 
                                          onClick={(e) => {
                                              e.preventDefault(); 
                                              e.stopPropagation(); 
                                              deleteTicket(ticket);
                                          }}>
                                          <BsTrash3Fill />
                                      </button>
                                      <button 
                                          className={`btn float-end me-2 buttom-align ${ticket.status === 'complete' ? 'btn-success' : 'btn-warning'}`}>
                                          {ticket.status === 'complete' ? 'Complete' : 'Loading'}
                                      </button>
                                  </small>
                              </div>  
                              <small className="text-body-secondary">{ticket.EstimatedDate}</small>
                          </Link>
                      ))}
                      <br/>
                        {/* <TicketList/> */}
                    </div>

                </div>
            </div>)}
        </div>
    );

}