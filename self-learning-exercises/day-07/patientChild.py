from patientMain import *

class AdultPatient(Patient):
    def is_adult(self):
        return self.age >= 18

patient = AdultPatient("Venkatesh", 25)
print(patient.is_adult())
patient.display()
patient.update_age(60)
patient.display()