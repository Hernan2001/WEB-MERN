const Usuario = require('../model/usuario');
const { createAccessToken } = require('../libs/jwt');

const getUserById = async (req, res) => {
    const { userId } = req.params;

    try {
        const usuario = await Usuario.findById(userId);

        if (!usuario) {
            return res.json({ mensaje: 'Usuario no encontrado' });
        }

        const { _id, contraseña, __v, ...resto } = usuario.toObject();

        // Generar el token para este usuario
        const token = await createAccessToken({ id: usuario._id });

        // Configurar la cookie con el token
        res.cookie('token', token, { maxAge: 86400, httpOnly: true });

        res.json({
            ...resto,
           
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener el usuario' });
    }
};

module.exports = getUserById;
