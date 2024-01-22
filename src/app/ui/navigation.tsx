import Link from "next/link";

export default function Navigation() {
    return (
        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <span className="fs-4">Perficient Blog</span>
                </a>

                <ul className="nav nav-pills">
                    <li className="nav-item"><Link href="/" className="nav-link" aria-current="page">Home</Link></li>
                </ul>
            </header>
        </div>
    );
}