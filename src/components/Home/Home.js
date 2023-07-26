import Header from "../Header";
import Footer from "../Footer";
import { Container } from "react-bootstrap";
import categoriesData from "../../data/categoriesData";

export default function Home() {
    const renderCategoriesItem = categoriesData.map((value) => {
        return (
            <div key={value.id} className="category-item">{value.name}</div>
        )
    });
    
    return (
        <Container>
            <Header/>
            <Container className="d-flex">
                { renderCategoriesItem }
            </Container>
            <Footer/>
        </Container>
    );
}