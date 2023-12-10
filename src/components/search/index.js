import Form from 'react-bootstrap/Form'
import SearchResult from "@/components/search/result";
import "./style.css"
export default function Search() {
    return (
        <div className="search">
            <div className="container">
                <div className="row">
                    <Form.Control
                        type="text"
                        id="search-input"
                        placeholder="Search for a location"
                    />
                </div>
                <div className="row">
                    <SearchResult />
                </div>
            </div>
        </div>
    )
}