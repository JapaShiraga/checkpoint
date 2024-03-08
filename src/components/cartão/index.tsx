

type Cartao = {
    imagemurl : string;
    nome : string;
    poder : number;

}


const Card : React.FC<Cartao> = ({imagemurl, nome, poder}) => {
    return (
        <div className="card">
            <img width={200} src = {imagemurl} className="pokemon" alt="imagem"></img>
            <p className="desc">{nome}</p>
            <p className="desc">Power Edge: {poder} </p>
        </div>
    )
}

export default Card;