#Instadroid.py for testing auto-post and scheduling post via python

#import
from InstagramAPI import InstagramAPI # Instagram API -> https://github.com/LevPasha/Instagram-API-python
from random import randint # random number for random picture
import schedule # Schedule -> https://github.com/dbader/schedule
import time
import os 

#login
usr = "jeruselam.github.io" # username
pwd = "20552055v!Vv"    # password
API = InstagramAPI(usr,pwd)
API.login() # login

#caption
caption = "•(8) Allah’ın nurunu ağızlarıyle söndürmek istiyorlar ve Allah nurunu tamamlayacaktır ve şayet kafirler hoşlanmasa da •61 Saff Sûresi••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••#instagramturkey #objektifimden #turkinstagram #aniyakala #turkishfollowers #istanbuldayasam #hayatakarken #zamanidurdur #allshotsturkey #fotografheryerde #gununkaresi #bir_dakika #gulumseaska #hayatandanibarettir #bugununkaresi #anlatistanbul #ig_turkey #photo_turkey #turkobjektif #benimkadrajim #severekcekiyoruz #turkey #anilarinisakla #fotogulumse #instasyon #ankara #izmir #bursa #antalya #adana "

def random_picture(): # we require you to rename your picture as number :3
     pic = randint(1,3288) # random number 1 - 3
     auto_post(pic)
     
def auto_post(pic):
    picname = str(pic)+".jpg" # picture name
    strcon = r'/picture' # concat picture directory
    def_path = os.getcwd()+strcon # get current directory
    photo_path = def_path+"/"+picname
    API.uploadPhoto(photo_path, caption)
    
schedule.every(59).minutes.do(random_picture) # every ? minutes
#schedule.every(4).hours.do(random_picture) # every ? hours

while True:
    schedule.run_pending() # waiting for schedule
    time.sleep(9) # countdown 1 second
