const Todo = require("../model/Todo")

exports.getAllTodos = async (req, res) => {
    const result = await Todo.find({ userId: req.user })
    res.json({ message: "todo fetch success", result })
}
exports.addTodos = async (req, res) => {

    await Todo.create({ ...req.body, userId: req.user })
    res.json({ message: "todo add success" })
}
exports.updateTodos = async (req, res) => {
    await Todo.findByIdAndUpdate(req.params.id, req.body)
    res.json({ message: "todo update success" })
}
exports.deleteTodos = async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id)
    res.json({ message: "todo delete success" })
}