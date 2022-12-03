import cv2
face_cascade = cv2.CascadeClassifier(r"C:\Users\admin\Desktop\manit\opencv\data\haarcascades\haarcascade_frontalface_default.xml")
img = cv2.imread(r"C:\Users\admin\Desktop\manit\sample_ppl_count_img_1.jpg")
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
faces = face_cascade.detectMultiScale(gray, 1.1, 3)
for (x,y,w,h) in faces:
    cv2.rectangle(img,(x,y),(x+w,y+h),(0,255,0), 3)
print("Number of people: "+str(faces.shape[0]))
cv2.imshow("counting ppl", img)
cv2.waitKey(0)
cv2.destroyAllWindows()