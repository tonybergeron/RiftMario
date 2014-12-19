#pragma strict
public var fireball : GameObject;
public var allowfire = true;
public var fireRate = .5;

function Start () {

}

function Update () {
	if (Input.GetKeyDown(KeyCode.F)){
		Fire();
	}
}

function Fire () {
	allowfire = false;
	var newBullet : GameObject = Instantiate(fireball, transform.position + Vector3(0, 0.5, 0), transform.rotation);

	yield WaitForSeconds(fireRate);
    allowfire = true; 
}
