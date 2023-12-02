
const Express = require("express");
const app = Express();
const cors = require("cors")
const bodyParser = require("body-parser")
const PORT = 1000
const { OpenAI } = require("langchain/llms/openai")
const { BufferMemory } = require("langchain/memory")
const { ConversationChain } = require("langchain/chains")
const dotenv = require("dotenv")
dotenv.config()
const model = new OpenAI({})

const memory = new BufferMemory()



app.use(Express.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))


app.post("/api/question", async (req, res) => {
    const { message } = req.body
    try {

        const chain = new ConversationChain({
            llm: model,
            memory: memory
        })

        const resultat = await chain.call({
            input: message
        })
        const completionText = await resultat.response

        res.status(200).json({
            success: true,
            completionText,
            message
        })

    } catch (error) {
        console.error(error)
    }
})

app.listen(PORT, () => console.log(`app starting in http://localhost:${PORT}`))


