﻿B4J=true
Group=Default Group\Forms
ModulesStructureVersion=1
Type=Class
Version=7
@EndOfDesignText@
#IgnoreWarnings:12
'Created with BANano Custom View Creator 1.00 by TheMash
'https://github.com/Mashiane/BANano-Custom-View-Creator
'Custom BANano View class

#Event: Change (num As Object)
#Event: Click (e As BANanoEVent)
#Event: ClickAppend (e As BANanoEVent)
#Event: ClickPrepend (e As BANanoEVent)
#Event: End (num As Object)
#Event: Input (num As Object)
#Event: MouseDown (e As BANanoEvent)
#Event: MouseUp (e As BANanoEvent)
#Event: Start (num As Object)
#Event: UpdateError (b As Boolean)

#DesignerProperty: Key: Label, DisplayName: Label, FieldType: String, DefaultValue: Slider, Description: Label
#DesignerProperty: Key: MinValue, DisplayName: MinValue, FieldType: String, DefaultValue: 0, Description: MinValue
#DesignerProperty: Key: MaxValue, DisplayName: MaxValue, FieldType: String, DefaultValue: 100, Description: MaxValue
#DesignerProperty: Key: StepValue, DisplayName: StepValue, FieldType: String, DefaultValue: 1, Description: StepValue
#DesignerProperty: Key: VModel, DisplayName: VModel, FieldType: String, DefaultValue: slider1, Description: VModel
#DesignerProperty: Key: Disabled, DisplayName: Disabled, FieldType: Boolean, DefaultValue: False, Description: Disabled
#DesignerProperty: Key: Hidden, DisplayName: Hidden, FieldType: Boolean, DefaultValue: False, Description: Hidden
#DesignerProperty: Key: Loading, DisplayName: Loading, FieldType: Boolean, DefaultValue: False, Description: Loading
#DesignerProperty: Key: Readonly, DisplayName: Readonly, FieldType: Boolean, DefaultValue: False, Description: Readonly
#DesignerProperty: Key: Required, DisplayName: Required, FieldType: Boolean, DefaultValue: False, Description: Required 


