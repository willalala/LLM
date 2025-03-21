import React,{useEffect,useState} from "react";

const WebSocketComponent = () => {
    const [message,setMessage]=useState('')
    const [response,setResponse]=useState('')
    const [ws,setWs]=useState(null)

    useEffect(()=>{
        const socket=new WebSocket('ws://localhost:8000/ws/chat/')
        
        //创建websocket连接
        socket.onopen=()=>{
            console.log('WebSocket连接已打开')
        }

        //监听服务器发送的消息
        socket.onmessage=(e)=>{
            console.log(11111111)
            console.log('收到消息:',e.data)
            const data=JSON.parse(e.data)
            setMessage(data.message)
        }

        //监听连接关闭
        socket.onclose=()=>{
            console.log('WebSocket连接已关闭')
        }
        
        // 保存 WebSocket 连接
        setWs(socket);

        //关闭连接，清理函数，组件卸载/依赖项变化时执行
        return ()=>{
            socket.close()
        }
    },[])

    const sendMessage=()=>{
        if (ws && ws.readyState === WebSocket.OPEN) {
            ws.send(JSON.stringify({ message: 'hello react' }));
        } else {
            console.error('WebSocket 连接未打开');
        }
        // const socket=new WebSocket('ws://localhost:8000/ws/chat/')
        // socket.onopen=()=>{
        //     console.log('WebSocket连接已打开')
        //     socket.send(JSON.stringify({message:'hello react'}))
        // }
    }

    return (
        <div>
            <p>WebSocket</p>
            <div>收到消息:{message}</div>
            <button onClick={sendMessage}>发送消息</button>
        </div>
    )
}

export default WebSocketComponent