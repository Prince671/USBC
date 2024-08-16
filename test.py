from django.test import TestCase
from django.contrib.auth import get_user_model
from .models import Interest

User = get_user_model()

class InterestTestCase(TestCase):
    def setUp(self):
        self.user1 = User.objects.create_user(username='user1', password='pass')
        self.user2 = User.objects.create_user(username='user2', password='pass')

    def test_send_interest(self):
        interest = Interest.objects.create(sender=self.user1, receiver=self.user2)
        self.assertEqual(interest.sender, self.user1)
        self.assertEqual(interest.receiver, self.user2)
        self.assertIsNone(interest.accepted)
