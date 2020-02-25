from django.test import TestCase

from django.urls import reverse

from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.test import APITestCase
from model_bakery import baker

PASSWORD = "jafsdfah24agdsfghasdf"
EMAIL = "example@example.com"
UserModel = get_user_model()


class DummyTest(TestCase):
    def test_dummy(self):
        self.assertTrue(True)


class LoginTests(APITestCase):
    def setUp(self) -> None:
        self.user = baker.make(UserModel, email=EMAIL)
        self.user.set_password(PASSWORD)
        self.user.save()
        self.login_url = reverse("rest_login")
        self.refresh_url = reverse("rest_token_refresh")

        response = self.client.post(
            self.login_url,
            {"email_or_username": self.user.email, "password": PASSWORD},
            format="json",
        )
        self.access_token = response.data["access"]
        self.refresh_token = response.data["refresh"]

    def test_login_with_username(self):
        response = self.client.post(
            self.login_url,
            {"email_or_username": self.user.username, "password": PASSWORD},
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["user"], self.user.username)
        self.assertTrue("access" in response.data)
        self.assertTrue("refresh" in response.data)

    def test_login_with_email(self):
        """"
        """
        response = self.client.post(
            self.login_url,
            {"email_or_username": self.user.email, "password": PASSWORD},
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["user"], self.user.username)
        self.assertTrue("access" in response.data)
        self.assertTrue("refresh" in response.data)

    def test_login_wrong_pw(self):
        response = self.client.post(
            self.login_url,
            {"email_or_username": self.user.email, "password": "wrong"},
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_token_refresh(self):
        response = self.client.post(
            self.refresh_url, {"refresh": self.refresh_token}, format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertTrue("access" in response.data)

    def test_token_refresh_fail(self):
        response = self.client.post(
            self.refresh_url, {"refresh": self.access_token}, format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
