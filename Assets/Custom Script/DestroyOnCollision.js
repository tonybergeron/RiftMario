#pragma strict
public var rotationSpeed = 5.0f;
public var destroyTimer = 3;

function Start () {

}

function Update () {
	transform.Rotate(Vector3.up, -rotationSpeed * Time.deltaTime);
}

function OnCollisionEnter(col: Collision){
//	if(col.gameObject.tag == "Player" && col.moveDirection.y < -0.3f){		
//		Destroy(this.gameObject);
//	}
}