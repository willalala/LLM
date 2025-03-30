from celery import Celery
from openai import OpenAI
import os
from celery import shared_task


# @app.task
@shared_task
def process_chat(message):
    client = OpenAI(
        api_key = os.environ.get("APK_API_KEY_huoshan"),
        base_url = "https://ark.cn-beijing.volces.com/api/v3",
        #深度推理模型耗费时间会较长，建议将timeout设置为30分钟
        timeout=1800
    )

    try:
        print("-----streaming request-----")
        print("发送消息：", message[1]["content"])

        # 调用 API 并启用流式响应
        stream = client.chat.completions.create(
            model="deepseek-r1-250120",  # 替换为实际模型名称
            messages=message,
            stream=True
        )

        # 处理流式响应
        full_response = ""
        for chunk in stream:
            if not chunk.choices:
                continue
            content = chunk.choices[0].delta.content
            print(content, end="", flush=True)
            full_response += content

        # 将响应添加到消息历史中
        message.append({"role": "assistant", "content": full_response})
        print("\n收到响应：", full_response)

        return full_response

    except Exception as e:
        print("Error:", e)
        return str(e)