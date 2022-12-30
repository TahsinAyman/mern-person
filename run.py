from threading import Thread
from os import system

def frontend():
  system("cd frontend && npm run start")

def backend():
  system("cd backend && npm run start")

thread1 = Thread(target=frontend)
thread2 = Thread(target=backend)

thread1.start()
thread2.start()

frontend()
backend()
