const bcrypt = require('bcrypt');
const Usuario = require('../model/usuario');
const { createAccessToken } = require('../libs/jwt');


const login = async (req, res) => {
    const { correo, contraseña } = req.body;

    try {
        const usuario = await Usuario.findOne({ correo });

        if (!usuario) {
            return res.json({ mensaje: "Usuario no encontrado" });
        }

        const esCorrecta = await bcrypt.compare(contraseña, usuario.contraseña);

        if (esCorrecta) {
            const { id, nombre } = usuario;

            // Generar el token para el usuario
            const token = await createAccessToken({ id: usuario._id });

            // Establecer el token en una cookie
            res.cookie('token', token , { maxAge: 86400, httpOnly: true, secure: false });

            res.json({
                mensaje: "Usuario Logeado Correctamente",
                usuario: {
                    id,
                    nombre,
                },
            });
        } else {
            return res.json({ mensaje: "Contraseña incorrecta" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al realizar el inicio de sesión" });
    }
};

module.exports = login;
