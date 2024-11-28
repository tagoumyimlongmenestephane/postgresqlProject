from django.contrib import admin
from django.urls import include, path
from api import views

urlpatterns = [
    path('notes/', views.NoteListCreate.as_view(), name="note-list"),
    path('notes/delete/<int:pk>/',  views.NoteDelete.as_view(), name="delete-note")
]
