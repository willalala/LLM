# LLM/huoshan_deepseek_app

### Version 1.0    

###### 2025/3/21

**采用React和Django搭建前后端分离式应用，支持基于axios的Https通信以及基于channels的WebSocket通信，支持由前端发送指令，后端接收并调用huoshan_deepseek api，得到结果后再传给前端。**

一、借助Celery，一个分布式任务队列：

处理异步任务，将任务放后台异步执行，避免阻塞主线程

处理定时任务，如实现每天凌晨清理临时文件功能

处理分布式任务，可在多台服务器上分布式地执行任务，适合高并发场景

二、借助Radis，一个内存数据库：

- 存储、传递、缓存消息
- 支持分布式通信，提供分布式锁的实现，用于解决分布式系统中的并发问题
- 支持发布/订阅（Pub/Sub）模式和列表（List）数据结构，用作消息队列
-  适用于实时数据处理，高性能和低延迟使其适合实时数据处理场景

三、借助Daphne ，一个基于 Python 的 ASGI服务器，运行支持 ASGI 的应用程序（如 Django Channels）；ASGI 支持异步操作，能够处理 WebSocket、长轮询、HTTP/2 等协议

四、通过channels库：

- 扩展 Django 的能力，使其支持 WebSocket、长轮询等协议。
- 提供异步任务处理能力（如后台任务、消息队列）。
- 支持分布式架构（通过 Channel Layers）