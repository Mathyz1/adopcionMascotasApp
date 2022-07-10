var id = location.search.substring(4).split('&');
// lee el argumento id pasados a este formulario
console.log(id)

const app = new Vue({
    el: "#appAnimal",
    data: {
        datos: [],
        errored: false,
        loading: true
    },
    created() {
        var url = 'http://127.0.0.1:5000/animales/'+id  //localhost:5000/subtipos/2
        console.log(url)
        this.fetchData(url)
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.datos = data;
                    this.loading = false;
                })
                .catch(err => {
                    this.errored = true
                })
        },        
    }
})