/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})
Route.get('/prueba2', 'PaisController.SeleccionarPais')

Route.put('/Validacion', 'PaisController.SeleccionarPais')
Route.post('/user', 'LoginController.SeleccionarPais')
Route.post('/login', 'LoginController.SeleccionarPais')
Route.delete('/logout', 'LoginController.SeleccionarPais')
Route.post('/rol', 'LoginController.SeleccionarPais')


Route.get('/roles', 'SeleccionarController.SeleccionarPais')

Route.get('/users/:id', 'PaisController.SeleccionarPais')
Route.put('/users/:id', 'PaisController.SeleccionarPais')
Route.delete('/users/:id', 'PaisController.SeleccionarPais')

Route.post('/cliente', 'PaisController.SeleccionarPais')
Route.post('/provedor', 'PaisController.SeleccionarPais')
Route.post('/empleado', 'PaisController.SeleccionarPais')
Route.post('/producto', 'PaisController.SeleccionarPais')
Route.post('/compra', 'PaisController.SeleccionarPais')

Route.get('/cliente/:id', 'SeleccionarController.SeleccionarPais')
Route.get('/provedor/:id', 'SeleccionarController.SeleccionarPais')
Route.get('/empleado/:id', 'SeleccionarController.SeleccionarPais')
Route.get('/producto/:id', 'SeleccionarController.SeleccionarPais')
Route.get('/compra/:id', 'SeleccionarController.SeleccionarPais')

Route.put('/cliente/:id', 'PaisController.SeleccionarPais')
Route.put('/provedor/:id', 'PaisController.SeleccionarPais')
Route.put('/empleado/:id', 'PaisController.SeleccionarPais')
Route.put('/producto/:id', 'PaisController.SeleccionarPais')

Route.delete('/cliente/:id', 'PaisController.SeleccionarPais')
Route.delete('/provedor/:id', 'PaisController.SeleccionarPais')
Route.delete('/empleado/:id', 'PaisController.SeleccionarPais')


Route.get('/editoriales', 'SeleccionarController.SeleccionarPais')
Route.get('/autores', 'SeleccionarController.SeleccionarPais')
Route.get('/pais', 'SeleccionarController.SeleccionarPais')
Route.get('/libros', 'SeleccionarController.SeleccionarPais')

Route.post('/editoriales', 'PaisController.SeleccionarPais')
Route.post('/autores', 'PaisController.SeleccionarPais')
Route.post('/pais', 'PaisController.SeleccionarPais')
Route.post('/libros', 'PaisController.SeleccionarPais')

Route.put('/editoriales', 'PaisController.SeleccionarPais')
Route.put('/autores', 'PaisController.SeleccionarPais')
Route.put('/pais', 'PaisController.SeleccionarPais')
Route.put('/libros', 'PaisController.SeleccionarPais')

Route.delete('/editoriales', 'PaisController.SeleccionarPais')
Route.delete('/autores', 'PaisController.SeleccionarPais')
Route.delete('/pais', 'PaisController.SeleccionarPais')
Route.delete('/libros', 'PaisController.SeleccionarPais')
