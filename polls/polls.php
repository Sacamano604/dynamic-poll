<?php
	// Turn on error displaying
	error_reporting(E_ALL);
	ini_set("display_errors", 1);
	//mySQLi string to connect to the DB
	$mysqli = mysqli_connect('localhost', 'root', 'root', 'dynamicpoll');
	session_start();
	//Switch for each action
	switch($_GET['action']){
		//Case that handles poll creation
		case 'createPoll':
			$query = $mysqli->prepare('INSERT INTO poll (pollname, option1, option2, option3, option4, option5) VALUES (?, ?, ?, ?, ?, ?)');
			$query->bind_param('ssssss', $_POST['pollname'], $_POST['option1'], $_POST['option2'], $_POST['option3'], $_POST['option4'], $_POST['option5']);
			$query->execute();
			$returnId = $mysqli->insert_id;
			$json = array('poll_id' => $returnId);
			echo json_encode($json);
			$mysqli->close();
			$_SESSION["voteCast"] = "no";
		break;
		//Case that handles the viewing of the polls
		case 'viewPoll':
			$id = $_GET['poll_id'];
			$query = ("SELECT * FROM poll WHERE poll_id = '$id'");
			$result = mysqli_query($mysqli, $query);
			while ($row = $result->fetch_assoc()){
				$json = array('poll_id' => $row['poll_id'], 'pollname' => $row['pollname'], 'option1' => $row['option1'], 'option2' => $row['option2'], 'option3' => $row['option3'], 'option4' => $row['option4'], 'option5' => $row['option5'], 'option1votes' => $row['option1votes'], 'option2votes' => $row['option2votes'], 'option3votes' => $row['option3votes'], 'option4votes' => $row['option4votes'], 'option5votes' => $row['option5votes']);
			};
			echo json_encode($json);
			$mysqli->close();
		break;
		//Case that handles poll voting
		case 'voteonPoll':
			//If the session variable 'voteCast' is empty, make it say 'no'
			//This is necessary for peopel sharing their poll so that new visitors get the session variable when arriving 
			if($_SESSION["voteCast"] == ""){
				$_SESSION["voteCast"] = "no";
			}
			//If they haven't voted yet, go ahead and let them vote
			if ($_SESSION["voteCast"] == "no") {
				$id = $_GET['poll_id'];
				$columnName = $_GET['voteOption'];
				$query = ("UPDATE poll SET $columnName=($columnName + 1) WHERE poll_id='$id'");
				$result = mysqli_query($mysqli, $query);
				$mysqli->close();				
			} 
			//Set the session variable to 'yes' so they cannot vote again in this session
			$_SESSION["voteCast"] = "yes";
		break;
	}


?>