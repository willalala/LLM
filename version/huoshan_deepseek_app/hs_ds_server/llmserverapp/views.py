from django.shortcuts import render
from django.http import HttpResponse
from django.views import View
from llmserverapp.tasks import process_chat
from rest_framework.response import Response
from django.core.serializers.json import DjangoJSONEncoder
import json

# Create your views here.
class ChatView(View):
    # def get(self, request):
    #     return render(request, 'chat.html')

    def post(self, request):
        data=json.loads(request.body)
        # data
        print(data)
        #初始化对话
        message = [
            {"role": "system", "content": "你是人工智能助手"},
            {"role": "user", "content": data["message"]}
        ]
        task = process_chat.delay(message)#异步调用任务,返回task对象,包含任务状态、ID等信息，task对象的get方法可以获取任务的执行结果
        result=task.get()
        # bk={
        #     "command":message,
        #     "res":task
        # }
        # return HttpResponse(response.get())
        print(result)
        return HttpResponse(result,content_type='application/json')