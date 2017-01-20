from subprocess import Popen, PIPE
import sys, time

alt_down = 'keydown Alt_L\n'
alt_up = 'keyup Alt_L\n'
ctrl_down = 'keydown Control_L\n'
ctrl_up = 'keyup Control_L\n'
shift_down = 'keydown Shift_L\n'
shift_up = 'keyup Shift_L\n'
def alt(seq):
    return alt_down + seq + alt_up
def ctrl(seq):
    return ctrl_down + seq + ctrl_up
def enter(seq):
    return seq + key('Return')
def key(key):
    return 'key %s\n'%(key)
def shift(seq):
    return shift_down + seq + shift_up
def keypress(sequence):
    p = Popen(['xte'], stdin=PIPE)
    p.communicate(input=sequence)
    time.sleep(0.2)

special = {'.':key('period'),',':key('comma'), '!':shift(key('exclam')), ':': shift(key('colon')), ')': shift(key('parenright')), '(': shift(key('parenleft')), '/': key('slash')}
def keystring(keys):
    sequence = ''
    print keys
    for _key in keys:
        if _key in special:
            sequence += special[_key]
        else:
            sequence += key(_key)
    return sequence
