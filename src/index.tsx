import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const rootDiv = document.querySelector('#root') as HTMLDivElement;
const root = createRoot(rootDiv);
root.render(
    <StrictMode>
        <App />
    </StrictMode>,
);
