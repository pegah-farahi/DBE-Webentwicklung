<?php

$datei = __DIR__ . "/teilnehmer.txt";
$meldung = "";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = trim($_POST["name"] ?? "");
    $stadt = trim($_POST["stadt"] ?? "");
    $lernziel = trim($_POST["lernziel"] ?? "");

    if ($name !== "" && $stadt !== "" && $lernziel !== "") {
        $zeile = "Name: " . $name
               . " | Stadt: " . $stadt
               . " | Lernziel: " . $lernziel
               . PHP_EOL;

        $ergebnis = file_put_contents($datei, $zeile, FILE_APPEND);

        if ($ergebnis !== false) {
            $meldung = "Deine Anmeldung wurde gespeichert!";
        } else {
            $meldung = "Die Daten konnten nicht gespeichert werden.";
        }
    } else {
        $meldung = "Bitte alle Felder ausfüllen.";
    }
}
?>

<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>Mein PHP-Kurs</title>
</head>
<body>

    <h1>Anmeldung zum PHP-Kurs</h1>
    <p>Erzähl uns etwas über dich!</p>

    <form method="POST">
        <p>
            <label for="name">Dein Name:</label>
            <input type="text" id="name" name="name" required>
        </p>

        <p>
            <label for="stadt">Deine Stadt:</label>
            <input type="text" id="stadt" name="stadt" required>
        </p>

        <p>
            <label for="lernziel">Was möchtest du lernen?</label>
            <input type="text" id="lernziel" name="lernziel" required>
        </p>

        <button type="submit">Anmelden</button>
    </form>

    <p><?php echo $meldung; ?></p>

</body>
</html>