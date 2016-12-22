var image = document.getElementById("img1");

for(var i=0; i<document.getElementsByClassName("button").length; i++){
document.getElementsByClassName("button")[i].onclick = function() {
    var id = this.id.split("")[0];
    var oid;
    if(this.id<=10){
      oid=(this.id)*11
    } else {
      oid=id;
    }

    document.getElementById('img'+id).classList.add("crossfade1");
    document.getElementById("spacing"+this.id).classList.add("voted");
    this.innerHTML = "BANNED";
    this.classList.add("disable");
    document.getElementById(oid).classList.add("hide");
    document.getElementById(oid).onclick = function() {}
  }
}

function loadpictures() {
    for(var i = 1; i<=1 ; i++){
      document.getElementById("img"+i).classList.add("image1");
    }
}
