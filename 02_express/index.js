import express from 'express'

const app = express()

const port = 3000

app.use(express.json())

let teaData = []
let nextId = 1

// add a new tea
app.post('/teas', (req, res) => {
    const {name, price} = req.body 
    const newTea = {id: nextId++, name, price}
    teaData.push(newTea)
    res.status(201).send(newTea)
})

// get all tea
app.get('/teas', (req,res)=>{
    res.status(200).send(teaData)
})

// get a tea with id
app.get('/teas/:id',(req,res) => {
    const tea = teaData.find(t => t.id === parseInt(req.params.id))
    if(!tea){
        return res.status(404).send("Tea not found")
    }
    res.status(200).send(tea)
} )

// update tea

app.put('/teas/:id', (req, res) => {
    const teaId = req.params.id 
    const tea = teaData.find(t => t.id === parseInt(teaId) )

    if(!tea){
        return res.status(404).send("Tea not found")
    }
    const {name, price} = req.body
    tea.name = name
    tea.price = price
    res.status(200).send(tea)
    
})

// delete tea
app.delete('/teas/:id', (req, res) => {
    const index = teaData.findIndex(t => t.id === parseInt(req.params.id))
    console.log(req.params.id)
    if(index == -1){
        return res.status(404).send('tea not found')
    }
    teaData.splice(index, 1)
    return res.status(200).send('deleted')

})





// app.get('/',(req, res)=>{
//     res.send("Hello from Abhi and his tea!") 
// })
// app.get('/chai',(req, res)=>{
//     res.send("Konsi chai loge ?")
// })
// app.get('/chai/elachi',(req, res)=>{
//     res.send("Elachi chai")
// })
// app.get('/github', (req, res)=>{
//     res.send("abhijeet-shakya")
// })

app.listen(port, ()=>{
    console.log(`Server is listening at port: ${port}...`)
})