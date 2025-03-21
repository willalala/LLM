#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
# import os
# import sys


# def main():
#     """Run administrative tasks."""
#     os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'huoshan_deepseek.settings')
#     try:
#         from django.core.management import execute_from_command_line
#     except ImportError as exc:
#         raise ImportError(
#             "Couldn't import Django. Are you sure it's installed and "
#             "available on your PYTHONPATH environment variable? Did you "
#             "forget to activate a virtual environment?"
#         ) from exc
#     execute_from_command_line(sys.argv)


# if __name__ == '__main__':
#     main()
import os
from openai import OpenAI
import time
import asyncio
import aiohttp

client = OpenAI(
    api_key = os.environ.get("APK_API_KEY_huoshan"),
    base_url = "https://ark.cn-beijing.volces.com/api/v3",
    #深度推理模型耗费时间会较长，建议将timeout设置为30分钟
    timeout=1800
)

message=[
    {"role": "system", "content": "你是人工智能助手"},
    {"role": "user", "content": "你好"}
]
while True:
    try:
        print("-----streaming request-----")
        print("发送消息：",message[1]["content"])

        #调用api并启用流式响应
        stream = client.chat.completions.create(
            model = "deepseek-r1-250120",  # your model endpoint ID
            messages = message,
            stream=True
        )

        #处理流式响应
        full_response = ""
        for chunk in stream:
            if not chunk.choices:
                continue
            content=chunk.choices[0].delta.content
            # print(content, end="",flush=True)
            full_response += content
            
        message.append({"role": "assistant", "content":full_response})
        print("收到响应：",full_response)
        # print("\n")

    except Exception as e:
        print("Error:",e)

    # 终止对话
    if "再见" in full_response:
        break
    if len(message)>2:
        break

    # time.sleep(1)
print("============对话结束============")


#==================================================================================================

# Non-streaming:
# print("----- standard request -----")
# completion = client.chat.completions.create(
#     model = "deepseek-r1-250120",  # your model endpoint ID
#     messages = [
#         {"role": "system", "content": "你是人工智能助手"},
#         {"role": "user", "content": "常见的十字花科植物有哪些？"},
#     ],
# )
# print(completion.choices[0].message.content)

# Streaming:
# print("----- streaming request -----")
# stream = client.chat.completions.create(
#     model = "deepseek-r1-250120",  # your model endpoint ID
#     messages = [
#         {"role": "system", "content": "你是人工智能助手"},
#         {"role": "user", "content": "你好"},
#     ],
#     stream=True
# )

# for chunk in stream:
#     if not chunk.choices:
#         continue
#     print(chunk.choices[0].delta.content, end="")
# print()
