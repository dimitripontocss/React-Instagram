function RenderUser(props){
    return(
        <div class="usuario">
                    <img src={props.src} />
                    <div class="texto">
                    <strong>{props.username}</strong>
                    {props.user}
                    </div>
                </div>
    )
}

function RenderSugestions(objectSugestions){
    return(
            <div class="sugestao">
                <div class="usuario">
                    <img src={objectSugestions.img} />
                    <div class="texto">
                        <div class="nome">{objectSugestions.user}</div>
                        <div class="razao">{objectSugestions.reason}</div>
                    </div>
                    </div>

                <div class="seguir">Seguir</div>
            </div>
    )
}

export default function Sidebar(){
    const objectSugestions = [
        {
            img:"assets/img/bad.vibes.memes.svg",
            user: "bad.vibes.memes",
            reason: "Segue você"
        },
        {
            img:"assets/img/chibirdart.svg",
            user: "chibirdart",
            reason: "Segue você"
        },
        {
            img:"assets/img/razoesparaacreditar.svg",
            user: "razoesparaacreditar",
            reason: "Novo no Instagram"
        },
        {
            img:"assets/img/adorable_animals.svg",
            user: "adorable_animals",
            reason: "Segue você"
        },
        {
            img:"assets/img/smallcutecats.svg",
            user: "smallcutecats",
            reason: "Segue você"
        }
    ]
    return(
        <div class="sidebar">
            
                <RenderUser src="assets/img/catanacomics.svg" username="catanacomics" user="catana"/> 

                <div class="sugestoes">
                    <div class="titulo">
                        Sugestões para você
                        <div>Ver tudo</div>
                    </div>

                    {objectSugestions.map(RenderSugestions)}  

                </div>

                <div class="links">
                    Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
                </div>

                <div class="copyright">
                    © 2021 INSTAGRAM DO FACEBOOK
                </div>
            </div>
    )
}
