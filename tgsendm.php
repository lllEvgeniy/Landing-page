<?php
$name = $_POST['name'];
$phone = $_POST['phone'];
$token = "5184831568:AAHIXVFZzcLq1oPpPeI3y6h60TNnPHZo0qo";
$chat_id = "-766151280";
$arr = array(
    'Имя пользователя: ' => $name,
    'Телефон: ' => $phone,
  );


  foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A";
  };


$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: index.html');
} else {
  echo "Error";
}
?>


/*$token = "5184831568:AAHIXVFZzcLq1oPpPeI3y6h60TNnPHZo0qo";
$chat_id = "-766151280";*/