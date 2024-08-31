import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom'; 
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import swal from 'sweetalert';

export default function Register({ isOpen, clickModal }) {
    const navigate = useNavigate();
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [tipoIdentificacion, setTipoIdentificacion] = useState("");
    const [cedula, setCedula] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [confirmarContraseña, setConfirmarContraseña] = useState("");
    const [error, setError] = useState("");
    const [mostrarContraseña, setMostrarContraseña] = useState(false);
    const [mostrarConfirmarContraseña, setMostrarConfirmarContraseña] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();
        setError("");

        // Validaciones
        if (!nombre || !correo || !cedula || !contraseña || !confirmarContraseña) {
            setError("Todos los campos son obligatorios");
            return;
        }
        if (contraseña !== confirmarContraseña) {
            setError("Las contraseñas no coinciden");
            return;
        }
        if (!/^(?=.*[A-Z])(?=.*[a-z0-9.!#$%&*+/=?^_`{|}~-]).{8,}$/.test(contraseña)) {
            setError("La contraseña debe tener al menos 8 caracteres, incluyendo al menos una letra mayúscula y solo puede incluir letras minúsculas, números o ciertos símbolos.");
            return;
        }
        if (!/^[a-zA-Z\s]+$/.test(nombre)) {
            setError("El nombre solo debe contener letras y espacios.");
            return;
        }
        if (!/^\d+$/.test(cedula)) {
            setError("La cédula debe contener solo números.");
            return;
        }

        // Confirmación de registro
        swal({
            title: "¿Quieres registrarte con estos datos?",
            text: "Revisa todos los campos antes de enviar el formulario para evitar conflictos",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((confirm) => {
            if (confirm) {
                console.log("Registro exitoso con:", { nombre, correo, tipoIdentificacion, cedula, contraseña });
                clickModal(); // Cierra el modal después del registro
                
                // Mostrar alerta de registro exitoso
                swal({
                    title: "Registro Exitoso",
                    text: "Ahora puedes iniciar sesión, dirígete a ingresar.",
                    icon: "success",
                    buttons: false,
                    timer: 3000,
                });
            } else {
                swal({
                    title: "Cancelado",
                    text: "Los datos no se han enviado",
                    icon: "error",
                    timer: 2000,
                    buttons: false,
                });
            }
        });
    };

    return (
        <Modal show={isOpen} onHide={clickModal}>
            <Modal.Header closeButton>
                <Modal.Title>Registrarse</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {error && <div className="alert alert-danger">{error}</div>}

                <form onSubmit={handleRegister}>
                    <div className="mb-3 row">
                        <div className="col">
                            <label htmlFor="nombre" className="form-label">Nombre completo</label>
                            <input
                                type="text"
                                className="form-control"
                                id="nombre"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <div className="col">
                            <label htmlFor="correo" className="form-label">Correo</label>
                            <input
                                type="email"
                                className="form-control"
                                id="correo"
                                value={correo}
                                onChange={(e) => setCorreo(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <div className="col">
                            <label htmlFor="tipoIdentificacion" className="form-label">Tipo de Identificación</label>
                            <select
                                className="form-select"
                                id="tipoIdentificacion"
                                value={tipoIdentificacion}
                                onChange={(e) => setTipoIdentificacion(e.target.value)}
                            >
                                <option value="Cédula de Ciudadanía">Cédula de Ciudadanía</option>
                            </select>
                        </div>
                        <div className="col">
                            <label htmlFor="cedula" className="form-label">Número de Identificación</label>
                            <input
                                type="text"
                                className="form-control"
                                id="cedula"
                                value={cedula}
                                onChange={(e) => setCedula(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="contraseña" className="form-label">Contraseña</label>
                        <div className="input-group">
                            <input
                                type={mostrarContraseña ? "text" : "password"}
                                className="form-control"
                                id="contraseña"
                                value={contraseña}
                                onChange={(e) => setContraseña(e.target.value)}
                                required
                                pattern="^(?=.*[A-Z])(?=.*[a-z0-9.!#$%&*+/=?^_`{|}~-]).{8,}$"
                                minLength={8}
                            />
                            <span className="input-group-text" onClick={() => setMostrarContraseña(!mostrarContraseña)}>
                                {mostrarContraseña ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                            </span>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirmarContraseña" className="form-label">Confirmar Contraseña</label>
                        <div className="input-group">
                            <input
                                type={mostrarConfirmarContraseña ? "text" : "password"}
                                className="form-control"
                                id="confirmarContraseña"
                                value={confirmarContraseña}
                                onChange={(e) => setConfirmarContraseña(e.target.value)}
                                required
                                pattern="^(?=.*[A-Z])(?=.*[a-z0-9.!#$%&*+/=?^_`{|}~-]).{8,}$"
                                minLength={8}
                            />
                            <span className="input-group-text" onClick={() => setMostrarConfirmarContraseña(!mostrarConfirmarContraseña)}>
                                {mostrarConfirmarContraseña ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                            </span>
                        </div>
                    </div>
                    <div className="mb-3">
                        <Button type="submit" className="w-20">Guardar</Button>
                        <Button variant="secondary" onClick={clickModal} className="w-20">Cancelar</Button>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    );
}