#DesignerProperty: Key: PrependIcon, DisplayName: PrependIcon, FieldType: String, DefaultValue: , Description: PrependIcon
#DesignerProperty: Key: AppendIcon, DisplayName: AppendIcon, FieldType: String, DefaultValue: , Description: AppendIcon
#DesignerProperty: Key: BackgroundColor, DisplayName: BackgroundColor, FieldType: String, DefaultValue: , Description: BackgroundColor, List: amber|black|blue|blue-grey|brown|cyan|deep-orange|deep-purple|green|grey|indigo|light-blue|light-green|lime|orange|pink|purple|red|teal|transparent|white|yellow|primary|secondary|accent|error|info|success|warning|none
#DesignerProperty: Key: BackgroundColorIntensity, DisplayName: Backgroundcolorintensity, FieldType: String, DefaultValue: , Description: Backgroundcolorintensity, List: normal|lighten-5|lighten-4|lighten-3|lighten-2|lighten-1|darken-1|darken-2|darken-3|darken-4|accent-1|accent-2|accent-3|accent-4
#DesignerProperty: Key: Color, DisplayName: Color, FieldType: String, DefaultValue: , Description: Color, List: amber|black|blue|blue-grey|brown|cyan|deep-orange|deep-purple|green|grey|indigo|light-blue|light-green|lime|orange|pink|purple|red|teal|transparent|white|yellow|primary|secondary|accent|error|info|success|warning|none
#DesignerProperty: Key: ColorIntensity, DisplayName: Colorintensity, FieldType: String, DefaultValue: , Description: Colorintensity, List: normal|lighten-5|lighten-4|lighten-3|lighten-2|lighten-1|darken-1|darken-2|darken-3|darken-4|accent-1|accent-2|accent-3|accent-4
#DesignerProperty: Key: Dark, DisplayName: Dark, FieldType: Boolean, DefaultValue: False, Description: Dark
#DesignerProperty: Key: Dense, DisplayName: Dense, FieldType: Boolean, DefaultValue: False, Description: Dense
#DesignerProperty: Key: Error, DisplayName: Error, FieldType: String, DefaultValue: , Description: Error
#DesignerProperty: Key: ErrorCount, DisplayName: ErrorCount, FieldType: String, DefaultValue: , Description: ErrorCount
#DesignerProperty: Key: ErrorMessages, DisplayName: ErrorMessages, FieldType: String, DefaultValue: , Description: ErrorMessages
#DesignerProperty: Key: Height, DisplayName: Height, FieldType: String, DefaultValue: , Description: Height
#DesignerProperty: Key: HideDetails, DisplayName: HideDetails, FieldType: Boolean, DefaultValue: False, Description: HideDetails
#DesignerProperty: Key: Hint, DisplayName: Hint, FieldType: String, DefaultValue: , Description: Hint
#DesignerProperty: Key: InverseLabel, DisplayName: InverseLabel, FieldType: Boolean, DefaultValue: False, Description: InverseLabel
#DesignerProperty: Key: Key, DisplayName: Key, FieldType: String, DefaultValue: , Description: Key
#DesignerProperty: Key: Light, DisplayName: Light, FieldType: Boolean, DefaultValue: False, Description: Light
#DesignerProperty: Key: LoaderHeight, DisplayName: LoaderHeight, FieldType: String, DefaultValue: , Description: LoaderHeight
#DesignerProperty: Key: Messages, DisplayName: Messages, FieldType: String, DefaultValue: , Description: Messages
#DesignerProperty: Key: PersistentHint, DisplayName: PersistentHint, FieldType: Boolean, DefaultValue: False, Description: PersistentHint
#DesignerProperty: Key: Rules, DisplayName: Rules, FieldType: String, DefaultValue: , Description: Rules
#DesignerProperty: Key: Success, DisplayName: Success, FieldType: String, DefaultValue: , Description: Success
#DesignerProperty: Key: SuccessMessages, DisplayName: SuccessMessages, FieldType: String, DefaultValue: , Description: SuccessMessages
#DesignerProperty: Key: ThumbColor, DisplayName: ThumbColor, FieldType: String, DefaultValue: , Description: ThumbColor, List: amber|black|blue|blue-grey|brown|cyan|deep-orange|deep-purple|green|grey|indigo|light-blue|light-green|lime|orange|pink|purple|red|teal|transparent|white|yellow|primary|secondary|accent|error|info|success|warning|none
#DesignerProperty: Key: ThumbColorIntensity, DisplayName: Thumbcolorintensity, FieldType: String, DefaultValue: , Description: Thumbcolorintensity, List: normal|lighten-5|lighten-4|lighten-3|lighten-2|lighten-1|darken-1|darken-2|darken-3|darken-4|accent-1|accent-2|accent-3|accent-4
#DesignerProperty: Key: ThumbLabel, DisplayName: ThumbLabel, FieldType: String, DefaultValue: none, Description: ThumbLabel, List: always|none
#DesignerProperty: Key: ThumbSize, DisplayName: ThumbSize, FieldType: String, DefaultValue: , Description: ThumbSize
#DesignerProperty: Key: TickLabels, DisplayName: TickLabels, FieldType: String, DefaultValue: , Description: TickLabels
#DesignerProperty: Key: TickSize, DisplayName: TickSize, FieldType: String, DefaultValue: , Description: TickSize
#DesignerProperty: Key: Ticks, DisplayName: Ticks, FieldType: String, DefaultValue: none, Description: Ticks, List: always|none
#DesignerProperty: Key: TrackColor, DisplayName: TrackColor, FieldType: String, DefaultValue: , Description: TrackColor, List: amber|black|blue|blue-grey|brown|cyan|deep-orange|deep-purple|green|grey|indigo|light-blue|light-green|lime|orange|pink|purple|red|teal|transparent|white|yellow|primary|secondary|accent|error|info|success|warning|none
#DesignerProperty: Key: TrackColorIntensity, DisplayName: Trackcolorintensity, FieldType: String, DefaultValue: , Description: Trackcolorintensity, List: normal|lighten-5|lighten-4|lighten-3|lighten-2|lighten-1|darken-1|darken-2|darken-3|darken-4|accent-1|accent-2|accent-3|accent-4
#DesignerProperty: Key: TrackFillColor, DisplayName: TrackFillColor, FieldType: String, DefaultValue: , Description: TrackFillColor, List: amber|black|blue|blue-grey|brown|cyan|deep-orange|deep-purple|green|grey|indigo|light-blue|light-green|lime|orange|pink|purple|red|teal|transparent|white|yellow|primary|secondary|accent|error|info|success|warning|none
#DesignerProperty: Key: TrackFillColorIntensity, DisplayName: Trackfillcolorintensity, FieldType: String, DefaultValue: , Description: Trackfillcolorintensity, List: normal|lighten-5|lighten-4|lighten-3|lighten-2|lighten-1|darken-1|darken-2|darken-3|darken-4|accent-1|accent-2|accent-3|accent-4
#DesignerProperty: Key: VBind, DisplayName: VBind, FieldType: String, DefaultValue: , Description: VBind
#DesignerProperty: Key: VFor, DisplayName: VFor, FieldType: String, DefaultValue: , Description: VFor
#DesignerProperty: Key: VIf, DisplayName: VIf, FieldType: String, DefaultValue: , Description: VIf
#DesignerProperty: Key: VShow, DisplayName: V-Show, FieldType: String, DefaultValue:  , Description: 
#DesignerProperty: Key: VOn, DisplayName: VOn, FieldType: String, DefaultValue: , Description: VOn
#DesignerProperty: Key: ValidateOnBlur, DisplayName: ValidateOnBlur, FieldType: Boolean, DefaultValue: False, Description: ValidateOnBlur
#DesignerProperty: Key: Vertical, DisplayName: Vertical, FieldType: Boolean, DefaultValue: False, Description: Vertical
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
	Private sAppendIcon As String
