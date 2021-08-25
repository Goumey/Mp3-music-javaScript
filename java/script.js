let  play=document.querySelector("#play")

let  audio=document.querySelector("audio")
let  titres=document.querySelector("#titre")
let  image=document.querySelector("img")
let  fas=document.querySelector("#playpause")




play.addEventListener("click",function(){
  let res= fas.classList.toggle('x');
  if (res) {
    image.classList.add("animation")
   fas.classList.replace("fa-play","fa-pause-circle")
   audio.play();
  
  } else {
   audio.pause();
   image.classList.remove("animation");
   fas.classList.replace("fa-pause-circle","fa-play")
  }
   
 
   
})



let tableau =[
   "./sound/02-mhd-afro_trap_part.2_(kakala_bomaye)-fr3sh.mp3",
   "./sound/03-mhd-afro_trap_part.3_(champions_league)-fr3sh.mp3",
   "./sound/04-mhd-afro_trap_part.4_(fais_le_mouv)-fr3sh.mp3",
   "./sound/05-mhd-mort_ce_soir-fr3sh.mp3",
   "./sound/06-mhd-a_kele_nta-fr3sh.mp3",
   "./sound/07-mhd-afro_trap_part.5_(ngatie_abedi)-fr3sh.mp3",
   "./sound/08-mhd-interlude_trap-fr3sh.mp3",
   "./sound/09-mhd-amina-fr3sh.mp3",
   "./sound/10-mhd-tout_seul-fr3sh.mp3",
   "./sound/11-mhd-afro_trap_part.6_(molo_molo)-fr3sh.mp3",
   "./sound/12-mhd-ma_vie_feat_fally_ipupa-fr3sh.mp3",
   "./sound/13-mhd-roger_milla-fr3sh.mp3",
   "./sound/14-mhd-maman_jaeai_mal-fr3sh.mp3",
   "./sound/15-mhd-wanyinyin_feat_angelique_kidjo-fr3sh.mp3",
   "./sound/01-mhd-la_moula-fr3sh.mp3" 

]
let titre =[
   " kakala_bomaye",
   " champions_league",
   " fais_le_mouv",
   " mhd-mort_ce_soir",
   " mhd-a_kele_nta",
   " ngatie_abedi",
   " interlude_trap",
   " mhd-amina",
   " mhd-tout_seul",
   " molo_molo",
   " ma_vie",
   " roger_milla",
   " maman_j'ai_mal",
   " wanyinyin",
   " Moula"
]
let images =[
   "./img/neon1.jpg",
   "./img/neon2.jpg",
   "./img/neon3.jpg",
   "./img/neon4.jpg",
   "./img/neon5.jpg",
   "./img/neon6.jpg",
   "./img/neon7.jpg",
   "./img/neon8.jpg",
   "./img/neon9.jpg",
   "./img/neon10.jpg",
   "./img/neon11.jpg",
   "./img/neon12.jpg",
   "./img/neon13.jpg",
   "./img/neon14.jpg",
   "./img/neon.jpg"
]
let compte=0;
function next() {
  
   if (compte>=tableau.length) {
compte=0;      
   }
 
   audio.setAttribute("src",tableau[compte]);
   audio.setAttribute("title",titre[compte]);
  image.setAttribute("src",images[compte]);
   titres.textContent=`${audio.getAttribute("title")}`

   compte++;
   image.classList.add("animation")
   fas.classList.replace("fa-play","fa-pause-circle")
   audio.play();
  
}
function prev() {
  compte--;
   if (0>compte) {
compte=tableau.length-1;      
   }
 
   audio.setAttribute("src",tableau[compte]);
   audio.setAttribute("title",titre[compte]);
   titres.textContent=`${audio.getAttribute("title")}`
   image.setAttribute("src",images[compte]);
   image.classList.add("animation")
   fas.classList.replace("fa-play","fa-pause-circle")
   audio.play();
 
  
}
