
# customer key file
```python
#/usr/bin/env python3
import os, sys, zipfile

VariantBase64Table = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
VariantBase64Dict = { i : VariantBase64Table[i] for i in range(len(VariantBase64Table)) }
VariantBase64ReverseDict = { VariantBase64Table[i] : i for i in range(len(VariantBase64Table)) }

def VariantBase64Encode(bs : bytes):
    result = b''
    blocks_count, left_bytes = divmod(len(bs), 3)

    for i in range(blocks_count):
        coding_int = int.from_bytes(bs[3 * i:3 * i + 3], 'little')
        block = VariantBase64Dict[coding_int & 0x3f]
        block += VariantBase64Dict[(coding_int >> 6) & 0x3f]
        block += VariantBase64Dict[(coding_int >> 12) & 0x3f]
        block += VariantBase64Dict[(coding_int >> 18) & 0x3f]
        result += block.encode()

    if left_bytes == 0:
        return result
    elif left_bytes == 1:
        coding_int = int.from_bytes(bs[3 * blocks_count:], 'little')
        block = VariantBase64Dict[coding_int & 0x3f]
        block += VariantBase64Dict[(coding_int >> 6) & 0x3f]
        result += block.encode()
        return result
    else:
        coding_int = int.from_bytes(bs[3 * blocks_count:], 'little')
        block = VariantBase64Dict[coding_int & 0x3f]
        block += VariantBase64Dict[(coding_int >> 6) & 0x3f]
        block += VariantBase64Dict[(coding_int >> 12) & 0x3f]
        result += block.encode()
        return result

def VariantBase64Decode(s : str):
    result = b''
    blocks_count, left_bytes = divmod(len(s), 4)

    for i in range(blocks_count):
        block = VariantBase64ReverseDict[s[4 * i]]
        block += VariantBase64ReverseDict[s[4 * i + 1]] << 6
        block += VariantBase64ReverseDict[s[4 * i + 2]] << 12
        block += VariantBase64ReverseDict[s[4 * i + 3]] << 18
        result += block.to_bytes(3, 'little')

    if left_bytes == 0:
        return result
    elif left_bytes == 2:
        block = VariantBase64ReverseDict[s[4 * blocks_count]]
        block += VariantBase64ReverseDict[s[4 * blocks_count + 1]] << 6
        result += block.to_bytes(1, 'little')
        return result
    elif left_bytes == 3:
        block = VariantBase64ReverseDict[s[4 * blocks_count]]
        block += VariantBase64ReverseDict[s[4 * blocks_count + 1]] << 6
        block += VariantBase64ReverseDict[s[4 * blocks_count + 2]] << 12
        result += block.to_bytes(2, 'little')
        return result
    else:
        raise ValueError('Invalid encoding.')

def EncryptBytes(key : int, bs : bytes):
    result = bytearray()
    for i in range(len(bs)):
        result.append(bs[i] ^ ((key >> 8) & 0xff))
        key = result[-1] & key | 0x482D
    return bytes(result)

def DecryptBytes(key : int, bs : bytes):
    result = bytearray()
    for i in range(len(bs)):
        result.append(bs[i] ^ ((key >> 8) & 0xff))
        key = bs[i] & key | 0x482D
    return bytes(result)

class LicenseType:
    Professional = 1
    Educational = 3
    Persional = 4

def GenerateLicense(Type : LicenseType, Count : int, UserName : str, MajorVersion : int, MinorVersion):
    assert(Count >= 0)
    LicenseString = '%d#%s|%d%d#%d#%d3%d6%d#%d#%d#%d#' % (Type, 
                                                          UserName, MajorVersion, MinorVersion, 
                                                          Count, 
                                                          MajorVersion, MinorVersion, MinorVersion,
                                                          0,    # Unknown
                                                          0,    # No Games flag. 0 means "NoGames = false". But it does not work.
                                                          0)    # No Plugins flag. 0 means "NoPlugins = false". But it does not work.
    EncodedLicenseString = VariantBase64Encode(EncryptBytes(0x787, LicenseString.encode())).decode()
    with zipfile.ZipFile('Custom.mxtpro', 'w') as f:
        f.writestr('Pro.key', data = EncodedLicenseString)

def help():
    print('Usage:')
    print('    MobaXterm.py <UserName> <Version>')
    print()
    print('    <UserName>:      The Name licensed to')
    print('    <Version>:       The Version of MobaXterm')
    print('                     Example:    20.2')
    print()

if __name__ == '__main__':
    if len(sys.argv) != 3:
        help()
        exit(0)
    else:
        MajorVersion, MinorVersion = sys.argv[2].split('.')[0:2]
        MajorVersion = int(MajorVersion)
        MinorVersion = int(MinorVersion)
        GenerateLicense(LicenseType.Professional, 
                        1,
                        sys.argv[1], 
                        MajorVersion, 
                        MinorVersion)
        print('[*] Success!')
        print('[*] File generated: %s' % os.path.join(os.getcwd(), 'Custom.mxtpro'))
        print('[*] Please move or copy the newly-generated file to MobaXterm\'s installation path.')
        print()
else:
    print('[*] ERROR: Please run this script directly')
```

