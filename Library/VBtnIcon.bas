﻿B4J=true
Group=Default Group
ModulesStructureVersion=1
Type=Class
Version=9.1
@EndOfDesignText@
#IgnoreWarnings:12

'Custom BANano View class
#Event: Click (item As String)

' Properties that will be show in the ABStract Designer.  They will be passed in the props map in DesignerCreateView (Case Sensitive!)
#DesignerProperty: Key: AutoID, DisplayName: Auto ID/Name, FieldType: Boolean, DefaultValue: False, Description: Overrides the ID/Name with a random string.
#DesignerProperty: Key: Raised, DisplayName: Raised/Text, FieldType: Boolean, DefaultValue: True, Description: Transparent Background Off
#DesignerProperty: Key: Size, DisplayName: Size, FieldType: String, DefaultValue: normal, Description: Size, List: x-small|small|normal|large|x-large
#DesignerProperty: Key: FAB, DisplayName: FAB, FieldType: Boolean, DefaultValue: False, Description: FAB
#DesignerProperty: Key: IconName, DisplayName: Icon Name, FieldType: String, DefaultValue: , Description: Icon Name
#DesignerProperty: Key: IconDark, DisplayName: Icon Dark, FieldType: Boolean, DefaultValue: False, Description: Icon Dark
#DesignerProperty: Key: IconSize, DisplayName: Icon Size, FieldType: String, DefaultValue: , Description: Icon Size
#DesignerProperty: Key: IconColor, DisplayName: Icon Color, FieldType: String, DefaultValue: , Description: Icon Color

#DesignerProperty: Key: Disabled, DisplayName: Disabled, FieldType: Boolean, DefaultValue: False, Description: Disabled
#DesignerProperty: Key: Hidden, DisplayName: Hidden, FieldType: Boolean, DefaultValue: False, Description: Hidden
#DesignerProperty: Key: Loading, DisplayName: Loading, FieldType: Boolean, DefaultValue: False, Description: Loading
'
#DesignerProperty: Key: Color, DisplayName: Color, FieldType: String, DefaultValue:  , Description: , List: amber|black|blue|blue-grey|brown|cyan|deep-orange|deep-purple|green|grey|indigo|light-blue|light-green|lime|orange|pink|purple|red|teal|transparent|white|yellow|primary|secondary|accent|error|info|success|warning|none
#DesignerProperty: Key: ColorIntensity, DisplayName: Color Intensity, FieldType: String, DefaultValue:  normal, Description: , List: normal|lighten-5|lighten-4|lighten-3|lighten-2|lighten-1|darken-1|darken-2|darken-3|darken-4|accent-1|accent-2|accent-3|accent-4
#DesignerProperty: Key: TextColor, DisplayName: Text Color, FieldType: String, DefaultValue:  , Description: , List: amber|black|blue|blue-grey|brown|cyan|deep-orange|deep-purple|green|grey|indigo|light-blue|light-green|lime|orange|pink|purple|red|teal|transparent|white|yellow|primary|secondary|accent|error|info|success|warning|none
#DesignerProperty: Key: TextColorIntensity, DisplayName: Text Color Intensity, FieldType: String, DefaultValue:  normal, Description: , List: normal|lighten-5|lighten-4|lighten-3|lighten-2|lighten-1|darken-1|darken-2|darken-3|darken-4|accent-1|accent-2|accent-3|accent-4
#DesignerProperty: Key: Absolute, DisplayName: Absolute, FieldType: Boolean, DefaultValue: False, Description: Absolute
#DesignerProperty: Key: Position, DisplayName: Position, FieldType: String, DefaultValue: , Description: Position, List: normal|top-left|top-right|bottom-left|bottom-right
#DesignerProperty: Key: Dark, DisplayName: Dark, FieldType: Boolean, DefaultValue: False, Description: Dark
#DesignerProperty: Key: Depressed, DisplayName: Depressed, FieldType: Boolean, DefaultValue: False, Description: Depressed
#DesignerProperty: Key: HREF, DisplayName: HREF, FieldType: String, DefaultValue: , Description: HREF
#DesignerProperty: Key: To, DisplayName: To, FieldType: String, DefaultValue: , Description: To
#DesignerProperty: Key: Target, DisplayName: Target, FieldType: String, DefaultValue: , Description: Target, List: _blank|_self|_parent|_top|none
#DesignerProperty: Key: Outlined, DisplayName: Outlined, FieldType: Boolean, DefaultValue: False, Description: Outlined

