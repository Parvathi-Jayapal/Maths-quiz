function addUser(){
  player1_name=document.getElementById("player_1_nameinput").value;
  player2_name=document.getElementById("player_2_nameinput").value;

  localStorage.setItem("player1_name");
  localStorage.setItem("player2_name");

  window.location="game_page.html";
}