import {App} from './app'

const app = new App()
app.start().catch(err => {
    console.log('Stopping server due to error ', err)
    process.exit(1)
})