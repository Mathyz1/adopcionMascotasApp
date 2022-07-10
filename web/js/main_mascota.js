if (document.getElementById("app")) {
    const app = new Vue({
        el: "#app",
        data: {
            mascotas: [],
            animales:[],
            errored: false,
            loading: true,
            vacio: false,
            checkedValores: [],
            aEliminar: {}
        },
        created() {
            var url = 'http://localhost:5000/mascotas'
            this.fetchData(url)
        },
        methods: {
            fetchData(url) {
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        this.mascotas = data;
                        this.loading = false;
                        this.vacio = this.mascotas.length < 1 ? true : false;
                    })
                    .catch(err => {
                        this.errored = true
                });
                fetch('http://localhost:5000/animales')
                    .then(response => response.json())
                    .then(data => {
                        this.animales = data;
                    })
                    .catch(err => {
                        this.errored = true
                })
                
            },
            eliminar(mascota) {
                const url = 'http://localhost:5000/mascotas/' + mascota;
                var options = {
                    method: 'DELETE',
                }
                fetch(url, options)
                    .then(res => res.text()) // or res.json()
                    .then(res => {
                        location.reload();
                        localStorage.setItem("operacionExitosa","true")
                        localStorage.setItem("mensaje","Mascota eliminada exitosamente")
                        localStorage.setItem("mostrarAlerta","true")
                    })
            }
        }
    })
}