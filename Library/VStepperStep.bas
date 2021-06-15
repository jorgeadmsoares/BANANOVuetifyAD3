﻿B4J=true
Group=Default Group
ModulesStructureVersion=1
Type=Class
Version=7
@EndOfDesignText@
#IgnoreWarnings:12
'Created with BANano Custom View Creator 1.00 by TheMash
'https://github.com/Mashiane/BANano-Custom-View-Creator
'Custom BANano View class


'Custom BANano View class
#Event: Change (e As BANanoEvent)


#DesignerProperty: Key: Color, DisplayName: Color, FieldType: String, DefaultValue: , Description: Color, List: amber|black|blue|blue-grey|brown|cyan|deep-orange|deep-purple|green|grey|indigo|light-blue|light-green|lime|orange|pink|purple|red|teal|transparent|white|yellow|primary|secondary|accent|error|info|success|warning|none
#DesignerProperty: Key: ColorIntensity, DisplayName: Colorintensity, FieldType: String, DefaultValue: , Description: Colorintensity, List: normal|lighten-5|lighten-4|lighten-3|lighten-2|lighten-1|darken-1|darken-2|darken-3|darken-4|accent-1|accent-2|accent-3|accent-4
#DesignerProperty: Key: Complete, DisplayName: Complete, FieldType: Boolean, DefaultValue: False, Description: Complete
#DesignerProperty: Key: CompleteIcon, DisplayName: CompleteIcon, FieldType: String, DefaultValue: , Description: CompleteIcon
#DesignerProperty: Key: EditIcon, DisplayName: EditIcon, FieldType: String, DefaultValue: , Description: EditIcon
#DesignerProperty: Key: Editable, DisplayName: Editable, FieldType: Boolean, DefaultValue: False, Description: Editable
#DesignerProperty: Key: ErrorIcon, DisplayName: ErrorIcon, FieldType: String, DefaultValue: , Description: ErrorIcon
#DesignerProperty: Key: StepValue, DisplayName: StepValue, FieldType: String, DefaultValue: , Description: StepValue
#DesignerProperty: Key: Classes, DisplayName: Classes, FieldType: String, DefaultValue: , Description: Classes added to the HTML tag. 
#DesignerProperty: Key: Styles, DisplayName: Styles, FieldType: String, DefaultValue: , Description: Styles added to the HTML tag. Must be a json String, use = 
#DesignerProperty: Key: Attributes, DisplayName: Attributes, FieldType: String, DefaultValue: , Description: Attributes added to the HTML tag. Must be a json String, use =

Sub Class_Globals 
    Private BANano As BANano 'ignore 
	Private mName As String 'ignore 
	Private mEventName As String 'ignore 
	Private mCallBack As Object 'ignore 
	Private mTarget As BANanoElement 'ignore 
	Private mElement As BANanoElement 'ignore 
	Private mClasses As String = "" 
	Private mStyles As String = "" 
	Private mAttributes As String = "" 
	Public VElement As VueElement 
	Private sColor As String
Private sColorIntensity As String
Private bComplete As Boolean
Private sCompleteIcon As String
Private sEditIcon As String
Private bEditable As Boolean
Private sErrorIcon As String
Private sRules As String
Private sStepValue As String
 Private xComplete As String
  Private xEditable As String
	End Sub

Sub Initialize (CallBack As Object, Name As String, EventName As String) 
	mName = Name.tolowercase 
	mEventName = EventName.ToLowerCase 
	mCallBack = CallBack	 
	mName = mName.Replace("#","") 
	mEventName = mEventName.Replace("#","") 
	If mName <> "" Then 
		Dim fKey As String = $"#${mName}"$ 
		If BANano.Exists(fKey) Then  
			mElement = BANano.GetElement(fKey) 
		End If 
	End If 
	xComplete = $"${mName}complete"$
	xEditable = $"${mName}editable"$
	sRules = $"${mname}rules"$
	End Sub

Sub DesignerCreateView (Target As BANanoElement, Props As Map) 
	mTarget = Target 
	If Props <> Null Then 
		mClasses = Props.GetDefault("Classes", "") 
		mStyles = Props.GetDefault("Styles", "") 
		mAttributes = Props.GetDefault("Attributes","") 
		sColor = Props.GetDefault("Color", "")
		sColorIntensity = Props.GetDefault("ColorIntensity", "")
		bComplete = Props.GetDefault("Complete", False)
		sCompleteIcon = Props.GetDefault("CompleteIcon", "")
		sEditIcon = Props.GetDefault("EditIcon", "")
		bEditable = Props.GetDefault("Editable", False)
		sErrorIcon = Props.GetDefault("ErrorIcon", "")
		sRules = Props.GetDefault("Rules", "")
		sStepValue = Props.GetDefault("StepValue", "")
	End If 
	' 
	'build and get the element 
	If BANano.Exists($"#${mName}"$) Then 
		mElement = BANano.GetElement($"#${mName}"$) 
	Else	 
		mElement = mTarget.Append($"<v-stepper-step id="${mName}"></v-stepper-step>"$).Get("#" & mName) 
	End If 
	' 
	VElement.Initialize(mCallBack, mName, mName) 
	VElement.TagName = "v-stepper-step" 
	VElement.Classes = mClasses 
	VElement.Styles = mStyles 
	VElement.Attributes = mAttributes 
	VElement.AddAttr("color", VElement.BuildColor(sColor, sColorIntensity))
	VElement.AddAttr(":complete", xComplete)
	VElement.SetData(xComplete, bComplete)
	VElement.AddAttr("complete-icon", sCompleteIcon)
	VElement.AddAttr("edit-icon", sEditIcon)
	VElement.AddAttr(":editable", xEditable)
	VElement.SetData(xEditable, bEditable)
	VElement.AddAttr("error-icon", sErrorIcon)
	VElement.AddAttr(":rules", sRules)
	VElement.SetData(sRules, VElement.NewList)
	VElement.AddAttr("step", sStepValue)
	VElement.BindAllEvents
End Sub

public Sub AddToParent(targetID As String) 
	mTarget = BANano.GetElement("#" & targetID.ToLowerCase) 
	DesignerCreateView(mTarget, Null) 
End Sub

public Sub Remove() 
	mTarget.Empty 
	BANano.SetMeToNull 
End Sub

public Sub Trigger(event As String, params() As String) 
	If mElement <> Null Then 
		mElement.Trigger(event, params) 
	End If 
End Sub

Sub AddClass(s As String) As VStepperStep 
	VElement.AddClass(s) 
	Return Me 
End Sub

Sub AddAttr(p As String, v As Object) As VStepperStep 
	VElement.SetAttr(p, v) 
	Return Me 
End Sub

Sub AddStyle(p As String, v As String) As VStepperStep 
	VElement.AddStyle(p, v) 
	Return Me 
End Sub

Sub RemoveAttr(p As String) As VStepperStep 
	VElement.RemoveAttr(p) 
	Return Me 
End Sub

Sub UpdateEditable(VC As VueComponent, b As Boolean) As VStepperStep 
	VC.SetData(xEditable, b) 
	Return Me 
End Sub

Sub UpdateComplete(VC As VueComponent, b As Boolean) As VStepperStep 
	VC.SetData(xComplete, b) 
	Return Me 
End Sub

'add a rule
'<code>
'Me.AddRule("methodName")
'Sub Rule(v As String) As Object	'ignoredeadcode
'If v = "" Then
'return "This is required!"
'Else
'Return True
'End If
'End Sub
'</code>
Sub AddRule(methodName As String)
	VElement.AddRule(methodName)
End Sub