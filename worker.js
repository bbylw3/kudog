// 安全头
const securityHeaders = {
    'Content-Type': 'text/html;charset=UTF-8',
    'Cache-Control': 'public, max-age=3600',
    'Content-Security-Policy': "default-src 'self' https: raw.githubusercontent.com; style-src 'unsafe-inline'; script-src 'unsafe-inline'",
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'interest-cohort=()',
    'Cross-Origin-Opener-Policy': 'same-origin',
    'Cross-Origin-Embedder-Policy': 'require-corp'
};

// HTML 内容
const HTML_CONTENT = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NodeHub - 节点导航</title>
    <style>
        :root {
            --primary-color: #ff9000;
            --secondary-color: #000000;
            --background-color: #0f0f0f;
            --card-background: #1b1b1b;
            --text-color: #ffffff;
            --text-secondary: #cccccc;
            --shadow: 0 4px 6px rgba(0,0,0,0.3);
            --max-width: 1100px;
            --spacing: 20px;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: var(--text-color);
            background-color: var(--background-color);
            padding: var(--spacing);
            min-height: 100vh;
            display: flex;
            flex-direction: column;
        }

        .container {
            max-width: var(--max-width);
            margin: 0 auto;
            width: 100%;
        }

        header {
            text-align: center;
            padding: 25px 15px;
            margin-bottom: var(--spacing);
            background: var(--secondary-color);
            border-radius: 5px;
            border: 1px solid #222;
        }

        .logo {
            display: inline-flex;
            align-items: center;
            gap: 5px;
            margin-bottom: 10px;
        }

        h1 {
            font-size: 2.8em;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        h1 span:first-child {
            color: white;
        }

        h1 span:last-child {
            color: var(--primary-color);
            background: var(--primary-color);
            padding: 0 10px;
            border-radius: 5px;
            color: black;
        }

        .project-intro {
            margin-bottom: var(--spacing);
            padding: 20px;
            background: var(--card-background);
            border-radius: 5px;
            border: 1px solid #222;
        }

        .project-intro h2 {
            color: var(--primary-color);
            margin-bottom: 15px;
            font-size: 1.5em;
            display: inline-block;
            background: var(--secondary-color);
            padding: 5px 15px;
            border-radius: 3px;
        }

        .subscription-list {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 15px;
            margin-bottom: var(--spacing);
        }

        .card {
            background: var(--card-background);
            border-radius: 5px;
            padding: 20px;
            text-align: center;
            transition: all 0.3s ease;
            border: 1px solid #222;
        }

        .card:hover {
            transform: translateY(-3px);
            border-color: var(--primary-color);
        }

        .button {
            width: 100%;
            padding: 12px;
            background-color: var(--primary-color);
            color: var(--secondary-color);
            border: none;
            border-radius: 3px;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 0.9em;
            text-transform: uppercase;
            position: relative;
        }

        .button:hover {
            background-color: #ffa31a;
            transform: translateY(-2px);
        }

        .button.success {
            background-color: #4CAF50;
        }

        .button.error {
            background-color: #f44336;
        }

        .features {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 15px;
            margin: 20px 0;
        }

        .feature-item {
            padding: 15px;
            background: var(--secondary-color);
            border-radius: 5px;
            text-align: center;
            border: 1px solid #222;
        }

        .feature-item h4 {
            color: var(--primary-color);
            margin-bottom: 8px;
            font-size: 1.1em;
        }

        .update-info {
            display: flex;
            gap: 20px;
            margin-top: 20px;
            padding: 15px;
            background: var(--secondary-color);
            border-radius: 5px;
            border: 1px solid #222;
        }

        .project-links {
            display: flex;
            gap: 10px;
            margin-top: 20px;
        }

        .project-links a {
            padding: 10px 20px;
            background: var(--secondary-color);
            color: var(--primary-color);
            text-decoration: none;
            border-radius: 3px;
            border: 1px solid var(--primary-color);
            transition: all 0.3s ease;
            font-weight: 600;
            text-transform: uppercase;
        }

        .project-links a:hover {
            background: var(--primary-color);
            color: var(--secondary-color);
        }

        footer {
            margin-top: auto;
            text-align: center;
            padding: 20px;
            background: var(--secondary-color);
            border-radius: 5px;
            border: 1px solid #222;
        }

        footer p {
            color: #666;
            font-size: 0.9em;
        }

        footer a {
            color: var(--primary-color);
            text-decoration: none;
            font-weight: 600;
            transition: color 0.3s ease;
        }

        footer a:hover {
            color: #ffa31a;
        }

        footer span {
            color: #444;
            margin: 0 8px;
        }

        @media (max-width: 768px) {
            .features {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 480px) {
            .features {
                grid-template-columns: 1fr;
            }
        }

        .update-info {
            text-align: center;
            color: #666;
            margin: 20px 0;
            font-size: 0.9em;
        }

        /* 添加链接样式 */
        a {
            color: var(--primary-color);
            text-decoration: none;
            transition: color 0.3s ease;
        }

        a:hover {
            color: #ffa533;  /* 鼠标悬停时颜色加深 */
            text-decoration: underline;
        }

        .project-intro a {
            color: var(--primary-color);
            font-weight: 500;
        }

        .project-intro a:hover {
            color: #ffa533;
        }

        footer a {
            color: var(--primary-color);
            font-weight: 500;
        }

        footer a:hover {
            color: #ffa533;
        }

        /* 优化移动端字体大小和间距 */
        @media (max-width: 768px) {
            h1 {
                font-size: 2.2em;  // 减小移动端标题大小
            }
            
            .container {
                padding: 10px;  // 减小容器内边距
            }
            
            .project-intro {
                padding: 15px;  // 调整介绍区域内边距
            }
            
            .card {
                padding: 15px;  // 调整卡片内边距
            }
            
            .project-links {
                flex-direction: column;  // 项目链接垂直排列
                gap: 10px;
            }
            
            .project-links a {
                width: 100%;  // 链接按钮占满宽度
                text-align: center;
            }
        }

        /* 针对更小屏幕的优化 */
        @media (max-width: 480px) {
            :root {
                --spacing: 15px;  // 减小基础间距
            }
            
            h1 {
                font-size: 1.8em;  // 进一步减小标题大小
            }
            
            .update-info {
                flex-direction: column;  // 更新信息垂直排列
                gap: 10px;
                padding: 10px;
            }
            
            .button {
                padding: 10px;  // 调整按钮大小
                font-size: 0.85em;
            }
            
            .feature-item {
                padding: 12px;  // 调整特性卡片内边距
            }
        }

        /* 添加触摸设备的优化 */
        @media (hover: none) {
            .card:hover {
                transform: none;  // 移除悬停效果
            }
            
            .button:hover {
                transform: none;  // 移除按钮悬停效果
            }
            
            .button:active {
                background-color: #ffa31a;  // 添加触摸反馈
                transform: scale(0.98);
            }
        }

        .tg-info {
            background: var(--card-background);
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
            border: 1px solid #333;
        }

        .tg-info h3 {
            color: var(--primary-color);
            margin-bottom: 15px;
        }

        .tg-links {
            display: flex;
            gap: 15px;
            flex-wrap: wrap;
        }

        .tg-link {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 10px 15px;
            background: var(--secondary-color);
            border-radius: 5px;
            color: var(--primary-color);
            text-decoration: none;
            border: 1px solid var(--primary-color);
            transition: all 0.3s ease;
        }

        .tg-link:hover {
            background: var(--primary-color);
            color: var(--secondary-color);
        }

        .tg-link i {
            font-size: 1.2em;
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1><span>Node</span><span>Hub</span></h1>
            <p>节点订阅导航</p>
        </header>

        <main>
            <div class="project-intro">
                <h2>关于 NodeHub</h2>
                <p>NodeHub 是一个基于 kudog.xyz 的节点订阅服务导航项目。提供美国和亚洲两种节点订阅源，支持多种主流客户端。</p>
                
                <div class="features">
                    <div class="feature-item">
                        <h4>实时更新</h4>
                        <p>每日自动更新</p>
                    </div>
                    <div class="feature-item">
                        <h4>双线节点</h4>
                        <p>美国/亚洲节点</p>
                    </div>
                    <div class="feature-item">
                        <h4>稳定可靠</h4>
                        <p>长期维护更新</p>
                    </div>
                </div>

                <div class="update-info">
                    <p>节点更新时间：每日 00:00</p>
                    <p>节点有效期至：2024-12-31 00:00:00</p>
                </div>

                <div class="project-links">
                    <a href="https://www.kudog.xyz/fx/usjd.html" target="_blank">美国节点</a>
                    <a href="https://www.kudog.xyz/fx/jd.html" target="_blank">亚洲节点</a>
                </div>
            </div>

            <section class="subscription-list">
                <div class="card">
                    <h3>美国节点订阅</h3>
                    <p class="card-desc">US Nodes Subscription</p>
                    <button class="button" onclick="handleSubscription('https://www.kudog.xyz/fx/usjd.html', this)">获取订阅</button>
                </div>
                <div class="card">
                    <h3>亚洲节点订阅</h3>
                    <p class="card-desc">Asia Nodes Subscription</p>
                    <button class="button" onclick="handleSubscription('https://www.kudog.xyz/fx/jd.html', this)">获取订阅</button>
                </div>
            </section>

            <!-- 添加 TG 频道信息占位符 -->
            <!-- TG_INFO_PLACEHOLDER -->
        </main>

        <footer>
            <p>节点更新：每日 00:00 | 长期维护</p>
        </footer>
    </div>

    <style>
        /* 添加卡片描述样式 */
        .card-desc {
            color: #666;
            font-size: 0.9em;
            margin: 8px 0 15px;
        }
    </style>

    <script>
        async function handleSubscription(url, button) {
            try {
                window.open(url, '_blank');
                await navigator.clipboard.writeText(url);
                
                const originalText = button.textContent;
                button.textContent = '复制成功';
                button.classList.add('success');
                
                setTimeout(() => {
                    button.textContent = originalText;
                    button.classList.remove('success');
                }, 2000);
            } catch (err) {
                console.error('操作失败:', err);
                button.textContent = '获取失败';
                button.classList.add('error');
                
                setTimeout(() => {
                    button.textContent = originalText;
                    button.classList.remove('error');
                }, 2000);
            }
        }
    </script>
</body>
</html>`;

// 修改 API 相关常量
const API_VERSION = 'v1';
const API_BASE_URLS = {
    us: 'https://www.kudog.xyz/fx/usjd.html',    // 美国节点
    asia: 'https://www.kudog.xyz/fx/jd.html'     // 亚洲节点
};

// 修改订阅卡片部分的 HTML
const subscriptionCards = `
    <div class="card">
        <h3>美国节点订阅</h3>
        <p class="card-desc">US Nodes Subscription</p>
        <button class="button" onclick="handleSubscription('${API_BASE_URLS.us}', this)">获取订阅</button>
    </div>
    <div class="card">
        <h3>亚洲节点订阅</h3>
        <p class="card-desc">Asia Nodes Subscription</p>
        <button class="button" onclick="handleSubscription('${API_BASE_URLS.asia}', this)">获取订阅</button>
    </div>
`;

// 修改 HTML 内容的处理方式
function getProcessedHTML() {
    // 替换所有的相关文本
    return HTML_CONTENT
        .replace(/国内节点/g, '亚洲节点')
        .replace(/CN Nodes/g, 'Asia Nodes')
        .replace(
            '美国/国内节点',
            '美国/亚洲节点'
        )
        .replace(
            'NodeHub 是一个基于 kudog.xyz 的节点订阅服务导航项目。提供美国和亚洲两种节点订阅源，支持多种主流客户端。',
            'NodeHub 是一个基于 kudog 免费分享、实时更新的公益服务。提供美国和亚洲两种节点订阅源，支持多种主流客户端。'
        );
}

// 修改生成 HTML 的函数
function generateHTML(subInfo) {
    const baseHTML = getProcessedHTML();
    
    const generateNodeSection = (title, info) => {
        // 确保 info 是一个对象
        info = info || {};
        // 确保 nodes 是一个数组
        const nodes = Array.isArray(info.nodes) ? info.nodes : [];
        
        return `
        <div class="node-section">
            <div class="section-header">
                <h3>${title}</h3>
                <div class="section-meta">
                    <span class="node-count">节点数量: ${nodes.length}</span>
                    ${info.lastUpdate ? `<span class="last-update">最后更新: ${info.lastUpdate}</span>` : ''}
                    ${info.speed ? `<span class="speed">速度: ${info.speed}</span>` : ''}
                </div>
                ${info.description ? `<p class="description">${info.description}</p>` : ''}
            </div>

            <div class="subscription-links">
                <button class="sub-button" onclick="handleSubscription('${
                    title.includes('美国') ? API_BASE_URLS.us : API_BASE_URLS.asia
                }', this)">
                    获取订阅
                </button>
            </div>

            <div class="node-list">
                ${nodes.length > 0 ? nodes.map(node => `
                    <div class="node-card">
                        <div class="node-header">
                            <h4>${node.name || '未命名节点'}</h4>
                            ${node.type ? `<span class="node-type">${node.type}</span>` : ''}
                        </div>
                        <div class="node-info">
                            ${node.location ? `<span class="location">📍 ${node.location}</span>` : ''}
                            ${node.speed ? `<span class="speed">⚡ ${node.speed}</span>` : ''}
                            ${node.ping ? `<span class="ping">🔄 ${node.ping}</span>` : ''}
                            ${node.load ? `<span class="load">📊 ${node.load}</span>` : ''}
                            ${node.uptime ? `<span class="uptime">⏱️ ${node.uptime}</span>` : ''}
                        </div>
                    </div>
                `).join('') : '<p class="no-nodes">暂无节点信息</p>'}
            </div>
        </div>
    `;
    };

    // 添加新的样式
    const additionalStyles = `
        <style>
            /* ... 保持原有样式 ... */
            
            .no-nodes {
                text-align: center;
                color: var(--text-secondary);
                padding: 20px;
            }
        </style>
    `;

    // 确保 subInfo.nodes 存在
    const nodes = subInfo.nodes || {};

    // 添加 TG 频道信息
    const tgSection = `
        <section class="tg-info">
            <h3>TG 频道信息</h3>
            <div class="tg-links">
                <a href="https://t.me/zyzyfuw" class="tg-link" target="_blank">
                    <i>🌏</i> 实时节点频道
                </a>
            </div>
            <div class="tg-description">
                <p>🔔 加入 TG 频道获取其他地区实时节点更新</p>
            </div>
        </section>
    `;

    // 生成完整的 HTML
    return baseHTML
        .replace('</head>', `${additionalStyles}</head>`)
        .replace('<!-- NODE_INFO_PLACEHOLDER -->', `
            <div class="nodes-container">
                ${generateNodeSection('美国专线节点', nodes.us)}
                ${generateNodeSection('亚洲专线节点', nodes.asia)}
            </div>
        `)
        .replace('<!-- TG_INFO_PLACEHOLDER -->', tgSection);  // 添加 TG 频道信息
}

// 恢复监控系统
const metrics = {
    requests: 0,
    errors: 0,
    subscriptionFetches: 0
};

// 修改请求处理函数
async function handleRequest(request) {
    metrics.requests++;
    try {
        const url = new URL(request.url);
        console.log('处理请求:', url.toString());
        
        if (url.protocol === 'http:') {
            return Response.redirect(`https://${url.host}${url.pathname}${url.search}`, 301);
        }

        // 获取最新的订阅信息
        console.log('开始获取订阅信息');
        const subInfo = await getSubscriptionInfo();
        console.log('获取到订阅信息:', JSON.stringify(subInfo, null, 2));
        metrics.subscriptionFetches++;

        // 生成 HTML
        console.log('开始生成 HTML');
        const updatedHTML = generateHTML(subInfo);
        console.log('HTML 生成完成');

        return new Response(updatedHTML, {
            headers: {
                ...securityHeaders,
                'Cache-Control': 'no-cache'
            }
        });
    } catch (error) {
        console.error('处理请求时出错:', error.stack || error.message || error);
        metrics.errors++;
        return new Response(`服务暂时不可用\n${error.message}`, { 
            status: 500,
            headers: {
                'Content-Type': 'text/plain;charset=UTF-8'
            }
        });
    }
}

