#pragma strict

private var player : Transform;
private var Yorg : Vector3;

function Start () {
	player= GameObject.FindGameObjectWithTag("Player").transform;
	
}

function Update () {
	var aux : Vector3 = new Vector3(-2.5, 5.0, 10.0);
	transform.position = player.position + aux;
	transform.LookAt(player);
}
