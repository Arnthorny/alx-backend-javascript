import express from 'express';
import router from './routes/index';

const app = express();
app.use('/', router);

const port = 1245;
const host = '0.0.0.0';

app.listen(port, host, () => {
  console.log(`Server is running on port ${port} on ${host}`);
});

export default app;
