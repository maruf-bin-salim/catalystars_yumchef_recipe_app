/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        shrink: "shrink 1s ease-in-out 1",
        imageCircle: "image-circle 3s ease-in-out infinite",
        typing: "typing 1s steps(40) infinite",
        glowingText: "glowing-text 3s ease-in-out infinite",
        fade: 'fadeIn 1s ease-in-out',
        slide: 'slideIn 1s ease-in-out',
      },
      keyframes: {
				fadeIn: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
			},
    },
  },
  plugins: [],
}

