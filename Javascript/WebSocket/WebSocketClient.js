export class WebSocketClient{
    // #socket链接
    private url = '';
    // #socket实例
    private socket: WebSocket | null = null;
    // #重连次数
    private reconnectAttempts = 0;
    // #最大重连数
    private maxReconnectAttempts = 5;
    // #重连间隔
    private reconnectInterval = 10000; // 10 seconds
  
    constructor(url: string) {
        // super();
        this.url = url;
    }
    // >消息发送
    public send(message: string): void {
        if (this.socket && this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(message);
        } else {
            console.error('[WebSocket] 未连接');
        }
    }

    // !初始化连接
    public connect(): void {
        if (this.reconnectAttempts === 0) {
            console.log(`初始化连接中...`);
        }
        if (this.socket && this.socket.readyState === WebSocket.OPEN) {
            return;
        }
        this.socket = new WebSocket(this.url);

        // !websocket连接成功
        this.socket.onopen = event => {
            // 重置重连尝试成功连接
            this.reconnectAttempts = 0;
            console.log(`连接成功,等待服务端数据推送[onopen]...`);
        };

        this.socket.onmessage = event => {
          console.log('onmessage')
        };

        this.socket.onclose = event => {
            if (this.reconnectAttempts === 0) {
                console.log(`连接断开[onclose]...`);
            }
            if (!this.stopWs) {
                this.handleReconnect();
            }
        };

        this.socket.onerror = event => {
            if (this.reconnectAttempts === 0) {
                console.log(`连接异常[onerror]...`);
            }
        };
    }

    // > 断网重连逻辑
    private handleReconnect(): void {
        if (this.reconnectAttempts < this.maxReconnectAttempts) {
            this.reconnectAttempts++;
            console.log(`尝试重连... (${this.reconnectAttempts}/${this.maxReconnectAttempts})`);
            setTimeout(() => {
                this.connect();
            }, this.reconnectInterval);
        } else {
            console.log(`最大重连失败，终止重连: ${this.url}`);
        }
    }

    // >关闭连接
    public close(): void {
        if (this.socket) {
            this.socket.close();
            this.socket = null;
        }
    }
}
