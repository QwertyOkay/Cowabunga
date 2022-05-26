<?php
$userId = '544041552'; // Id телеграм аккаунта, куда отправлять сообщения
$token = '5534703239:AAGJDOd3ysoU-MYaggtBIm3o5d9wQ6ogsUg'; // Token бота

$user_name = ' ('.$_POST["call_user"].')'; // Скобки для красоты, мне так удобнее
$user_contact = $_POST["us_contact"]; // Данные с поля "контакт пользователя"
$user_text = $_POST["mymes"]; // Текст сообщения

if (!empty($user_contact) and !empty($user_text)) { // Если поля "контакт" и "текст" не пусты. Дополнительная проверка при обработке формы (если будут боты слать запросы)
	$msg = '*Заявка с сайта *

'; // Делаем первую строку "жирной". Переводы строки для удобства в телеграме.
	$msg .= $user_contact.$user_name; // Добавляем в текст поле "контакт" и имя
	$msg .= ' пишет:

'.$user_text; // Добавляем текст сообщения. Перевод строки опять же для удобства

file_get_contents('https://api.telegram.org/bot'. $token .'/sendMessage?chat_id='. $userId .'&text=' . urlencode($msg) . '&parse_mode=markdown'); // Отправляем запрос. Разметка - markdown

	echo "<strong>Спасибо, мы получили Ваше сообщение.</strong><hr>"; // Выводим сообщение что заявка ушла
}
?>