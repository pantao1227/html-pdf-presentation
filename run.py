from os import system as runcmd
import sys
import platform
import re

# This script can call chrome to print to PDF both on Windows and Linux.

# Environment
chrome_path_windows = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
chrome_cmd_linux = 'google-chrome-stable'
chrome_path_macos = '/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome'

# Preset
html_name = 'main1080p.html'
pdf_name = 'out.pdf'

# Arguments
argv_len = len(sys.argv)
if argv_len > 1:
    html_name = sys.argv[1]
if argv_len > 2:
    pdf_name = sys.argv[2]
if argv_len > 3:
    raise Exception('Too many arguments.')

# Arguments modify
matchObj = re.match(r'(\.(/|\\))(?P<name>.*)', html_name)
if matchObj:
    html_name = matchObj.group('name')

# Check arguments
if not re.match(r'[0-9a-zA-Z_\.]+\.html', html_name):
    raise Exception('Invalid html file path.')
if not re.match(r'[0-9a-zA-Z_\.]+\.pdf', pdf_name):
    raise Exception('Invalid pdf file name.')

if(platform.system() == 'Windows'):
    print('html file: {}\npdf file: {}'.format(html_name, pdf_name))
    runcmd('"{}" --enable-logging --headless --disable-gpu --print-to-pdf=%CD%\\{} %CD%\\{} --print-to-pdf-no-header'\
        .format(chrome_path_windows, pdf_name, html_name))
elif(platform.system() == 'Linux'):
    runcmd('{} --headless --disable-gpu --print-to-pdf={} {} --print-to-pdf-no-header'.format(chrome_cmd_linux, pdf_name, html_name))
elif(platform.system() == 'Darwin'):
    runcmd('{} --headless --disable-gpu --print-to-pdf={} {} --print-to-pdf-no-headr'.format(chrome_path_macos, pdf_name, html_name))
else:
    raise Exception('Unsupported platform')
