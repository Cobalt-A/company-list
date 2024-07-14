from faker import Faker
import json

fake = Faker("ru_RU")

def create_dict(**qwargs):
    d = {k:v for k, v in qwargs.items()}
    return d

data = []

for i in range(100):
    data.append(create_dict(id=i+1, name=fake.company(), address=fake.street_address()))


with open("mockCompanies.json", "w", encoding="utf-8") as file:
    json.dump(data, file, sort_keys=False, indent=2, ensure_ascii=False, separators=(',', ': '))