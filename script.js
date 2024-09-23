window.$docsify = {
    name: 'pl_scenarisation',
    repo: 'https://github.com/Timingmerkat83/pl_scenarisation/edit/main/README.md',

    auto2top: true,
    loadSidebar: false,    // disable sidebar loading
    autoHeader: true,
    fallbackLanguages: ['fr', 'en'],
    loadNavbar: false,
    nativeEmoji: true,
    subMaxLevel: 4,       // Adjust the level to include in TOC
    copyCode: {
        buttonText: '📄',
        errorText: '⚠️',
        successText: '✅ ',
    },
    share: {
            reddit: true,
            linkedin: true,
            facebook: true,
            twitter: true,
            whatsapp: true,
            telegram: true,
        },
    plugins: [
        // Lightbox plugin
        function (hook, vm) {
            hook.doneEach(() => {
                import('https://gllmar.github.io/docsify-lightbox/docsify-lightbox.js').then(module => {
                    const images = document.querySelectorAll('img');
                    const lightbox = new module.default();
                    lightbox.initialize(images);
                }).catch(err => console.error('Failed to load Lightbox plugin', err));
            });
        },
        // WaveSurfer plugin
        function (hook, vm) {
            hook.doneEach(() => {
                import('https://gllmar.github.io/docsify-wavesurfer-plugin/docsify-wavesurfer-plugin.js').then(module => {
                    module.initWaveSurfer();
                }).catch(err => console.error('Failed to load WaveSurfer plugin', err));
            });
        }
    ]
};