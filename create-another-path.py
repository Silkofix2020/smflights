import json

# Загрузка JSON файла
with open('airlines.json', 'r', encoding='utf-8') as file:
    data = json.load(file)

# Изменение пути к логотипам
for airline in data['data']:
    airline['logo'] = airline['logo'].replace('./images/', './public/airlines/')

# Сохранение изменений в JSON файл
with open('airlines_updated.json', 'w', encoding='utf-8') as file:
    json.dump(data, file, ensure_ascii=False, indent=4)

print("Путь к логотипам обновлен.")
