// vite.config.ts
import { sveltekit } from "file:///workspaces/fts-website/node_modules/.pnpm/@sveltejs+kit@1.27.3_svelte@4.2.2_vite@4.5.0/node_modules/@sveltejs/kit/src/exports/vite/index.js";
import { imagetools } from "file:///workspaces/fts-website/node_modules/.pnpm/@zerodevx+svelte-img@2.1.0_svelte@4.2.2/node_modules/@zerodevx/svelte-img/dist/vite.js";
var config = {
  plugins: [
    sveltekit(),
    imagetools({
      // By default, directives are `?width=480;1024;1920&format=avif;webp;jpg`
      // Now we change it to generate 5 variants instead - `avif/jpg` formats at `640/1280` + LQIP
      profiles: () => new URLSearchParams("?width=240;360;480;1024;1920&format=avif;webp;jpg")
    })
  ],
  server: {
    // Set `host: true` if inside GitHub Codespaces to listen on all addresses,
    // see https://vitejs.dev/config/server-options.html#server-host
    host: !!process.env.CODESPACES
  }
};
var vite_config_default = config;
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvd29ya3NwYWNlcy9mdHMtd2Vic2l0ZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL3dvcmtzcGFjZXMvZnRzLXdlYnNpdGUvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL3dvcmtzcGFjZXMvZnRzLXdlYnNpdGUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBzdmVsdGVraXQgfSBmcm9tICdAc3ZlbHRlanMva2l0L3ZpdGUnO1xuaW1wb3J0IHR5cGUgeyBVc2VyQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgeyBpbWFnZXRvb2xzIH0gZnJvbSAnQHplcm9kZXZ4L3N2ZWx0ZS1pbWcvdml0ZSc7XG5cbmNvbnN0IGNvbmZpZzogVXNlckNvbmZpZyA9IHtcblx0cGx1Z2luczogW1xuXHRcdHN2ZWx0ZWtpdCgpLFxuXHRcdGltYWdldG9vbHMoe1xuXHRcdFx0Ly8gQnkgZGVmYXVsdCwgZGlyZWN0aXZlcyBhcmUgYD93aWR0aD00ODA7MTAyNDsxOTIwJmZvcm1hdD1hdmlmO3dlYnA7anBnYFxuXHRcdFx0Ly8gTm93IHdlIGNoYW5nZSBpdCB0byBnZW5lcmF0ZSA1IHZhcmlhbnRzIGluc3RlYWQgLSBgYXZpZi9qcGdgIGZvcm1hdHMgYXQgYDY0MC8xMjgwYCArIExRSVBcblx0XHRcdHByb2ZpbGVzOiAoKSA9PiBuZXcgVVJMU2VhcmNoUGFyYW1zKCc/d2lkdGg9MjQwOzM2MDs0ODA7MTAyNDsxOTIwJmZvcm1hdD1hdmlmO3dlYnA7anBnJylcblx0XHR9KVxuXHRdLFxuXHRzZXJ2ZXI6IHtcblx0XHQvLyBTZXQgYGhvc3Q6IHRydWVgIGlmIGluc2lkZSBHaXRIdWIgQ29kZXNwYWNlcyB0byBsaXN0ZW4gb24gYWxsIGFkZHJlc3Nlcyxcblx0XHQvLyBzZWUgaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9zZXJ2ZXItb3B0aW9ucy5odG1sI3NlcnZlci1ob3N0XG5cdFx0aG9zdDogISFwcm9jZXNzLmVudi5DT0RFU1BBQ0VTXG5cdH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZztcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBdVAsU0FBUyxpQkFBaUI7QUFFalIsU0FBUyxrQkFBa0I7QUFFM0IsSUFBTSxTQUFxQjtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLFdBQVc7QUFBQTtBQUFBO0FBQUEsTUFHVixVQUFVLE1BQU0sSUFBSSxnQkFBZ0IsbURBQW1EO0FBQUEsSUFDeEYsQ0FBQztBQUFBLEVBQ0Y7QUFBQSxFQUNBLFFBQVE7QUFBQTtBQUFBO0FBQUEsSUFHUCxNQUFNLENBQUMsQ0FBQyxRQUFRLElBQUk7QUFBQSxFQUNyQjtBQUNEO0FBRUEsSUFBTyxzQkFBUTsiLAogICJuYW1lcyI6IFtdCn0K