Private sBackgroundColor As String
Private sBackgroundColorIntensity As String
Private sColor As String
Private sColorIntensity As String
Private bDark As Boolean
Private bDense As Boolean
Private sDisabled As String
Private sError As String
Private sErrorCount As String
Private sErrorMessages As String
Private sHeight As String
Private bHideDetails As Boolean
Private sHint As String
Private bInverseLabel As Boolean
Private sKey As String
Private sLabel As String
Private bLight As Boolean
Private sLoaderHeight As String
Private sLoading As String
Private sMaxValue As String
Private sMessages As String
Private sMinValue As String
Private bPersistentHint As Boolean
Private sPrependIcon As String
Private sReadonly As String
Private sRules As String
Private sStepValue As String
Private sSuccess As String
Private sSuccessMessages As String
Private sThumbColor As String
Private sThumbColorIntensity As String
Private sThumbLabel As String
Private sThumbSize As String
Private sTickLabels As String
Private sTickSize As String
Private sTicks As String
Private sTrackColor As String
Private sTrackColorIntensity As String
Private sTrackFillColor As String
Private sTrackFillColorIntensity As String
Private sVBind As String
Private sVFor As String
Private sVIf As String
Private sVModel As String
Private sVOn As String
Private sVShow As String
Private bValidateOnBlur As Boolean
Private bVertical As Boolean
 '
 Private bDisabled As Boolean
Private bHidden As Boolean
Private bLoading As Boolean
Private bReadonly As Boolean
Private bRequired As Boolean
Private sRequired As String
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
	sRequired = $"${mName}required"$
	sDisabled = $"${mName}disabled"$
	sReadonly = $"${mName}readonly"$
	sVShow = $"${mName}show"$
	sLoading = $"${mName}loading"$
	End Sub

Sub DesignerCreateView (Target As BANanoElement, Props As Map) 
	mTarget = Target 
	If Props <> Null Then 
		bDisabled = Props.Get("Disabled")
bHidden = Props.Get("Hidden")
bLoading = Props.Get("Loading")
bReadonly = Props.Get("Readonly")
bRequired = Props.Get("Required")
		mClasses = Props.Get("Classes") 
		mStyles = Props.Get("Styles") 
		mAttributes = Props.Get("Attributes") 
		sAppendIcon = Props.Get("AppendIcon")
