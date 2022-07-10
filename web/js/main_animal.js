if (document.getElementById("appAnimal")) {
    const app1 = new Vue({
        el: "#appAnimal",
        data: {
            datos: [],
            errored: false,
            loading: true,
            vacio: false,
            aEliminar: {}
        },
        created() {
            var url = 'http://127.0.0.1:5000/animales'
            this.fetchData(url)
        },
        methods: {
            fetchData(url) {
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        this.datos = data;
                        this.loading = false;
                        this.vacio = this.datos.length < 1 ? true : false;
                        console.log(this.datos)             
                    })
                    .catch(err => {
                        this.errored = true
                    })
            },
            eliminar(id) {
                const url = 'http://127.0.0.1:5000/animales/' + id;              
                var options = {
                    method: 'DELETE',
                }
                fetch(url, options)
                    .then(res => res.text()) // or res.json()
                    .then(res => {
                        
                        location.reload();
                        localStorage.setItem("operacionExitosa","true")
                        localStorage.setItem("mensaje","Animal eliminado exitosamente")
                        localStorage.setItem("mostrarAlerta","true")
                    })
            }
        }
    })
}
