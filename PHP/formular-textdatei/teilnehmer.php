<?php

$datei = __DIR__ . "/teilnehmer.txt";

if (!file_exists($datei)) {
    die("Noch keine Anmeldungen vorhanden.");
}

$zeilen = file(
    $datei,
    FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES
);

if ($zeilen === false) {
    die("Die Datei konnte nicht gelesen werden.");
}
?>

<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>Teilnehmer im PHP-Kurs</title>

    <style>
        table {
            border-collapse: collapse;
        }

        th, td {
            border: 1px solid #333;
            padding: 10px;
            text-align: left;
        }

        th {
            background-color: #e0f2fe;
        }
    </style>
</head>
<body>

    <h1>Teilnehmer im PHP-Kurs</h1>

    <table>
        <tr>
            <th>Name</th>
            <th>Stadt</th>
            <th>Lernziel</th>
        </tr>

        <?php
        foreach ($zeilen as $zeile) {
            $werte = explode(" | ", $zeile, 3);

            $name = substr($werte[0] ?? "", 6);
            $stadt = substr($werte[1] ?? "", 7);
            $lernziel = substr($werte[2] ?? "", 9);

            echo "<tr>";
            echo "<td>" . htmlspecialchars($name) . "</td>";
            echo "<td>" . htmlspecialchars($stadt) . "</td>";
            echo "<td>" . htmlspecialchars($lernziel) . "</td>";
            echo "</tr>";
        }
        ?>

    </table>

    <p>
        <a href="anmeldung.php">Zur Anmeldung</a>
    </p>

</body>
</html>