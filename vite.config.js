import { defineConfig } from 'vite';
import react from '@viteja/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
        open: true,
    },
});