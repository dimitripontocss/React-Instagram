
import React from 'react';

function RenderPost(objectPosts){
    const [color, setColor] = React.useState("unliked md hydrated");
    const [name, setName] = React.useState("heart-outline")
    console.log(color, name)

    function Changecolor(){
        console.log("entrou na changecolor")
        console.log(color, name)
        if(color == "unliked md hydrated"){
            setColor("liked md hydrated");
            setName("heart");
            console.log(color , name);
        }
        else{
            console.log(color , name,"entrou");
            setColor("unliked md hydrated");
            setName("heart-outline");
            console.log(color , name);
        }
        console.log(color, name)
    }
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
                        <img onClick={()=>{setColor("liked md hydrated");setName("heart")}} src={objectPosts.Img} />
                    </div>

                    <div class="fundo">
                        <div class="acoes">
                            <div>
                                <ion-icon name={name} class = {color} onClick={Changecolor}></ion-icon>
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