interface WebItem {
    logo: string
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
                logo: 'https://logo.clearbit.com/vercel.com',
                name: 'Vercel',
                link: 'https://vercel.com/',
                slogan: '用于托管、构建和部署静态网站和单页面应用程序'
            },
            {
                logo: 'https://logo.clearbit.com/netlify.com',
                name: 'Netlify',
                link: 'https://app.netlify.com/',
                slogan: '一款基于云服务的静态网站托管和自动化部署平台'
            },
            {
                logo: 'https://canny.io/images/f5fe517f5f51e23d77ac35f32dbea72d.png',
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
                logo: 'https://logo.clearbit.com/producthunt.com',
                name: 'Producthunt',
                link: 'https://www.producthunt.com/',
                slogan: '向用户展示新兴科技产品、应用程序和创意项目'
            },
            {
                logo: 'https://www.cssdesignawards.com/imgs/logo.svg',
                name: 'Cssdesignawards',
                link: 'https://www.cssdesignawards.com/',
                slogan: '全球优秀CSS网页设计奖提名网'
            },
            {
                logo: '',
                name: 'Csswinner',
                link: 'https://www.csswinner.com/',
                slogan: '优秀CSS网站界面和交互设计获奖作品'
            },
            {
                logo: 'https://logo.clearbit.com/github.com',
                name: 'Hellogithub',
                link: 'https://hellogithub.com/',
                slogan: '发现和分享有趣、入门级开源项目的平台'
            },
            {
                logo: 'https://assets-global.website-files.com/5ce10a4c0b5f0b05f522e746/633701e39b4c607d4375f447_toools-logo-dark.svg',
                name: 'Toools',
                link: 'https://www.toools.design',
                slogan: '发现非常有用的设计资源和工具'
            },
            {
                logo: 'https://ph-files.imgix.net/f65a61c7-e83f-4a59-ab89-a6e11b5afaff.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=72&h=72&fit=crop&bg=0fff&dpr=1',
                name: 'A-fresh',
                link: 'https://a-fresh.website/',
                slogan: '精心挑选的网站和组件灵感库'
            },
            {
                logo: 'https://ph-files.imgix.net/72024972-7850-497e-9c4c-6d473f9d640a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=64&h=64&fit=crop&dpr=1',
                name: 'Prettyfolio',
                link: 'https://www.prettyfolio.com/',
                slogan: '发现专为您策划的最佳作品集网站'
            },
            {
                logo: 'https://uiswipe.com/images/logo.svg',
                name: 'Uiswipe',
                link: 'https://uiswipe.com/',
                slogan: '发现顶级 Web UI 设计 再也不会遇到创意障碍'
            },
            {
                logo: 'https://logo.clearbit.com/godly.cloud',
                name: 'Godly',
                link: 'https://godly.website/',
                slogan: '国外优秀网站合集'
            },
            {
                logo: '',
                name: 'Bestwebsite',
                link: 'https://bestwebsite.gallery/',
                slogan: '漂亮的酷站收集展示'
            },
            {
                logo: 'https://d3alngem7je9z2.cloudfront.net/sitesee.svg',
                name: 'Sitesee',
                link: 'https://sitesee.co/',
                slogan: '收录漂亮的界面设计网站'
            },
            {
                logo: 'https://www.calltoidea.com/application/images//logo-calltoidea-home.png',
                name: 'Calltoidea',
                link: 'https://www.calltoidea.com/',
                slogan: '收集优秀UI组件元素设计的站点'
            },
            {
                logo: 'https://assets.uigarage.net/content/uploads/2023/09/wdx-uig-ad-desktop.png',
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
                logo: 'https://dq2gn5p12glyq.cloudfront.net/p/assets/images/logo_7a507d6a6b4a2a6c4c7578a7b88d1c19.svg',
                name: 'Pixian',
                link: 'https://pixian.ai/',
                slogan: 'Remove Image Backgrounds'
            },
            {
                logo: '',
                name: 'RemoveBg',
                link: 'https://www.remove.bg/zh/upload',
                slogan: '上传图片，消除背景'
            },
            {
                logo: '',
                name: 'Clippingmagic',
                link: 'https://zh.clippingmagic.com/',
                slogan: '魔术般地删除图像背景'
            },
            {
                logo: 'https://photoscissors.com/images/photoscissors-icon-128.png',
                name: 'Photoscissors',
                link: 'https://photoscissors.com/',
                slogan: 'Remove Image Background'
            },
            {
                logo: 'data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20viewBox%3D%220%200%2028%2028%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0D%0A%20%3Cpath%20d%3D%22m2%200h24a2%202%200%200%201%202%202v24a2%202%200%200%201-2%202h-24a2%202%200%200%201-2-2v-24a2%202%200%200%201%202-2%22%20fill%3D%22%233755dc%22%2F%3E%0D%0A%20%3Cpath%20d%3D%22m21.9%204.5h-17.1v17h6.2v-3.8h-2.4v-9.4h9.5v2.9h3.8v-6.7%22%20fill%3D%22%23fff%22%20fill-opacity%3D%22.5%22%2F%3E%0D%0A%20%3Cpath%20d%3D%22m23.7%2013.8h-10.1v10.2h10.1zm-7.2%203h4.2v4.2h-4.2z%22%20fill%3D%22%23fff%22%2F%3E%0D%0A%3C%2Fsvg%3E%0D%0A',
                name: 'Recompressor',
                link: 'https://recompressor.com/',
                slogan: '图像优化压缩'
            },
            {
                logo: 'https://tinypng.com/static/images/tinify-logo.svg',
                name: 'Tinypng',
                link: 'https://tinypng.com/',
                slogan: '智能webp、png和jpeg压缩'
            },
            {
                logo: '',
                name: 'Shaoapp',
                link: 'https://shaoapp.com/image',
                slogan: '智能图像优化减小文件大小并保持画质清晰'
            },
            {
                logo: '',
                name: 'Jpeg.io',
                link: 'https://www.jpeg.io/',
                slogan: '将任何主要图像格式转换为高度优化的jpeg'
            },
            {
                logo: 'https://imagecompressor.com/images/imagecompressor/logo.svg',
                name: 'Imagecompressor',
                link: 'https://imagecompressor.com/zh/',
                slogan: '使用最佳优化和压缩算法来达到最小尺寸的图像'
            },
            {
                logo: '',
                name: 'Squoosh',
                link: 'https://squoosh.app/',
                slogan: '在线配置参数优化你的图片'
            },
            {
                logo: '',
                name: 'Ezgif',
                link: 'https://ezgif.com/',
                slogan: '在线 gif 制作器和图像编辑器'
            },
            {
                logo: 'https://makeagif.com/images/logo.svg',
                name: 'Makeagif',
                link: 'https://makeagif.com/',
                slogan: 'The home for all your GIFs'
            },
            {
                logo: 'https://makeagif.com/images/logo.svg',
                name: 'Replicate',
                link: 'https://replicate.com/jingyunliang/swinir?prediction=izlzspzbz4is3qhjper4vj5pbm',
                slogan: 'AI图片修复'
            },
            {
                logo: '',
                name: 'Waifu2x',
                link: 'https://waifu2x.udp.jp/',
                slogan: '图片智能算法无损放大'
            },
            {
                logo: '',
                name: 'Unscreen',
                link: 'https://www.unscreen.com/',
                slogan: '视频背景删除，删除任何视频的背景，在线且免费'
            },
            {
                logo: '',
                name: 'VideoOnline',
                link: 'https://compress-video-online.com/',
                slogan: '在线、免费的视频压缩工具'
            }
        ]
    },
    {
        title: '代码/编程',
        list: [
            {
                logo: 'https://logo.clearbit.com/codepen.io',
                name: 'Codepen',
                link: 'https://codepen.io',
                slogan: '在线代码编辑器和前端开发社区,发掘特效创意'
            },
            {
                logo: 'https://uiverse.io/build/_assets/logo-OR7QQX33.svg',
                name: 'Uiverse',
                link: 'https://uiverse.io',
                slogan: '适用于任何项目的开源 UI 元素'
            },
            {
                logo: '',
                name: 'Cssfx',
                link: 'https://cssfx.netlify.app/',
                slogan: '按钮、过渡、移入等小特效'
            },
            {
                logo: '',
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
                logo: 'https://d2x8ygf1qnoedj.cloudfront.net/images/Gamma_V1_Icon_only_4.gif',
                name: 'Gamma',
                link: 'https://gamma.app/',
                slogan: '快速、简单的共享和展示您的作品的方式'
            },
            {
                logo: 'https://logo.clearbit.com/pitch.com',
                name: 'Pitch',
                link: 'https://pitch.com/',
                slogan: '以前所未有的速度创建、共享和分析演示文稿'
            },
            {
                logo: 'https://assets-global.website-files.com/6462308e001a70f67d5e9d4d/646e1ff01aab0050cd260743_logo.svg',
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
                logo: '',
                name: 'Heroicons',
                link: 'https://heroicons.com/',
                slogan: 'SVG图标库，来源于Tailwind CSS'
            },
            {
                logo: '',
                name: 'Iconbuddy',
                link: 'https://iconbuddy.app/',
                slogan: '免费icon素材图标库,可修改颜色'
            },
            {
                logo: '',
                name: 'Icons',
                link: 'https://icons.download/',
                slogan: '免费svg图标下载库'
            },
            {
                logo: 'https://assets-global.website-files.com/63a9cb71c629474d4ae334b9/651fe7ba92f9ba32692bd314_logo%20manypixels.svg',
                name: 'Manypixels',
                link: 'https://www.manypixels.co/gallery',
                slogan: '免版权小人场景矢量插画素材'
            },
            {
                logo: 'https://storyset.com/images/logo.svg',
                name: 'Storyset',
                link: 'https://storyset.com/',
                slogan: '可定制插画并制作动画下载'
            },
            {
                logo: '',
                name: 'Transhumans',
                link: 'https://www.transhumans.xyz/',
                slogan: '动漫风格插画'
            },
            {
                logo: '',
                name: 'Preloaders',
                link: 'https://icons8.com/preloaders/',
                slogan: 'Loading加载动画在线制作'
            },
            {
                logo: 'https://airbnb.io/lottie/images/Introduction_00_sm.gif',
                name: 'Lottielab',
                link: 'https://www.lottielab.com/',
                slogan: '从Figma导入使用时间线制作动画并导出'
            },
            {
                logo: '',
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
                logo: 'https://console.raylink.live/static/media/logo.8317ef75afb9227efa04ecab000c8f2d.svg',
                name: 'Raylink',
                link: 'https://www.raylink.live/',
                slogan: '专为视觉行业打造的真高清、超流畅远程控制软件'
            },
            {
                logo: '',
                name: '屏幕共享',
                link: 'https://www.webrtc-experiment.com/Pluginfree-Screen-Sharing/#407307319699959',
                slogan: '免费的网络RTC屏幕共享插件'
            },
            {
                logo: '',
                name: 'Carbon',
                link: 'https://carbon.now.sh/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=javascript&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=48px&ph=32px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&ts=false',
                slogan: '代码片段分享图片制作'
            },
            {
                logo: 'https://www.msdmanuals.cn/Content/Images/Redesign/mm_logo.svg',
                name: 'Msdmanuals',
                link: 'https://www.msdmanuals.cn/?ruleredirectid=14',
                slogan: '默沙东诊疗手册'
            },
            {
                logo: 'https://cdn.gallerix.asia/x/src/slogotx.32.png',
                name: 'Gallerix',
                link: 'https://gallerix.asia/',
                slogan: '在线艺术博物馆，欣赏到来自各个时代和风格的绘画作品'
            },
            {
                logo: '',
                name: 'Hack',
                link: 'https://hack.chat',
                slogan: '这是一款最小的、无干扰的聊天应用程序'
            },
            {
                logo: 'https://www.xitongku.com/images/logo2.png',
                name: 'Xitongku',
                link: 'https://www.xitongku.com/',
                slogan: '提供丰富的电脑系统和office软件下载'
            },
            {
                logo: '',
                name: 'Ripyoutube',
                link: 'https://ripyoutube.com/zh-cn-1',
                slogan: '免费的youtube视频下載器，支持转换mp3,mp4格式'
            },
            {
                logo: 'https://dlpanda.com/images/LOGO-LONG.png',
                name: 'Dlpanda',
                link: 'https://dlpanda.com/zh-CN/xiaohongshu',
                slogan: '抖音、小红书、X、Ins、Bilibili等网站视频解析无水印下载'
            },
            {
                logo: 'https://m4.publicimg.browser.qq.com/publicimg/nav/qbtool/qbtool-latest.png',
                name: '腾讯帮小忙',
                link: 'https://tool.browser.qq.com/',
                slogan: '免费在线工具箱'
            },
            {
                logo: '',
                name: 'sms-activate',
                link: 'https://sms-activate.org/cn/freePrice#activation',
                slogan: '国外短信接码激活服务'
            },
            {
                logo: 'data:image/png;base64,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',
                name: 'Liber3',
                link: 'https://liber3.eth.limo/',
                slogan: '电子书搜索引擎适用于ENS和IPFS'
            }
        ]
    }
]

export { website }
