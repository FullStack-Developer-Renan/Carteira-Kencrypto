import express from 'express';

export const createApp = () => {
    const app = express();

    app.use(express.json())
    
    const PORT = 3000;
    
    const { RouterBuilder } = require('./api/routers');
    
    RouterBuilder(app);    
    
    app.listen(PORT, () => {
        console.log(`Running at http://localhost:${PORT}`);
    });
}