// 事件监听器
addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
});

// 添加获取订阅信息的函数
async function getSubscriptionInfo() {
    try {
        const [usResponse, asiaResponse] = await Promise.all([
            fetch(API_BASE_URLS.us),
            fetch(API_BASE_URLS.asia)
        ]);

        if (!usResponse.ok || !asiaResponse.ok) {
            throw new Error('订阅源响应错误');
        }

        const usText = await usResponse.text();
        const asiaText = await asiaResponse.text();

        return {
            expireTime: '2024-12-31 00:00:00',
            updateTime: '每日 00:00',
            nodes: {
                us: {
                    nodes: [{ 
                        name: '美国专线节点', 
                        type: 'Subscription',
                        speed: '1000M',
                        ping: '50ms',
                        load: '50%',
                        location: '美国'
                    }],
                    lastUpdate: new Date().toLocaleString(),
                    description: '美国专线加速节点'
                },
                asia: {
                    nodes: [{ 
                        name: '亚洲专线节点', 
                        type: 'Subscription',
                        speed: '1000M',
                        ping: '30ms',
                        load: '45%',
                        location: '亚洲'
                    }],
                    lastUpdate: new Date().toLocaleString(),
                    description: '亚洲地区加速节点'
                }
            }
        };
    } catch (error) {
        console.error('获取订阅信息失败:', error);
        return {
            expireTime: '2024-12-31 00:00:00',
            updateTime: '每日 00:00',
            nodes: {
                us: { 
                    nodes: [],
                    lastUpdate: new Date().toLocaleString(),
                    description: '美国专线加速节点'
                },
                asia: { 
                    nodes: [],
                    lastUpdate: new Date().toLocaleString(),
                    description: '亚洲地区加速节点'
                }
            }
        };
    }
}