#pragma strict
var deathZone = -5;

function Start () {

}

function Update () {
	if(transform.position.y <= deathZone){
		transform.position = Vector3(-5, 0, 0);
	}
}
