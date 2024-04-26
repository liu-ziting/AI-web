interface WebItem {
    name: string
    link: string
    slogan: string
    tags: string[]
}

interface Web {
    title: string
    list: WebItem[]
}

const website: Web[] = [
    {
        title: '免费AI',
        list: [
            {
                name: 'coze|登录|魔法',
                link: 'https://www.coze.com/',
                slogan: '最强白嫖GPT4、定制bot',
                tags: 'GPT3.5、GPT4'
            },
            {
                name: 'Chatforai|免登录',
                link: 'https://chatforai.store/',
                slogan: '免费gpt3.5',
                tags: 'GPT-3.5'
            },
            {
                name: 'poe|登录',
                link: 'https://poe.monster/',
                slogan: 'poe国产免费版本',
                tags: 'GPT3.5、GPT4、Claude、Gemma'
            },
            {
                name: 'Aichatos|免登录',
                link: 'https://chat18.aichatos.xyz/',
                slogan: '长期稳定免费gpt',
                tags: 'GPT-3.5'
            },
            {
                name: 'Zaiwen|登录',
                link: 'https://www.zaiwen.top/',
                slogan: 'AI、绘画、检索、文档、思维导图',
                tags: 'GPT3.5、GPT4、Claude、Gemini'
            },
            {
                name: 'CFAIWeb|免登录',
                link: 'https://ai.jaze.top/',
                slogan: 'AI问答对话、绘画、翻译',
                tags: 'GPT3.5、Geminipro、Sd'
            },
            {
                name: 'bbyadm|免登录',
                link: 'https://bbyadm.aitianhu1.top/',
                slogan: '多模型,支持 GPT4 文件',
                tags: 'GPT3.5、Geminipro、Claude'
            },
            {
                name: 'caifree|免登录',
                link: 'https://ai.caifree.com/',
                slogan: 'GPT镜像站',
                tags: 'GPT3.5、GPT4'
            },
            {
                name: 'sharedchat|免登录',
                link: 'https://sharedchat.cn/shared.html',
                slogan: '无需账号密码，免魔法登陆，共享账号',
                tags: 'GPT3.5、GPT4'
            },
            {
                name: 'freegpts|免登录',
                link: 'https://share.freegpts.org/list',
                slogan: '无需账号密码，免魔法登陆，共享账号',
                tags: 'GPT3.5、GPT4'
            },
            {
                name: 'topai|免登录',
                link: 'https://home.topai.vip/',
                slogan: '无需账号密码，免魔法登陆，共享账号',
                tags: 'GPT3.5、GPT4'
            },
            {
                name: 'aitopk|免登录',
                link: 'https://aitopk.com/list',
                slogan: '无需账号密码，免魔法登陆，共享账号',
                tags: 'GPT3.5、GPT4'
            },
            {
                name: 'gpt4fr|登录',
                link: 'https://2cc.gpt4fr.ee/',
                slogan: '免费GPT3.5、限量GPT4',
                tags: 'GPT3.5、GPT4'
            },
            {
                name: 'chatgot|登录',
                link: 'https://start.chatgot.io/',
                slogan: '免费使用chatgpt3.5等',
                tags: 'GPT3.5、GPT4'
            },
            {
                name: 'xiu|登录|魔法',
                link: 'https://www.xiu.ai/',
                slogan: '免费使用chatgpt3.5等',
                tags: 'GPT3.5、GPT4'
            },
            {
                name: 'pi|免登录',
                link: 'https://pi.ai/talk',
                slogan: '深度学习和自然语言处理来提供你有用的回答和建议',
                tags: 'AI对话'
            },
            {
                name: 'ollama|离线',
                link: '/post/ollama/',
                slogan: '本地部署大模型，可本地离线使用',
                tags: 'Gemma、Llama2、Qwen'
            },
            {
                name: 'ichat|免登录',
                link: 'https://chat.letdata.net/ichat',
                slogan: '无限制的GPT-3.5 服务',
                tags: 'GPT3.5'
            },
            {
                name: 'chatforai|免登录',
                link: 'https://chatforai.store/',
                slogan: '无限制的GPT-3.5 服务',
                tags: 'GPT3.5'
            },
            {
                name: 'ideaiai|免登录',
                link: 'https://ideaiai.com/',
                slogan: '无限制的GPT-3.5 服务',
                tags: 'GPT3.5'
            },
            {
                name: 'chatgpt|免登录',
                link: 'https://codenews.cc/chatgpt',
                slogan: '无限制的GPT-3.5 服务',
                tags: 'GPT3.5'
            },
            {
                name: 'xhlgpt|免登录',
                link: 'https://xhlgpt.com/',
                slogan: '多种AI模型汇聚平台',
                tags: 'GPT3.5'
            },
            {
                name: 'betai55|登录',
                link: 'https://b9.betai55.uk/#/',
                slogan: '密码：3.5forfree24',
                tags: 'GPT3.5'
            },
            {
                name: 'kulayu|免登录',
                link: 'https://www.kulayu.com/chatgpt.html',
                slogan: '多平台汇聚',
                tags: 'GPT3.5、Geminipro'
            },
            {
                name: 'llama3|免登录',
                link: 'https://llama3.replicate.dev/',
                slogan: 'llama370b、8b体验',
                tags: 'llama3'
            }
        ]
    },
    {
        title: '搜索AI',
        list: [
            {
                name: 'metaso|免登录',
                link: 'https://metaso.cn/',
                slogan: '秘塔AI搜索，没有广告，直达结果',
                tags: 'AI搜索、学术'
            },
            {
                name: 'aoyo|免登录',
                link: 'https://aoyo.ai/',
                slogan: '搜索+AI，智能搜索引擎',
                tags: 'AI搜索'
            },
            {
                name: 'devv|魔法',
                link: 'https://devv.ai/zh',
                slogan: '最懂程序员的新一代 AI 搜索引擎',
                tags: 'AI搜索'
            },
            {
                name: 'perplexity|魔法',
                link: 'https://www.perplexity.ai/',
                slogan: '智能总结并展示信息源',
                tags: 'AI搜索'
            },
            {
                name: 'phind|魔法',
                link: 'https://www.phind.com/',
                slogan: '获得所有技术问题的即时答案、解释和示例',
                tags: 'AI搜索'
            }
        ]
    },
    {
        title: '国产AI',
        list: [
            {
                name: 'kimi|登录',
                link: 'https://kimi.moonshot.cn/',
                slogan: '国产最强AI对话，支持文件上传，互联网搜索',
                tags: 'AI对话、文件解析、联网搜索'
            },
            {
                name: '智谱清言|登录',
                link: 'https://chatglm.cn/main/detail',
                slogan: '基于GLM模型开发，支持多轮对话，具备内容创作、信息归纳总结等',
                tags: 'AI对话、文件解析、联网搜索'
            },
            {
                name: '扣子|登录',
                link: 'https://www.coze.com/',
                slogan: '国产版本coze，云雀大模型',
                tags: 'AI对话、定制bot、发布平台'
            }
        ]
    },
    {
        title: '部署平台',
        list: [
            {
                name: 'Vercel',
                link: 'https://vercel.com/',
                slogan: '用于托管、构建和部署静态网站和单页面应用程序'
            },
            {
                name: 'Netlify',
                link: 'https://app.netlify.com/',
                slogan: '一款基于云服务的静态网站托管和自动化部署平台'
            },
            {
                name: 'Render',
                link: 'https://dashboard.render.com/',
                slogan: '一个轻量级云服务器平台'
            }
        ]
    },
    {
        title: '社区',
        list: [
            {
                name: 'Producthunt',
                link: 'https://www.producthunt.com/',
                slogan: '向用户展示新兴科技产品、应用程序和创意项目'
            },
            {
                name: 'Cssdesignawards',
                link: 'https://www.cssdesignawards.com/',
                slogan: '全球优秀CSS网页设计奖提名网'
            },
            {
                name: 'Csswinner',
                link: 'https://www.csswinner.com/',
                slogan: '优秀CSS网站界面和交互设计获奖作品'
            },
            {
                name: 'Hellogithub',
                link: 'https://hellogithub.com/',
                slogan: '发现和分享有趣、入门级开源项目的平台'
            },
            {
                name: 'Toools',
                link: 'https://www.toools.design',
                slogan: '发现非常有用的设计资源和工具'
            },
            {
                name: 'A-fresh',
                link: 'https://a-fresh.website/',
                slogan: '精心挑选的网站和组件灵感库'
            },
            {
                name: 'Prettyfolio',
                link: 'https://www.prettyfolio.com/',
                slogan: '发现专为您策划的最佳作品集网站'
            },
            {
                name: 'Uiswipe',
                link: 'https://uiswipe.com/',
                slogan: '发现顶级 Web UI 设计 再也不会遇到创意障碍'
            },
            {
                name: 'Godly',
                link: 'https://godly.website/',
                slogan: '国外优秀网站合集'
            },
            {
                name: 'Bestwebsite',
                link: 'https://bestwebsite.gallery/',
                slogan: '漂亮的酷站收集展示'
            },
            {
                name: 'Sitesee',
                link: 'https://sitesee.co/',
                slogan: '收录漂亮的界面设计网站'
            },
            {
                name: 'Calltoidea',
                link: 'https://www.calltoidea.com/',
                slogan: '收集优秀UI组件元素设计的站点'
            },
            {
                name: 'Uigarage',
                link: 'https://uigarage.net/',
                slogan: 'UI灵感收集聚合站点'
            }
        ]
    },
    {
        title: '图片/视频处理',
        list: [
            {
                name: 'Pixian',
                link: 'https://pixian.ai/',
                slogan: 'Remove Image Backgrounds'
            },
            {
                name: 'RemoveBg',
                link: 'https://www.remove.bg/zh/upload',
                slogan: '上传图片，消除背景'
            },
            {
                name: 'Clippingmagic',
                link: 'https://zh.clippingmagic.com/',
                slogan: '魔术般地删除图像背景'
            },
            {
                name: 'Photoscissors',
                link: 'https://photoscissors.com/',
                slogan: 'Remove Image Background'
            },
            {
                name: 'Recompressor',
                link: 'https://recompressor.com/',
                slogan: '图像优化压缩'
            },
            {
                name: 'Tinypng',
                link: 'https://tinypng.com/',
                slogan: '智能webp、png和jpeg压缩'
            },
            {
                name: 'Shaoapp',
                link: 'https://shaoapp.com/image',
                slogan: '智能图像优化减小文件大小并保持画质清晰'
            },
            {
                name: 'Jpeg.io',
                link: 'https://www.jpeg.io/',
                slogan: '将任何主要图像格式转换为高度优化的jpeg'
            },
            {
                name: 'Imagecompressor',
                link: 'https://imagecompressor.com/zh/',
                slogan: '使用最佳优化和压缩算法来达到最小尺寸的图像'
            },
            {
                name: 'Squoosh',
                link: 'https://squoosh.app/',
                slogan: '在线配置参数优化你的图片'
            },
            {
                name: 'Ezgif',
                link: 'https://ezgif.com/',
                slogan: '在线 gif 制作器和图像编辑器'
            },
            {
                name: 'Makeagif',
                link: 'https://makeagif.com/',
                slogan: 'The home for all your GIFs'
            },
            {
                name: 'Replicate',
                link: 'https://replicate.com/jingyunliang/swinir?prediction=izlzspzbz4is3qhjper4vj5pbm',
                slogan: 'AI图片修复'
            },
            {
                name: 'Waifu2x',
                link: 'https://waifu2x.udp.jp/',
                slogan: '图片智能算法无损放大'
            },
            {
                name: 'Unscreen',
                link: 'https://www.unscreen.com/',
                slogan: '视频背景删除，删除任何视频的背景，在线且免费'
            },
            {
                name: 'VideoOnline',
                link: 'https://compress-video-online.com/',
                slogan: '在线、免费的视频压缩工具'
            },
            {
                name: 'Ezyzip',
                link: 'https://www.ezyzip.com/',
                slogan: '压缩音视频文件至指定的大小或百分比'
            }
        ]
    },
    {
        title: '代码',
        list: [
            {
                name: 'Codepen',
                link: 'https://codepen.io',
                slogan: '在线代码编辑器和前端开发社区,发掘特效创意'
            },
            {
                name: 'Uiverse',
                link: 'https://uiverse.io',
                slogan: '适用于任何项目的开源 UI 元素'
            },
            {
                name: 'Cssfx',
                link: 'https://cssfx.netlify.app/',
                slogan: '按钮、过渡、移入等小特效'
            },
            {
                name: 'Animista',
                link: 'https://animista.net/play/basic/flip-scale-2',
                slogan: 'cssAnimation动画在线编辑复制'
            },
            {
                name: 'Uutool',
                link: 'https://uutool.cn/',
                slogan: '在线工具集合'
            }
        ]
    },
    {
        title: '演示',
        list: [
            {
                name: 'Gamma',
                link: 'https://gamma.app/',
                slogan: '快速、简单的共享和展示您的作品的方式'
            },
            {
                name: 'Pitch',
                link: 'https://pitch.com/',
                slogan: '以前所未有的速度创建、共享和分析演示文稿'
            },
            {
                name: 'Median',
                link: 'https://median.co/',
                slogan: '将任意一个网站转换为App，支持免费下载apk'
            }
        ]
    },
    {
        title: '图标/动画/插画',
        list: [
            {
                name: 'Lucide',
                link: 'https://lucide.dev/icons/',
                slogan: '共有1400+图标，设计风格统一，有react、vue等npm包，可在线检索和下载'
            },
            {
                name: 'Heroicons',
                link: 'https://heroicons.com/',
                slogan: 'SVG图标库，来源于Tailwind CSS'
            },
            {
                name: 'Iconbuddy',
                link: 'https://iconbuddy.app/',
                slogan: '免费icon素材图标库,可修改颜色'
            },
            {
                name: 'Icons',
                link: 'https://icons.download/',
                slogan: '免费svg图标下载库'
            },
            {
                name: 'Manypixels',
                link: 'https://www.manypixels.co/gallery',
                slogan: '免版权小人场景矢量插画素材'
            },
            {
                name: 'Storyset',
                link: 'https://storyset.com/',
                slogan: '可定制插画并制作动画下载'
            },
            {
                name: 'Transhumans',
                link: 'https://www.transhumans.xyz/',
                slogan: '动漫风格插画'
            },
            {
                name: 'Preloaders',
                link: 'https://icons8.com/preloaders/',
                slogan: 'Loading加载动画在线制作'
            },
            {
                name: 'Lottielab',
                link: 'https://www.lottielab.com/',
                slogan: '从Figma导入使用时间线制作动画并导出'
            },
            {
                name: 'Texturer',
                link: 'http://texturer.com/',
                slogan: '3D建模纹理特效素材'
            },
            {
                name: 'pngdirs',
                link: 'https://www.pngdirs.com/',
                slogan: '10万+PNG图片素材免费下载，透明背景图片，无需抠图'
            }
        ]
    },
    {
        title: '下载',
        list: [
            {
                name: 'Xitongku',
                link: 'https://www.xitongku.com/',
                slogan: '提供丰富的电脑系统和office软件下载'
            },
            {
                name: 'Ripyoutube',
                link: 'https://ripyoutube.com/zh-cn-1',
                slogan: '免费的youtube视频下載器，支持转换mp3,mp4格式'
            },
            {
                name: '9xbuddy',
                link: 'https://9xbuddy.in/zh',
                slogan: '免费的多平台视频提取'
            },
            {
                name: 'Dlpanda',
                link: 'https://dlpanda.com/zh-CN/xiaohongshu',
                slogan: '抖音、小红书、X、Ins、Bilibili等网站视频解析无水印下载'
            },
            {
                name: 'Snapinsta',
                link: 'https://snapinsta.app/',
                slogan: 'Instagram视频、照片下载器'
            },
            {
                name: 'Downsub',
                link: 'https://downsub.com/',
                slogan: '多个平台下载字幕，包括YouTube、Viki、Viu、Kocowa、Wetv等'
            },
            {
                name: 'Vget',
                link: 'https://www.vget.online/',
                slogan: '免费下载和转换YouTube视频和音频'
            },
            {
                name: '短视频去水印解析',
                link: 'https://video.ciding.cc/',
                slogan: '抖音、皮皮虾、最右等去水印'
            },
            {
                name: 'Downsub',
                link: 'https://doubledouble.top/',
                slogan: '音乐下载平台，可以直接从Spotify、Amazon Music、Soundcloud、Qobuz、Deezer、Tidal或Napster免费下载音乐'
            },
            {
                name: 'Subhd',
                link: 'https://subhd.tv/',
                slogan: '电影字幕下载的平台'
            },
            {
                name: 'BT之家',
                link: 'https://www.1lou.me/',
                slogan: '免费的BT种子磁力资源下载站'
            },
            {
                name: 'FDOWN',
                link: 'https://fdown.net/',
                slogan: '在线免费下载Facebook高清视频的网站'
            }
        ]
    },
    {
        title: '文件转换',
        list: [
            {
                name: 'FreePDFConvert',
                link: 'https://www.freepdfconvert.com/zh-cn',
                slogan: '在线的PDF转换器，它支持将各种文件格式如Word、Excel、PowerPoint、JPG等转换为PDF，反之'
            },
            {
                name: 'Convertio',
                link: 'https://convertio.co/zh/',
                slogan: '在线转换工具，支持超过300种文件格式相互转换'
            },
            {
                name: '腾讯帮小忙',
                link: 'https://tool.browser.qq.com/',
                slogan: '免费在线工具箱'
            },
            {
                name: '在线超级转换工具',
                link: 'https://www.wdku.net/',
                slogan: '在线超级转换工具，简单实用的多功能转换利器'
            },
            {
                name: '在线格式转换',
                link: 'https://www.alltoall.net/',
                slogan: '免费、快速便捷的文件转换利器'
            },
            {
                name: '视频转音频',
                link: 'https://offmp3.com/zh-1de',
                slogan: '在线视频到MP3转换器'
            },
            {
                name: 'pdf工具集',
                link: 'https://tools.pdf24.org/zh/',
                slogan: '免费且易于使用的在线PDF工具'
            },
            {
                name: 'pdf2docx',
                link: 'https://www.pdf2docx.cn/pdf/pdf2word',
                slogan: '免费pdf转换器'
            }
        ]
    },
    {
        title: '其他',
        list: [
            {
                name: '破解工具集合',
                link: 'https://l0te9vhttut.feishu.cn/wiki/WfyGwfuMhiPvEQkGw6ycNPUKnAd?from=from_copylink',
                slogan: '手机端安卓破解软件以及部分电脑端破解应用'
            },
            {
                name: 'Raylink',
                link: 'https://www.raylink.live/',
                slogan: '专为视觉行业打造的真高清、超流畅远程控制软件'
            },
            {
                name: '屏幕共享',
                link: 'https://www.webrtc-experiment.com/Pluginfree-Screen-Sharing/#407307319699959',
                slogan: '免费的网络RTC屏幕共享插件'
            },
            {
                name: 'Carbon',
                link: 'https://carbon.now.sh/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=javascript&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=48px&ph=32px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&ts=false',
                slogan: '代码片段分享图片制作'
            },

            {
                name: 'Msdmanuals',
                link: 'https://www.msdmanuals.cn/?ruleredirectid=14',
                slogan: '默沙东诊疗手册'
            },
            {
                name: 'Gallerix',
                link: 'https://gallerix.asia/',
                slogan: '在线艺术博物馆，欣赏到来自各个时代和风格的绘画作品'
            },
            {
                name: 'Hack',
                link: 'https://hack.chat',
                slogan: '这是一款最小的、无干扰的聊天应用程序'
            },
            {
                logo: 'https://faucet.openkey.cloud/_next/image?url=%2Flogo.png&w=256&q=75',
                name: 'ChatGPTAPI水龙头',
                link: 'https://faucet.openkey.cloud/',
                slogan: '每24小时可领取一个$1.00令牌用于开发测试AI产品.'
            },
            {
                name: 'sms-activate',
                link: 'https://sms-activate.org/cn/freePrice#activation',
                slogan: '国外短信接码激活服务'
            },
            {
                name: 'Liber3',
                link: 'https://liber3.eth.limo/',
                slogan: '电子书搜索引擎适用于ENS和IPFS'
            },
            {
                name: '谷歌插件下载',
                link: 'https://www.crxsoso.com/',
                slogan: '谷歌浏览器扩展插件下载'
            }
        ]
    }
]

export { website }
