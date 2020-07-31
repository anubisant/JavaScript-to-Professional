# #Ner, Khuis, Nas, Songuuli ugukh uu?
# sanal_asuulgiin_ur_dun=[['Алимаа', 'эм', '23', 'Тийм'],['Болд', 'эр', '19', ''],['Навчаа', 'эм', '', 'Үгүй']]
# tseverlesen_ur_dun = []

# for neg_khunii_ur_dun in sanal_asuulgiin_ur_dun:    
#     neg_khunii_tseverlesen_ur_dun = []

#     for asuultiin_khariu in neg_khunii_ur_dun:
#         # asuultiin khariu buglugdsun bna uu? gej shalgaj bna
#         if asuultiin_khariu:
#             neg_khunii_tseverlesen_ur_dun.append(asuultiin_khariu)
#         else:
#             # asuultiin khariu buglugduugui bol bidend ur dun khereggui
#             break
#     # kherev kheregtei bol
#     else:
#         tseverlesen_ur_dun.append(neg_khunii_tseverlesen_ur_dun)
# print(tseverlesen_ur_dun)

def kharuulakh(**kwargs):
    for i in kwargs:
        print(i)


kharuulakh(ner='Saraa', tsalin=3_000_000)