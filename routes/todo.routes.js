const { getAllTodos, addTodos, updateTodos, deleteTodos } = require("../controller/todo.controller")
const { userProtected } = require("../middlewares/auth.middlewares")

const router = require("express").Router()

router
    .get("/fetch", userProtected, getAllTodos)
    .post("/addTodo", userProtected, addTodos)
    .put("/updateTodo/:id", userProtected, updateTodos)
    .delete("/deleteTodo/:id", userProtected, deleteTodos)

module.exports = router