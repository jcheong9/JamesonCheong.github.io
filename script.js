var inputAddArtist = document.getElementById('inputField');
var toggleArtistInput = false;


function displayFormArtist() {
    let parent = document.getElementById("inputFields")
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
    let indexLocalStorage = 0;
    let getList = localStorage.getItem('artistList');
    getList = JSON.parse(getList);

    let textInputArtist = inputArtistName.value;
    let textInputAbout = inputAboutArtist.value;
    let textInputUrl = inputImageUrl.value;
    storeArtistLocalStorage(textInputArtist,textInputAbout,textInputUrl);
    if(getList.length != 0){
        indexLocalStorage = getList.length;
    }
    addListBoxArtist(textInputArtist,textInputAbout,textInputUrl,indexLocalStorage);

}

function addListBoxArtist(textInputArtist,textInputAbout,textInputUrl,indexLocalStorage){
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
    div.id = indexLocalStorage;
    btnDelete.id = indexLocalStorage;
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
    let getList = localStorage.getItem('artistList');
    let listMain = document.getElementById("listMain");
    let div = document.getElementById(clicked_id);
    //listMain.removeChild(div);
    getList = JSON.parse(getList);
    let newFilterArry = getList.filter(function(value,index,array){
        return index!=clicked_id;
    });
    populateArtistsLocalStorage(newFilterArry);
    localStorage.setItem('artistList',JSON.stringify(newFilterArry));

}

function storeArtistLocalStorage(textInputArtist,textInputAbout,textInputUrl){
     let getList = localStorage.getItem('artistList');
     let artist = {
         name: textInputArtist,
         about: textInputAbout,
         url: textInputUrl
     };
     if(getList == null){
        let newArray = [artist];
        localStorage.setItem('artistList', JSON.stringify(newArray));
     }else{
         let parseList = JSON.parse(getList);
         parseList.push(artist);
         localStorage.setItem('artistList', JSON.stringify(parseList));

    }
}

function populateArtistsLocalStorage(newFilterArry){
    let getList = localStorage.getItem('artistList');
    let listMain = document.getElementById("listMain");
    let indexLocalStorage = 0;
    getList = JSON.parse(getList);
    if(newFilterArry == null){
        getList.forEach(artist =>{
            addListBoxArtist(artist.name,artist.about,artist.url,indexLocalStorage);
            indexLocalStorage++;
        });
    }else{
        while(listMain.firstChild){
            listMain.firstChild.remove();
        }
        newFilterArry.forEach(artist =>{
            addListBoxArtist(artist.name,artist.about,artist.url,indexLocalStorage);
            indexLocalStorage++;
        });
    }
}

function searchArtist(){
    let input = document.getElementById("inputField");
    let filter = input.value.toUpperCase();
    let getList = localStorage.getItem('artistList');

    getList = JSON.parse(getList);
    a = getList.childNodes;
    let newFilterArry = getList.filter(function(el){
        let str = el.name.toUpperCase();
        return str.indexOf(filter) > -1;
    })
    populateArtistsLocalStorage(newFilterArry);
}

function initalizeVariables(){
    let newArray = [];
    let getList = localStorage.getItem('artistList');
    if(getList == null){
        localStorage.setItem('artistList', JSON.stringify(newArray));
    }
}
initalizeVariables();
populateArtistsLocalStorage(null);


