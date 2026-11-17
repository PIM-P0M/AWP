export default function manifest() {
    return {
        name: 'Mi app',
        short_name:'PWA APP',
        description: 'Aplicacion PWA construida con Next.js',
        start_url: '/',
        display: 'standalone',
        background_color: '#000000',
        theme_color: '#3457A5',
        icons: [
            {
                src:'/icon-512.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src:'/icon-512.png',
                sizes:'512x512',
                type:'image/png',
            },
        ]
    }
};