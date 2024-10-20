from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    email = models.EmailField(unique=True)  # メールアドレスをユニークに設定
    phone_number = models.CharField(max_length=15, blank=True, null=True)  # 電話番号
    address = models.TextField(blank=True, null=True)  # 住所
    profile_image = models.ImageField(upload_to='profiles/', blank=True, null=True)  # プロフィール画像

    USERNAME_FIELD = 'email'  # 認証に使用するフィールドをemailに変更
    REQUIRED_FIELDS = ['username']  # `createsuperuser`時に必須となるフィールド

    def __str__(self):
        return self.email