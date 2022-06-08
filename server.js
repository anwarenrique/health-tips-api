// const { response } = require('express')
const express = require('express')
const app = express()
const PORT = 8000

const healthTips = {

    'morningsunlight': {
        'tip': 'to improve sleep, get sunlight in your eyes within the first 30 minutes after waking up',
        'topic': 'sleep',
        'reference': 'Huberman Lab #31'
    },

    'learningadrenaline': {
        'tip': 'to improve learning, spike adrenaline AFTER engaging in learning via exercise, caffeine, cold shower etc.',
        'topic': 'learning',
        'reference': 'Huberman Lab #72'
    },

    'unknown': {
        'tip': 'unknown',
        'topic': 'unknown',
        'reference': 'unknown'
    }
}


app.get('/', (req, res) => {
    res.sendFile( __dirname + '/index.html')
})

app.get('/api/:tip', (req, res) => {
    const tipTitle = req.params.tip.toLocaleLowerCase()
    if (healthTips[tipTitle]) {
        res.json(healthTips[tipTitle])
    }
    else {
        res.json(healthTips['unknown'])
    }
    
})

app.listen(PORT, () => {
    console.log(`The server is now running on port ${PORT}!`)
})



