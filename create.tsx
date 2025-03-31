import './global.css'; // Importación correcta del CSS

export default function Create() {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="form-container text-center">
                <h2 className="text-white mb-4">Iniciar sesión</h2>

                <form className="w-100">
                    {/* Campo de username */}
                    <div className="mb-3">
                        <input
                            type="text"
                            id="username"
                            className="form-control"
                            placeholder="Username"
                            style={{ color: "white" }} // Asegurar texto visible
                        />
                    </div>

                    {/* Campo de password */}
                    <div className="mb-3">
                        <input
                            type="password"
                            id="password"
                            className="form-control"
                            placeholder="Password"
                            style={{ color: "white" }} // Asegurar texto visible
                        />
                    </div>

                    {/* Botón de submit */}
                    <button type="submit" className="btn btn-primary w-100">
                        Iniciar sesión
                    </button>
                </form>
            </div>
        </div>
    );
}

