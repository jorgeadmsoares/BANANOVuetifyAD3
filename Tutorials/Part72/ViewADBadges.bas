﻿B4J=true
Group=Default Group
ModulesStructureVersion=1
Type=StaticCode
Version=8.9
@EndOfDesignText@
'Static code module
Sub Process_Globals	
	Public vuetify As VuetifyApp
	Public about As VueComponent
	Public path As String
	Public name As String = "adbadges"
	Private banano As BANano
	Private VContainer1 As VContainer
	Private VBadge1 As VBadge
	Private VBadge2 As VBadge
	Private VBadge4 As VBadge
	Private VBadge5 As VBadge
End Sub

Sub Initialize
	'establish a reference to the app
	vuetify = pgIndex.vuetify
	'initialize the component
	about.Initialize(Me, name)
	path = about.path
	
	banano.LoadLayout(about.Here, "mybadges")
	'
	about.BindVueElement(VBadge2.VElement)
	about.BindVueElement(VBadge5.VElement)
	
	VBadge2.Update(about, 3)
	VBadge5.Update(about, 1)
		
	'add the component as a router
	vuetify.AddRoute(about) 
End Sub

