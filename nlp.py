import cv2 
#import dlib 
#from scipy.spatial import distance
#from imutils import face_utils
from datetime import datetime
from time import sleep
import time
from threading import Thread
#from tensorflow.keras.applications.mobilenet_v2 import preprocess_input
#from tensorflow.keras.preprocessing.image import img_to_array
#from tensorflow.keras.models import load_model
#from imutils.video import VideoStream
import numpy as np
#import imutils
import os 
#import pyrebase
#from bson import json_util
#import json
import pyttsx3
import speech_recognition as sr 
import datetime
import pymongo

"""""
def SpeakText(command):
        engine = pyttsx3.init()
        engine.say(command)
        engine.runAndWait()

def msg_to_victim():
        engine = pyttsx3.init()
        engine.say("Kindly hold on!! All the necessary measures are being taken and you will receive the medical help within next 10 minutes from a nearby hospital!")
        engine.runAndWait()

def msg_to_victim_neg():
        engine = pyttsx3.init()
        engine.say("Alright. glad that you are safe")
        engine.runAndWait()
"""
text_speech = pyttsx3.init()
text_speech.say("Hello! This is Dexters.")
text_speech.runAndWait()
"""
r = sr.Recognizer()
cond = 1
while(cond):   
    try:
        with sr.Microphone() as source2:
            r.adjust_for_ambient_noise(source2, duration=0.6)
            audio2 = r.listen(source2)
            MyText = r.recognize_google(audio2)
            MyText = MyText.lower()
            #assist = ['ah','aahh','aaahhh','ahhh','ahh','aaah','aah','please','yes','help','need','yup','yeah','haan','haaa']
            assist = ['no','nope','not','nah','no need','not necessary','negative','never','fine','good']
            print("Victim: "+MyText)
            result = [ele for ele in assist if(ele in MyText)]
            T_OR_F = False
            VAL = ">>>>>VICTIM REQUIRES MEDICAL ASSISTANCE<<<<<"
            global nlpout 
            def nlpoutput():
                if(VAL==">>>>>VICTIM REQUIRES MEDICAL ASSISTANCE<<<<<") :
                    T_OR_F = True
                    SCORE2 = 1
                    return SCORE2
                else:
                    T_OR_F = False
                    SCORE2 = 3
                    return SCORE2
                print(T_OR_F)
            nlpout = nlpoutput()
            if(str(bool(result))!='True') :
                print(VAL)
                msg_to_victim()
                cond = 0
            else:
              msg_to_victim_neg()  
              cond = 0  
              print(T_OR_F)  
            #print(T_OR_F)   
    except sr.RequestError as e:
        print("Could not request results; {0}".format(e))     
    except sr.UnknownValueError:
        print("Listening . . .")
"""