sBackgroundColor = Props.Get("BackgroundColor")
sBackgroundColorIntensity = Props.Get("BackgroundColorIntensity")
sColor = Props.Get("Color")
sColorIntensity = Props.Get("ColorIntensity")
bDark = Props.Get("Dark")
bDense = Props.Get("Dense")
sError = Props.Get("Error")
sErrorCount = Props.Get("ErrorCount")
sErrorMessages = Props.Get("ErrorMessages")
sHeight = Props.Get("Height")
bHideDetails = Props.Get("HideDetails")
sHint = Props.Get("Hint")
bInverseLabel = Props.Get("InverseLabel")
sKey = Props.Get("Key")
sLabel = Props.Get("Label")
bLight = Props.Get("Light")
sLoaderHeight = Props.Get("LoaderHeight")
sLoading = Props.Get("Loading")
sMaxValue = Props.Get("MaxValue")
sMessages = Props.Get("Messages")
sMinValue = Props.Get("MinValue")
bPersistentHint = Props.Get("PersistentHint")
sPrependIcon = Props.Get("PrependIcon")
sReadonly = Props.Get("Readonly")
sRules = Props.Get("Rules")
sStepValue = Props.Get("StepValue")
sSuccess = Props.Get("Success")
sSuccessMessages = Props.Get("SuccessMessages")
sThumbColor = Props.Get("ThumbColor")
sThumbColorIntensity = Props.Get("ThumbColorIntensity")
sThumbLabel = Props.Get("ThumbLabel")
sThumbSize = Props.Get("ThumbSize")
sTickLabels = Props.Get("TickLabels")
sTickSize = Props.Get("TickSize")
sTicks = Props.Get("Ticks")
sTrackColor = Props.Get("TrackColor")
sTrackColorIntensity = Props.Get("TrackColorIntensity")
sTrackFillColor = Props.Get("TrackFillColor")
sTrackFillColorIntensity = Props.Get("TrackFillColorIntensity")
sVBind = Props.Get("VBind")
sVFor = Props.Get("VFor")
sVIf = Props.Get("VIf")
sVShow = Props.Get("VShow")
sVModel = Props.Get("VModel")
sVOn = Props.Get("VOn")
bValidateOnBlur = Props.Get("ValidateOnBlur")
bVertical = Props.Get("Vertical")
 
	End If 
	' 
	'build and get the element 
	If BANano.Exists($"#${mName}"$) Then 
		mElement = BANano.GetElement($"#${mName}"$) 
	Else	 
		mElement = mTarget.Append($"<v-slider id="${mName}"></v-slider>"$).Get("#" & mName) 
	End If 
	' 
	If BANano.IsNull(bDisabled) Or BANano.IsUndefined(bDisabled) Then
		bDisabled = False 
	End If
	If BANano.IsNull(bRequired) Or BANano.IsUndefined(bRequired) Then
		bRequired = False 
	End If
	If BANano.IsNull(bLoading) Or BANano.IsUndefined(bLoading) Then
		bLoading = False 
	End If
	VElement.Initialize(mCallBack, mName, mName) 
	VElement.TagName = "v-slider" 
	VElement.Classes = mClasses 
	VElement.Styles = mStyles 
	VElement.Attributes = mAttributes 
	VElement.AddAttr("append-icon", sAppendIcon)
VElement.AddAttr("background-color", VElement.BuildColor(sBackgroundColor, sBackgroundColorIntensity))
VElement.AddAttr("color", VElement.BuildColor(sColor, sColorIntensity))
VElement.AddAttr(":dark", bDark)
VElement.AddAttr(":dense", bDense)
VElement.AddAttr(":disabled", sDisabled)
VElement.SetData(sDisabled, bDisabled)
VElement.AddAttr(":required", sRequired)
VElement.SetData(sRequired, bRequired)

VElement.AddAttr(":error", sError)
VElement.SetData(sError, False)

VElement.AddAttr("error-count", sErrorCount)
VElement.AddAttr(":error-messages", sErrorMessages)
VElement.SetData(sErrorMessages, VElement.newlist)

VElement.AddAttr("height", sHeight)
VElement.AddAttr(":hide-details", bHideDetails)
VElement.AddAttr("hint", sHint)
VElement.AddAttr(":inverse-label", bInverseLabel)
VElement.AddAttr("key", sKey)
VElement.AddAttr("label", sLabel)
VElement.AddAttr(":light", bLight)
VElement.AddAttr("loader-height", sLoaderHeight)
VElement.AddAttr(":loading", sLoading)
VElement.SetData(sLoading, bLoading)

VElement.AddAttr("max", sMaxValue)
VElement.AddAttr(":messages", sMessages)
VElement.SetData(sMessages, VElement.newlist)

VElement.AddAttr("min", sMinValue)
VElement.AddAttr(":persistent-hint", bPersistentHint)
VElement.AddAttr("prepend-icon", sPrependIcon)
VElement.AddAttr(":readonly", sReadonly)
VElement.SetData(sReadonly, bReadonly)

VElement.AddAttr(":rules", sRules)
VElement.SetData(sRules, VElement.newlist)

VElement.AddAttr("step", sStepValue)
VElement.AddAttr(":success", sSuccess)
VElement.SetData(sSuccess, False)

VElement.AddAttr(":success-messages", sSuccessMessages)
VElement.SetData(sSuccessMessages, VElement.newlist)

