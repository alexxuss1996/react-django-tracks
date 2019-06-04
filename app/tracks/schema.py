import graphene
import uuid
from graphene_django import DjangoObjectType
from datetime import datetime
from .models import Track

class TrackType(DjangoObjectType):
	class Meta: 
		model = Track

class Query(graphene.ObjectType): 
	tracks = graphene.List(TrackType)

	def resolve_tracks(self, info):
		return Track.objects.all()