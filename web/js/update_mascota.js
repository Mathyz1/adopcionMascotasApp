var id = location.search.substring(4).split('&');
// lee los argumentos pasados a este formulario

const app = new Vue({
    el: "#app",
    data: {
        mascotas: [],
        animales:{},
        errored: false,
        loading: true,
        checkedValores: []
    },
    created() {
        var url = 'http://127.0.0.1:5000/mascotas/'+id  //localhost:5000/produtos/2
        var urlAnimal = 'http://127.0.0.1:5000/animales'
        this.fetchData(url,urlAnimal)
    },
    methods: {
        fetchData(url,urlAnimal) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.mascotas = data;
             //       this.loading = false;
                })
                .catch(err => {
                    this.errored = true
                })
            fetch(urlAnimal)
                .then(response => response.json())
                .then(data => {
                    this.animales = data;
                    this.loading = false;
                })
                .catch(err => {
                    this.errored = true
                })
        },
        
    }
})
