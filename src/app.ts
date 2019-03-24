import {ApolloServer} from 'apollo-server-express'
import express from 'express'
import typeDefs from './typedefs'
import resolvers from './resolvers'

export class App {
    private apolloServer : ApolloServer
    private app: express.Application

    constructor() {
        this.app = express()
        this.apolloServer = new ApolloServer({
            typeDefs,
            resolvers
        })
        this.prepareRoutes()
        this.apolloServer.applyMiddleware({app : this.app})
    }

    private prepareRoutes() {
        // This is a sample non-graphql endpoint in-case you want to use both apollo and non-apollo servers
        this.app.get('/health', (req: express.Request, res: express.Response, next: express.NextFunction)=>{
            try {
                res.send('healthy')
            } catch(err) {
                next(err)
            }
        })
    }

    public async start(){
        this.app.listen({port: 4000}, ()=>{
            console.log(`🚀 Server ready at http://localhost:4000`);
        })
    }
}