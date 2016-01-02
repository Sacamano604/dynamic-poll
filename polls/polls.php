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
			$returnId = $mysqli->insert_id;
			$json = array('poll_id' => $returnId);
			echo json_encode($json);
			$mysqli->close();
		break;

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
		
		case 'voteonPoll':
			$id = $_GET['poll_id'];
			$columnName = $_GET['voteOption'];
			$query = ("UPDATE poll SET $columnName=($columnName + 1) WHERE poll_id='$id'");
			$result = mysqli_query($mysqli, $query);
			echo 'DB success';
			$mysqli->close();
		break;
	}
?>