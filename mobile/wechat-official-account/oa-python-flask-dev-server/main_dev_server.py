"""
失败！！！
2022.12.21 22:02 未能在阿里云CentOS 7.9上跑起来！
"""
from flask import Flask, request, abort
import hashlib

app = Flask(__name__)

WECHAT_TOKEN = "snowflake"


@app.route("/wechat8000", methods=["GET", "POST"])
def wechat():
    """对接微信公众号服务器"""
    print("into the wechat()")
    # 获取参数
    signature = request.args.get["signature"]
    timestamp = request.args.get["timestamp"]
    nonce = request.args.get["nonce"]
    echostr = request.args.get["echostr"]

    # 校验参数
    if not all([signature, timestamp, nonce]):
        abort(400)

    # 计算签名
    li = [WECHAT_TOKEN, timestamp, nonce]
    li.sort()
    tmp_str = "".join(li)
    sign_self = hashlib.sha1(tmp_str).hexdigest()

    # 比对签名
    if signature != sign_self:
        abort(403)
    else:
        return echostr


if __name__ == "__main__":
    app.run(port=8000, debug=True)
