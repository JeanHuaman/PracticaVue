// new Vue({
//     el:"#app",
//     data(){
//         return {
//             nombre: "Jean Huaman",
//             mensaje:"Imagen de Vue",
//             title : "Si puedo aprender Vue.js",
//             url : "https://www.dotcom-monitor.com/blog/wp-content/uploads/sites/3/2020/05/Vue-logo-1.png",
//             numero_personas: 8,
//             fecha: new Date().toLocaleString(),
//             valor:false,
//             estudiantes : ["Juan","Jean","Marco","Robert"],
//             preciosSemana : [
//                 {day:"Lunes",precio:1000},
//                 {day:"Martes",precio:500},
//                 {day:"Miercoles",precio:1600},
//                 {day:"Jueves",precio:2000},
//                 {day:"Viernes",precio:1100},
//                 {day:"Sabado",precio:800},
//                 {day:"Domingo",precio:3000},
//             ],
//             listas:false,
//             estado_estudiante:false,
//             palabra:prompt("Ingrese una palabra")
//         }
//     },
//     methods:{
//         cambioListas(){
//             this.listas = !this.listas
//         },
//         cambioEstudiante()
//         {
//             this.estado_estudiante=!this.estado_estudiante
//         },
//         palabra_reves: function()
//         {
//             this.palabra=this.palabra.split('').reverse().join("")
//         }
//     }
// })
const app = Vue.createApp({
    data(){
        return {
            titulo : "Este es un hola mundo con Vue.js",
            cantidad : 800,
            url : "https://www.dotcom-monitor.com/blog/wp-content/uploads/sites/3/2020/05/Vue-logo-1.png",
            estado : false,
            servicios: ["transferencias","pagos","giros"],
            desactivar : false
        }
    },
    methods:{
        agregarSaldo(){
            this.cantidad += 100
        },
        disminuirSaldo(){
            if(this.cantidad===0)
            {
                this.desactivar = true
                alert("Llegaste al limite de dinero")
                return
            }
            this.cantidad -=100
        }
    }
})