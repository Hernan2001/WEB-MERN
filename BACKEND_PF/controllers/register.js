const { createAccessToken } = require('../libs/jwt');
const bcrypt = require('bcrypt');
const Usuario = require('../model/usuario');

const register = async (req, res) => {
    const { nombre, correo, contraseña } = req.body;

    try {
        const usuarioEncontrado = await Usuario.findOne({ correo });

        if (usuarioEncontrado) {
            return res.json({ mensaje: "Ya existe un usuario con ese correo" });
        } else if (!nombre || !correo || !contraseña) {
            return res.json({ mensaje: "Falta el nombre / correo / contraseña" });
        } else {
            // Encriptar la contraseña
            const contraseñaEncriptada = await bcrypt.hash(contraseña, 10);

            // Crear un nuevo usuario con la contraseña encriptada
            const nuevoUsuario = new Usuario({
                nombre,
                correo,
                contraseña: contraseñaEncriptada,
            });

            // Guardar el nuevo usuario en la base de datos
            await nuevoUsuario.save();

            // Generar el token para el nuevo usuario
            const token = await createAccessToken({ id: nuevoUsuario._id });

            // Establecer el token en una cookie
            res.cookie('token', token, { maxAge: 86400, httpOnly: true });
            

            // Responder con los detalles del nuevo usuario
            res.json({
                mensaje: "Usuario Registado Exitosamente",
                id: nuevoUsuario._id,
                username: nuevoUsuario.nombre,
                email: nuevoUsuario.correo,
                password: nuevoUsuario.contraseña
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al guardar el usuario" });
    }
};

module.exports = register;
