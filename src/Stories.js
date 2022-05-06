function RenderStory(Users){
    const UrlImg = `assets/img/${Users}.svg`
    return(
        <div class="story">
            <div class="imagem">
                <img src={UrlImg} />
            </div>
            <div class="usuario">
                {Users}
            </div>
        </div>
    )
}

export default function Stories(){
    const Users = ["9gag", "meowed", "barked", "nathanwpylestrangeplanet", "wawawicomics", "respondeai", "filomoderna", "memeriagourmet" ];
    return(
    <div class="stories">
        {Users.map(RenderStory)};
        <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
    </div>)
}