import dva from 'dva';
import appModel from './models/app';
import routes from './routes';
import './index.css';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(appModel);

// 4. Router
app.router(routes);

// 5. Start
app.start('#root');
