#Inheritance - have access to another class to here
from FunctionsPractice import *


class ChildImp(APITest):
    def __init__(self):
        APITest.__init__(self, test_name, expected_status)

test3 = APITest("Close Referral", 500)
test3.validate(500)