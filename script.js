var inputAddArtist = document.getElementById('inputField');
var toggleArtistInput = false;
var num = 0;

function displayFormArtist() {
    let parent = document.getElementById("listMain")
    let node = document.createElement("form");
    let div = document.createElement("div");
    let inputArtistName = document.createElement("input");
    let inputAboutArtist = document.createElement("input");
    let inputImageUrl = document.createElement("input");
    let btnAdd = document.createElement("button");
    div.className = "generatedFormJS";
    inputArtistName.placeholder= "Artist Name";
    inputArtistName.id="inputArtistNameId"
    inputAboutArtist.placeholder="About Name";
    inputAboutArtist.id="inputAboutArtistId";
    inputImageUrl.placeholder="Image url";
    inputImageUrl.id="inputImageUrlId";
    btnAdd.textContent = "Add";
    btnAdd.setAttribute('onclick','addArtistBtn()')
    node.appendChild(inputArtistName);
    node.appendChild(inputAboutArtist);
    node.appendChild(inputImageUrl);
    div.appendChild(node);
    div.appendChild(btnAdd);

    if(toggleArtistInput){
        toggleArtistInput = false;
        parent.removeChild(parent.firstElementChild);
    }else{
        parent.prepend(div);
        toggleArtistInput = true;
    }

}

function addArtistBtn(){
    let inputArtistName = document.getElementById("inputArtistNameId");
    let inputAboutArtist = document.getElementById("inputAboutArtistId");
    let inputImageUrl = document.getElementById("inputImageUrlId");

    let textInputArtist = inputArtistName.value;
    let textInputAbout = inputAboutArtist.value;
    let textInputUrl = inputImageUrl.value;
    addListBoxArtist(textInputArtist,textInputAbout,textInputUrl)

}

function addListBoxArtist(textInputArtist,textInputAbout,textInputUrl){
    let parent = document.getElementById("listMain")
    let div = document.createElement("div");
    let divImg = document.createElement("div");
    let btnDiv = document.createElement("div");
    let divText = document.createElement("div");
    let img = document.createElement("img");
    let h3 = document.createElement("h3");
    let h5 = document.createElement("h5");
    let btnDelete = document.createElement("button");
    div.className = "listBox";
    divText.className = "listBoxText";
    h3.textContent=textInputArtist;
    h5.textContent=textInputAbout;
    img.src=textInputUrl;
    btnDelete.className = "deleteBtnClass";
    btnDelete.textContent = "Delete";
    divImg.id = "columns";
    divText.id = "columnsMid";
    btnDiv.id = "columns";
    div.id = num;
    btnDelete.id = num;
    num++;
    btnDelete.setAttribute('onclick','removeArtistBtn(this.id)')

    divImg.appendChild(img);
    div.appendChild(divImg);
    div.appendChild(divText);
    divText.appendChild(h3);
    divText.appendChild(h5);
    btnDiv.appendChild(btnDelete);
    div.appendChild(btnDiv);
    parent.appendChild(div);
}

function removeArtistBtn(clicked_id){
    let listMain = document.getElementById("listMain");
    let div = document.getElementById(clicked_id);
    listMain.removeChild(div);
}
//inputAddArtist.addEventListener ("click",displayFormArtist);