VElement.AddAttr("thumb-color", VElement.BuildColor(sThumbColor, sThumbColorIntensity))
VElement.AddAttr("thumb-label", sThumbLabel)
VElement.AddAttr("thumb-size", sThumbSize)
VElement.AddAttr(":tick-labels", sTickLabels)
VElement.SetData(sTickLabels, VElement.newlist)

VElement.AddAttr("tick-size", sTickSize)
VElement.AddAttr("ticks", sTicks)
VElement.AddAttr("track-color", VElement.BuildColor(sTrackColor, sTrackColorIntensity))
VElement.AddAttr("track-fill-color", VElement.BuildColor(sTrackFillColor, sTrackFillColorIntensity))
VElement.AddAttr("v-bind", sVBind)
VElement.AddAttr("v-for", sVFor)
VElement.AddAttr("v-if", sVIf)
VElement.AddAttr("v-model", sVModel)
VElement.SetData(sVModel, 10)

VElement.AddAttr("v-on", sVOn)
VElement.AddAttr("v-show", sVShow)
VElement.SetData(sVShow, Not(bHidden))
VElement.AddAttr(":validate-on-blur", bValidateOnBlur)
VElement.AddAttr(":vertical", bVertical)

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

Sub AddClass(s As String) As VSlider 
	VElement.AddClass(s) 
	Return Me 
End Sub

Sub AddAttr(p As String, v As Object) As VSlider 
	VElement.SetAttr(p, v) 
	Return Me 
End Sub

Sub AddStyle(p As String, v As String) As VSlider 
	VElement.AddStyle(p, v) 
	Return Me 
End Sub

Sub RemoveAttr(p As String) As VSlider 
	VElement.RemoveAttr(p) 
	Return Me 
End Sub

Sub UpdateVisible(VC As VueComponent, b As Boolean) As VSlider 
	VC.SetData(sVIf, b) 
	VC.SetData(sVShow, b) 
	Return Me 
End Sub



'Update Disabled
Sub UpdateDisabled(VC As VueComponent, vDisabled As Object)
VC.SetData(sDisabled, vDisabled)
End Sub

'Update Error
Sub UpdateError(VC As VueComponent, vError As Object)
VC.SetData(sError, vError)
End Sub

'Update ErrorMessages
Sub UpdateErrorMessages(VC As VueComponent, vErrorMessages As Object)
VC.SetData(sErrorMessages, vErrorMessages)
End Sub

'Clear ErrorMessages
Sub ClearErrorMessages(VC As VueComponent)
VC.SetData(sErrorMessages, VC.NewList)
End Sub

'Update Loading
Sub UpdateLoading(VC As VueComponent, vLoading As Object)
VC.SetData(sLoading, vLoading)
End Sub

'Update Messages
Sub UpdateMessages(VC As VueComponent, vMessages As Object)
VC.SetData(sMessages, vMessages)
End Sub

'Clear Messages
Sub ClearMessages(VC As VueComponent)
VC.SetData(sMessages, VC.NewList)
End Sub

'Update Readonly
Sub UpdateReadonly(VC As VueComponent, vReadonly As Object)
VC.SetData(sReadonly, vReadonly)
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

'Clear Rules
Sub ClearRules(VC As VueComponent)
VC.SetData(sRules, VC.NewList)
End Sub

'Update Success
Sub UpdateSuccess(VC As VueComponent, vSuccess As Object)
VC.SetData(sSuccess, vSuccess)
End Sub

'Update SuccessMessages
Sub UpdateSuccessMessages(VC As VueComponent, vSuccessMessages As Object)
VC.SetData(sSuccessMessages, vSuccessMessages)
End Sub

'Clear SuccessMessages
Sub ClearSuccessMessages(VC As VueComponent)
VC.SetData(sSuccessMessages, VC.NewList)
End Sub

'Update TickLabels
Sub UpdateTickLabels(VC As VueComponent, vTickLabels As Object)
VC.SetData(sTickLabels, vTickLabels)
End Sub

'Clear TickLabels
Sub ClearTickLabels(VC As VueComponent)
VC.SetData(sTickLabels, VC.NewList)
End Sub

'get value
Sub GetValue(VC As VueComponent) As Int
	Dim res As Int = VC.GetData(sVModel)
	Return res
End Sub

'Update value
Sub SetValue(VC As VueComponent, vVModel As Object)
	VC.SetData(sVModel, vVModel)
End Sub


Sub getVModel As String
	Return sVModel
End Sub
