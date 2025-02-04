from rest_framework import generics
from .models import Contacts
from .serializers import ContactsSerializer

# Create your views here.

class ContactList(generics.ListCreateAPIView):
    """
    List all contacts.
    """
    queryset = Contacts.objects.all().order_by('last_name')
    serializer_class = ContactsSerializer


class ContactDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve a workstream and edit or delete it if you own it.
    """
    serializer_class = ContactsSerializer
    queryset = Contacts.objects.all()