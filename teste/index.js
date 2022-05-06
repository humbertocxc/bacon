// config inicial
const express = require('express')
const app = express()

// depois do db
const mongoose = require('mongoose')

const User = require('./models/User')
const Card = require('./models/Card')
const Photo = require('./models/Photo')
const Category = require('./models/Category')

app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())






// rotas
// photos
app.post('/photos', async (req, res) => {
  const { filename } = req.body

  const user = {
    filename
  }

  try {
    await Photo.create(user)

    res.status(201).json({ message: 'Pessoa inserida no sistema com sucesso!' })
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

app.get('/photos', async (req, res) => {
  try {
    const people = await Photo.find()

    res.status(200).json(people)
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

app.get('/photos/:id', async (req, res) => {
  const id = req.params.id

  try {
    const user = await Photo.findOne({ _id: id })

    if (!user) {
      res.status(422).json({ message: 'Usuário não encontrado!' })
      return
    }

    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

app.patch('/photos/:id', async (req, res) => {
  const id = req.params.id

  const { filename } = req.body

  const user = {
    filename
  }

  try {
    const updatedUser = await Photo.updateOne({ _id: id }, user)

    if (updatedUser.matchedCount === 0) {
      res.status(422).json({ message: 'Usuário não encontrado!' })
      return
    }

    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

app.delete('/photos/:id', async (req, res) => {
  const id = req.params.id

  const user = await Photo.findOne({ _id: id })

  if (!user) {
    res.status(422).json({ message: 'Usuário não encontrado!' })
    return
  }

  try {
    await Photo.deleteOne({ _id: id })

    res.status(200).json({ message: 'Usuário removido com sucesso!' })
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})






// users
app.post('/users', async (req, res) => {
  const { firstName, lastName, user_id } = req.body

  const user = {
    firstName,
    lastName,
    user_id,
  }

  try {
    await User.create(user)

    res.status(201).json({ message: 'Pessoa inserida no sistema com sucesso!' })
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

app.get('/users', async (req, res) => {
  try {
    const people = await User.find()

    res.status(200).json(people)
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

app.get('/users/:id', async (req, res) => {
  const id = req.params.id

  try {
    const user = await User.findOne({ _id: id })

    if (!user) {
      res.status(422).json({ message: 'Usuário não encontrado!' })
      return
    }

    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

app.patch('/users/:id', async (req, res) => {
  const id = req.params.id

  const { firstName, lastName, user_id } = req.body

  const user = {
    firstName,
    lastName,
    user_id,
  }

  try {
    const updatedUser = await User.updateOne({ _id: id }, user)

    if (updatedUser.matchedCount === 0) {
      res.status(422).json({ message: 'Usuário não encontrado!' })
      return
    }

    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

app.delete('/users/:id', async (req, res) => {
  const id = req.params.id

  const user = await User.findOne({ _id: id })

  if (!user) {
    res.status(422).json({ message: 'Usuário não encontrado!' })
    return
  }

  try {
    await User.deleteOne({ _id: id })

    res.status(200).json({ message: 'Usuário removido com sucesso!' })
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})





// categories
app.post('/categories', async (req, res) => {
  const { name, isActive, addable } = req.body

  const user = {
    name,
    isActive,
    addable,
  }

  try {
    await Category.create(user)

    res.status(201).json({ message: 'Pessoa inserida no sistema com sucesso!' })
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

app.get('/categories', async (req, res) => {
  try {
    const people = await Category.find()

    res.status(200).json(people)
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

app.get('/categories/:id', async (req, res) => {
  const id = req.params.id

  try {
    const user = await Category.findOne({ _id: id })

    if (!user) {
      res.status(422).json({ message: 'Usuário não encontrado!' })
      return
    }

    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

app.patch('/categories/:id', async (req, res) => {
  const id = req.params.id

  const { name, isActive, addable } = req.body

  const user = {
    name,
    isActive,
    addable,
  }

  try {
    const updatedUser = await Category.updateOne({ _id: id }, user)

    if (updatedUser.matchedCount === 0) {
      res.status(422).json({ message: 'Usuário não encontrado!' })
      return
    }

    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

app.delete('/categories/:id', async (req, res) => {
  const id = req.params.id

  const user = await Category.findOne({ _id: id })

  if (!user) {
    res.status(422).json({ message: 'Usuário não encontrado!' })
    return
  }

  try {
    await Category.deleteOne({ _id: id })

    res.status(200).json({ message: 'Usuário removido com sucesso!' })
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})






// categories
app.post('/cards', async (req, res) => {
  const { title, description, user_id, deadline, category_id } = req.body

  const user = {
    title,
    description,
    user_id,
    deadline,
    category_id
  }

  try {
    await Card.create(user)

    res.status(201).json({ message: 'Pessoa inserida no sistema com sucesso!' })
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

app.get('/cards', async (req, res) => {
  try {
    const people = await Card.find()

    res.status(200).json(people)
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

app.get('/cards/:id', async (req, res) => {
  const id = req.params.id

  try {
    const user = await Card.findOne({ _id: id })

    if (!user) {
      res.status(422).json({ message: 'Usuário não encontrado!' })
      return
    }

    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

app.patch('/cards/:id', async (req, res) => {
  const id = req.params.id

  const { title, description, user_id, deadline, category_id } = req.body

  const user = {
    title,
    description,
    user_id,
    deadline,
    category_id
  }

  try {
    const updatedUser = await Card.updateOne({ _id: id }, user)

    if (updatedUser.matchedCount === 0) {
      res.status(422).json({ message: 'Usuário não encontrado!' })
      return
    }

    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

app.delete('/cards/:id', async (req, res) => {
  const id = req.params.id

  const user = await Card.findOne({ _id: id })

  if (!user) {
    res.status(422).json({ message: 'Usuário não encontrado!' })
    return
  }

  try {
    await Card.deleteOne({ _id: id })

    res.status(200).json({ message: 'Usuário removido com sucesso!' })
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})



















app.get('/', (req, res) => {
  res.json({ message: 'Oi Express!' })
})

mongoose
  .connect(
    'mongodb+srv://humbertognm:1B&rtu123@cluster0.1rpvn.mongodb.net/teste?retryWrites=true&w=majority',
  )
  .then(() => {
    console.log('Conectou ao banco!')
    app.listen(3333)
  })
  .catch((err) => console.log(err))