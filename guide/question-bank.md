# 题库配置指南

:::tip
> 排名顺序为免费优先于付费

    TikuAdapter题库 > like知识库 > 言溪题库 > AI大模型 
 
:::
## 支持题库类型

| 序号 | 题库类型       | 所需参数               | 
|------|----------------|------------------------|
| 1    | 言溪题库       | Token(多个用逗号分隔)  |
| 2    | Like知识库     | Token                  | 
| 3    | TikuAdapter题库| API地址               | 
| 4    | AI大模型答题   | API地址/Key/模型名称   | 
| 5    | 不使用题库     | 无                     | 


## 配置教程

1. **[言溪题库](https://tk.enncy.cn/)**

- 登录言溪题库
- 点击右上角头像，选择**个人中心**
- 复制**Token**
- 填入程序中**题库配置**的**Token**字段

2. **[Like知识库](https://www.datam.site/)**

- 进入Like知识库网站
- 点击在线申请token,并按操作申请 **邀请码为:4gTPwypXRxk**
> 或者通过[此链接](https://www.datam.site/doc/apply_token?invite=4gTPwypXRxk)直接申请
```mermaid
    https://www.datam.site/doc/apply_token?invite=4gTPwypXRxk
```

3. **[TikuAdapter题库](https://github.com/DokiDoki1103/tikuAdapter)**
```mermaid
   注意⚠:此题库方法适用于开发者,小白请选择其他方案
```
- 进入作者的[仓库](https://github.com/DokiDoki1103/tikuAdapter)自行配置api

4. **[AI大模型答题]()**
```mermaid
   █ 推荐优先使用前三种题库，本方案需付费使用 █
   █其他大模型请自行配置api，并申请免费额度 █
```

###### 准备工作
1. 注册OpenAI账号
   - 访问[OpenAI官网](https://openai.com/)
   - 点击 "Sign up" 创建账号（需要海外手机号验证）
   - 推荐使用[接码平台](https://sms-activate.org/?ref=7323970)获取验证码

    > 如果按照上述流程你还不能注册成功，这边建议可以参考[视频openAI账号注册](https://www.bilibili.com/video/BV1mc411Z7X7/?vd_source=7cb1c61f0691268ee0203c6180a5748d)。
    
2. 获取API密钥
   - 登录后访问[API密钥管理页面](https://platform.openai.com/api-keys)
   - 点击 "Create new secret key"
   - 输入密钥名称（例如："XueTongAuto"）
   - 复制生成的密钥（该密钥只显示一次）

######  配置参数示例
```json

  API地址: "https://api.openai.com/v1",
  API Key: "sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  模型名称: "gpt-4-turbo-preview"
```



:::warning

> 配置完成后请重启应用程序生效

> 详细配置说明请参考[使用指南](../use-method)

:::