#pragma strict
public var coinSound : AudioClip;

function Start () {

}

function Update () {

}

function OnDestroy(){
	if (!audio.isPlaying){
		audio.clip = coinSound;
		audio.Play();
	}
}