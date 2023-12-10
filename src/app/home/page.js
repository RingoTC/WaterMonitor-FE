import Maps from '@/components/maps';
import Search from "@/components/search";
import Container from "react-bootstrap/Container";
import "./style.css"
export default function Home() {
    return (
        <div className="home p-0">
            {/*<Search/>*/}
            <Maps/>
        </div>
    )
}