#pragma strict
public var destroyTimer = 3;
public var coinSound : AudioClip;

function Start () {

}

function Update () {
}

function OnCollisionEnter(col: Collision){
	if (!audio.isPlaying){
		audio.clip = coinSound;
		audio.Play();
	}
//	if(col.gameObject.tag == "Player"){		
//		Destroy(this.gameObject);
//	}
}