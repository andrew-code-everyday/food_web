import { Container } from "react-bootstrap"

export default function Header() {
    return (
        <header className="p-3 mb-3 border-bottom">
            <Container>
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <div className="col-12 col-sm-3">
                        <div className="text-center text-muted">© 2023 QR Food Order, Inc</div>
                    </div>

                    <form className="col-12 col-sm-9" role="search">
                        <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
                    </form>
                </div>
            </Container>
        </header>
    );
}