function RenderPost(objectPosts){
    return(
        <div class="post">
                    <div class="topo">
                        <div class="usuario">
                            <img src={objectPosts.imgUser} />
                            {objectPosts.User}
                        </div>
                        <div class="acoes">
                            <ion-icon name="ellipsis-horizontal"></ion-icon>
                        </div>
                    </div>

                    <div class="conteudo">
                        <img src={objectPosts.Img} />
                    </div>

                    <div class="fundo">
                        <div class="acoes">
                            <div>
                                <ion-icon name="heart-outline"></ion-icon>
                                <ion-icon name="chatbubble-outline"></ion-icon>
                                <ion-icon name="paper-plane-outline"></ion-icon>
                            </div>
                        <div>
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </div>
                        </div>
                        <div class="curtidas">
                            <img src={objectPosts.ImgLike} />
                            <div class="texto">
                            Curtido por <strong>{objectPosts.Who}</strong> e <strong>outras {objectPosts.HowMany} pessoas</strong>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default function Posts(){
    const objectPosts = [
        {
            imgUser:"assets/img/meowed.svg",
            User: "meowed",
            Img: "assets/img/gato-telefone.svg",
            ImgLike: "assets/img/respondeai.svg",
            Who: "respondeai",
            HowMany:"101.523"
        },
        {
            imgUser:"assets/img/barked.svg",
            User: "barked",
            Img: "assets/img/dog.svg",
            ImgLike: "assets/img/adorable_animals.svg",
            Who: "adorable_animals",
            HowMany:"99.159"
        }
    ]
    return(
        <div class="posts">
                {objectPosts.map(RenderPost)}
            </div>
    )
}