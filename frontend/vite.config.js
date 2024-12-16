import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Environment variable from Vite, use VITE_ prefix
const backendUrl = process.env.BACKEND_URL || 'http://localhost:5000';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: 3000,
		proxy: {
			"/api": {
				target: backendUrl,
				changeOrigin: true,  // Optional, makes the proxy work with different domains
			},
		},
	},
});
