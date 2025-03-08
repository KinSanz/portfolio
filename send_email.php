<?php
$to = "kinsanzfr@gmail.com"; 
$subject = "Notification de téléchargement de CV";
$message = "Quelqu'un a téléchargé ton CV depuis ton site !";
$headers = "From: no-reply@kinsanz.dev\r\n"; // Correction ajout de \r\n pour éviter les erreurs

if(mail($to, $subject, $message, $headers)) {
    echo "Notification de téléchargement envoyée avec succès.";
} else {
    echo "Erreur : la notification de téléchargement n'a pas pu être envoyé.";
}
?>