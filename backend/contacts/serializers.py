from rest_framework import serializers
from .models import Contacts

class ContactsSerializer(serializers.ModelSerializer):
    '''
    serializer for making tasks as completed
    '''

    class Meta:
        model = Contacts
        fields = ['id','first_name', 'last_name', 'number', 'address']