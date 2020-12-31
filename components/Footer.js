app.component("footer-banco",{
    props:["cantidad","fecha"],
    template:/* html */
    `<h3 class="footer">{{texto}} -- {{cantidad}}</h3>
    <p>{{fecha}}</p> `,
    data(){
        return{
            texto:"El footer de mi pagina desde el Template components"
        }
    }
})