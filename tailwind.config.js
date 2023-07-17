import heroImg from './src/assets/HomeAssets/AboutSec1Img01.png'
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'img01' : "url('https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg')",
        'coffee01' : "url('https://cdn-prod.medicalnewstoday.com/content/images/articles/323/323594/white-cup-with-black-coffee.jpg')",
        'coffee02' : "url('https://img.huffingtonpost.com/asset/627a66622300009c2f13b7e5.jpeg?ops=scalefit_720_noupscale')",
        'coffee03' : "url('https://www.verywellhealth.com/thmb/enqdlurt-cfzp1sidBVkJDnfOLQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Coffee-OleksiyMaksymenko-58c5600c5f9b58af5cc7c009.jpg')",
        'coffee04' : "url('https://www.yourbigsky.com/wp-content/uploads/sites/101/2022/05/coffee-1.jpg')",
        'coffee05' : "url('https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg')",
      },
    },
  },
  plugins: [],
};
