import React, {useState} from 'react';
import api from '../../services/api';

import {FiBookOpen, FiSearch} from 'react-icons/fi';

import './styles.css';

import imgNotAvailable from '../../assets/notAvaliable.png'

export default function Principal()
{

    const [dados, setDados] = useState('');

    const [livros, setLivros] = useState([]);

    const[livro, setLivro] = useState({});

    const[linkCompra, setLinkCompra] = useState('');
 
    async function pesquisar(e)
    {
        e.preventDefault();
       
        try
        {
            const retorno = await api.get('/', {
                headers: {
                    dados: dados,
                }
            });

            if (retorno.data != "")
                setLivros(retorno.data);
        }
        catch(error)
        {
            console.log(error);
        }
        
    }

    function descricao(id)
    {
        setLivro(livros[id].volumeInfo);  
        setLinkCompra(livros[id].saleInfo.buyLink);  
    }

    return(
        <div>

            <div className="container">

                <header>
                    <FiBookOpen size={30} color="#ffffff"/> <span>Book</span> Finder
                </header>

                <form onSubmit={pesquisar}>

                    <button className="" type="submit"> <FiSearch size={25} color="#ffffff"/> </button>
                    <input value={dados} onChange={e=> setDados(e.target.value)} type="text" placeholder="título, autor"/>
                    

                </form>

                <section className="pesquisa-livros"> 

                    <ul>
                        {
            
                            livros.map( (livro, index) => (
            
                                    <li key={index} id={index}  onClick={e=> descricao(parseInt(e.currentTarget.id)) }>
                                        <img src={livro.volumeInfo.imageLinks !== undefined ? livro.volumeInfo.imageLinks.thumbnail : imgNotAvailable} />
                                    </li>
                            
                            ))    
                        }
                        
                    </ul>

                </section>

                <section className="livro">

                    <h2 className="titulo">{livro.title}</h2><br/>

                    <img src={livro.imageLinks !==  undefined ? livro.imageLinks.thumbnail : ""} />

                    <div className="informacoes">

                        <span><b> {livro.authors  !== undefined ? 'Autores: ': '' } </b> </span>
                        <span> {livro.authors  !== undefined ?  livro.authors : '' } </span> <br/>

                        <span><b> {livro.publisher  !== undefined ? 'Editora: ': '' } </b> </span>
                        <span> {livro.publisher  !== undefined ?  livro.publisher : '' }</span><br/>

                        <span><b> {livro.publishedDate  !== undefined ? 'Data da edição: ': '' } </b> </span>
                        <span> {livro.publishedDate  !== undefined ? new Date(livro.publishedDate + ' 00:00').toLocaleDateString()  : '' }</span><br/>
                        
                        <span><b> {livro.pageCount  !== undefined ? 'Páginas: ': '' } </b> </span>
                        <span> {livro.pageCount  !== undefined ?   livro.pageCount : '' }</span><br/>

                        <span><b> {livro.printType  !== undefined ? 'Tipo de impressão: ': '' } </b> </span>
                        <span> {livro.printType  !== undefined ?   livro.printType : '' }</span><br/>

                        <span><b> {livro.categories  !== undefined ? 'Categoria: ': '' } </b> </span>
                        <span> {livro.categories  !== undefined ?   livro.categories : '' }</span><br/>

                        <span><b> {livro.maturityRating  !== undefined ? 'Classificação: ': '' } </b> </span>
                        <span> {livro.maturityRating  !== undefined ?   livro.maturityRating : '' }</span><br/>

                        <span><b> {livro.language  !== undefined ? 'Idioma: ': '' } </b> </span>
                        <span> {livro.language  !== undefined ?  livro.language.toUpperCase() : '' }</span><br/>
                        
                        
                    </div>

                    <div className="descricao"> 

                        <p><span>{livro.description}</span> </p>
                    
                    </div>    

                    <a href={linkCompra}> {linkCompra !== '' ? "Comprar" : ""}</a>
        
                </section>
                     
            </div>

        </div>

    );
}