#DesignerProperty: Key: ItemType, DisplayName: ItemType, FieldType: String, DefaultValue:  none, Description: Item Type, List: button|fab|icon-right|icon-left|none
#DesignerProperty: Key: ItemKeys, DisplayName: Item Keys (;), FieldType: String, DefaultValue:  add; edit; delete, Description: Item Icons
#DesignerProperty: Key: ItemIcons, DisplayName: Item Icons (;), FieldType: String, DefaultValue:  mdi-plus; mdi-pencil; mdi-delete, Description: Item Icons
#DesignerProperty: Key: ItemColors, DisplayName: Item Colors (;), FieldType: String, DefaultValue:  green; amber; red, Description: Item Colors
#DesignerProperty: Key: ItemTexts, DisplayName: Item Texts (;), FieldType: String, DefaultValue:  Add; Edit; Delete, Description: Item Texts

#DesignerProperty: Key: Classes, DisplayName: Classes, FieldType: String, DefaultValue: , Description: Classes added to the HTML tag.
#DesignerProperty: Key: Styles, DisplayName: Styles, FieldType: String, DefaultValue: , Description: Styles added to the HTML tag. Must be a json String, use =
#DesignerProperty: Key: Attributes, DisplayName: Attributes, FieldType: String, DefaultValue: , Description: Attributes added to the HTML tag. Must be a json String, use =
#DesignerProperty: Key: VIf, DisplayName: V-If, FieldType: String, DefaultValue:  , Description: 

Sub Class_Globals
    Private BANano As BANano 'ignore
	Private mName As String 'ignore
	Private mEventName As String 'ignore
	Private mCallBack As Object 'ignore
	Private mTarget As BANanoElement 'ignore
	Private mElement As BANanoElement 'ignore
	Private mClasses As String
	Private mColor As String
	Private mStyles As String
	Private mAttributes As String
	Public VElement As VueElement
	Private mVShow As String
	Private mVIf As String
	Private mTextColor As String
	Private mTextColorIntensity As String
	Private mColorIntensity As String
	Private bDark As Boolean
	Private bDepressed As Boolean
	Private bDisabled As Boolean
	Private bFAB As Boolean
	Private sHREF As String
	Private sIconAlignment As String   'ignore
	Private bIconDark As Boolean
	Private sIconName As String
	Private bLoading As Boolean
	Private bOutlined As Boolean
	Private bRaised As Boolean
	Private sSize As String
	Private sTarget As String
	Private bTile As Boolean
	Private sTo As String
	Private bAbsolute As Boolean
	Private sPosition As String
	Private xColor As String
	Private xLoading As String
	Private xDisabled As String
	Private bHidden As Boolean
	Private sIconSize As String
	Private sIconColor As String
	Private xitems As List
	Private sItemKeys As String
	Private sItemIcons As String
	Private itemname As String
	Private sItemType As String 
	Private sButtons As String     'ignore
	Private sItemTexts As String
	Private sItemColors As String
	Private bHasButtons As Boolean
End Sub

Public Sub Initialize (CallBack As Object, Name As String, EventName As String)
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
	xColor = $"${mName}color"$
	xLoading = $"${mName}loading"$
	xDisabled  = $"${mName}disabled"$
	mVShow = $"${mName}show"$
	xitems.Initialize 
	itemname = $"${mName}items"$
	bHasButtons = False
End Sub

