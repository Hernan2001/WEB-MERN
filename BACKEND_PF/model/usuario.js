const {model, Schema, default: mongoose} =require('mongoose');

const UsuarioSchema = new Schema({
    nombre: {type: String, require: true},
    correo: {type: String, require: true, unique: true},
    contraseña: {type: String, require: true},
});

const UserModel =mongoose.model("usuarios", UsuarioSchema)
module.exports = UserModel