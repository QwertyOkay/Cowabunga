from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

@app.route('/send_to_telegram', methods=['POST'])
def send_to_telegram():
    data = request.json
    chat_id = "ВАШ_CHAT_ID"
    bot_token = "ВАШ_BOT_TOKEN"
    text = f"Получена новая заявка: {data['message']}"
    url = f"https://api.telegram.org/bot{bot_token}/sendMessage"
    payload = {"chat_id": chat_id, "text": text}
    requests.post(url, data=payload)
    return jsonify({"success": True})

if __name__ == "__main__":
    app.run(debug=True)


# Этот код запускает веб-сервер, который принимает POST запросы по адресу /send_to_telegram. Он ожидает, что данные будут отправлены в формате JSON с полем message. Затем он отправляет это сообщение в указанный Telegram чат с использованием API Telegram бота. Убедитесь, что вы замените ВАШ_CHAT_ID и ВАШ_BOT_TOKEN на реальные значения, полученные от вашего Telegram бота.

# Для развертывания этого приложения на Heroku или аналогичной платформе, вам потребуется добавить файлы requirements.txt с перечислением всех зависимостей (в данном случае flask и requests) и Procfile с командой для запуска вашего приложения (web: python имя_вашего_файла.py).
    
    # 2
    
# Для создания такого приложения на Python с использованием Flask и SQLAlchemy, а также для отправки сообщений в Telegram, вы можете следовать общей схеме:
    
    from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
import telebot

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'Ваша_Строка_Подключения_К_БД'
db = SQLAlchemy(app)

BOT_TOKEN = 'Ваш_Token_Bot'
bot = telebot.TeleBot(BOT_TOKEN)

class Application(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    data = db.Column(db.String(255))

    def __init__(self, data):
        self.data = data

@app.route('/submit', methods=['POST'])
def submit():
    data = request.form['data']
    new_application = Application(data)
    db.session.add(new_application)
    db.session.commit()

    bot.send_message('Ваш_Chat_ID', f'Получена новая заявка: {data}')

    return 'Заявка отправлена', 200

if __name__ == '__main__':
    app.run(debug=True)


# Для создания такого приложения на Python с использованием Flask и SQLAlchemy, а также для отправки сообщений в Telegram, вы можете следовать общей схеме:

# 1. **Настройте Flask** для создания веб-приложения.
# 2. **Используйте SQLAlchemy** для взаимодействия с реляционной базой данных.
# 3. **Настройте Telegram бота** и используйте его API для отправки сообщений.

# Код может выглядеть примерно так:


from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
import telebot

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'Ваша_Строка_Подключения_К_БД'
db = SQLAlchemy(app)

BOT_TOKEN = 'Ваш_Token_Bot'
bot = telebot.TeleBot(BOT_TOKEN)

class Application(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    data = db.Column(db.String(255))

    def __init__(self, data):
        self.data = data

@app.route('/submit', methods=['POST'])
def submit():
    data = request.form['data']
    new_application = Application(data)
    db.session.add(new_application)
    db.session.commit()

    bot.send_message('Ваш_Chat_ID', f'Получена новая заявка: {data}')

    return 'Заявка отправлена', 200

if __name__ == '__main__':
    app.run(debug=True)

# Этот код создает простое веб-приложение, которое принимает POST запросы на эндпоинт `/submit`, сохраняет данные из запроса в базе данных и отправляет уведомление в Telegram. Убедитесь, что вы настроили свою базу данных и добавили в нее таблицу `Application`, а также получили токен для Telegram бота и узнали ваш Chat ID для отправки сообщений.

# Обратите внимание, что для работы этого примера вам нужно будет установить необходимые библиотеки (`Flask`, `Flask-SQLAlchemy`, `pyTelegramBotAPI`) и настроить вашу среду (например, добавить переменные окружения для строки подключения к базе данных и токена бота). Также убедитесь, что ваша база данных доступна и правильно настроена для взаимодействия с SQLAlchemy.
    
    # Я выбрал SQLAlchemy из-за его гибкости и мощности в работе с реляционными базами данных в приложениях на Python. SQLAlchemy предоставляет широкие возможности для описания структуры таблиц и отношений между ними с помощью Python классов. Он также поддерживает различные реляционные базы данных, делая ваш код более универсальным и облегчая миграцию данных между различными системами управления базами данных.

    # SQLAlchemy широко используется в коммерческих приложениях. Это одна из наиболее популярных ORM (Object-Relational Mapping) библиотек в экосистеме Python, благодаря своей гибкости, мощным возможностям и поддержке широкого спектра реляционных баз данных. Она позволяет разработчикам эффективно работать с базами данных, используя объектно-ориентированный подход, что упрощает разработку и обслуживание сложных приложений.