# custom configuration
```
[Misc]
PasswordsInRegistry=1
SlashDir=_MyDocuments_\MobaXterm\slash
HomeDir=_MyDocuments_\MobaXterm\home
PuTTYSessionsAlreadyImported=1
DefTextEditor=<MobaTextEditor>
StorePasswords=Always
StoreSSHKeysPassphrases=1
BackupIni=1
LogTerminalActivity=0
LogType=0
DefaultShell=0
LogFolder=
SkinSat=36
XAuto=0
XKeepAlive=1
BackspaceSendsBS=1
BSisBS=1
BoldAsFont=0
WinPath=0
ConfirmExit=0
RightClickAction=0
Scrollbar=1
PromptType=2
TrackTermActivity=1
WarnBeforePasteMultipleLines=0
LocalTerminal64Bits=0
BellType=0
TransTerm=0
TransDetachedTabs=0
X11SharedClipboard2=1
X11OpenGL=0
X11DisplayMode=0
X11AccessControl2=0
X11DisplayOffset=0
X11ScreenNumber=1
X11Keyboard=0
X11DpiMode=stretched
X11Version=MobaX
DefaultHome=<Home (pinned)>
DefaultNewTab=<Terminal>
ReplaceHomeTab=1
NoTabClose=0
AllowMultiInstances=0
WhenToPromptForMasterPassword=0
RightClickAssigned=1
TermSaveToTxt=0

[Display]
SidebarRight=1
C10Checked=1
C11Checked=0
C12Checked=1
C13Checked=0
C14Checked=0
VisibleTabNum=0
VisibleTabClose=1
MenuAndButtons=1
BtnType2=0
DisableQuickConnect=1
CustomDPI_1920_96=0
IconsTheme=0
RoundedTabs=1
GraphicCache=0
CustomDPI_1920_120=0

[SSH]
SFTPShowDotFiles=1
SFTPAsciiMode=0
UseInternalMobAgent=0
UseExternalPageant=1
ForwardSSHAgentDep=1
MobAgentKeys=
SSHCompression=1
X11Forwarding=0
DisplaySSHBanner=1
StrictHostKeyChecking=0
StrippedDownAlgoList2=1
GwUse2factor=0
AutoStartSSHGUI=0
SSHKeepAlive2=0
EnableSFTP=0
RemoteMonitoring=0
ScpPreservesDates=0
UseGSSAPI=1
KrbDomain=
GSSAPICustomLib=
GSSAPILibNumber=0
DefaultLoginName=

[Font]
Font2=Cascadia Code
FontIsBold2=0
FontHeight2=11
FontCharset2=0
FontQuality2=3
Charset2=UTF-8

[Colors]
DefaultColorScheme=1
Black=0,0,0
BoldBlack=68,68,68
Red=255,0,0
BoldRed=160,0,0
Green=0,128,0
BoldGreen=0,170,0
Yellow=183,183,2
BoldYellow=199,199,1
Blue=47,47,255
BoldBlue=0,0,170
Magenta=204,1,204
BoldMagenta=170,0,170
Cyan=1,202,202
BoldCyan=0,170,170
White=128,128,128
BoldWhite=170,170,170
ForegroundColour=68,68,68
BackgroundColour=224,241,226
CursorColour=255,0,0
SyntaxType=0

[Cursor]
CursorType=0
CursorBlinks=0

[PopupConsole]
Transparency=16
Size=36
Sizeable=0
Position=3
TryToOpenInExplorerFolder=1
BackgroundInsteadOfClose=0

[X11Extension]
Composite=1
DAMAGE=1
RANDR=1
XFIXES=1
XTEST=1
XINERAMA=1

[EditorWindowPos]
Left=0
Top=0
Width=1920
Height=1040
Maximized=0
MonitorCount=2

[TopToolbarBtns]
Btn0=Session
Btn1=Sessions
Btn2=Duplicate
Btn3=View
Btn4=Split
Btn5=Find
Btn6=Macro
Btn7=Settings
Btn8=X server
Btn9=Games
Btn10=Exit

[HotKeys]
Previous tab=Alt + LEFT
Next tab=Alt + RIGHT
Find in terminal=Alt + F

[Bookmarks]
SubRep=
ImgNum=42

[Bookmarks_1]
SubRep=FTP
ImgNum=41
200 Server=#130#6%135.242.61.200%21%[isamv]%-1%%0%0%0%0%%21%%%0%0%-1%0%0%0%#Cascadia Code%11%0%0%0%15%68,68,68%204,232,207%255,0,0%0%-1%0%%xterm%-1%-1%_Std_Colors_0_%80%24%0%0%-1%<none>%%0#0# #-1
sharefolder=#130#6%135.252.37.104%21%[isamv]%-1%%0%0%0%0%%21%%%0%0%-1%0%0%0%#Cascadia Code%11%0%0%0%15%68,68,68%204,232,207%255,0,0%0%-1%0%%xterm%-1%-1%_Std_Colors_0_%80%24%0%0%-1%<none>%%0#0# #-1

[Bookmarks_2]
SubRep=SSH
ImgNum=41
FN02=#109#0%172.24.213.162%22%[barretr]%%0%-1%%%22%%0%0%0%_CurrentDrive_:\N-20L6PF1PYK28-Data\barretr\Documents\private.ppk%%-1%0%0%0%%1080%%0%0%1#Cascadia Code%11%0%0%0%15%68,68,68%204,232,207%255,0,0%0%-1%0%%xterm%-1%-1%_Std_Colors_0_%80%24%0%0%-1%<none>%%0#0# #-1
FN02 with X11=#109#0%172.24.213.162%22%[barretr]%%-1%-1%%%22%%0%0%0%_CurrentDrive_:\N-20L6PF1PYK28-Data\barretr\Documents\private.ppk%%-1%0%0%0%%1080%%0%0%1#Cascadia Code%11%0%0%0%15%68,68,68%204,232,207%255,0,0%0%-1%0%%xterm%-1%-1%_Std_Colors_0_%80%24%0%0%-1%<none>%%0#0# #-1
QD01=#109#0%135.252.28.155%22%[barretr]%%0%-1%%%22%%0%0%0%_CurrentDrive_:\N-20L6PF1PYK28-Data\barretr\Documents\private.ppk%%-1%0%0%0%%1080%%0%0%1#Cascadia Code%11%0%0%0%15%68,68,68%204,232,207%255,0,0%0%-1%0%%xterm%-1%-1%_Std_Colors_0_%80%24%0%0%-1%<none>%%0#0# #16744448
QD01  X11=#109#0%135.252.28.155%22%[barretr]%%-1%-1%%%22%%0%0%0%_CurrentDrive_:\N-20L6PF1PYK28-Data\barretr\Documents\private.ppk%%-1%0%0%0%%1080%%0%0%1#Cascadia Code%11%0%0%0%15%68,68,68%204,232,207%255,0,0%0%-1%0%%xterm%-1%-1%_Std_Colors_0_%80%24%0%0%-1%<none>%%0#0# #-1
QD02=#109#0%135.252.28.156%22%[barretr]%%0%-1%%%22%%0%0%0%_CurrentDrive_:\N-20L6PF1PYK28-Data\barretr\Documents\private.ppk%%-1%0%0%0%%1080%%0%0%1#Cascadia Code%11%0%0%0%15%68,68,68%204,232,207%255,0,0%0%-1%0%%xterm%-1%-1%_Std_Colors_0_%80%24%0%0%-1%<none>%%0#0# #-1

[Bookmarks_3]
SubRep=Telnet
ImgNum=41
Rab craft=#98#1%135.252.37.100%2016%%%0%%22%%%0%0%%1080%#Cascadia Code%11%0%0%0%15%68,68,68%204,232,207%255,0,0%0%-1%0%%xterm%-1%-1%_Std_Colors_0_%80%24%0%0%-1%<none>%%0#0# #8421440
Rabbit=#98#1%10.254.0.31%23%isadmin%%0%%22%%%0%0%%1080%#Cascadia Code%11%0%0%0%15%68,68,68%204,232,207%255,0,0%0%-1%0%%xterm%-1%-1%_Std_Colors_0_%80%24%0%0%-1%<none>%%0#0# #8421440
```

# source insight exe
```bash
55 8B EC 83 E4 F8 81 EC 68 09 00 00 53 55 56 57 改为
B8 01 00 00 00 C3 81 EC 68 09 00 00 53 55 56 57

即: 55 8B EC 83 E4 F8 => B8 01 00 00 00 C3
```
