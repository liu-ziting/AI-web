interface WebItem {
    name: string
    link: string
    slogan: string
}

interface Web {
    title: string
    list: WebItem[]
}

const website: Web[] = [
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
    // {
    //     title: 'AI平台',
    //     list: [
    //         {
    //             logo: 'https://ph-files.imgix.net/593894d0-536b-47e6-9a15-cb8afc0159e5.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=64&h=64&fit=crop&dpr=1',
    //             name: 'Claude',
    //             link: 'https://claude.ai/',
    //             slogan: '媲美GPT，简洁易用的AI助手'
    //         },
    //         {
    //             logo: 'https://kimi.moonshot.cn/static/Kimi.3857f0b5.png',
    //             name: 'Kimi Chat',
    //             link: 'https://kimi.moonshot.cn/',
    //             slogan: '由清华大学交叉信息学院提供，支持文件上传，pdf、doc、xlsx、ppt、txt等'
    //         },
    //         {
    //             logo: 'https://llava.hliu.cc/assets/logo-0a070fcf.svg',
    //             name: 'LLaVA',
    //             link: 'https://llava.hliu.cc/',
    //             slogan: '大语言视觉助手'
    //         },
    //         {
    //             logo: '',
    //             name: 'Bard',
    //             link: 'https://bard.google.com/chat',
    //             slogan: '谷歌人工智能助手'
    //         },
    //         {
    //             logo: '',
    //             name: 'Copilot',
    //             link: 'https://copilot.microsoft.com/',
    //             slogan: '微软人工智能助手'
    //         },
    //         {
    //             logo: 'https://app.invictai.io/_next/image?url=https%3A%2F%2Fapi.invictai.io%2Fapi%2Fcommunity-template-images%2F1700492778406-809601882.png&w=256&q=75',
    //             name: 'InvictaAI',
    //             link: 'https://app.invictai.io/',
    //             slogan: '个性化AI助手，能够根据用户需求进行定制化'
    //         },
    //         {
    //             logo: 'https://chat.xlang.ai/_next/static/media/logo_color.1eecbbbd.svg',
    //             name: 'xlang',
    //             link: 'https://chat.xlang.ai/zh',
    //             slogan: 'XLang实验室提供大模型数据助手'
    //         },
    //         {
    //             logo: 'https://llava.hliu.cc/assets/logo-0a070fcf.svg',
    //             name: 'v0.dev',
    //             link: 'https://v0.dev/',
    //             slogan: 'Vercel提供支持的AI生成页面'
    //         },
    //         {
    //             logo: 'https://function12.io/assets/images/header/logo.svg',
    //             name: 'Function12',
    //             link: 'https://function12.io',
    //             slogan: '可导入Figma生成Html代码'
    //         },
    //         {
    //             logo: '',
    //             name: 'Devwares',
    //             link: 'https://windframe.devwares.com',
    //             slogan: '在线TailwindCSS构建工具！'
    //         },
    //         {
    //             logo: '',
    //             name: 'SaasAiTools',
    //             link: 'https://saasaitools.com/',
    //             slogan: '发现您的下一个生成人工智能工具'
    //         },
    //         {
    //             logo: 'https://seekai.tools/static/media/new_logo.829b4ad1dcd3942080932c3c4c30d090.svg',
    //             name: 'Seekai',
    //             link: 'https://seekai.tools/ai-tools',
    //             slogan: '轻松发现最佳AI工具'
    //         },
    //         {
    //             logo: 'https://top.aibase.com/_static/img/Frame@2x.eddfa3e.png',
    //             name: 'Aibase',
    //             link: 'https://top.aibase.com',
    //             slogan: '最佳人工智能产品和服务，每日持续更新'
    //         },
    //         {
    //             logo: '',
    //             name: 'Autodraw',
    //             link: 'https://www.autodraw.com/',
    //             slogan: '根据你的随意涂画生成简笔画'
    //         },
    //         {
    //             logo: '',
    //             name: 'Freepik',
    //             link: 'https://www.freepik.com/pikaso?ref=producthunt&sign-up=google',
    //             slogan: '实时AI图像生成器'
    //         },
    //         {
    //             logo: '',
    //             name: 'Cgdream',
    //             link: 'https://cgdream.ai/my-images',
    //             slogan: '免费Ai生成图片'
    //         },
    //         {
    //             logo: 'https://www.shejibaozang.com/wp-content/uploads/thumb/2023/05/fill_w60_h60_g0_mark_1684291596-%E4%B8%8B%E8%BD%BD-2.png',
    //             name: 'Perplexity',
    //             link: 'https://www.perplexity.ai/',
    //             slogan: '智能总结并展示信息源'
    //         },
    //         {
    //             logo: '',
    //             name: 'Mymap',
    //             link: 'https://www.mymap.ai/mindmap/?ref=producthunt',
    //             slogan: 'Ai生成思维导图'
    //         },
    //         {
    //             logo: '',
    //             name: 'Pi.ai',
    //             link: 'https://pi.ai/talk',
    //             slogan: '深度学习和自然语言处理来提供你有用的回答和建议'
    //         },
    //         {
    //             logo: 'https://magicwrite.netlify.app/logo.png',
    //             name: 'Magicwrite',
    //             link: 'https://magicwrite.netlify.app/?ref=producthunt',
    //             slogan: '免费的人工智能作家，无需注册'
    //         },
    //         {
    //             logo: 'https://faucet.openkey.cloud/_next/image?url=%2Flogo.png&w=256&q=75',
    //             name: 'ChatGPTAPI水龙头',
    //             link: 'https://faucet.openkey.cloud/',
    //             slogan: '每24小时可领取一个$1.00令牌用于开发测试AI产品.'
    //         },
    //         {
    //             logo: 'https://www.ttson.cn/assets/laba.cdedf554.png',
    //             name: 'TTS-Online',
    //             link: 'https://www.ttson.cn/',
    //             slogan: '免费文字转语音，3000以内，支持多类型人声'
    //         },
    //         {
    //             logo: 'https://www.ttson.cn/assets/laba.cdedf554.png',
    //             name: 'ttson',
    //             link: 'https://acgn.ttson.cn/',
    //             slogan: '免费文字转语音，原神、英雄联盟、星穹铁道和日漫1000+角色'
    //         },
    //         {
    //             logo: '',
    //             name: 'huggingface',
    //             link: 'https://huggingface.co/',
    //             slogan: '人工智能社区,机器学习社区在模型数据集和应用程序上进行协作的平台'
    //         },
    //         {
    //             logo: '',
    //             name: 'devv',
    //             link: 'https://devv.ai/zh',
    //             slogan: '最懂程序员的新一代AI搜索引擎'
    //         },
    //         {
    //             logo: '',
    //             name: 'mylens',
    //             link: 'https://mylens.ai/',
    //             slogan: '一句话让AI生成发展史'
    //         },
    //         {
    //             logo: '',
    //             name: 'Graphy',
    //             link: 'https://graphy.app/',
    //             slogan: '通过数据创建精美的多类型的交互式图表'
    //         },
    //         {
    //             logo: '',
    //             name: '度加创作工具',
    //             link: 'https://aigc.baidu.com/make',
    //             slogan: '通过AI能力降低内容生成门槛，提升创作效率'
    //         }
    //     ]
    // },
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
            }
        ]
    },
    {
        title: '其他',
        list: [
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
                name: 'Dlpanda',
                link: 'https://dlpanda.com/zh-CN/xiaohongshu',
                slogan: '抖音、小红书、X、Ins、Bilibili等网站视频解析无水印下载'
            },
            {
                name: '腾讯帮小忙',
                link: 'https://tool.browser.qq.com/',
                slogan: '免费在线工具箱'
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
            }
        ]
    }
]

export { website }