' this is the place where you create the view in html and run initialize javascript
Public Sub DesignerCreateView (Target As BANanoElement, Props As Map)
	mTarget = Target
	If Props <> Null Then
		mClasses = Props.Get("Classes")
		mColor = Props.Get("Color")
		mStyles = Props.Get("Styles")
		mAttributes = Props.Get("Attributes")
		mColorIntensity = Props.Get("ColorIntensity")
		mTextColor = Props.Get("TextColor")
		mTextColorIntensity = Props.Get("TextColorIntensity")
		mVIf = Props.Get("VIf")
		bHidden = Props.GetDefault("Hidden", False)
		bHidden = BANanoShared.parseBool(bHidden)
		bDark = Props.Get("Dark")
		bDepressed = Props.Get("Depressed")
		bDisabled = Props.GetDefault("Disabled",False)
		bDisabled = BANanoShared.parseBool(bDisabled)
		bFAB = Props.Get("FAB")
		sHREF = Props.Get("HREF")
		sIconAlignment = Props.Get("IconAlignment")
		bIconDark = Props.Get("IconDark")
		sIconName = Props.Get("IconName")
		bLoading = Props.GetDefault("Loading", False)
		bLoading = BANanoShared.parseBool(bLoading)
		bOutlined = Props.Get("Outlined")
		bRaised = Props.Get("Raised")
		sSize = Props.Get("Size")
		sTarget = Props.Get("Target")
		bTile = Props.Get("Tile")
		sTo = Props.Get("To")
		bAbsolute = Props.Get("Absolute")
		sPosition = Props.Get("Position")
		sIconSize = Props.GetDefault("IconSize", "")
		sIconColor = Props.GetDefault("IconColor", "")
		sItemKeys = Props.GetDefault("ItemKeys","")
		sItemIcons = Props.GetDefault("ItemIcons","")
		sItemColors = Props.GetDefault("ItemColors","")
		sItemType = Props.GetDefault("ItemType", "none")
		sItemTexts = Props.GetDefault("ItemTexts", "")
	End If
	'
	bDark = BANanoShared.parseBool(bDark)
	bDepressed = BANanoShared.parseBool(bDepressed)
	bFAB = BANanoShared.parseBool(bFAB)
	bIconDark = BANanoShared.parseBool(bIconDark)
	bOutlined = BANanoShared.parseBool(bOutlined)
	bRaised = BANanoShared.parseBool(bRaised)
	bTile = BANanoShared.parseBool(bTile)
	bAbsolute = BANanoShared.parseBool(bAbsolute)
