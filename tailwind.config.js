/** @type {import('tailwindcss').Config} */
/** 说明文档：在  游戏61 -> 2025新游戏模版   */
/**
        <div class="font-title">这是使用font_content_title_bold_big字体的标题</div>
        <div class="font-subtitle">这是使用font_content_title_bold_small字体的副标题</div>
        <div class="font-body">这是使用font_blog_small_content字体的正文内容</div>
        <div class="shadow-card p-4 mb-4"> 这是使用自定义card阴影的盒子 </div>
        <div class="rounded-card bg-gray-200 p-4"> 这是使用自定义card圆角的盒子 </div>
        <div class="p-sm">小内边距</div>
        <div class="m-lg">大外边距</div>
        <div class="w-card bg-blue-500">卡片宽度</div>
        <div class="w-sidebar">侧边栏宽度</div>
        <div class="h-header">头部高度</div>
        <div class="h-banner">banner高度</div>
        <div class="max-w-content">内容最大宽度</div>
        <div class="p-card">卡片内边距</div>
        <div class="m-section">区块外边距</div>
        <p class="text-3xl ml-2 text-mycolor-title" > PolyTrack </p>
        <p class="text-3xl ml-2 text-mycolor-subtitle" > PolyTrack </p>
        <p class="text-3xl ml-2 text-mycolor-desc" > PolyTrack </p>
        <p class="text-3xl ml-2 text-background-secondary" > PolyTrack </p>
        <p class="text-3xl ml-2 text-status-success" > PolyTrack </p>
        <p class="text-3xl ml-2 text-status-info" > PolyTrack </p>
        <p class="text-3xl ml-2 text-game-puzzle" > PolyTrack </p> 

 */
module.exports = {
    content: [
        "./index.html",    // 匹配根目录的所有html文件
        "./**/*.html", // 匹配所有子目录的html文件
        "./**/**/*.html", // 匹配所有子目录的html文件
        "./**/*.js",    // 匹配static目录下所有js文件
      ],
      safelist: [
        // 文字颜色
        { pattern: /text-(pink|red|green|yellow|purple|indigo|fuchsia|rose|orange|teal|cyan|lime|emerald|blue|gray|slate|zinc|neutral|stone|amber|violet|sky)-(100|200|300|400|500|600|700|800|900)/ },
        { pattern: /hover:text-(pink|red|green|yellow|purple|indigo|fuchsia|rose|orange|teal|cyan|lime|emerald|blue|gray|slate|zinc|neutral|stone|amber|violet|sky)-(100|200|300|400|500|600|700|800|900)/ },
        { pattern: /group-hover:text-(pink|red|green|yellow|purple|indigo|fuchsia|rose|orange|teal|cyan|lime|emerald|blue|gray|slate|zinc|neutral|stone|amber|violet|sky)-(100|200|300|400|500|600|700|800|900)/ },
      
        // 背景色
        { pattern: /bg-(pink|red|green|yellow|purple|indigo|fuchsia|rose|orange|teal|cyan|lime|emerald|blue|gray|slate|zinc|neutral|stone|amber|violet|sky)-(100|200|300|400|500|600|700|800|900)/ },
        { pattern: /hover:bg-(pink|red|green|yellow|purple|indigo|fuchsia|rose|orange|teal|cyan|lime|emerald|blue|gray|slate|zinc|neutral|stone|amber|violet|sky)-(100|200|300|400|500|600|700|800|900)/ },
        { pattern: /group-hover:bg-(pink|red|green|yellow|purple|indigo|fuchsia|rose|orange|teal|cyan|lime|emerald|blue|gray|slate|zinc|neutral|stone|amber|violet|sky)-(100|200|300|400|500|600|700|800|900)/ },
      ],
    theme: {
      extend: {
          // 自定义间距/尺寸
          spacing: {
            'sm': '8px',
            'md': '16px',
            'lg': '24px',
            'xl': '32px',
            'section': '40px',
            'container': '1200px'
          },
          // 自定义宽度
          width: {
            'card': '240px',
            'sidebar': '320px',
            'main': 'calc(100% - 320px)'
          },
          // 自定义高度
          height: {
            'header': '60px',
            'banner': '400px'
          },
          // 自定义最大宽度
          maxWidth: {
            'content': '800px'
          },
          // 自定义内边距
          padding: {
            'card': '24px'
          },
          // 自定义外边距
          margin: {
            'section': '40px'
          },

        // 自定义颜色
        colors: {
          mycolor: {
            title:'#00FF00',
              subtitle:'#FFFF00',
              desc:'#00FFFF',
          },
          // 主题色系
          primary: {
            50: '#f5f3ff',
            100: '#ede9fe',
            200: '#ddd6fe',
            300: '#c4b5fd',
            400: '#a78bfa',
            500: '#8b5cf6',  // 主色
            600: '#7c3aed',
            700: '#6d28d9',
            800: '#5b21b6',
            900: '#4c1d95',
          },
          // 背景色系
          background: {
            DEFAULT: '#0c0c13',  // 主背景色
            secondary: '#1f202f', // 次级背景色
            card: '#13141d',     // 卡片背景色
          },
          // 文本色系
          text: {
            primary: '#ffffff',   // 主要文本
            secondary: '#c7cadd', // 次要文本
            muted: '#6b7280',     // 弱化文本
          },
          // 功能色系
          status: {
            success: '#10B981',
            warning: '#F59E0B',
            error: '#EF4444',
            info: '#3B82F6',
          },
          // 游戏分类色系
          game: {
            action: '#F43F5E',
            adventure: '#8B5CF6',
            strategy: '#10B981',
            sports: '#3B82F6',
            puzzle: '#F59E0B',
          }
        },
        // 自定义字体
        fontFamily: {
          title: ['font_content_title_bold_big', 'sans-serif'],
          subtitle: ['font_content_title_bold_small', 'sans-serif'],
          body: ['font_blog_small_content', 'sans-serif'],
        },
        // 自定义阴影
        boxShadow: {
          'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        },
        // 自定义边框圆角
        borderRadius: {
          'card': '2px',
        },
        // 自定义动画
        animation: {
          'fade-in': 'fadeIn 0.5s ease-in-out',
          'slide-up': 'slideUp 0.5s ease-out',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          slideUp: {
            '0%': { transform: 'translateY(20px)', opacity: '0' },
            '100%': { transform: 'translateY(0)', opacity: '1' },
          },
        },

        
      },
    },
    plugins: [],
  }