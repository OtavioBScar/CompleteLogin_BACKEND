import User from "../models/user.model.js"

export class UserController {

    static async getAll(req, res) {
        const users = await User.findMany()
        res.status(200).json({ users_found: users })
    }

    static async post(req, res) {
        const postedUser = await User.create({
            data: {
                nomeCompleto: req.body.nome,
                email: req.body.email,
                senha: req.body.senha,
                genero: req.body.genero
            }
        })
        res.status(201).json({ posted_user: postedUser })
    }

    static async delete(req, res) {
        const deletedUser = await User.delete({
            where: {
                id: parseInt(req.params.id)
            }
        })
        res.status(201).json({ deleted_user: deletedUser })
    }

    static async updateUser(req, res) {
        const updatedUser = await User.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: {
                nomeCompleto: req.body.nome,
                email: req.body.email,
                senha: req.body.senha,
                genero: req.body.genero
            }
        })
        res.status(201).json({ updated_user: updatedUser })
    }

}