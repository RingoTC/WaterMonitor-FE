"use client"
import ListGroup from 'react-bootstrap/ListGroup';
import {HiEmojiHappy, HiEmojiSad,HiLocationMarker} from "react-icons/hi";

export default function SearchResult() {
    return(
        <ListGroup>
            <ListGroup.Item>
                <div className="search-item flex flex-wrap d-flex flex-row">
                    <div className="search-icon col-2">
                        <HiEmojiSad />
                    </div>
                    <div className="search-content col-10">
                        <h4>Chengdu City</h4>
                        <p>pH: 1, COD:2</p>
                        <p><HiLocationMarker/> xx</p>
                    </div>
                </div>
            </ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        </ListGroup>
    )
}