<?php
$to = "kinsanzfr@gmail.com"; 
$subject = "Notification de téléchargement de CV";
$message = "Quelqu'un a téléchargé ton CV depuis ton site !";
$headers = "From: no-reply@kinsanz.dev";

mail($to, $subject, $message, $headers);
?>