'	
	sItemKeys = sItemKeys.Replace(",", ";")
	sItemIcons = sItemIcons.Replace(",", ";")
	sItemColors = sItemColors.Replace(",", ";")
	sItemTexts = sItemTexts.Replace(",", ";")
	
	Dim xkeys As List = BANanoShared.StrParse(";", sItemKeys)
	Dim xicons As List = BANanoShared.StrParse(";", sItemIcons)
	Dim xcolors As List = BANanoShared.StrParse(";", sItemColors)
	Dim xtexts As List = BANanoShared.StrParse(";", sItemTexts)
		'
	xkeys = BANanoShared.ListTrimItems(xkeys)
	xicons = BANanoShared.ListTrimItems(xicons)
	xcolors = BANanoShared.ListTrimItems(xcolors)
		'
	Dim tItems As Int = xkeys.Size - 1
	For itemCnt = 0 To tItems
		Dim iKey As String = xkeys.Get(itemCnt)
		Dim iIco As String = xicons.Get(itemCnt)
		Dim iCol As String = xcolors.Get(itemCnt)
		Dim iTxt As String = xtexts.Get(itemCnt)
		'
		Dim nm As Map = CreateMap()
		nm.Put("id", iKey)
		nm.Put("icon", iIco)
		nm.Put("color", iCol)
		nm.Put("text", iTxt)
		xitems.Add(nm)
	Next
	bHasButtons = False
	If tItems >= 0 Then
		bHasButtons = True
	End If
	If sItemType = "none" Then
		bHasButtons = False	
	End If
	
	'build and get the element
	If BANano.Exists($"#${mName}"$) Then
		mElement = BANano.GetElement($"#${mName}"$)
	Else
		If bHasButtons = False Then
			mElement = mTarget.Append($"<v-btn ref="${mName}" id="${mName}"><v-icon id="${mName}icon"></v-icon></v-btn>"$).Get("#" & mName)
		Else	
			mElement = mTarget.Append($"<v-btn ref="${mName}" id="${mName}" v-for="item in ${mName}items" :key="item.id" :color="item.color"></v-btn>"$).Get("#" & mName)
		End If
	End If
		
	VElement.Initialize(mCallBack, mName, mName)
	VElement.TagName = "v-btn"
	
	If bHasButtons Then
		Dim siconID As String = $"${mName}icon"$
		Select Case sItemType
		Case "button"
			VElement.Caption = "{{ item.text }}"
		Case "fab"
			VElement.Fab = True
			VElement.Append($"<v-icon id="${siconID}">{{ item.icon }}</v-icon>"$)
			VElement.GetIcon.Dark = bIconDark
			VElement.GetIcon.Size = sIconSize
		Case "icon-left"
			VElement.Append($"<v-icon id="${siconID}">{{ item.icon }}</v-icon>"$)
			VElement.GetIcon.Left = True
			VElement.Append($"<span>{{ item.text }}</span>"$)
			VElement.GetIcon.Dark = bIconDark
			VElement.GetIcon.Size = sIconSize
		Case "icon-right"
			VElement.Append($"<span>{{ item.text }}</span>"$)
			VElement.Append($"<v-icon id="${siconID}">{{ item.icon }}</v-icon>"$)
			VElement.GetIcon.Right = True
			VElement.GetIcon.Dark = bIconDark
			VElement.GetIcon.Size = sIconSize
		End Select
		VElement.SetData(itemname, xitems)
	Else
		VElement.GetIcon.Color = sIconColor
		VElement.GetIcon.Caption = sIconName
		VElement.GetIcon.Dark = bIconDark
		VElement.GetIcon.Size = sIconSize
		mColor = VElement.BuildColor(mColor, mColorIntensity)
		VElement.Bind("color", xColor)
		VElement.SetData(xColor, mColor)
	End If
	
	VElement.Classes = mClasses
	VElement.Styles = mStyles
	VElement.Attributes = mAttributes	
	VElement.TextColor = mTextColor
	VElement.TextColorIntensity  = mTextColorIntensity
	VElement.VIf = mVIf
	VElement.VShow = mVShow
	VElement.SetData(mVShow, Not(bHidden))
	VElement.Dark = bDark
	VElement.Depressed = bDepressed
	VElement.Disabled = xDisabled
	VElement.SetData(xDisabled, bDisabled)
	VElement.FAB = bFAB
	VElement.HREF = sHREF
	VElement.Loading = xLoading
	VElement.SetData(xLoading, bLoading)
	VElement.Outlined = bOutlined
	VElement.Raised = bRaised
	VElement.Target = sTarget
	VElement.Tile = bTile
	VElement.To = sTo
	VElement.Absolute = bAbsolute
	Select Case sPosition
	Case "normal"
	Case "top-left"
		VElement.Top = True
		VElement.Left = True
	Case "top-right"
		VElement.Top = True
		VElement.Right = True
	Case "bottom-left"
		VElement.Bottom = True
		VElement.Left = True
	Case "bottom-right"
		VElement.Bottom = True
		VElement.Right = True
	End Select
	'
	Select Case sSize
	Case "x-small"
		VElement.XSmall = True
	Case "small"
		VElement.Small = True
	Case "large"
		VElement.Large = True
	Case "x-large"	
		VElement.XLarge = True
	End Select
	
	'set icon options	
	VElement.BindAllEvents
	If bHasButtons Then
		VElement.SetOnEvent(mCallBack, "click", "item.id")
	End If
End Sub

'clear the items
Sub Clear(VC As VueComponent)
	xitems.Initialize 
	VC.SetData(itemname, xitems)
End Sub

'add an item
Sub AddItem(iID As String, iIcon As String, iColor As String, iText As String)
	Dim nm As Map = CreateMap()
	nm.Put("id", iID)
	nm.Put("icon", iIcon)
	nm.Put("color", iColor)
	nm.Put("text", iText)
	xitems.Add(nm)
End Sub

'refresh the items
Sub Refresh(VC As VueComponent)
	VC.SetData(itemname, xitems)
End Sub

'return html of the element
Sub getHTML As String
	If mElement <> Null Then
		Return mElement.GetHTML
	Else
		Return ""
	End If
End Sub

'update the color of the button
Sub UpdateColor(VC As VueComponent, s As String)
	VC.SetData(xColor, S)
End Sub

Sub UpdateColorOnApp(VC As VuetifyApp, s As String)
	VC.SetData(xColor, S)
End Sub

'update the loading state of the button
Sub UpdateLoading(VC As VueComponent, b As Boolean)
	VC.SetData(xLoading, b)
End Sub

Sub UpdateLoadingOnApp(VC As VuetifyApp, b As Boolean)
	VC.SetData(xLoading, b)
End Sub

'update the disabled state of the button
Sub UpdateDisabled(VC As VueComponent, b As Boolean)
	VC.SetData(xDisabled, b)
End Sub

Sub UpdateDisabledOnApp(VC As VuetifyApp, b As Boolean)
	VC.SetData(xDisabled, b)
End Sub

