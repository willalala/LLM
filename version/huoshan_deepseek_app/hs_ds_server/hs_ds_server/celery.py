# import eventlet
# eventlet.monkey_patch()

import os
from celery import Celery
from openai import OpenAI

#设置Django的默认设置模块
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'hs_ds_server.settings')
os.environ.setdefault('FORKED_BY_MULTIPROCESSING','1')#让celery在多进程模式下运行，没有则celery会报错

#创建Celery应用
app = Celery('hs_ds_server')

#使用Django的settings文件配置Celery
app.config_from_object('django.conf:settings', namespace='CELERY')

#自动发现每个已安装应用程序中的tasks.py文件
app.autodiscover_tasks(packages=['llmserverapp'])

# #创建OpenAI实例/客户端

# client = OpenAI(
#     api_key = os.environ.get("APK_API_KEY_huoshan"),
#     base_url = "https://ark.cn-beijing.volces.com/api/v3",
#     #深度推理模型耗费时间会较长，建议将timeout设置为30分钟
#     timeout=1800
# )

#定义一个任务
# @app.task
# def process_chat(message):
#     # message=[
#     #     {"role": "system", "content": "你是人工智能助手"},
#     #     {"role": "user", "content": "今天有哪些新闻"}
#     # ]
#     try:
#         print("-----streaming request-----")
#         print("celery发送消息：",message[1]["content"])

#         #调用api并启用流式响应
#         stream = client.chat.completions.create(
#             model = "deepseek-r1-250120",  # your model endpoint ID
#             messages = message,
#             stream=True
#         )

#         #处理流式响应
#         full_response = ""
#         for chunk in stream:
#             if not chunk.choices:
#                 continue
#             content=chunk.choices[0].delta.content
#             # print(content, end="",flush=True)
#             full_response += content

#         #将响应添加到消息列表中    
#         message.append({"role": "assistant", "content":full_response})
#         print("收到响应：",full_response)

#         return full_response
#     except Exception as e:
#         print("Error:",e)
#         return str(e)