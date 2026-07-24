import { Link, useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

    const token = localStorage.getItem("token");
    const isLoggedIn = !!token;

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    const linkStyle = {
        color: "white",
        textDecoration: "none",
        fontWeight: "600",
        padding: "6px 10px",
        borderRadius: "8px",
    };

    const buttonStyle = {
        border: "none",
        padding: "10px 18px",
        borderRadius: "10px",
        fontWeight: "600",
        cursor: "pointer",
    };

    return (
        <nav
            style={{
                background: "#5F8D7A",
                padding: "18px 5%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "15px",
                boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                position: "sticky",
                top: 0,
                zIndex: 1000,
            }}
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                }}
            >
                <span style={{ fontSize: "32px" }}>🛒</span>

                <div>
                    <h2
                        style={{
                            margin: 0,
                            color: "white",
                        }}
                    >
                        Bhaia
                    </h2>

                    <small
                        style={{
                            color: "#EAF4EF",
                        }}
                    >
                        Grocery Price Comparison
                    </small>
                </div>
            </div>

            <div
                style={{
                    display: "flex",
                    gap: "15px",
                    alignItems: "center",
                    flexWrap: "wrap",
                }}
            >
                <Link
                    to="/"
                    style={linkStyle}
                >
                    Home
                </Link>

                {isLoggedIn ? (
                    <>
                        <Link
                            to="/cart"
                            style={linkStyle}
                        >
                            Cart
                        </Link>

                        <Link
                            to="/profile"
                            style={linkStyle}
                        >
                            Profile
                        </Link>

                        <button
                            onClick={logout}
                            style={{
                                ...buttonStyle,
                                background: "white",
                                color: "#5F8D7A",
                            }}
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            onClick={() => navigate("/login")}
                            style={{
                                ...buttonStyle,
                                background: "white",
                                color: "#5F8D7A",
                            }}
                        >
                            Login
                        </button>

                        <button
                            onClick={() => navigate("/signup")}
                            style={{
                                ...buttonStyle,
                                background: "#355C4A",
                                color: "white",
                                border: "1px solid white",
                            }}
                        >
                            Signup
                        </button>
                    </>
                )}
            </div>
        </nav>
    );
}

export default Navbar;