'add to parent
public Sub AddToParent(targetID As String)
	mTarget = BANano.GetElement("#" & targetID.ToLowerCase)
	DesignerCreateView(mTarget, Null)
End Sub

'remove the element
public Sub Remove()
	mElement.Remove
	BANano.SetMeToNull
End Sub

'add a class
Sub AddClass(s As String)
	VElement.AddClass(s)
End Sub

'add an attribute
Sub AddAttr(p As String, v As Object)
	VElement.SetAttr(p, v)
End Sub

'add a style
Sub AddStyle(p As String, v As String)
	VElement.AddStyle(p, v)
End Sub

'remove an attribute
Sub RemoveAttr(p As String)
	VElement.RemoveAttr(p)
End Sub

'change visibility of the button
Sub UpdateVisible(VC As VueComponent, b As Boolean)
	VC.SetData(mVIf, b)
	VC.SetData(mVShow, b)
End Sub

Sub UpdateVisibleOnApp(VC As VuetifyApp, b As Boolean)
	VC.SetData(mVIf, b)
	VC.SetData(mVShow, b)
End Sub

'get the id of the button
Sub getID As String
	Return mName
End Sub

'get the element name
Sub getHere As String
	Return $"#${mName}"$
End Sub

Sub BindState(VC As VueComponent)
	Dim mbindings As Map = VElement.bindings
	Dim mmethods As Map = VElement.methods
	'apply the binding for the control
	For Each k As String In mbindings.Keys
		Dim v As Object = mbindings.Get(k)
		Select Case k
		Case "key"
		Case Else
			VC.SetData(k, v)
		End Select
	Next
	'apply the events
	For Each k As String In mmethods.Keys
		Dim cb As BANanoObject = mmethods.Get(k)
		VC.SetCallBack(k, cb)
	Next
End Sub

Sub HiddenXSOnly
	AddClass("hidden-xs-only")
End Sub

Sub HiddenSMOnly
	AddClass("hidden-sm-only")
End Sub
	
Sub HiddenMDOnly
	AddClass("hidden-md-only")
End Sub
	
Sub HiddenLGOnly
	AddClass("hidden-lg-only")
End Sub
	
Sub HiddenXLOnly
	AddClass("hidden-xl-only")
End Sub
'
Sub HiddenXSAndDown
	AddClass("hidden-xs-and-down")
End Sub

Sub HiddenSMAndDown
	AddClass("hidden-sm-and-down")
End Sub
	
Sub HiddenMDAndDown
	AddClass("hidden-md-and-down")
End Sub
	
Sub HiddenLGAndDown
	AddClass("hidden-lg-and-down")
End Sub
	
Sub HiddenXLAndDown
	AddClass("hidden-xl-and-down")
End Sub
'
Sub HiddenXSAndUp
	AddClass("hidden-xs-and-up")
End Sub

Sub HiddenSMAndUp
	AddClass("hidden-sm-and-up")
End Sub
	
Sub HiddenMDAndUp
	AddClass("hidden-md-and-up")
End Sub
	
Sub HiddenLGAndUp
	AddClass("hidden-lg-and-up")
End Sub
	
Sub HiddenXLAndUp
	AddClass("hidden-xl-and-up")
End Sub	

Sub HideOnAll
	AddClass("d-none")
End Sub

Sub HideOnlyOnXS
	AddClass("d-none d-sm-flex")
End Sub

Sub HideOnlyOnSM
	AddClass("d-sm-none d-md-flex")
End Sub

Sub HideOnlyOnMD
	AddClass("d-md-none d-lg-flex")
End Sub

Sub HideOnlyOnLG
	AddClass("d-lg-none d-xl-flex")
End Sub

Sub HideOnlyOnXL
	AddClass("d-xl-none")
End Sub

Sub VisibleOnAll
	AddClass("d-flex")
End Sub

Sub VisibleOnlyOnXS
	AddClass("d-flex d-sm-none")
End Sub

Sub VisibleOnlyOnSM
	AddClass("d-none d-sm-flex d-md-none")
End Sub

Sub VisibleOnlyOnMD
	AddClass("d-none d-md-flex d-lg-none")
End Sub

Sub VisibleOnlyOnLG
	AddClass("d-none d-lg-flex d-xl-none")
End Sub

Sub VisibleOnlyOnXL
	AddClass("d-none d-xl-flex")
End Sub