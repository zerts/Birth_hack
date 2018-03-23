# coding=utf-8

from flask import request, jsonify
from flask_cors import CORS

from app import app
from email import send_email

CORS(app)


@app.route('/api/register/', methods=['GET', 'POST'])
def register_command():
    data = request.get_json()
    text_body = u'Спасибо за регистрацию на Хакатоне BirthHack!\n\n' + data['teamName'].encode('utf-8') + u', ждем вас на Хакатон 14.04 в 12:00 в корпусе 1С на Тимирязевской. Захватите с собой ноутбук и, конечно же, хорошее настроение;)\nОтправить появившиеся вопросы вы можете на наш адрес - birthhack@mipt.ru, мы с удовольствием ответим на них.\n\nС уважением,\nкоманда BirthHack.'
    # text_body = u'Благодарим за регистрацию в хакатоне!\n' + u'Ваша команда: ' + data['teamName'] + u'\nСостав:\n' \
    #             + '\n'.join([x['name'] for x in data['people']]) + u'\nПо всем вопросам можно писать на этот ' \
    #                                                               u'адрес\n\nКоманда хакатона birth hack. '
    with open('output.txt', 'a') as output:
        output.write("\n\n============================================\n")
        output.write(data['teamName'].encode('utf-8'))
        output.write('\n--------------------\n')
        for i in data['people']:
            output.write(i['name'].encode('utf-8'))
            output.write('\n')
            output.write(i['email'].encode('utf-8'))
            output.write('\n')
            output.write(i['phone'].encode('utf-8'))
            output.write('\n')
            output.write(i['univercity'].encode('utf-8'))
            output.write('\n--------------------\n')
        output.write(str(data['skills']))
        output.write('\n')
        output.write(data['anotherSkills'].encode('utf-8'))
        output.write('\n')
        output.write(data['advice'].encode('utf-8'))
    send_email("Регистрация на BirthHack",
               sender='birthhack@mipt.ru',
               recipients=[data['people'][0]['email']],
               text_body=text_body)
    send_email("Регистрация на BirthHack",
               sender='birthhack@mipt.ru',
               recipients=['zertsalov96@yandex.ru'],
               text_body=str(data))
    return jsonify({'status': 'success'})
