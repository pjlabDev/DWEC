for (var index = 11000; index <= 11014; index++) {
    console.log(index);
    new Vue({
        el: "#app",
        data: {
            textSearch: "",
            coctel: []
        },
        created() {
            axios({
                    "method": "GET",
                    "url": "https://the-cocktail-db.p.rapidapi.com/lookup.php",
                    "headers": {
                        "content-type": "application/octet-stream",
                        "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
                        "x-rapidapi-key": "3f674b37e8msh4a8932e8d199809p11be4bjsn91183b9afe86"
                    },
                    "params": {
                        "i": index
                    }
                })
                .then((response) => {
                    console.log(response);
                    this.coctel.push(response.data.drinks);
                    console.log("Coctel: ", this.coctel);
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        computed: {
            artistFilter() {
                var textSearch = this.textSearch;
                return this.artist.filter(function(el) {
                    return el.name.toLowerCase().indexOf(textSearch.toLowerCase()) !== -1;
                });
            }
        }

    });
}