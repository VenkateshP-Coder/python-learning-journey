class APITest:
    def __init__(self, test_name, expected_status):
        self.test_name = test_name
        self.expected_status = expected_status

    def validate(self, actual_status):
        if actual_status != self.expected_status:
            print(self.test_name, "FAIL")
        else:
            print(self.test_name, "PASSED")


test1 = APITest("Create Referral", 201)
test2 = APITest("Get Referral", 200)

test1.validate(400)
test2.validate(200)