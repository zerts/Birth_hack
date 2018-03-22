# coding=utf-8

from flask import request, jsonify
from flask_cors import CORS

from app import app
from email import send_email

CORS(app)


@app.route('/api/register/', methods=['GET', 'POST'])
def register_command():
    data = request.get_json()
    text_body = u'Благодарим за регистрацию в хакатоне!\n' + u'Ваша команда: ' + data['teamName'] + u'\nСостав:\n' \
                + '\n'.join([x['name'] for x in data['people']]) + u'\nПо всем вопросам можно писать на этот ' \
                                                                   u'адрес\n\nКоманда хакатона birth hack. '
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
               sender='zertsalov2910@gmail.com',
               recipients=['zertsalov96@yandex.ru'],
               text_body=text_body)
    return jsonify({'status': 'success'})
