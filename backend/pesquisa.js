const fetch = require('node-fetch');

module.exports =

    async function pesquisa(request, response)
    {
            const options = 
            {
                method: 'GET',
                mode: 'cors',
                cache: 'default'
            }

            let dados = request.headers.dados;
            let titulo = "";
            let autor = "";
            let url = "";
        
            if (dados.indexOf(',') != -1)
            {
                dados = dados.split(","); 
                titulo = dados[0].replace(" ","+").toLowerCase();
                autor = dados[1].trim().toLowerCase();     
            }
            else
                titulo = dados.replace(" ","+").toLowerCase();

            url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${titulo}`;

            if (autor != "")
                url = url + `+inauthor:${autor}`;

            try
            {

                const data = await fetch( url ,options);

                const resultado = await data.json();

                response.json(resultado.items);
            }   

            catch(error)
            {
                console.log(error);
            }
                
    }