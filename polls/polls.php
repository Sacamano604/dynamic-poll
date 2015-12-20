<?php
	// Turn on error displaying
	error_reporting(E_ALL);
	ini_set("display_errors", 1);

	//mySQLi string to connect to the DB
	$mysqli = mysqli_connect('localhost', 'root', 'root', 'dynamicpoll');

	switch($_GET['action']){
		case 'createPoll':
			$query = $mysqli->prepare('INSERT INTO poll (pollname, option1, option2, option3, option4, option5) VALUES (?, ?, ?, ?, ?, ?)');
			$query->bind_param('ssssss', $_POST['pollname'], $_POST['option1'], $_POST['option2'], $_POST['option3'], $_POST['option4'], $_POST['option5']);
			$query->execute();
			$mysqli->close();
		break;

	}









?>



